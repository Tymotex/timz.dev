`binwalk` is a fantastic tool for solving this problem.

Using `binwalk -e <file>` will extract out any files embedded within the 
specified file, which is exactly what we want. Running `binwalk -e dolls.jpg`

will produce `_dolls.jpg.extracted` , a directory containing all the uncovered
embedded files within `dolls.jpg` . I found that there was a single image file
in the extracted files called `2_c.jpg` . I repeated the same procedure
of running `binwalk -e` on the image file. On the 4th layer, I finally
discovered the flag file, `flag.txt` .

I wrote the following shell script to automate this traversal work:

```sh
#!/bin/sh

# Run the initial binwalk extraction on the given file.
binwalk -e dolls.jpg > /dev/null
cd _dolls.jpg.extracted/base_images

for i in $(seq 2 5); do
    filename=${i}_c.jpg
    binwalk -e ${filename} > /dev/null 2>&1
    cd _${filename}.extracted/base_images > /dev/null 2>&1
done;

flag_file_path=$(find | grep 'flag')

cat $flag_file_path
echo
```
