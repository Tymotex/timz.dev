Cross site scripting, one of the most common security vulnerabilities that exists, is a powerful web exploitation technique where malicious JavaScript code is given to web frontends that will execute it for other users. In a way, you can mostly think of XSS as ‘JavaScript injection’, although not all attacks necessarily involve JavaScript!

**Same-Origin Policy:**

XSS is basically a way to circumvent the [*same-origin policy](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy), * a security mechanism that basically aims to stop one website from reading/writing to the DOM of another URL of a different *origin*. For example, the JavaScript code in [malicious-site.com](http://malicious-site.com) is prevented from reading/writing to [your-banking-app.com](http://your-banking-app.com). Note that this restriction only applies to scripts, not HTML tags like images, making them an avenue for exploits!

A *web content* *origin* is the combination of the protocol, hostname and port of a URL. We say that two URLs are of the *same origin* if all 3 parts match. For example, [https://test.com:443/hello](https://test.com/hello) and [https://test.com:443/world](https://test.com/world) are the same origin.

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a62900d5-7c11-47c3-b441-ea7d288359e7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220410T010158Z&X-Amz-Expires=86400&X-Amz-Signature=88197fd4726c224ebeae42c74f7ea81d6be45aa2896b300c3c9fb4b21e877e45&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/d1fea390-199b-4aff-8577-63229ab04e80/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220410T010200Z&X-Amz-Expires=86400&X-Amz-Signature=e37c7bf46cae53b201f38862be840c8c9ef121db77faf27585e841071957e583&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

Note: when one origin reads/writes to another different origin, we call this interaction *cross-origin*.

Since the same-origin policy stops you, an attacker, from running your malicious javascript on [your-banking-app.com](http://your-banking-app.com), you would have to get [your-banking-app.com](http://your-banking-app.com) to run the malicious javascript for you — this is what XSS is! How would you do this? There are a few common patterns for how XSS attacks are carried out in CTFs and in real hacks, the two discussed in this article will be *reflected XSS* and *stored XSS*.

Just remember, the browser will blindly trust and render all the HTML, and consequently run all the JavaScript embedded in that HTML, that [your-banking-app.com](http://your-banking-app.com) returns.

**Reflected XSS (Non-Persistent XSS):**

Reflected XSS is possible when the malicious input is *reflected back* in the HTML returned in the response. You perform this style of attack by adding the malicious JavaScript in the URL, which when requested from the web server, will result in the web server sending back a document that runs that malicious JavaScript when the browser renders it.

One common example used to explain how this is achieved is when a website lets you input a search query in the URL and then renders your search query in the DOM itself. For example, it might look like this:

![Untitled](https://www.notion.so/signed/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F03131314-a032-4626-9e0e-077a4f3a6f58%2FUntitled.png?table=block&id=cd831b29-0bc6-4d84-9189-8d5f51e074e3&spaceId=621f113b-b6ad-4296-a660-ef8fddc2eb6f&name=Untitled.png&userId=b31acd67-fcbe-478f-bbe4-8bba3feb2748&cache=v2)

If the query value gets directly rendered without any validation, then we’re able to put in whatever HTML we want and have that be rendered. The most traditional thing to try is to try to put in a `<script>alert(1)</script>` into the URL, like: `https://vulnerable.com?query=<script>alert(1)</script>` . Note that you would need to encode the URL to produce something like: `https://vulnerable.com?query=%3Cscript%3Ealert%281%29%3C%2Fscript%3E` .

Then, you can distribute this URL to unsuspecting users (commonly through legit-looking emails), and then when the link is clicked, their browser will execute your malicious code which could do anything from displaying a harmless alert or attaching their cookies and sending it to a web server you control.

**Stored XSS (Persistent XSS):**

When the input is reflected back in the reponse ***and*** stored in the database itself, meaning that it’ll potentially continue to be distributed to users, making it an order of magnitude more disastrous than reflected XSS. Additionally, one challenge with reflected XSS is that you have to bait victims into clicking a link to get the malicious javascript to run. With stored XSS, any user that visits the site itself will execute that malicious javascript.

The classic example used to explain how stored XSS is achieved is when websites let you make comments. 

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/bde9004b-12f1-4a98-8038-bcc628cbfed5/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220410T010315Z&X-Amz-Expires=86400&X-Amz-Signature=5242e5950b4ad1e7a3f5ce4f7bd4769d813f4e82ff5c0f8d94dd59b5c6cd2434&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

In this example, as an attacker, you could send in a `<script>alert(1)</script>` as the comment body which gets stored in the application’s database. Then, when other users visit the page where your comment is fetched and put into the HTML response, your malicious code will run in their browser!  

Note that `<script>` elements aren’t the only way to execute XSS, you can attach your malicious JavaScript to event handlers like `[onload](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onload)` on regular HTML elements like `body` , `svg` , etc.

**Defending against XSS:**

The main defense against XSS is to sanitise user input *on arrival*. Often, the best way to do this is via tried and tested input sanitising libraries like [DOMPurify](https://github.com/cure53/DOMPurify).
