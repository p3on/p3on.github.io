---
title: sed
os: linux
tags:
 - basic
 - linux
 - I/O stream
source: repo
---

## commands

Search and replace, change only on console output:

```bash
# change only on console
sed 's/rgXptrn/replacement/g' rndFile

# change inside the file
sed 's/rgXptrn/replacement/g' rndFile -i
```

Filter output to only affected lines:

```bash
# show only changed lines
sed -n 's/regexPattern/replacement/p; s/pattern2/replacement2/p' file

# prepend text in front of line
sed 's/^/text2prepend/g' file
```

