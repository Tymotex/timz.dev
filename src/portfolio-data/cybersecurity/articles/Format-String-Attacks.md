Format string exploits let you read the contents of the stack in memory and leak secret information (which can enable other attacks like a buffer overflow attacks), crash the system, achieve remote code execution, etc. Format string vulnerabilities arise when the program accepts a string input from the user which is then passed to a format string printing function like `printf` . We call such instances ‘uncontrolled format strings’.

Consider the following C program.

```c
#include <stdio.h>

int main() {
    char buffer[10];
    fgets(buffer, 10, stdin);
    printf(buffer);           // This is an uncontrolled format string!
    return 0;
}
```

This will compile and will produce the expected output when the user behaves well, however this does not fall under correct usage in the `printf` spec!

Note that we call `printf` a *variadic function*, which is a function that accepts an arbitrary number of arguments. When you give `printf` a format string but you *don’t supply a corresponding argument* for a format specifer, printf will just silently grab a value from the stack and use that as the argument! If you have something like `printf("%d%d%d", 1)` which is missing 2 values, then it will go ahead and reach up the stack to fetch 2 values to print. As an attacker, if the program asks you for input and you type in a format string which is later fed to a printf function, then you could put in format specifiers that will cause the program to leak secret information on the stack or overwrite the contents at specific memory addresses.

Why does printf leak stack values when insufficient arguments are provided? Let’s look at the stack frame that’s created when a function calls `printf` :

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e568b7d7-cd2c-4ba9-99fe-b9957471d454/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220410T012859Z&X-Amz-Expires=86400&X-Amz-Signature=353b61b334878364f12603d73af771a9a57c3e099d4d29f248b62bf5593d45f1&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

In correct usage, printf will retrieve values from the stack and they will be the ones that the developer intended printf to interpolate into the formatted string. If an attacker gets to control the contents of the formatted string that gets passed to printf, then the situation looks like this:

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/4b347e3a-1132-49a5-b752-ed1d8d5f6b91/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220410T012900Z&X-Amz-Expires=86400&X-Amz-Signature=c1e15394af6efc6bc0e2d207317432095f5f68236bf3e23265ff0a0a00474646&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

The idea is that if you get the program to execute `printf("%x")` , then `printf` prints the contents of the address where it expects the 2nd `printf` argument to be. If you were to supply a bunch of `%x` or similar format specifiers, then `printf` would print the contents of where it expects the 2nd argument to be, then the contents of where it expects the 3rd argument to be, and so on, eventually letting you leaking the entire stack in memory from the top to bottom.

Often, the buffer containing the format string’s contents is stored on the stack as well. This means that you can put in any valid memory address of interest and then get printf to print whatever is there!

To better understand how to launch format string attacks, let’s review format specifiers and what they let you do in C.

**Format specifiers:**

In C, a format string is a string that contains *format specifiers* that represent placeholders within the string for where you want to interpolate variables/values. Format strings also exist in most modern languages with different usage and implementations.

Format specifiers start with a % character, followed by a code to identify whether the variable/value to interpolate should be interpreted as a string, decimal, hexadecimal, pointer, etc.

Some common format specifiers are:

* `%s` — interprets the given value as a string.
* `%d` — interprets the given value as a number and prints its decimal (base-10) representation.
* `%x` — interprets the given value as a number and prints its hexadecimal representation.
* `%p` — interprets the given value as a pointer/address and prints its the address in hexadecimal representation.

You can also specify more information in format specifiers after the % to control things such as the padding length, whether to left-pad or right-pad, etc. Of interest to an attacker however, you can also specify an offset of the stack to from which to grab and print values from! The format specifier will look like `%<number>$<specifier>` , eg. `%4$s` .

When used properly, this is meant to define the position of the argument corresponding to the specifier:

```c
int main() {
    int i = 4;
    int j = 2;
    printf("%2$d %1$d\n", i, j);   // → Prints 2 4.    
    return 0;
}
```

When used by an attacker however, they can loop through different positions on the stack and leak all of its contents. For example, they can send the format string: `%1$s` to read the string at the first address on the stack, and then try `%2$s` , then `%3$s` and so on.

There are also very strange format specifiers like `%n` which doesn’t actually get printed, it just writes the number of characters printed so far into a given memory address.

```c
int main() {
    int num_printed;
    printf("Hello.%n\n", &num_printed);         // Assigns num_printed = 6. 
    printf("Num printed: %d\n", num_printed);   // Prints 6.
    return 0;
}
```

As an attacker, on top of being able to leak the contents of the stack, we can also use `%n` to write an integer into any memory address we want, provided that it’s valid. This [informative article](https://flylib.com/books/en/2.856.1.117/1/) gives an example of how you can achieve this.

**Defending against Format String Attacks:**

The best defence against format string attacks is to prevent them from being possible. Many compilers do a reasonable job at detecting format string vulnerabilities and warning you about them, so they’re actually challenging to introduce in simple programs. Virtually all format string vulnerabilities are prevented by using the format string printing function *correctly* and not passing unvalidated user-inputted format strings to those functions. 

The following C snippet shows safe and vulnerable uses of `printf` .

```c
char buffer[10];
fgets(buffer, 10, stdin);
printf("%s\n", buffer);   // Safe.
printf(buffer);           // Not safe. This is an uncontrolled format string!
                          // gcc generates the warning: 
                          //     warning: format not a string literal and no format arguments [-Wformat-security]
```

When given input such as `"%p %p %p"` , the first `prinf` would not interpret the input as a format string and just directly print `"%p %p %p"` . The second `printf` however would interpret the input as a format string and allow stack contents to be leaked.

One way to make buffer overflow attacks a lot harder is to use *address space layout randomisation* [(ASLR)](https://en.wikipedia.org/wiki/Address_space_layout_randomization). This also helps us defend against format string attacks as it makes it more challenging for attackers to determine what memory addresses to leak or overwrite.

Fortunately (or unfortunately), format string vulnerabilities have becoming increasingly rare due to them being easily detectable and patchable. Unlike buffer overflow vulnerabilities however, format string vulnerabilities exist in C, C++ *and* also other high-level languages like Java and Python.