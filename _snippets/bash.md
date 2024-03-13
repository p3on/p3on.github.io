---
title: bash
tags:
 - linux
 - basics
 - code
icon: <i class="fa-solid fa-2x fa-terminal"></i>
short: Handy bash snippets 
toc: true
---

> A collection of loose snippets

- Iterate over files in a directory and do something:

```bash
# this is not whitespace safe!
for file in ./*.zip; do
    unzip -d $file"_unzipped" $file;
done
```
