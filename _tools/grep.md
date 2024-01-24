---
title:  grep
os: linux
tags:
 - basic
 - linux
source: repo
---

## commands

Recursive search for files with the case insensitive `password` in it:

```bash
# R: greedy, n:line number, w:match whole word
grep -Rnw --exculde-dir{*.zip} './' -e 'password'

# r: recursive, o:only matching
grep -ro 'password'
```

## Specific greps

> Special `regex` patterns for grabbing needles out of the haystack, verify patterns with [1]

- [x] mail
- [x] IPs (IPv4)
- [ ] gnmap

```bash
# grep for mails in all files of dir (sort and uniq to reduce duplicates)
grep -Eor "([[:alnum:]_.-]+@[[:alnum:]_.-]+?\.[[:alpha:].]{2,6})" | sort | uniq

# quick and dirty for ips (mail also reveal version numbers etc.)
grep -Eor "[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}"
```

## Sources

[1] : [https://regex101.com/](https://regex101.com/) <br>