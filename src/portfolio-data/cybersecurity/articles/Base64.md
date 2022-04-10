Base64 is a *binary-to-text encoding scheme*, meaning it maps binary data to printable characters. Specifically it takes every 6-bit chunk of an input and maps it to the corresponding printable character using the following table:

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ecbb4271-8546-4901-9d1c-9eea0a3a2916/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220410T013133Z&X-Amz-Expires=86400&X-Amz-Signature=0d77321a861bda6a831f89c4f67d78c6e6e26261c36eaca888e30b1995222d14&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

Note that we call it base64 because 6 bits gives you 64 possible numbers, $2^6=64$. One important point to stress is that base64 is **not an encryption scheme**, it’s just a text encoding scheme that you use to map any binary sequence to a sequence of 6-bit digits. Security is not the intent of the encoding, but it happens that in some CTF problems, base64 encoding is intentionally used to obscure something from you. The purpose of base64 is to convert binary data to a sequence of *printable* characters for when the transport media requires non-binary data in the payload, for example in email attachments. 

**Base64 encoding:**

To convert binary data to base64, you take groups of 24 bits (which represents 3 bytes in the input) and map each 6 bit chunk of that group of 24 bits to a single base64 character using that table above.

This is an [excellent interactive visualiser](https://codepen.io/lewistg/pen/MEQbmB) for the base64 encoding process!

What if your input is, say, 16 bits instead of 24 like this example?

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ba86105e-8d1c-4ffc-9b15-d0f13d78336d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220410T013348Z&X-Amz-Expires=86400&X-Amz-Signature=d9430d284e880f636e1ae9e1d01920efbd900e11914fd697cef3c7395176d9b9&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

Observe that
1. You can successfully map the first 6 bits to a base64 character.
2. You can successfully map the next 6 bits to a base64 character.
3. When you have insufficient bits in the next 6 bits to produce a base64 character, you right-pad with extra bits (2 in this example) and then map the resulting 6 bits to a base64 character.
4. When there are simply no bits, then you map to ‘=’ by default. This is why you often see 0-3 trailing ‘=’ characters at the end of base64 values.
