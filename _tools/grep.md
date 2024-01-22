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
``````
