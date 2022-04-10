# Mind your Ps and Qs

Suppose that Alice wants to receive messages from the world using the RSA
cryptosystem.

She'll pick 2 big prime numbers, `p` and `q` , which are kept secret by her, then
determines the product `n = p*q` .
She determines the Euler Totient function value of `n` , `φ(n) = (p - 1)(q - 1)`

and then chooses a public key `e` that satisfies the 2 conditions:
1. `1 < e < φ(n)`
2. `e is coprime with φ(n)`
In this challenge, Alice has chosen `e = 65537` .
Finally, Alice chooses a private key `d` which satifies the equation: 
`de = 1 (mod n)` .

Now, Alice has broadcasted the values `n` and `e` , which is given to us by the
CTF problem. We also have `c` , which is the message encrypted with Alice's
public key `e` sent by someone else who intends for Alice to decrypt it with her
private key `d` .

To encrypt a message `m` in RSA, you compute `c = m^e (mod n)` .
To decrypt an encrypted message `c` in RSA, you compute `m = c^d (mod n)` .

The CTF problem hints that perhaps `n` is small and hence could be
computationally feasible to factorise. Doing so would yield `p` and `q` , and
so you would be able to compute the Euler Totient function value φ(n) with the
simple formula `φ(n) = (p - 1)(q - 1)` , and then solve `de = 1 (mod n)` quite
easily with something like the Extended Euclidean algorithm.

Rather than write the integer factorisation algorithm myself, I tried to see
if there were some calculators available online that could perform this task
for me. Many of the calculators I had seen unfortunately truncated your input
down to around 10 digits, which was nowhere near enough for the given value
of `n` which was around ~80 digits long. Luckily, I stumble on this calculator
from [Alpertron](https://www.alpertron.com.ar/ECM.HTM) that could accept huge
inputs like the one for this challenge.

Apparently, the Euler Totient value is `1280678415822214057864524798453297819181234364596418349127352680639289550089776560` .

Now, I could easily deduce a decryption key `d` that would satisfy the 
equation: `de = 1 (mod n)` . I looked for an Extended Euclidean algorithm
solver and found [this one](https://planetcalc.com/3298/). Plugging in 
`a = 65537` and `b = 1280678415822214057864524798453297819181234364596418349127352680639289550089776560` results
in our private decryption key `d` , `449332735606084960351204406909610297301574728466820933515942864925459265983556193` .

Now, I just had to pass this through a modular exponentiation calculator that
helps me evaluate: `m = c^d (mod n)` for `c = ` and `d = ` .

This was the [modular exponentiation calculator](https://www.dcode.fr/modular-exponentiation)
that worked for me, resulting in the value: `13016382529449106065927291425342535437996222135352905256639555654677400177227645` .

Now all I needed to do now is get the plaintext back from this number. I assumed
that this number was just a decimal representation of a sequence of ASCII codes
which seemed to be right! Running the following python snippet got me the flag:

```python3
unhex(hex(13016382529449106065927291425342535437996222135352905256639555654677400177227645)[2:])
```
