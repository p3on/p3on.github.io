---
title: awk
os: linux
tags:
 - basic
 - linux
 - I/O stream
source: repo
---

## commands

Apply regex for filtering using a specified delimiter:

```bash
# print the first field of lines that match the regex pattern, fields seperated by a comma
awk -F, '/regexPattern/ { print $1 }' myFile

# executing multiple commands, printing just the fields by their index using std-delimiter
awk '{ print $1; print $2}' myFile
```

Using `awk` in combination with script files passed via the `-f` parameter:

```bash
# sample awk script
BEGIN { FS = "[',;\t]" } # set field seperator to array - any match seperates the field
{	print "" # print blank line
	print $1 ": " $2 # print multiple fields in one line
}

$1 ~ /ger/ { print "itsamatch" } # conditional print: field 1 must match regex pattern 
/m/ { print "123 in here" } # prints if any field matches pattern, but only once per line

# print number of blank lines
/^$/	{
		x += 1
	}
END {
		print x
}
```