Gdb is especially useful in CTFs due to it providing interactive debugging and inspection powers. Here’s a really nice [gdb cheatsheet](https://darkdust.net/files/GDB%20Cheat%20Sheet.pdf) to keep handy.

> Note: there is also [GEF](https://gef.readthedocs.io/en/master/) which is a neat wrapper around gdb which makes the command-line UI much prettier and intuitively coloured — and it comes with some extended features too! To install it, just run: `bash -c "$(curl -fsSL http://gef.blah.cat/sh)"` , and the next time you use gdb you’ll see it being used.

### Using GDB

Usually, you use GDB for C and C++ programs, however it also supports a few other languages like Rust and Java.

To start using `gdb` on a C program, you have to run `gcc` with the `-g` option. To start gdb, just give it the path to the executable: `gdb <executable>`

**Breakpoints:**

You can set breakpoints for the program in the current debugging session.

* `break <line_number>`
* `break <func_name>`
* `break <filename>:<line_number>`
* `break <filename>:<func_name>`

When you let gdb start running the program with `run` or resume execution with `continue` , it’ll stop on the next breakpoint it reaches. To get rid of breakpoints, replace `break` with `delete` in the above commands.

The breakpoints you set will only last for the current debugging session, but it’s possible to save them and load them in the future. 

* Saving breakpoints: `save breakpoints <filename>` — dumps all the breakpoints you’ve set into the file with the given name.
* Restoring breakpoints: `source <filename>` — reads the file and adds in all the breakpoints listed in that file.

**Execution and Jumping:**

To start running the program, you must use `run` . If the program takes in command-line arguments, then you can supply them in the run command as well like this:

```bash
@gef➤  run 123
```

When the program has started and has hit a *breakpoint*, we can resume execution with `continue` , which will run until the next breakpoint it encounters.

To execute the current line and pause on the next, use the `next` command. The `step` command is very similar to the next command, however if the current line involves a function call, then it will enter into the function body and pause execution there. The next command would simply skip over it.

If you want to restart the program in the current session at any point, you can run `jump _start` which drops you back at the first line on program start-up.

**Inspection:**

Gdb becomes incredibly useful when you set strategic breakpoints and then inspect the values of variables and registers.

* `print <variable_name>` — show the value held by the specified variable.
* `print <expression>` — evaluates the given C expression and prints its values. You can make function calls in this expression and use the variables that are in scope!
* `print $register_name` — show the value held by the specified register.
    - `info registers` — prints a list of registers.
* `set var <variable_name> = <value>` — assigns a new value to the specified variable.
* `watch <variable_name>` — adds a watchpoint to monitor state changes in the given variable. Whenever the watched variable changes, gdb will pause execution.
* `where full` — displays the full call stacktrace along with the variables and their values in each stack frame.
* `disas <func_name>` — runs a disassembler, showing the assembly code for the given function.

Finally, to get out of gdb, just type `quit` or `q` .
