---
templateKey: blog-post
related_post_label: Check out this related post
tags:
- git
- " productivity"
twitter_announcement: "Ship Code Faster with this one git config.\n\ngit config --global
  push.default current          "
path: git-push-default-current
title: git push without setting upstream
date: 2020-02-04T12:18:00Z
status: published
description: git config --global push.default current
related_post_body: ''
related_post:
- src/pages/blog/realistic-git-workflow.md
cover: "/static/ship-faster.png"
twitter_cover: "/static/ship-faster.png"

---
Finally after years of hand typing out a full `git push --upstream my\_really\_long\_and\_descriptive\_branch\_name` I foudn there is a setting to automatcally push to the current branch. More realisitically I just did a `git push` let git yell at me, and copying the suggestion.

``` bash
git config --global push.default current
```

This one setting will now `git push` to the current branch without yelling at you that your upstream does not match your current branch.
