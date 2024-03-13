---
title: ack
os: linux
tags:
 - basic
 - linux
source: repo
---

> Probably the better `grep`

## commands

the linux man[^1] contains an exhaustive explanation of all params (as always)

```bash
# basic search, listing all file contents matching <pattern>. -i: ignore case
ack passwords -i
```

## source

[^1]: [https://linux.die.net/man/1/ack](https://linux.die.net/man/1/ack)