---
canonical_url: https://waylonwalker.com/last-n-git-files
cover: /static/last-n-git-files-xmas2020.png
cover_image: https:waylonwalker.com/last-n-git-files.png
date: 2020-10-08 05:00:00+00:00
description: bash while read file; do echo $(git log --pretty=format:%ad -n 1 --date=raw
  -- $file) $file; done < <(git ls-tree -r --n
published: false
related_post_label: Check out this related post
status: 'false'
tags: []
templateKey: blog-post
title: List the latest files to change in a git repo
---

``` bash
while read file; do echo $(git log --pretty=format:%ad -n 1 --date=raw -- $file) $file; done < <(git ls-tree -r --name-only HEAD | grep static/stories) | sort -r | head -n 3 | cut -d " " -f 3
```