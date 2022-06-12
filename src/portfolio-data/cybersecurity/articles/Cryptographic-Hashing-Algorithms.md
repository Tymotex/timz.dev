A cryptographic hash function/algorithm is basically a function that maps inputs to a *fingerprint* of the input. We call the output of a hash function a ‘*hash’, ‘hash value’, ‘message digest’, ‘fingerprint’*, etc. Often, the goal of cryptographic hashing algorithms in software systems is to ensure the integrity of a message, in other words, that the message hasn’t been tampered with on its way from the sender to the receiver.

Two common cryptographic hashing algorithms you’ll encounter include [MD5](https://en.wikipedia.org/wiki/MD5) (which has been broken!) and [SHA-256](https://en.wikipedia.org/wiki/SHA-2).  

One important idea to understand is that the security of a system using a good hash function doesn’t depend on keeping the hash function it uses and the outputs of the hash function private! Cryptographic hashing algorithms must have a few very important properties for people to confidently rely on them for ensuring integrity of messages:

1. *Collision resistance* — it should be very challenging to find two inputs that map to the same output — we call such a situation a *hash collision*. 

Consider an analogy with a fingerprint reader. A fingerprint reader maps every human to a single unique fingerprint. This is *one-way, * meaning that it’s not possible to map a given fingerprint back to the person (the original input). No two people will share the same fingerprint, even twins!

With cryptographic hash functions however, we can’t guarantee no hash collisions exist due to the [Pigeonhole Principle](https://en.wikipedia.org/wiki/Pigeonhole_principle). Usually, the set of all possible inputs to a hash function is way larger (sometimes infinite) compared to the possible set of outputs of the hash function. If hash collisions are exceedingly rare, very difficult to find, and evenly distributed over the output space, then we consider the hash function to be collision-resistant.

1. The algorithm must be deterministic, ie. the same input, when passed to the hashing algorithm, must always produce the same output.
2. [Avalanche property](https://en.wikipedia.org/wiki/Avalanche_effect) — the property that for even very slight changes in the input, a vastly different output is produced. We call it the ‘Avalanche’ property because it should be the case that changing even 1 bit of the input should cause a huge avalanche of changes to the output.

For example, consider the inputs “hello” and “gello” to the well-known `md5` hash algorithm: 

```python
md5("hello") == b1946ac92492d2347c6235b4d2611184 
md5("gello") == 5fc22db60facacdd34fdcd1c3ec072d6
```

Observe how a 1 character difference in the input produced a massively different hash value.

1. *Preimage resistance* — if you know the hash value and want to know the input that produced it, it should be computationally infeasible.

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/2368c63a-f3fe-4f44-bd38-615297eb4f4f/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220410T010602Z&X-Amz-Expires=86400&X-Amz-Signature=bc31e63e47389fc6f83908e11161e1504bc01164eb5b5154e2fce7efd2697a41&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

1. *Second preimage resistance* — if you know an input $x_1$ produces output $y$, it should be computationally infeasible to find another input $x_2$ that also produces output $y$.

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b5aa8ca5-f2d1-4d86-b769-4a0cc3c8302a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220410T010604Z&X-Amz-Expires=86400&X-Amz-Signature=0aac752c30d030c8a69bf20dbd43077124e2ec44d147ab3c9365b2381a8fdc00&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)