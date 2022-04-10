This problem was pretty trivial. The big hint was provided here:

```python
def decode_secret(secret):
    """ROT47 decode

    NOTE: encode and decode are the same operation in the ROT cipher family.
    """
```

I assumed that the value of `bezos_cc_secret` was produced with ROT47 encode, 
so the `decode_secret` function seemed reasonable to call, passing int
`bezos_cc_secret` . I launched the script with `python -i crackme.py` which
drops you in interactive mode where you can freely call and evaluate the value
`decode_secret(bezos_cc_secret)` . Doing this yielded the flag.
