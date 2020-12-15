---
templateKey: blog-post
tags: ['python', 'bash']
title: Ipython Ninjitsu
date: 2020-12-14T00:00:00
status: draft
description: ''
cover: "/static/ipython-ninjitsu.png"

---


* ?docstring
* ??sourcecode
* %run
* %debug
* %autoreload
* %history
* autoformat
* %reset
* !shell commands

## ?docstring
## ?sourcecode
## %run

## %debug

ipython comes with a post-mortem debugger, and it can be a lifesaver.  If we
have a long running function that runs into an error it can be a complete buzzkill.

``` python
def long_func():
   import time
   time.sleep(12)
   n = 12
   df = pd.Data({'a': range(n)})
   return df

long_func()
```

## %reset

https://waylonwalker.com/blog/reset-ipython

## %autoreload

https://waylonwalker.com/blog/autoreload-ipython

``` python
c.InteractiveShellApp.extensions = ["autoreload"]
c.InteractiveShellApp.exec_lines = ["%autoreload 2"]
c.InteractiveShellApp.exec_lines.append(
    'print("Warning: disable autoreload in ipython_config.py to improve performance.")'
)
```
## autoformat

``` python
c.TerminalInteractiveShell.autoformatter = "black"
```
