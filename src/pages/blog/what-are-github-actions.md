---
templateKey: blog-post
related_post_label: Check out this related post
tags: [actions]
twitter_announcement: I just dropped a new post check it out.
path: what-are-github-actions
title: What Are GitHub Actions
date: 2020-03-16T05:00:00.000+00:00
status: published
description: ''
related_post_body: ''
related_post: []
cover: '/static/gh-actions-header-event-triggering.png'
twitter_cover: ''
twitter_week_1: ''
twitter_week_2: ''
twitter_month_1: ''
twitter_month_3: ''
short_url: ''
devto-url: ''
devto-id: ''

---
<style>
h2 img { width: 100%; box-shadow: .5rem .5rem 3rem #141F2D, -.5rem -.5rem 3rem rgba(255,255,255,.1);}
img{ max-width: 100% !important;}
</style>
I have been diving deep into Github actions for about a month now and they are wicked good!  They allow you to run any sort of arbitrary code based on events in your repo, webhooks, or schedules.  They are very reasonably priced.  The interface that GitHub as developed for them is top notch!  It's so good I have done 90% of my editing of them right from github.com.

## ![Event Triggering](https://waylonwalker.com/gh-actions-header-event-triggering.png)


see this article from github for a full set of details: [https://help.github.com/en/actions/reference/events-that-trigger-workflows](https://help.github.com/en/actions/reference/events-that-trigger-workflows "https://help.github.com/en/actions/reference/events-that-trigger-workflows")

You can trigger actions to run based on about any interaction with the repo that you can imagine, push, PR, webhooks, follows, create branch, delete brance, deployment, fork, wiki, issues, comments, labels, milestones, just check out the github article for the full list.


### push/pr

``` yaml
# Trigger the workflow on push or pull request
on: [push, pull_request]
```

### schedule
``` yaml
on:
  schedule:
    # * is a special character in YAML so you have to quote this string
    - cron:  '*/15 * * * *'
```

### watch

``` yaml
on:
  watch:
    types: [ started ]
```



## ![Free for public repositories](https://waylonwalker.com/gh-actions-header-free.png)

![gh-actions-free-tier](https://waylonwalker.com/gh-actions-free-tier.png "github actions free tier")

![github actions free for public repos](https://waylonwalker.com/gh-actions-free--for-public.png "github actions free for public repos")


## ![Secrets](https://waylonwalker.com/gh-actions-header-secrets.png)

![github built in secret store](https://waylonwalker.com/gh-actions-built-in-secret-store.png "github built in secret store")

## ![Live Logs](https://waylonwalker.com/gh-actions-header-live-logs.png)

![github actions live logs](https://waylonwalker.com/gh-actions-live-logs.png "github actions live logs")

## ![Online Editor](https://waylonwalker.com/gh-actions-header-online-editor.png)

![github actions online editor](https://waylonwalker.com/gh-actions-editor.png "github actions online editor")

## ![Marketplace](https://waylonwalker.com/gh-actions-header-marketplace.png)

![github actions marketplace](https://waylonwalker.com/gh-actions-marketplace.png "github actions marketplace")