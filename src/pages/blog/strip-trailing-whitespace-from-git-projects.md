---
templateKey: blog-post
related_post_label: Check out this related post
tags: []
twitter_announcement: I just dropped a new post check it out.
path: strip-trailing-whitespace
title: Strip Trailing Whitespace from Git projects
date: 2020-09-30T05:00:00Z
status: published
description: ''
related_post_body: ''
related_post: []
cover: ''
twitter_cover: ''
twitter_week_1: ''
twitter_week_2: ''
twitter_month_1: ''
twitter_month_3: ''
short_url: ''
devto-url: ''
devto-id: ''

---
A common linting error thrown by various linters is for trailing whitespace.  I most often use flake8.  I generally have \[pre-commit\]([https://waylonwalker.com/blog/pre-commit-is-awesome](https://waylonwalker.com/blog/pre-commit-is-awesome "https://waylonwalker.com/blog/pre-commit-is-awesome")) hooks setup to strip this, but sometimes I run into situations where I jump into a project without it, and my editor lights up with errors.  A simple fix is to run this one-liner.

## One-Liner to strip whitespace

``` bash
git grep -I --name-only -z -e '' | xargs -0 sed -i -e 's/[ \t]\+\(\r\?\)$/\1/'
```

[![pre-commit article](https://waylonwalker.com/pre-commit-is-awesome.png)](https://waylonwalker.com/blog/pre-commit-is-awesome)
read more about pre-commit here.