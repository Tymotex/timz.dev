#!/bin/sh
# Uses the gifsicle CLI to compress large gifs

mkdir "original-gifs" 2> /dev/null
for i in *.gif; do
    mv $i $i.backup
    echo " > Executing lossy compression of: $i"
    gifsicle -O3 --lossy=100 --colors 256 --scale 0.25 "${i}.backup" -o "$i"
    mv "${i}.backup" "original-gifs/${i}"
done
