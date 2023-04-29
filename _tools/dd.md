---
title:  dd
os: linux
tags:
 - basic
 - linux
source: repo
---

## commands

```bash
# create bootable thumbdrive from image file (non windows)
dd if=/path/to/inputfile of=/dev/sda bs=4M conv=fdatasync status=progress
```