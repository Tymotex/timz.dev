# GET aHEAD

First, after navigating to mercury.picoctf.net:21939, I inspected the HTML for
both of the visible buttons and analysed the following HTML:

```html
<div class="row">
    <div class="col-md-6">
        <div class="panel panel-primary" style="margin-top:50px">
            <div class="panel-heading">
                <h3 class="panel-title" style="color:red">Red</h3>
            </div>
            <div class="panel-body">
                <form action="index.php" method="GET">
                    <input type="submit" value="Choose Red" />
                </form>
            </div>
        </div>
    </div>
    <div class="col-md-6">
        <div class="panel panel-primary" style="margin-top:50px">
            <div class="panel-heading">
                <h3 class="panel-title" style="color:blue">Blue</h3>
            </div>
            <div class="panel-body">
                <form action="index.php" method="POST">
                    <input type="submit" value="Choose Blue" />
                </form>
            </div>
        </div>
    </div>
</div>
```

The main detail that was interesting was that the form elements' actions for the
red and blue buttons were different. One would perform a GET request and the
other would perform a POST request. This was a strong indication that the server
was returning different responses purely based on which HTTP verb it received.

Along with the provided hint that "Maybe you have more than 2 choices", I 
was going to try sending requests to the web server with different HTTP verbs.
You can find a big list of them on MDN: [HTTP request methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods). Although you can easily do this with `curl -X` and other curl
options, I decided to try Burpsuite and set it up to proxy my network requests.

When my outgoing request to the server was intercepted, I changed only the HTTP
verb. Initially, I tried going through the other common verbs such as PUT, 
DELETE, PATCH, etc. I failed to recognise the blatant hint in the title of the
challenge, 'GET a**HEAD**'. When I set the HTTP verb to HEAD, this produced the
flag:

![burpsuite](https://raw.githubusercontent.com/Tymotex/CTFs/master/pico/GET-aHEAD/burpsuite.png)
