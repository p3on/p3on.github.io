---
title: jq
os: linux
tags:
 - basic
 - linux
 - I/O stream
source: repo
---

## commands

```bash
# filter the first level of keys (reduces large output)
jq 'keys'

# map: filter elements of passed array
jq '.Functions | map(.FunctionName)' # lists all function names (aws lambda)
```

## Sources

- [1]: https://gist.github.com/olih/f7437fb6962fb3ee9fe95bda8d2c8fa4