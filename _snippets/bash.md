---
title: bash
---

> A collection of loose snippets

1. Iterate over files in a directory and do something:

```bash
for file in ./*.zip; do
    unzip -d $file"_unzipped" $file;
done
```

2. Recursively search content of files

```bash
# R: greedy, n:line number, w:match whole word
grep -Rnw --exculde-dir{*.zip} './' -e 'password'
```

