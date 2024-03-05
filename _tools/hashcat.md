---
title:  hashcat
os: linux/windows
tags:
 - itsec
 - linux
 - windows
source: repo/github
---

Cracking hashes fast with hashcat[^1]

## commands

Identify hashes:

```bash
# hashcat tries to match the hash
hashcat hash.txt

# try to find a hashmode given a specific hash
hashcat --help | grep 'krbtgs'
```

Specify the matching hashtype via the correct `-m` value found in the hashcat wiki[^2]. 

Crack hashes via wordlist:

```bash
hashcat -m 0 -a 0 hash.txt pw_list.txt
```

Cracking passwords without a file but with a mask-attack [^3]:

```bash
# 
hashcat -m 0 -a 3 -1 ?l?u?d hash.txt ?1?1?1?1?1?1?1?1 --increment --increment-min 4
```

## sources

[^1]: [https://github.com/hashcat/hashcat](https://github.com/hashcat/hashcat)
[^2]: [https://hashcat.net/wiki/doku.php?id=example_hashes](https://hashcat.net/wiki/doku.php?id=example_hashes)
[^3]: [https://hashcat.net/wiki/doku.php?id=mask_attack](https://hashcat.net/wiki/doku.php?id=mask_attack)
