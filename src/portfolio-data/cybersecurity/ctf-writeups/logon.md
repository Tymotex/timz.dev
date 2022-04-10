This problem didn't require too much work to solve, however it was quite
challenging to figure out what the vulnerability was (initially I had believed
the vulnerability to be SQL injection). I opened up Burpsuite and opened the
Proxy tab to start intercepting HTTP requests. I started off just inputting
`username = 'joe'` and `password: 'test'` so that I could start peeking at the
intercepted request headers and payload to check that they contained what I
expected. Interestingly, I immediately stumbled on a solution for fetching the
flag when I noticed that the 'Cookie' field sent to the server in the following
HTTP GET request contained `admin=False` . I tried naively editing it to be 
set to True, and fortunately the server simply responded with the HTML
containing the embedded flag.

![get request screenshot](https://raw.githubusercontent.com/Tymotex/CTFs/master/pico/logon/get-flag-request.png)
