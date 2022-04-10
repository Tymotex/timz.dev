[Pwn tools](https://docs.pwntools.com/en/stable/) is a collection of tools to help you implement exploitations quickly in a CTF environment. It minimises the amount of boilerplate code that you have to copy and paste for certain attacks.

To use, you may need to install it first with `pip install pwntools` . Import everything with `from pwn import *` and start pwning!

### [Tubes](https://github.com/Gallopsled/pwntools-tutorial/blob/master/tubes.md) — Local and Remote I/O

With `pwntools` , you can launch exploits towards local processes or towards processes running on a remote server hosted by the CTF organisers.

```python
from pwn import *

# ===== Remote Exploits ======
io = remote('mercury.picoctf.net', 53437)   # Establishes a remote connection to the given
                                            # address and port.
output = io.recvrepeat(1)                   # Reads whatever input is given to us within 1 second.
io.sendline('1')                            # Sends input to the server.

io.interactive()                            # Drops you into manual interactive mode.

# ===== Local Exploits =====
io = process('sh')
io.sendline("echo hello world".encode('ascii'))
output = io.recvline()
print(output.decode())
```

## Utilities

* Packing integers to byte strings, and unpacking byte strings to integers.

```python
byte_str = pack(0xdeadbeef)              # → '\xef\xbe\xad\xde'
                                            #   Creates a byte string from the given number.
                                            #   Little endian by default.
hex_str  = hex(unpack('AAAA'.encode()))  # → 0x41414141
                                            #   Gets the bytes of a byte string and returns
                                            #   a number.

byte_str = p32(1, endian="big")          # → '\x00\x00\x00\x01'
hex_str  = hex(u16('AA'.encode()))       # → 0x4141
```

* Quick file I/O.

```python
write("my-file", "Hello world")
contents = read("my-file")                   # → b"Hello world"
contents = read("my-file", count=2, skip=3)  # → b"lo"
```

* Strings to hex, hex to string.

```python
hex_str  = enhex('ABC'.encode())      # → 414243
orig_str = unhex('414243'.encode())   # → b"ABC"
```

* Base64 encode and decode.

```python
encoded_str = b64e("my message".encode())    # → bXkgbWVzc2FnZQ==
decoded_str = b64d(encoded_str)              # → b"my message"
```

* Common hash algorithms.

```python
h = md5sumhex('password123'.encode())     # → 482c811da5d5b4bc6d497ffa98491e38
h = sha1sumhex('password123'.encode())    # → cbfdac6008f9cab4083784cbd1874f76618d2a97
h = sha256sumhex('password123'.encode())  # → ef92b778bafe771e89245b89ecbc08a44a4e166c06659911881f383d4473e94f
```
