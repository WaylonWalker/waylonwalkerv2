---
templateKey: notes
related_post_label: Check out this related post
tags: []
path: speed-up-cli-apps
title: Supercharge Zsh Startup
date: 2020-01-03T06:00:00Z
status: published
description: ''
related_post_body: ''
related_post: []
cover: "/static/max-larochelle-uu-Jw5SunYI-unsplash.jpg"
twitter_cover: "/static/max-larochelle-uu-Jw5SunYI-unsplash.jpg"

---
![](/static/max-larochelle-uu-Jw5SunYI-unsplash.jpg)
> Photo by [Max LaRochelle](https://unsplash.com/@maxlarochelle?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/lightning?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)


I have been using oh-my-zsh successfully for about 2 years now. But lately my startup time has been really bothersome. It has grown to the point where it was taking about 5.5s to startup a shell!  This is ok if I am going to spend some time in here for awhile and do some work that benefits from all of the autocompletions, plugins, and shortcuts that oh-my-zsh brings.  But to only jump in to run a handful of commands is infuriating.

### My Setup

I believe the real issue is io speed on wsl

## How Fast can it be

    time zsh -c exit

    mv ~/.zshrc ~/.zshrc-back

    time zsh -c exit

## Plugin Managers

![](/static/steve-johnson-ZUabNmumOcA-unsplash.jpg)
> Photo by [Steve Johnson](https://unsplash.com/@steve_j?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/plug?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

* oh-my-zsh
* zplugin
* zgen

## Prompt

## Semi-lazy loading