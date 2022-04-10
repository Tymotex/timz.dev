# Burpsuite

Burpsuite is a web penetration testing tool that comes pre-installed with Kali. It helps you find and exploit web vulnerabilities like SQL injection, XSS, CSRF, etc. in CTFs and in real software systems.

### Proxy

Burpsuite lets you intercept web requests and read/write to them before forwarding it off to the web server for handling that request. Basically, Burpsuite acts as a man-in-the-middle that you control that’s placed between your browser and the target web server. For the majority of web exploitation CTFs and web pentesting, you’ll be touching things in the ‘Proxy’ window:

![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/db63de44-de49-4fe5-949d-7d59c7f025d8/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220410T013941Z&X-Amz-Expires=86400&X-Amz-Signature=0983b33518a2f12a18371522851cfa165337fb08357de2ab357fc0ce27ea296c&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

Note: You need to tell your browser to let Burpsuite proxy requests. Here are some [instructions](https://subscription.packtpub.com/book/networking-and-servers/9781788994064/2/ch02lvl1sec19/setting-up-chrome-to-work-with-burp-suite-http-and-https) for how to do this if your main browser is Chrome. 

From the Proxy tab, when you capture network requests, you can send the request to the ‘Repeater’ tab, for example, via the context menu.

### Repeater

The repeater tab lets you view and modify intercepted web requests and responses side-by-side before forwarding them:

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/62bb174a-c9e5-4b4e-a555-841112bfbdd6/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220410T014015Z&X-Amz-Expires=86400&X-Amz-Signature=546c883cdb911e57e74d2aae81bf6be3b8c3391d6b45446e0f6d1240cecdd3d9&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### Comparer

The data that you send to the ‘Comparer’ tab can be diff-ed.

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/875891bf-e1df-4951-936f-89114a6fb1aa/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220410T014023Z&X-Amz-Expires=86400&X-Amz-Signature=6e293467cd9c73ef7ce2197fa004663e02ba0b478645bc4c0eefd588a280a7f7&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### Decoder

The ‘Decoder’ tab is a handy place to URL encode plaintext, which is necesssary if you want to perform an SQL injection attack via a GET request for example. It also gives you a plethora of other decode options like Base64, hexadecimal/binary, etc. 

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f7b1b00c-7ad4-4189-b7c2-37b7a14975eb/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220410T014025Z&X-Amz-Expires=86400&X-Amz-Signature=8c9d3b72afcbc243553113c3f1abaad0cdad07e23a1ad65dd48e9e8e517c0fa8&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)
