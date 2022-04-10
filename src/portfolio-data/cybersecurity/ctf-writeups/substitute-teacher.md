Examining `encrypt.py` , I determined that the flag was encrypted with the following function:

```python
def encrypt(plaintext):
    f = Polynomial([1, 2, 1])
    return "".join(chr(int(f(c))) for c in plaintext)
```

The way I understood how the flag was encrypted was roughly: 
1. Initialise a polynomial function $f(x) = x^2 + 2x + 1$.
2. Take each character of the plaintext (which is a string of bytes), pass it
    into $f$ and then map the result to the corresponding UTF-8 character.

3. Dump the resultant string into `spicy_flag.txt`

Now, the challenge was decrypting the contents of `spicy_flag.txt` . 

I started off with looping through each character `c` and getting its code point with
`ord(c)` . Now I needed the inverse function of $f$ to continue with decryption.
This was simple to get, I just made $x$ the subject in $y = x^2 + 2x + 1$, giving
$x = \sqrt{y} - 1$. Now, I passed the codepoint of `c` through the inverse 
function and finally converted the resulting value to the corresponding 
character with `chr` . 

All of this is described in the following Python script which produces the flag:

```python
from pwn import *
from math import *

def solve():
    with open("spicy_flag.txt", "r") as f:
        contents = f.read()
        for c in contents:
            print(chr(int(sqrt(ord(c)) - 1)), end="")

solve()
```
