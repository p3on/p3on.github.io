---
title: binwalk
os: linux
tags:
 - basic
 - linux
 - file
source: repo
---

## commands

Extraction of files - all or specified and in combination with `dd`:

```bash
# simple extraction
binwalk -e filename.dat

# with dd extract either every found signature -
binwalk --dd='.*' filename.dat

# or only jpeg
binwalk --dd='jpeg:jpg' filename.dat
```

Show entropy of parts of a file -> gives a hint of either compressed or encrypted data inside a file:

```bash
# -E for entropy
binwalk -E filename.dat
```