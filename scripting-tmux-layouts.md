---
canonical_url: https://waylonwalker.com/scripting-tmux-layouts
cover: /static/scripting-tmux-layouts-xmas2020.png
cover_image: https:waylonwalker.com/scripting-tmux-layouts.png
date: 2020-12-13 00:00:00
description: This is how I script a tmux layout bash bash -c "tmux new-session -t
  'editor' -d;\ tmux split-window -v 'zsh';
published: false
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