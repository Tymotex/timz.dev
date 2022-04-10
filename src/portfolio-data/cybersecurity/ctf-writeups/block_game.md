In this challenge, we're supplied a `level.dat` file. I started off with running
`file level.dat` and discovered that it was a `gzip` file. I then tried to unzip
it with `gunzip level.dat` which was refused because the `.dat` suffix was not
known by `gunzip` , so I had to rename it to `level.gz` which `gunzip` accepted.

Unzipping the file produced a file called `level` . To determine what file it was
I executed `file level` which reported that it was a PCX file, which I had no
familiarity with. Apparently it was an image file format, but after a hopeless
attempt at trying to get it to be displayed by image viewers and editors, I gave
up. Next, I tried to inspect the hexdump of the file and discovered a lot of 
string output which prompted me to run `strings level` . Sifting through the 
output I noticed how many of the fields were used to represent some Minecraft
world data (hence the name 'Block Game')! 

```
Data
WanderingTraderSpawnChance
BorderCenterZ
Difficulty
BorderSizeLerpTime
raining
Time
GameType
ServerBrands
vanilla
BorderCenterX
BorderDamagePerBlock?
...
```

Very quickly, I found the following
flag near the end of the `strings` output:

```
0[{"text":"FLAG{CREEPER_AW_MAN}","italic":false}]
```
