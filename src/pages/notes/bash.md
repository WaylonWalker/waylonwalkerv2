---
templateKey: notes
path: bash
title: Bash
date: 2019-09-08T05:00:00.000+00:00
status: published
description: Waylon Walker's Bash Notes
cover: "/static/images/hannah-gibbs-BINLgyrG_fI-unsplash.jpg"
twitter_cover: "/static/images/hannah-gibbs-BINLgyrG_fI-unsplash.jpg"
related_post:
- src/pages/blog/readme_tables.md
tags:
- python
- code
- quickie
---

# Bash Notes

Bash is super powerful.


## File System Full

**Show Remaining Space on Drives**
```bash
df -h
```

**show largest files in current directory**
```bash
du . -h --max-depth=1
```

## Fuzzy One Liners

```bash
a() {source activate "$(conda info --envs | fzf | awk '{print $
```

**edit in vim**
```bash
vf() { fzf | xargs -r -I % $EDITOR % ;}
```

**cat a file**
```bash
vf() { fzf | xargs -r -I % $EDITOR % ;}
```

**bash execute**
```bash
bf() { bash "$(fzf)" }
```

**git add**
```bash
gadd() { git status -s | fzf -m | awk '{print $2}' | xargs git add && git status -s}
```

**git reset**
```bash
greset() { git status -s |  fzf -m | awk '{print $2}' |xargs git reset && git status -s}
```

**Kill a process**
```bash
fkill() {kill $(ps aux | fzf | awk '{print($2)}')}
```