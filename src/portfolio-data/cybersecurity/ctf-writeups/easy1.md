For this challenge, we're given the following information in addition to a
matrix of alphabetical characters and the 26 different shift positions.

```
key            =  SOLVECRYPTO
encrypted_flag = UFJKXQZQUNB
```

One observation: the key and the encrypted flag value are the same length, so
perhaps there is a one-to-one correspondence. 

In cryptography, when there is mention of a 'key' value, we generally use it
to create the ciphertext. In this problem, I suspected that perhaps the original
flag values was combined in some way with the key to produce the encrypted
flag.

Given these two points above, I guessed that maybe the flag was encrypted in the
following manner:
`encrypted_flag[i] = lookup_table[flag[i]][key[i]]` for `0 <= i < len(flag)` .

To decrypt the encrypted flag, we iterate through each character of the `key` , 
$\texttt{key}_i$, then in lookup_table row $\texttt{key}_i$ we determine where
the encrypted flag character $\texttt{encrypted\_flag}_i$ is, then the column
of where it occurs gives the original flag character $\texttt{flag}_i$. 
Repeating this procedure for all of the characters in the encrypted flag results
in the string "CRYPTOISFUN", which was the flag.
