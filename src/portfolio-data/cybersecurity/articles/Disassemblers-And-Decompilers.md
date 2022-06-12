To better understand what disassemblers and decompilers actually do, let’s recall what machine code, assembly code and assemblers are first.

**Machine code** is literally the 0s and 1s that represent CPU-specific instructions that can be executed directly by the CPU. When you see it, it’s usually displayed in hexadecimal, but regardless, it’s all unreadable to us.

* Many executables (excluding scripts) contain mostly pure machine code (plus metadata). On Linux systems, you can inspect some of the metadata with `readelf` or `objdump`.

**Assembly language** is a human-readable programming language which is coupled to the computer’s specific hardware, so it’s not portable in the same way that languages like C are. Assembly language exists as a way to reason and work with CPU instructions with *actual names* and arguments.

* Assembly language is really only ever written today by engineers that have to implement/modify performance-critical algorithms or if they want acess to specialised processor instructions that they otherwise wouldn’t have access to.

***Assemblers*** are programs that convert assembly language to machine code.

* Many compilers will first convert source code to assembly, then let an assembler convert assembly to machine code. Doing it this way is generally easier for the person implementing the compiler.

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f05893b0-5c10-4308-a6e6-9c85b804c532/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220410T012939Z&X-Amz-Expires=86400&X-Amz-Signature=25d405784150837fb144cf2fa10f8e11ea2d7a9cf9a14fd1a03b42b17a9980b8&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

***Disassemblers*** are programs that go the other way, *translating machine code to assembly language*, which is why it’s an incredibly useful tool for reverse engineering — assembly language is ***a lot*** more readable than machine code so you can derive a lot of a insight from just the executable binary itself!

There are lots of disassemblers used in CTFs and in industry. Two such examples are [GDB](https://www.sourceware.org/gdb/) and [IDA](https://en.wikipedia.org/wiki/Interactive_Disassembler).

***Decompilers*** take it a step further from disassemblers. Decompilers are programs that can translate machine code to more readable pseudo-source-code, essentially a reverse compiler! It’s an incredibly hard problem, but there are tools out there that we can take advantage of in CTFs like [IDA HexRays](https://hex-rays.com/decompiler/) which do a reasonable job at ‘recovering’ the source code of executables. Sometimes, as attackers, we can use decompilers to find vulnerabilities to exploit.

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c979fcf7-22ad-4b7e-a4bc-bc1a9a6a077e/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220410T012941Z&X-Amz-Expires=86400&X-Amz-Signature=a9f308dd7faa00a3d3a0df1a1cdc3914761b51f295c45c8507a851fadca8115c&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)