#!/bin/sh
# Quick and dirty script for clearing the first n bytes of a file

for file in *.md; do
    if [ -f "$file" ]; then
        echo $file
        tail +4c $file > $file.truncated && mv $file.truncated $file 
    fi
done