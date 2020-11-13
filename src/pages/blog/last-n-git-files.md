---
templateKey: blog-post
related_post_label: Check out this related post
tags: []
twitter_announcement: I just dropped a new post check it out.
path: last-n-git-files
title: List the latest files to change in a git repo
date: 2020-10-08T05:00:00Z
status: 'false'
description: ''
related_post_body: ''
related_post: []
cover: ''
twitter_cover: ''
devto-id: ''

---



``` bash
while read file; do echo $(git log --pretty=format:%ad -n 1 --date=raw -- $file) $file; done < <(git ls-tree -r --name-only HEAD | grep static/stories) | sort -r | head -n 3 | cut -d " " -f 3
```
