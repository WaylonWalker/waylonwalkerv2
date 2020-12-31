---
templateKey: blog-post
tags: []
title: Large Refactor At The Command Line
date: 2020-12-30T00:00:00
status: draft
description: ''
cover: "/static/refactor-in-cli.png"

---


As projects grow patterns that worked early on break and we need to change
things to make the project easier to work with, and more welcoming to new
developers.

## git

Before you start mucking up a project with wild commands at the terminal check
that you have a super clean git status. We may make some mistakes and need a
way to undo 100's of files and git makes it really easy if you start with a
clean history.


```bash
git status
```

If we are ready to begin work we should see a response like this.

``` bash
On branch main
nothing to commit, working tree clean
```

It would also be wise to do this inside of a branch.  The minute you try to do
something wild in your working branch someone will walk by and ask you to do a
five minute task, but your deep in refactoring and haven't left yoursef a clean
way back.

``` bash
git branch my-big-refactor
```

## grepr

Time for the meat of this refactor replacing text accross our project.  I often
will pop this bash function into my terminal session and tweak it as needed.
This function is called `grepr` for `grep` then `replace`.  It will recursively
search for a given pattern inside your working directory, then use `sed` to
replace that pattern with another.

``` bash
grepr() {grep -iRl "$1" | xargs sed -i "s/$1/$2/g"}
```

If your pattern contatains `/` characters such as for urls you can swap the
`/`'s in the `sed` command for `|`'s.

``` bash
grepr() {grep -iRl "$1" | xargs sed -i "s|$1|$2|g"}
```

## Example

I recently flattened this blog so blogs are under the top level rather than
under `/blog` and I used this technique to swap internal links to the new format.

``` bash
grepr() {grep -iRl "$1" | xargs sed -i "s|$1|$2|g"}


grepr "https://waylonwalker.com/blog/" "https://waylonwalker.com/"
```

## agr

## git reset

## git clean

## git  checkout

## git diff

## gitui
