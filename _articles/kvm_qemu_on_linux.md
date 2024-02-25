---
title: kvm+qemu on linux
os: linux
tags:
 - linux
 - vm
short: Running kvm/qemu on linux.
---

Short writeup on how I got `kvm` and `qemu` running on linux with all the features one can expect (as known from virtualbox or vmware).

## Basic installation

1. Required for virtualization with `qemu-kvm`

```bash
# qemu-kvm will resolve to qemu-system-x86
sudo apt install bridge-utils libvirt-clients libvirt-daemon libvirt-daemon-system qemu-kvm virtinst
```

2. Enable the service

```bash
sudo systemctl enable libvirtd
```

3. Optional: install the graphical interface

```bash
sudo apt install virt-manager
```

4. Interact with the graphical interface or via cli and `virsh`

## Additional features

> It's just conveniant :)

### Accessing VM via hostname

1. Install `libnss-libvirt` [1]
2. Add `libvirt` as option to `hosts:` in `/etc/nsswitch.conf`
3. Access VM via hostname

### Autoscaling VM window

1. Install guest agent inside the vm (linux: `qemu-guest-agent`)
2. Via the gui `view -> scale display -> autoresize`

If problems occur manually trigger resizing:

```bash
xrandr --output Virtual-1 --auto # manually resize, has to be done on window size change
```

Or the permanent trigger set via script / `udev` rule (see here [2])

### Shared folder

1. Create a folder on the host

```bash
mkdir ./share # default permissions should suffice
```

2. Adjust config of VM

`Add hardware -> Filesystem`

```bash
Driver: virtiofs
Source path: /path/to/host/share
Target path: name_of_virtiofs # name not an acutal path
```

3. Temporarly add in VM

```bash
sudo mkdir /mnt/share
sudo mount -t virtiofs name_of_virtiofs /mnt/share
```

## Sources

- [1] : [https://libvirt.org/nss.html](https://libvirt.org/nss.html)
- [2] : [https://dannyda.com/2020/10/22/how-to-fix-cant-resize-kali-linux-vm-screen-display-via-virt-viewer-running-on-proxmox-ve-pve-with-default-xfce4-desktop-environment/#4-Make-resize-fully-automatic](https://dannyda.com/2020/10/22/how-to-fix-cant-resize-kali-linux-vm-screen-display-via-virt-viewer-running-on-proxmox-ve-pve-with-default-xfce4-desktop-environment/#4-Make-resize-fully-automatic)