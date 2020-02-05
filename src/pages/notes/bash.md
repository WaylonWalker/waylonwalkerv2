---
templateKey: notes
path: bash
title: Bash
date: 2019-09-08T05:00:00.000+00:00
status: published
description: Waylon Walker's Bash Notes
cover: "/static/hannah-gibbs-BINLgyrG_fI-unsplash.jpg"
twitter_cover: "/static/hannah-gibbs-BINLgyrG_fI-unsplash.jpg"
related_post:
# - src/pages/blog/readme_tables.md
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

**Move files then symlink them**

``` bash
mkdir /mnt/mounted_drive
mv ~/bigdir /mnt/mounted_drive
ln -s /mnt/mounted_drive/bigdir ~/bigdir
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

## Finding things

### Files

[fd-find](https://github.com/sharkdp/fd) is amazing for finding files, it even respects your `.gitignore` file 😲.  Install with `apt install fd-find`.

```bash
fd md
```

```bash
ag -g python
```

```bash
find . -n "*.md"
```

_++Vanilla Bonus_

### Content

\** show matching text **

```bash
ag python
```

```bash
grep -iR Python
```

_++Vanilla Bonus_

\** show file names only **

```bash
ag -l python
```

```bash
grep -iRl python
```

_++Vanilla Bonus_

### Recursively Replace text

```bash
agr() {ag -l "$1" | xargs sed -i "s/$1/$2/g"}
```

_++Vanilla Bonus_

```bash
grepr() {grep -iRl "$1" | xargs sed -i "s/$1/$2/g"}
```

**Extending** `**agr**` **or** `**grepr**`

There are so many options inside of `grep`, `ag`, and `sed` that you could many an enormous amount of these if you really wanted to, but I like to keep it simple.  These cover 90% of my usage.  If I wanted to change something in the second half I would just paste in this command and edit it. More often though I want to limit the input, say only replace word1 to word2 inside of markdown files.

**Limited Scope**

```bash
fd md | xargs argr python python3
```

```bash
find . -n "*.md" | xargs grepr python python3
```

_++Vanilla Bonus_

### Watch the time

``` bash
watch -n 1 date
```
_++Vanilla Bonus_

**with figlet**
``` bash
watch -n 1 bash -c "date | figlet"
```