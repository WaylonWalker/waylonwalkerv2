---
content: ''
cover: /static/neonbrand-618322-unsplash.jpg
coverCredit: Photo by NeONBRAND on Unsplash
date: 2019-02-05
datetime: 2019-02-05 00:00:00+00:00
description: null
path: pages/blog/git-rewrite-history/git-rewrite-history.md
slug: git-rewrite-history
status: published
tags:
- git
templateKey: blog-post
title: Rewrite History with Git
---

* rebase
* git commit --amend

## Unstage learning-python-debugger

``` bash
git reset -- <file>
```

**rage** unstage to wipte out history of staged commit
``` bash
git reset --hard <file>
```

## Undo file

* rage quit
* git reset HEAD~n <file>
    * removes modifications
    * keeps hitsory of changes and undoes them
* git checkout HEAD~n -- <file>
    * keeps modifications
    * removes history

    * --SOFT
    * --HARD
    * --Mixed

## undo n commits back

locally before push
``` bash
git reset HEAD~n
```

after push
``` bash
git revert HEAD~n
```

## update .gitignore

after push
``` bash
git rm -r --cached .
git commit -am "Updated .gitignore"
```