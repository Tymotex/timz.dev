The key observation here to note is that the key is cycled every 50000
characters:

```python
if stop >= KEY_LEN:
    stop = stop % KEY_LEN
    key = kf[start:] + kf[:stop]
```

The encryption occurs in the following 1-liner: `list(map(lambda p, k: "{:02x}".format(ord(p) ^ k), ui, key))` . What's happening here is that it takes the
input `ui` and the `key` which we don't know, and executes 
`ord(ui[i]) XOR key[i]` to output a 2-digit hexadecimal string.

Initially, the `c = startup(0)` will assign `c` to 32 because if we take the
length of the encrypted flag shown to us at the start of the interaction, we
find that it is 64 characters long (therefore length 32 because each character
of the input maps to exactly 2 characters in the output).

Another very handy fact to know is that the inverse function of XOR is XOR
itself. This means that if you do `a XOR b` , then `a XOR (a XOR b)` will 
be `b` . 

Given these above observations, what we need to do is to send in an input of
length 49968, which will take `stop` back to 0 after the execution of `stop = stop % KEY_LEN` . At this point, the OTPs will start being repeated. Running the following Python snippet will give us `AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA XOR key` :

 `python2 -c "print 'A' * 49968; print 'A' * 32" | nc mercury.picoctf.net 64260`

which gives us: `03463d190702003d195004133d190356433d1902503d1950563d1900513d1959` .

Now we can take advantage of the XOR function being an inverse of itself and
determine what the key used to encrypt the flag was, and then XOR that key with
the encrypted flag to determine the flag. I used the following snippet to 
solve the problem:

```python
from pwn import *

encrypted_A = 0x23661d392722201d397024331d392376631d3922701d3970761d3920711d3979
plain_A     = 0x4141414141414141414141414141414141414141414141414141414141414141
key         = plain_A ^ encrypted_A

encrypted_flag = 0x51466d4e5f575538195551416e4f5300413f1b5008684d5504384157046e4959
flag           = encrypted_flag ^ key

print('picoCTF{' + unhex(hex(flag)[2:]).decode() + '}')
```
