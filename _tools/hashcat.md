---
title:  hashcat
os: linux/windows
tags:
 - itsec
 - linux
 - windows
source: repo/github
---

## links / sources

[1] : https://github.com/hashcat/hashcat <br>
[2] : https://hashcat.net/wiki/doku.php?id=mask_attack <br>
[3] : https://hashcat.net/wiki/doku.php?id=example_hashes

## commands

Specify the matching hashtype via the correct `-m` value found in [3]. 

Crack hashes via wordlist:

```bash
hashcat -m 0 -a 0 hash.txt pw_list.txt
```

Cracking passwords without a file but with a mask-attack [2]:

```bash
# 
hashcat -m 0 -a 3 -1 ?l?u?d hash.txt ?1?1?1?1?1?1?1?1 --increment --increment-min 4
```