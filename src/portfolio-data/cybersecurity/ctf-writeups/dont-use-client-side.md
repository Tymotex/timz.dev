I immediately jumped into Chrome dev tools and used inspect element on the
document and quickly discovered a <script> tag containing some custom javascript
code. Of interest was this function which I directly copied and dumped into
a local .js file that I could analyse and quickly run:

```js
function verify() {
    checkpass = document.getElementById("pass").value;
    split = 4;
    if (checkpass.substring(0, split) == 'pico') {
        if (checkpass.substring(split * 6, split * 7) == '723c') {
            if (checkpass.substring(split, split * 2) == 'CTF{') {
                if (checkpass.substring(split * 4, split * 5) == 'ts_p') {
                    if (checkpass.substring(split * 3, split * 4) == 'lien') {
                        if (checkpass.substring(split * 5, split * 6) == 'lz_7') {
                            if (checkpass.substring(split * 2, split * 3) == 'no_c') {
                                if (checkpass.substring(split * 7, split * 8) == 'e}') {
                                    alert("Password Verified")
                                }
                            }
                        }

                    }
                }
            }
        }
    } else {
        alert("Incorrect password");
    }
}
```

It looked like we didn't even need to do much, we could just take those
hard-coded flag fragments and brute-force through different permutations. Since
we knew for sure that we would have 'pico' + 'CTF{' + ___ + 'e}', we would only
be left with: '723c', 'ts_p', 'lien', 'lz_7', 'no_c' to arrange in the correct
order. It wouldn't actually be necessary to brute-force this since we can see
some of the fragment align intuitively, eg. 'lien' should probably spell out
'client', so we could piece together 'no_c' + 'lien' + 'ts_p'. Then, the rest
is trivial to figure out, leading to: 'no_clients_plz_7723ce'.

To do this 'properly' according to the logic of the function, it's actually even
easier. It works by checking the given value against different substring
intervals. We can just trace the start and stop indexes to build up the correct
ordering of the string.
