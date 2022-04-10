The following are some key observations I noted when analysing the contents of secedu.txt:
* All tokens are of length 24
* All tokens only consist of the *units*, 'sec' and 'edu'. I suspected that these could map to 0s and 1s.
    - Furthermore, I also noted that all of the tokens started with 'sec', which indicated to me that perhaps 'sec' should map to 0 because all valid UTF-8 characters in the ASCII table start with 0.

I then wrote the following Python script to read in the contents
of secedu.txt, tokenise the contents, then map all instances of 'sec' to 0 and all instances of 'edu' to 1, and finally print out the characters corresponding to the resulting integer value.

```python
from pwn import *
import re

def solve():
    with open("secedu.txt", "r") as f:
        contents = f.read()
        tokens = contents.split(" ")
        for token in tokens:
            token = re.sub(r"sec", "0", token)
            token = re.sub(r"edu", "1", token)
            print(unhex(hex(int(token, 2))[2:]).decode(), end="")
        print()
solve()
```

The script produced the following output:

```
Wow, you figured it out! Great work! How long it it take for you to figure it out?! I would share with you some extra secrets... but... (sorry) QWggd2VsbCB0aGF0J3Mgbm8gZmFpciEgSGVyZSwganVzdCB0YWtlIHRoZSBzZWNyZXQuIFJlbWVtYmVyIGl0IGlzIGEgc2VjcmV0LCBzbyBrZWVwIGl0IGh1c2ggaHVzaCEgQ09NUDY4NDF7UzNjX0VkdV8xc19jMDBsfQ==
```

That last bit looked like some base64! I passed it through `base64 -d` and obtained the flag:

```
Ah well that's no fair! Here, just take the secret. Remember it is a secret, so keep it hush hush! COMP6841{S3c_Edu_1s_c00l}
```
