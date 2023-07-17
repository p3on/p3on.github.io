---
title: standard I/O streams
os: linux
tags:
 - linux
 - cli
 - basics
short: A short collection about the pipes and streams of the linux operating system.
---

Available streams in linux
- `stdin`: standard input
- `stdout`: standard output
- `stderr`: standard error

On default, a linux program has at least the above mentioned streams open and are usually attached to the terminal (`tty`).

The integer file descriptors associated with the streams are `0`, `1` and `2`.

```bash
# call the manual about the above information
man stdin
```

## stdin

## Piping on the cli

> Piping on the cli actually connects the `stdout` from the first program to `stdin` of the second program (after the pipe)

```bash
# echo outputs on stdout, whereas the pipe connects this to stdin of the base64 program
echo "test" | base64
> dGVzdAo= 
```