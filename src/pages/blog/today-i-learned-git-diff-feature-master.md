---
templateKey: blog-post
related_post_label: Check out this related post
tags: []
twitter_announcement: Today I learned how how to diff between two branches.
path: git-diff-branches
title: Today I learned `git diff feature..master`
date: 2020-03-03T11:58:00Z
status: published
description: Sometimes we get a little `git add . && git commit -m "WIP"` happy and
  mistakenly commit something that we just cant figure out.  This is a good way to
  figure out what the heck has changed on the current branch compared to any other
  branch.
related_post_body: ''
related_post: []
cover: "/static/git-diff-branches.png"
twitter_cover: "/static/git-diff-branches.png"
twitter_week_1: ''
twitter_week_2: ''
twitter_month_1: ''
twitter_month_3: ''
short_url: ''

---
Today I learned how how to diff between two branches.


``` bash
git diff feature..master
```

Sometimes we get a little `git add . && git commit -m "WIP"` happy and mistakenly commit something that we just cant figure out.  This is a good way to figure out what the heck has changed on the current branch compared to any other branch.