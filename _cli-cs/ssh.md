---
title:  ssh
os: linux/windows
tags:
 - basic
 - linux
 - windows
source: repo
---

## config

Config for multiple github accounts:

```bash
touch ~/.ssh/config

# config:
Host github.com-user1
    HostName github.com
    User git
    IdentityFile ~/.ssh/user1

Host github.com-user2
    Hostname github.com
    User git
    IdentityFile ~/.ssh/user2
```

## commands

Tunnel traffic from your `L`ocal port (A) through intermediate host B to the remote machine Port C --> authentication against B required!

```bash
# Tunnel traffic from A to C via B -> N opens no shell, L indicates from Local2Remote
ssh -N -L <portA>:<ipC>:<portC> <userB>@<ipB>
```

Remote port forwarding:

```bash
# Tunnel traffic from C to A via B, R indicates Remote2Local
ssh -N -R <portC>:localhost:<localPort> <userB>@<ipB>
```

Dynamic portforwarding via intermediate jumphost:

```bash
# requires double authentication, user on jumphost and clark on pivothost
ssh -J john@jumphost -D 1080 clark@pivothost
```