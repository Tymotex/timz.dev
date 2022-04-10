This was a pretty straightforward problem. The frontend directly prompts you to
use your browser's HTML element inspector. I started with expanding all the
HTML nodes and almost immediately stumbled on the first fragment of the flag:

```html
<!-- Html is neat. Anyways have 1/3 of the flag: picoCTF{tru3_d3 -->
```

Next, I saw the fact that there were 3 parts to this flag and the hint that the
web frontend shows about the site being built with HTML, CSS and JS which led
me to suspect that the other flag fragments would be embedded in the CSS and JS
files linked in the HTML document. 

![how the site was made](https://raw.githubusercontent.com/Tymotex/CTFs/master/pico/Insp3ct0r/how.png)

To inspect those files, I looked at the
'Sources' tab on the Chrome dev tools panel

![Sources tab](https://raw.githubusercontent.com/Tymotex/CTFs/master/pico/Insp3ct0r/sources.png)
