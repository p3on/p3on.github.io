---
title: jq
os: linux
tags:
 - basic
 - linux
 - I/O stream
 - parser
source: repo
---

## commands

Basic filtering/parsing to get the basic `keys` and an overview of the objects themselves:

```bash
# filter the first level of keys (reduces large output)
jq 'keys'
> [
>   "Functions",
>   "Policies"
> ]

# check first element in an array via a key from the keys output
jq '.Functions[0]'
> {
>  "FunctionName": "SPG_SLUP_Receiver_production",
>  ...
> }
```

Now that it is clear what elements are nested and what their keys are, listing specific fields from all elements can be achieved as follows:

```bash
# map: filter elements of passed array
jq '.Functions | map(.FunctionName)' # lists all function names (aws lambda)

# select on a condition
jq '.Policies[] | select(.AttachmentCount==0)'
```

## Sources

- [1]: https://gist.github.com/olih/f7437fb6962fb3ee9fe95bda8d2c8fa4