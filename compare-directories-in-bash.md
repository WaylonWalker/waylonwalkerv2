---
canonical_url: https://waylonwalker.com/compare-directories-in-bash
cover: /static/compare-directories-in-bash-xmas2020.png
cover_image: https:waylonwalker.com/compare-directories-in-bash.png
date: 2020-12-11 00:00:00
description: Today I needed to check for articles that used the same slug from two
  directories, bash made it super simple. bash diff
published: false
status: draft
tags:
- bash
- tip
templateKey: hot-tip
title: Compare Directories In Bash
---

Today I needed to check for articles that used the same slug from two directories, bash made it super simple.

``` bash
diff -rq src/pages/blog src/pages/notes
```