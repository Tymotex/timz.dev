I opened the given .pcapng file with Wireshark to take advantage of their
advanced filtering functionality to sift through the network packets to find
the flag. I started off executing naive searches for the string 'pico' anywhere
in the packest list, bytes and headers, however no result was found. 

Looking at the traffic, I tried looking for any HTTP requests that stood out.
I identified an HTTP message that involved unencrypted traffic to port 80 of
a web server at the IP address `18.222.37.134` .

![unencrypted traffic](https://raw.githubusercontent.com/Tymotex/CTFs/master/pico/Wireshark-doo-dooo-do-doo/unencrypted-traffic.png)

It looks like the flag was in the payload returned by an earlier GET request to 
`18.222.37.134` , however it was still encrypted. I saw, however that in 
`cvpbPGS` , 'c' was likely being mapped to 'p' because the character 'c' appears
at index 2 and 4 in the string "picoCTF", which coincides with where the 'p'
characters occur ciphertext. Additionally, it looks like the ciphertext's 
'c' character maps to 'p' which was a strong indication that a rotation cipher
was applied, specifically ROT-13 because we can see that plaintext 'c' maps to
'p', 13 positions away alphabetically, and plaintext 'p' maps to 'c', also 13
positions away alphabetically. Since ROT-13's inverse function is itself, to
decrypt the message, all I had to do was pass the string through ROT-13.

The following Python snippet produced the flag.

```python
import codecs

print(codecs.encode("Gur synt vf cvpbPGS{c33xno00_1_f33_h_qrnqorrs}", "rot-13"))
```
