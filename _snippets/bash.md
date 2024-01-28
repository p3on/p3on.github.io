---
title: bash
icon: <i class="fa-solid fa-2x fa-terminal"></i>
---

> A collection of loose snippets

- Iterate over files in a directory and do something:

```bash
for file in ./*.zip; do
    unzip -d $file"_unzipped" $file;
done
```
