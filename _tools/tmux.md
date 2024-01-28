---
title: tmux
os: linux
tags:
 - linux
 - terminal
source: repo
---

> Terminal multiplexer, one ssh connection can "host" several *pseudo* terminals. It's also possible to join a tmux session of another person on a system.

## commands

- session managment

```bash
# create a session
tmux new -s nameofsession

# attach onto a session
tmux a -t nameofsession

# list all sessions
tmux ls

# detach from session
ctrl+b d 

# kill a session
tmux kill-session -t nameofsession
```

<br>

- window interaction

```bash
ctrl+b c # create new window
ctrl+b 3 # goto window 3
ctrl+b n # next window
ctrl+b 2 # show all windows and choose one
```

<br>

- scroll inside the terminal

```bash
ctrl+b pgup # enter scroll mode -> move with pgup/pgdown or arrows
```
