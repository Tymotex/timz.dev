`robots.txt` is a standard file expected at the default path `/robots.txt` which
exists to inform web crawlers about how to crawl their website. For more detail
about how this works (not relevant to solving this challenge), see ['Robots Exclusion Standard'](https://en.wikipedia.org/wiki/Robots_exclusion_standard)
This challenge hints that looking up the `robots.txt` file of the given webpage
would give greater information about what to do.

Navigating to `https://jupiter.challenges.picoctf.org/problem/60915/robots.txt` , 
I saw the following contents for the `robots.txt` file:

```
User-agent: *
Disallow: /8028f.html
```

The natural next thing to try from here is to access the resource that's 
disallowed from being crawled, so I navigated to `https://jupiter.challenges.picoctf.org/problem/60915/8028f.html`

and the flag was embedded in the document in the response.

Prior to looking up `/robots.txt` , I had just inspected the HTML thoroughly to
look for more clues and I had also inspected the attached CSS styles from the
'Sources' tab in the Chrome dev tools panel. Interestingly, I found the 
following CSS rule, but it seems that it ultimately wasn't there to help me
find the flag.

```
flag {
    color: red;
}
```
