---
title: podman
os: linux
tags:
 - linux
 - containers
source: repo
---

> podman -> because rootless containers! Made by a Red Hat engineer

## specials

- pulling images from docker repo

```bash
# just add docker.io/ in front of the image you want to pull
podman run docker.io/python
```

## commands

- Show containers, pods images and more

```bash
podman container ls # replace with image, pod or whatever
```

- create pod and containing containers

```bash
export PODNAME=thePOD

# create the pod -p internal:external
podman pod create --name ${PODNAME} -p 80:80 -p 443:443

# add a container into the pod
podman run -d --restart=always --pod=${PODNAME} \
  -v ${HOME}/containers/${PODNAME}/data:/data:Z \
  --name=${PODNAME}-container docker.io/python
```

- cleanup

```bash
# remove stopped containers
podamn container rm my-container

# cleanup currently unused images
podman image prune -a -f # all, force (no questions asked)
podman system prune # prune of the docker env in the user context

# Building job cancelled and still no space regained?
ls /tmp/storage*
ls /tmp/cache*

# or check with du
sudo du -h -d 1 /tmp # cache should be located here -> delete
```

- secrets in podman[^1]

```bash
# secrets are protected, clean history after!
echo "yourSecret" | podman secret create MYSQL_PASSWORD -
```

## Sources

[^1]: [https://www.redhat.com/sysadmin/new-podman-secrets-command](https://www.redhat.com/sysadmin/new-podman-secrets-command)