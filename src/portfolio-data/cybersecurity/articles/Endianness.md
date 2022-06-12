**What is Endianness?**

We can view computer memory as just a big array of *bytes*. Endianness just describes how we order the bytes of a ***word*** when store it into memory. In the context of computer architecture, a word is a unit of data whose length is defined by the processor, often 32 bits. We mostly hear about either *big-endian* systems or *little-endian* systems. What are they?

Let’s step back a bit and consider how endianness came to be. Suppose we have a program that declares and initialises a 32-bit integer: `int i = 42;` . The 32 bits for this variable’s value, 42, are: `00000000 00000000 00000000 00101010` , and in hexadecimal, the bytes are: `00 00 00 2A` . Now, how would we store these 4 bytes into memory? We could just do this ‘naively’ by storing it in the same order that we wrote it down in, that is, storing it in ‘forward’ order like this:

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/533791c8-c01c-4634-ab85-415f7c91511b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220410T012605Z&X-Amz-Expires=86400&X-Amz-Signature=ac80820ce63a8fcac785ca257c45ce5b0bb11828e36df30cba3d2da920d543c4&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

We call the choice of laying out the bytes in ‘forward’ order as ***big-endianness*** because here we have stored the **most significant bytes** of the word first, or in other words, we have “stored the **big end** first.”

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/91a6271d-1549-4fa2-938e-32af6916673a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220410T012606Z&X-Amz-Expires=86400&X-Amz-Signature=c7d88c218b5fc6b8e915fa955289030a479e7bac06394723526a33f2fc1a3acd&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

Okay, so why would you write the integer `i` ’s contents into memory any other way? This method works fine and it’s easy to reason about for us humans.

Let’s pretend we’re the processor and we’re trying to fetch the contents at memory address 0x1337, where our variable i’s contents are stored. To get the full 32-bit value, we would look up address 0x1337 and read the 4 bytes from there onwards to form the value 42. What if we wanted to perform a *narrower* fetch? For example, what if we just wanted the 16-bit `short int` value at address 0x1337? This means you would only want to extract the 2 lease significant bytes of the word stored at address 0x1337. To do this, you would have to start from the address 0x1337 and **‘jump ahead’ 2 bytes forward** to get to the address 0x1339, and then read the next 2 bytes from there.

The ‘jumping ahead’ part is a bit of work that we could have avoided doing if we had stored our data into memory with the bytes in reverse order. That’s what little endianness is: you take the bytes of a value, eg. for 42 that was 00 00 00 2A, and then you store them into memory as 2A 00 00 00.

For example, let’s now store 42 in little endian format:

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c780c6f2-b28b-4130-a1f0-f55f8dcf948f/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220410T012620Z&X-Amz-Expires=86400&X-Amz-Signature=670ed73edaccb46b131982fed51c38274e6d36015460b141f652d4f2eb07cc8c&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

Now, if we wanted to fetch the 16-bit short int value at address 0x1337, there’s no need to jump ahead at all. We start at 0x1337 and read 2 bytes from there. You can read the value at 0x1337 at any bit-width without needing to do the work of computing the correct offset to start reading the value. 

In essence, “the little-endian system has the property that the same value can be read from memory at different lengths *without* using different addresses.”

There are some other tradeoffs you have to consider when deciding the endianness for a computer system, but the *vast majority of processors today are little-endian*. In the world of networking however, where endianness refers to the order in which the bytes of a message are transmitted from sender to receiver, most protocols are actually big-endian. There are also other weird endian systems which we broadly refer to as *mixed-endian*. 