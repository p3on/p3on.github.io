---
title:  grep
os: linux
tags:
 - basic
 - linux
source: repo
---

> Keep in mind, `grep` does only apply the basic regexp set by default [1] - also with `-E` the behaviour is different to `ack` and what can be tested on the validators online [2], to have a similar/equal validation `-P` should be used!

## commands

Recursive search for files with the case insensitive `password` in it:

```bash
# R: greedy, n:line number, w:match whole word
grep -Rnw --exculde-dir {*.zip} './' -e 'password'

# r: recursive, o:only matching
grep -ro 'password'
```

## Specific greps

> Special `regex` patterns for grabbing needles out of the haystack, verify patterns with [2]

- [x] mail
- [x] IPs (IPv4)
- [x] URLs
- [ ] gnmap

```bash
# [MAIL] grep for mails in all files of dir (sort and uniq to reduce duplicates)
grep -Eor "([[:alnum:]_.-]+@[[:alnum:]_.-]+?\.[[:alpha:].]{2,6})" | sort | uniq

# [IPv4] quick and dirty for ips (may also reveal version numbers etc.)
grep -Eor "[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}"

# [URL] grep for URLs (simple but works)
grep -Eo "(http|https)://[a-zA-Z0-9./?=_%:-]*"

# [URL+] more elaborate approach for URLs (check rfc 1738)
grep -Po "https?:\/\/([\w]+[:@]){0,2}(([\w-]+)\.)+[a-zA-Z]{2,3}(:[0-9]{2,5})?(\/[\w-]+)*[\/\?#\w=%&-]*"
```

-> Last regexp only works porperly with `-P`, the other options return only unsatisfying results (probably garbage in garbage out o.0)

## Sources

[1] : [https://www.gnu.org/software/grep/manual/html_node/grep-Programs.html](https://www.gnu.org/software/grep/manual/html_node/grep-Programs.html#index-grep-programs) <br>
[2] : [https://regex101.com/](https://regex101.com/) <br>