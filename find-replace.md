---
content: ''
cover: ''
date: 2020-11-12
datetime: 2020-11-12 00:00:00+00:00
description: notes about find and replace techniques
path: pages/notes/find-replace.md
slug: find-replace
status: published
tags:
- linux
- bash
templateKey: blog-post
title: Find and Replace in the Terminal.
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