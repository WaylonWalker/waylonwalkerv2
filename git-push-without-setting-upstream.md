---
canonical_url: https://waylonwalker.com/git-push-without-setting-upstream
cover: /static/ship-faster-xmas2020.png
cover_image: https:waylonwalker.com/ship-faster.png
date: 2020-02-04 12:18:00+00:00
description: git config --global push.default current
published: true
related_post: null
related_post_label: Check out this related post
status: published
tags:
- git
templateKey: blog-post
title: git push without setting upstream
---

Finally after years of hand typing out a full `git push --upstream my\_really\_long\_and\_descriptive\_branch\_name` I foudn there is a setting to automatcally push to the current branch. More realisitically I just did a `git push` let git yell at me, and copying the suggestion.

``` bash
git config --global push.default current
```

This one setting will now `git push` to the current branch without yelling at you that your upstream does not match your current branch.