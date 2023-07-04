---
title: tar
os: linux
tags:
 - linux
 - basic
source: repo
---

## good2know

Ever wondered why the `tar` files have different endings? It usually hints the compression algoritm used:

```bash
file archive1.tar.gz
> archive1.tar.gz: gzip compressed data, from Unix, original size modulo 2^32 10240
file archive2.tar.xz 
> archive2.tar.xz: XZ compressed data, checksum CRC64
```

## commands

Extract the archive into the current directory:

```bash
tar -xfv yourTarFile.tar.gz # x:extract f:filename v:verbose
tar --extract --file file.tar.gz --verbose
```

Create a `tar` archive [1]:

```bash
tar -czf archive1.tar.gz file* # c:create z:algo f:filename

# speed up with multiple threads:
tar -c -I 'xz -9 -T0' -f archive.tar.xz dir1 dir2 # I:state compressions algo used (with compressions ratio and num of threads)
```

-> Go for higher speeds with [2] needs installation of parallel optimized compression binaries!

Add files to an already existing archive (compressed needs some additional handling) [3]:

```bash
# uncompressed
tar -rf archive.tar newFile

# compressed:
gunzip archive.tar.gz # first decompress - depending on algo gzip/unxz
tar -rf archive.tar newDir # add new files to archive
gzip archive.tar
```

[1] https://unix.stackexchange.com/questions/608207/how-to-use-multi-threading-for-creating-and-extracting-tar-xz
[2] https://www.peterdavehello.org/2015/02/use-multi-threads-to-compress-files-when-taring-something/
[3] https://unix.stackexchange.com/questions/13093/how-to-add-update-a-file-to-an-existing-tar-gz-archive