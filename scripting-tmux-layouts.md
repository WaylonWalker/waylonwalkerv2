---
content: ''
cover: /static/scripting-tmux-layouts.png
date: 2020-12-13
datetime: 2020-12-13 00:00:00+00:00
description: This is how I script a tmux layout
path: pages/blog/scripting-tmux-layouts.md
slug: scripting-tmux-layouts
status: draft
tags:
- bash
templateKey: hot-tip
title: Scripting Tmux Layouts
---

This is how I script a tmux layout

``` bash
 bash -c "tmux new-session -t 'editor' -d;\
    tmux split-window -v 'zsh';
    tmux send-keys nvim Space /src/ Space +GFiles C-m; \
    tmux rotate-window; \
    tmux select-pane -U; \
    tmux -2 attach-session -d
    "
```