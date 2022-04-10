Upon inspecting the input, I suspected that I would need to sort the lines into ascending order of the 
numbers that appear in each line. I wrote the following Python script which accomplishes this and also filters out the "::\d+::" from each line:

```
import re

def get_num(line):
    pattern = re.compile('(\d+)')
    result = pattern.search(line)
    return int(result.group(1))

def solve():
    with open("shuffle.txt", "r") as f:
        lines = f.readlines()
        lines.sort(key=get_num)
        for line in lines:
            print(re.sub(r"::\d+::", "", line))

solve()
```

Note that I thought it was reasonable to filter out the "::\d+::" parts of the
string since there were long chains of lines consisting of just "::\d+::". This
indicated to me that they could have been whitespace between words - which it
seems like they were!

Running the script above, I produced the phrase which was actually written in
ASCII art text. I was hopelessly stuck for days before I took another look but
tilted my head to the right and tried to read the output at an angle. Finally, 
I uncovered the phrase, "MAKING ASCII ART IS A KEY PART OF THE HACKERS TOOLKIT".
