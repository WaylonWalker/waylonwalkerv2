---
canonical_url: https://waylonwalker.com/find-replace
cover: /static/find-replace-xmas2020.png
cover_image: https:waylonwalker.com/find-replace.png
date: 2020-11-12 05:00:00+00:00
description: notes about find and replace techniques
published: true
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