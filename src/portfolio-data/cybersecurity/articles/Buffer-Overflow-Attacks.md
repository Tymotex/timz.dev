A **buffer** in the context of a buffer overflow attack is basically a fixed-length memory region such as an integer array or string that the program writes data to.

A **buffer overflow** is when the program tries to write more elements into that array than its allocated size, causing the program to silently write the data to adjacent memory addresses, overwriting their contents.

A **buffer overflow attack** works by finding and exploiting buffer overflows, often done by using it to overwrite the contents of memory addresses with malicious code. There are **stack-based** buffer overflow attacks (called ‘*stack smashing*’), which are more common, and **[heap-based](https://en.wikipedia.org/wiki/Heap_overflow)** buffer overflow attacks (called ‘heap smashing’). This introduction to buffer overflow attacks will only focus on stack-based attacks.

In [‘Program Memory Layout’](https://timz.dev/cybersecurity/program-memory-layout) we saw that the stack grows from higher memory addresses to lower memory addresses. Note that when a program writes data into a buffer however, it proceeds from *lower memory addresses to higher memory addresses*.

For example, let’s consider the following example C program:

```c
#include <stdio.h>

void foo() {
    int dont_overwrite_me_pls = 42;
    char buffer[4];

    printf("Initial value: %d\n", dont_overwrite_me_pls);
    gets(buffer);
    printf("New value: %d\n", dont_overwrite_me_pls);
}

int main() {
		foo();
    return 0;
}
```

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/8502265b-b450-497e-a64d-7c6fe6c12fca/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220410T012745Z&X-Amz-Expires=86400&X-Amz-Signature=72e0e560ca1adb180718894e1dcf6509b824fce5a0c3ac28b24769520802b797&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

Remember that in C, you need to null-terminate strings by placing a null character, `\0` , at the final slot of the buffer. This means that the above code can only accept inputs of length 0-3. If we sends inputs of length 0-3, we’ll see the following intended output:

```c
Initial value: ffffffff
New value:     ffffffff
```

If we type “AAAAAAAA” to stdin, then the stack frame will look like this:

```c
Initial value: ffffffff
New value:     41414141
```

Here we’ve used a buffer overflow to overwrite the contents of the variable `dont_overwrite_me_pls` . Note that the ASCII code for A is 0x41.

Notice that this means we can eventually reach the return address of the stack frame for the current function with the buffer overflow vulnerability. One common trick is to overwrite this return address, putting in the address of a different part of the program. This means we can make the program *jump to anywhere we want* after the current function terminates and the program will resume execution from the address that we’ve specified. Often, one goal of real buffer overflow attacks done on a remote server is to launch a *root* shell on it, letting us do virtually anything thereafter.

**How do buffer overflow vulnerabilities arise?** 

It mainly happens due to bad programming practices around input validation where the programmer hasn’t put in a check to ensure that the program hasn’t received more data than can be fit into an array. It’s mainly the programs that are written in C and C++ that are vulnerable to buffer overflow attacks. Buffers are used everywhere in operating systems code for example, which are usually written in C. Other high-level languages like Python, JavaScript, Java have built-in safeguards that prevent buffer overflow vulnerabilities. 

Buffer overflow vulnerabilities are gradually disappearing due in part because they’re easy to search for (and therefore patch) and because of the rise of higher-level languages that protect against it by default.

In general, while hacking, if you manage to produce a segmentation fault, that’s a really good sign because you’ve found a case that the program doesn’t know how to recover from, ie. you found a situation that the developer has not accounted for.

**An overview of defence tactics against buffer overflows:**

The best way to protect against buffer overflows is to simply be a security-aware programmer and ensure that you always validate the input before writing data into a buffer. Aside from that, there a few standard ways that we’ve significantly reduced the feasibility of buffer overflow attacks. 

**Address space randomisation (ASLR):**

ASLR works by randomising the virtual addresses used by the program every time you try to run it. This means that it’s no longer useful for the attack to run disassemblers on the binary to get the memory addresses of interest. They’d need to either run a brute-force attack or somehow leak the addresses, such as through a *format string attack*!

The following C program will always output different memory addresses for the same function:

```c
#include <stdio.h>

void secret_function() {
    printf("HIGHLY SECRET DATA\n");
}

int main() {
    printf("%p\n", secret_function);
    return 0;
}
```

When I ran this 3 times, I got the output:

```c
0x562404e08169
0x5597e5f2c169
0x55c54afe7169
```

It’s possible to disable ASLR for your OS. On Linux, you can temporarily disable it by running `sudo bash -c 'echo 0 > /proc/sys/kernel/randomize_va_space'` .

ASLR only makes buffer overflow attacks more difficult to carry out, not impossible. ASLR is used on most operating systems (Linux, Windows, MacOS).

**Stack Canarying:**

Stack canarying involves using strncmp on a few of the trailing bytes *after the end of a buffer* to check that it matches a known value called the canary value. If it fails to match, then the program has successfully caught a buffer overflow attempt by the user and will terminate.

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c65d88ce-612f-4e7d-9ab6-c45e260f1270/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220410T012800Z&X-Amz-Expires=86400&X-Amz-Signature=2fec9a9a09b1f2efda9e3d18b1f1be4c8ade932f4c11c4f8513f7248fb9305ed&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

The idea is that when the attacker attempts a buffer overflow attack, then the first few bytes that are corrupted will be on the canary that’s placed at the end of the buffer. Seeing if the 

In our simple example way earlier, we could have implemented this stack canarying idea ourselves by having an additional check like this:

```c
if (dont_overwrite_me_pls != 42) {
		// Buffer overflow attempt detected!  
		exit();
} 
```

Often however, stack canarying can be performed behind the scenes for you by the compiler (see gcc’s [-fstack-protector](https://linux.die.net/man/1/gcc#:~:text=any%20basic%20block.-, %2Dfstack%2Dprotector, -Emit%20extra%20code) option) and the chosen canary value will be a randomised value specific to each process.

Stack canarying is not fool-proof! It’s easily overriden if the attacker can pass the stack canary check in their buffer overflow attempt by matching the stack canary value (if they know the source code, for example), otherwise the attacker would need to brute-force through different canary values or find ways to leak the canary value first (like through a format string attack).

Just like how canaries were [historically used](https://en.wikipedia.org/wiki/Sentinel_species#Historical_examples) to detect dangerous carbon monoxide levels in coal mines, we use stack canaries are named such because they help processes detect attempts at buffer overflow attacks.

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/02b77da0-b8c1-48bf-9785-c6617cf18945/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220410T012817Z&X-Amz-Expires=86400&X-Amz-Signature=f080df307c75554d3c93708a6549534522479f13469c0445e190d7d7ad6a1a7b&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

There are plenty of other buffer overflow defence strategies as well as attack strategies that overcome them.

* [Prevent execution of code on the stack](https://en.wikipedia.org/wiki/Stack_buffer_overflow#:~:text=the%20stack.%5B2%5D-, Nonexecutable%20stack, -%5Bedit%5D).
* [No-op sleds](https://en.wikipedia.org/wiki/NOP_slide).
* [ROP (return-oriented programming) attacks](https://en.wikipedia.org/wiki/Return-oriented_programming) which you can launch via a buffer-overflow vulnerability.
