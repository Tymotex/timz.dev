This problem was quite trivial to solve. I just executed the Shell script which
uses `objdump` to disassemble the given ELF file, `static` , and then used `grep`

to hunt for any line containing 'picoCTF'. It ended up being a part of the 
`static.ltdis.strings.txt` file.

The Shell script seemed like a distraction. All it really accomplishes is
it helps you run the following two commands:

1. `objdump -Dj .text static` disassembles the binary (which means it converts
    the binary's machine code to assembly). The `-j .text` option will show 
    only the `.text` section of the binary and its data.

2. `strings --all --radix=x static` will scan through the given file and print
    out any sequence of printable characters that it finds (by default, a 
    sequence of printable bytes must be 4 characters long to be considered a 
    string that's worth printing but this can be tuned). The `--radix=x` option
    additionally shows the byte offset in hexadecimal of where a string was
    found in the given file.
