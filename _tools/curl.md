---
title:  curl
os: linux
tags:
 - basic
 - linux
 - web
source: repo
---

## commands

Simple requests with `curl`:

```bash
# save in file webpage.html
curl -X GET 'https://example.com' -o webpage.html

# display response header
curl -X GET 'https://example.com' -i
```

Transmit data via `curl`:

```bash
# POST request with specified header and data 
curl -X POST 'https://example.com/api' -H "Authorization: Basic YXBpdXNlcjphcGlzZWN1cmVwYXNzd29yZA==" -d "token=somerndTOKENid"

# PUT request with content of a file while ignoring invalid cert
curl -X PUT 'https://example.com/api' -d @yourFile.json -k 
```