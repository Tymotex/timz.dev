I started off with running `file tunn3l_v1s10n` which unfortunately doesn't
conclude that it's any known file type. I then used `strings tunn3l_v1s10n` to print out all the printable bytes in the 
file's contents and passed it through `grep 'pico'` however this didn't produce
the flag. Now, I tried `binwalk -e tunn3l_v1s10n` , however it doesn't seem to be the case
that the file contained any embedded files within.

Now, I looked up a list of [magic bytes](https://en.wikipedia.org/wiki/List_of_file_signatures)
and tried to see if I could match the first few bytes of tunn3l_v1s10n with
anything. I saw that the first two byes, 0x42 and 0x4D, were the magic bytes 
for a BMP (bitmap) file. Given that it was likely a bitmap file, I decided
to see if an image viewer could interpret it by running `display tunn3l_v1s10n` , 
and it did show an image! Strangely, other image viewers like `feh` and `eog`

refused to try to display the image due to corruption.

Note: I discovered [exiftool](https://exiftool.org/) which is a tool for reading/writing metadata to
image, video and audio files (mainly). I could have determined that the file
was a BMP file by simply running `exiftool tunn3l_v1s10n` .

```
File Type                       : BMP
File Type Extension             : bmp
MIME Type                       : image/bmp
```

When I tried using `eog tunn3l_v1s10n` , it complained about the header size 
being invalid which led me to believe that perhaps that part of the metadata
was corrupted and could be corrected.

I knew next to nothing about BMP files and so had to find some references to
understand what values might have been corrupted like [Wikipedia BMP File Format](https://en.wikipedia.org/wiki/BMP_file_format).

It seemed that the first 14 bytes are meant to specify some important metadata
like the file signature, size, etc. The next 40 bytes after that were 
responsible for other fields such as width, height, etc. I used Wikipedia's ['Example 1'](https://en.wikipedia.org/wiki/BMP_file_format#:~:text=bits/pixel%20encoding-, Example%201, -%5Bedit%5D)
to compare the header bytes of the BMP file to check which parts could have been
garbled. It seemed that offsets 0xA and 0xE were incorrect.

![Incorrect bytes](https://raw.githubusercontent.com/Tymotex/CTFs/master/pico/tunn3l-v1s10n/incorrect-bytes.png)

For offset 0xA, instead of `36 00 00 00` , they were `BA D0 00 00` .
For offset 0xE, instead of `28 00 00 00` , they were `BA D0 00 00` .

After making these corrections with a hex editor like `ghex` , the image was
able to be displayed, however the flag did not appear.

I was unable to realise this but, but the next thing to modify was the height
field in the bitmap header bytes at offset 0x16.

![height bytes](https://raw.githubusercontent.com/Tymotex/CTFs/master/pico/tunn3l-v1s10n/height-bytes.png)

The reasoning that would lead you to suspect that the height may be incorrectly set in the file is the fact that
the image file size is 2.8 MB, but the dimensions are only 1134 x 306, according
to `exiftool` .

After setting a larger number for the height, for example, changing `32 01 00 00`

to `32 03 00 00` (from 306px to 818px), the full image will finally be shown.

![tunnel_vision_completed](https://raw.githubusercontent.com/Tymotex/CTFs/master/pico/tunn3l-v1s10n/tunn3l_v1s10n)
