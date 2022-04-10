The following is the contents of the `substitution.txt` file.

```
Mpkgwabs! Jpf huh ub! Huh jpf wraousr byrj drwr pk a dpwelak erjvpawh• Byus us ;wrbbj lfmy a sfvsbubfbupk mu;yrw dyumy jpf spocrh. MPL•6841•K3c3w_g0kk4_g1cr_f;_spoc1kg_mu;y3ws•. 
Lajvr gp vame bp byr KSA galr akh bwj pfb lpwr! Dyumy ;awb huh jpf mpl;orbr tuwsb• Das ub, krcrw gpkka gucr jpf f;… krcrw gpkka orb jpf hpdk… krcrw gpkka wfk awpfkh akh hrsrwb jpf!
```

As hinted, we know that this message was generated with a *substitution cipher*.
This one actually took me days to solve, mainly because I was fixated on the
non-alphabetical characters appearing in the text like '•' and '; '. In
hindsight, this was a pretty straightforward problem.

The first thing to notice is that the numerical values didn't seem to be 
substituted when the message was enciphered, or at least it would be an insane
coincidence. The text `MPL•6841•K3c3w_g0kk4_g1cr_f;_spoc1kg_mu;y3ws•` looked 
like it was the flag we were after. We can leverage the knowledge that the
flag would follow the pattern 'COMP6841{.*}' to have confidence that the
substitution cipher would do map the following plaintext characters:
* C → M
* O → P
* M → L
* P → •
* { → •
* } → •

Since there seemed to be a collision where 'P', '{', '}' map to the same '•'
character, I decided to first recover the curly braces before anything else, 
obtaining: `MPL•6841{K3c3w_g0kk4_g1cr_f;_spoc1kg_mu;y3ws}` . Now, 
reverse-substituting the above mappings, the first word of the file changes
from 'Mpkgwabs!' to 'Cokgwabs!' which looked suspiciously like 'Congrats'. 
Going by this, I then applied the substitutions necesssary to transform
'Cokgwabs' to 'Congrats' on the whole file. The resulting text gave me enough
confidence that the substitutions so far were all correct. Afterwards it became 
trivial to determine the remaining substitutions based on what words I thought
was reasonable, and I obtained the flag value, `COMP6841{N3V3R_G0NN4_G1VE_UP_SOLV1NG_CIPH3RS}` , 
shortly after.
