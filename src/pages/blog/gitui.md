---
templateKey: blog-post
tags: ['git']
title: Gitui
date: 2020-12-31T00:00:00
status: draft
description: ''
cover: "/static/gitui.png"

---

Gitui is a terminal based git user interface (TUI) that will change the way
that you work with git. I have been a long-time user of the git cli, and its
been hard to beat, mostly because there is nothing that keeps my fingers on the
keyboard quite like it, except `gitui` which comes with some great ways to very
quickly walk through a git project.


## installation

https://github.com/extrawurst/gitui/releases


_<small>install latest release</small>_
``` bash
GITUI_VERSION=$(curl --silent https://github.com/extrawurst/gitui/releases/latest | tr -d '"' | sed 's/^.*tag\///g' | sed 's/>.*$//g' | sed 's/^v//')
wget https://github.com/extrawurst/gitui/releases/download/v${GITUI_VERSION}/gitui-linux-musl.tar.gz -O- -q | sudo tar -zxf - -C /usr/bin/
```

## Quick Commits

### Amend

### Editor


## Key Config

https://github.com/extrawurst/gitui/blob/master/KEY_CONFIG.md

