When the OS runs a program, the program will see and use the following virtual memory layout:

![layout](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9fce60cc-2b6b-45ae-a04a-92097bd83f4f/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220410T012314Z&X-Amz-Expires=86400&X-Amz-Signature=3173355e5aa93ae81740c1bfc13f5ff12a84a8fd610d5d903a5d2905769cd473&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### Stack

The **stack** is a part of the memory layout that contains the function call stack and the variables needed by each function. As your call stack grows, the stack grows from higher memory address down to lower memory address.

Every time you call a function, a new *stack frame* is created and placed on the top of the stack. A stack frame is created by subtracting the size of the stack frame to a *special CPU register* called the *stack pointer*, often called SP, which tracks the top of the stack. We subtract the size of the stack frame because this grows the stack downwards (remember, the stack grows from higher memory address to lower memory addresses as shown in the diagram). When function terminates, the stack frame is ‘removed’ by simply adding the size of the stack frame to the stack pointer.
* The size of a stack frame for a given function is known at compile-time.
* There’s also another special CPU register called the *frame pointer*, often called FP, which tracks the address of the base of the stack frame (which may or may not be set to the start of the stack frame).

The stack frame mainly contains a return address (the address of the instruction to return to once the function terminates), the function arguments that were provided and local variables declared in the function.
For example, suppose you have the following C program.

            

```c
void bar(int param1) {
    int local1 = 1;
    ...
}

void foo(int param1) {
    int local1 = 2;
    ...
    bar(42);
}
```

            

The stack in memory would look something like this:

            

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/387b192f-e2e7-4e00-b6e4-c58eeebce013/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220410T012125Z&X-Amz-Expires=86400&X-Amz-Signature=7791f87eb5a9807766325f2072fd898ee787507021aaa43495da949dc5535c42&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

            

The stack is assigned a maximum amount of memory, often 1 MB. If you create enough stack frames (for example, through a recursive function without a base case), you can exceed this maximum amount of memory which causes the program to crash with a stack overflow error.

### Heap

The **heap** is a part of the memory layout that contains all the dynamically allocated data. Every time we need to allocate an array with a size that we don’t know at runtime or create a data structure like a linked list, tree, etc. to be used and passed between functions, we need to use `malloc` / `free` in C or `new` / `delete` in C++ which basically makes a request to the OS for some memory in the heap. The heap usually has a much larger amount of maximum memory compared the stack.

> The name ‘heap’ has *nothing* to do with the [heap data structure](https://en.wikipedia.org/wiki/Heap_(data_structure)). It’s called a ‘heap’ in this context because it’s like a big ‘pile’ of objects — no ordering is maintained (from the perspective of the programmer) and an object could be placed anywhere in this region by the OS.

### Text, Data, BSS

The **text** segment is a read-only block of memory containing the actual code of the program as compiled machine instructions.

The **data** segment contains the program’s initialised constants and static variables.

    

```c
// If your program had these global/static variables, their contents would be stored in the 'data' segment.
char message[] = "Hello";
int i = 0;
static int j = 1;
```

    

The **bss** segment follows directly after the program’s *data segment* and contains the contents of all the variables who have been declared but have *not been initialised*.

    

```c
// If your program had these outside any function, their contents would be stored in the 'bss' segment.
int k;
char *message;
```

    

Note that BSS stands for ‘block starting symbol’, which was the name of an [ancient assembler operator](https://en.wikipedia.org/wiki/.bss#:~:text=References-,Origin,-%5Bedit%5D).

Why does the bss segment even exist? It actually exists to reduce the storage size of programs. Since the variables are uninitialised, you have nothing meaningful to store and to load onto memory when that program is run. All you have to store about the unitialised variables is how much space they require, and then when the program is loaded onto memory for execution, the entire bss segment is zeroed out (on most systems). See this [StackOverflow discussion](https://stackoverflow.com/questions/9535250/why-is-the-bss-segment-required) about why the bss segment exists.

### Note: CPU Registers

Registers are basically very low latency memory units for storing any value such as memory addresses, intermediate calculation results, etc. that are directly on the CPU itself. Reading/writing to RAM is orders of magnitude slower than accessing data stored directly in CPU registers.

Registers can either be general purpose or reserved for special usage. Eg. special registers exist to store the memory address of the top of the stack and the base of the stack frame. In x86, these are the `esp` and `ebp` registers