---
content: ''
cover: ''
date: 2020-10-08
datetime: 2020-10-08 00:00:00+00:00
description: ''
path: pages/blog/last-n-git-files.md
related_post_label: Check out this related post
slug: last-n-git-files
status: 'false'
tags: []
templateKey: blog-post
title: List the latest files to change in a git repo
---

``` bash
while read file; do echo $(git log --pretty=format:%ad -n 1 --date=raw -- $file) $file; done < <(git ls-tree -r --name-only HEAD | grep static/stories) | sort -r | head -n 3 | cut -d " " -f 3
```