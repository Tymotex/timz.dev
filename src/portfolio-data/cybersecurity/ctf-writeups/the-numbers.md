This was a straightforward problem. Some key observations to note are:
* The curly braces are not encrypted and they are exactly where you expect
  them to be in a flag string.
* All the given numbers are between 1 and 26, indicating that these codes
  could correspond to a positional index of the alphabet.

I first copied down all the values shown in the image: `16 9 3 15 3 20 6 { 20 8 5 14 21 13 2 5 18 19 13 1 19 15 14 }`

to a text file, then pass it off for Python to tokenise and print out each of 
the characters:

```python
ALPHABET = "abcdefghijklmnopqrstuvwxyz"

def solve():
    with open('contents.txt', 'r') as f:
        contents = f.read()
        tokens = contents.split(" ")
        for token in tokens:
            try:
                position = int(token)
                print(ALPHABET[position - 1], end="")
            except:
                print(token, end="")
    print()

solve()
```
