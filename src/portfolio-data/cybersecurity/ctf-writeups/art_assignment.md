Initially, I went through the motions of running a few of the upfront checks
such as `file final_submission.png` and `strings final_submission.png` which
didn't reveal and promising leads. I then tried to extract hidden embedded files
with `binwalk -e final_submission.png` which it did! For some reason, there was
a zlib compressed file called `29.zlib` in the extracted output. After 
extracting its contents, there was some random data file that had no semblance
of any other file type. It was here that I wasted a lot of time trying to
derive insight from that extracted file.

Finally, after returning to this problem again at a later date after my initial
dead-end pursuit, I tried to pass the image through a few simple steganography
solvers like [StegOnline](https://stegonline.georgeom.net/image). After manually
'brute-forcing' through all the different ways a message could be hidden with
their available image analysis tools, I stumbled on the flag! It turns out that
the image hid the flag on the first pixel bit plane:

![bit plane](https://raw.githubusercontent.com/Tymotex/CTFs/master/comp6841/art_assignment/bit-plane.png)
