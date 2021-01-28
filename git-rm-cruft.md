---
content: ''
cover: ./nathan-dumlao-523529-unsplash-crop.jpg
date: 2019-01-21
datetime: 2019-01-21 00:00:00+00:00
description: null
path: pages/blog/git-rm-cruft.md
slug: git-rm-cruft
status: draft
tags:
- git
templateKey: blog-post
title: remove git cruft
---

cover: "./nathan-dumlao-523529-unsplash-crop.jpg"
cover: "./rawpixel-1055774-unsplash.jpg"

## inspiration

https://blog.ostermiller.org/removing-and-purging-files-from-git-history/

``` bash
git log --all --pretty=format: --name-only --diff-filter=D | sed -r 's|[^/]+$||g' | sort -u
```
``` bash
git filter-branch --tag-name-filter cat --index-filter 'git rm -r --cached --ignore-unmatch FILE_LIST' --prune-empty -f -- --all
```

``` bash
rm -rf .git/refs/original/
git reflog expire --expire=now --all
git gc --aggressive --prune=now
```

``` bash
git push origin --force --all
git push origin --force --tags
```

``` bash
cd MY_LOCAL_GIT_REPO
git fetch origin
git rebase
git reflog expire --expire=now --all
git gc --aggressive --prune=now
```