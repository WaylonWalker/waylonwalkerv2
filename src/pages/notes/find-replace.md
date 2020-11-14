---
templateKey: blog-post
title: Bash
date: 2020-11-12T05:00:00.000+00:00
status: published
description: notes about find and replace techniques
cover: ''
tags:

---

## grepr

```bash
grepr() {grep -iRl "$1" | xargs sed -i "s/$1/$2/g"}

```bash
grepr() {grep -iRl "$1" | xargs sed -i "s/$1/$2/g"}
```

## grepd

``` python
grepd() {grep -iRl "$1" | xargs sed -i "/^$1/d"}
```

## CocSearch


``` bash
:CocSearch status: 'false' -g *.md
```



