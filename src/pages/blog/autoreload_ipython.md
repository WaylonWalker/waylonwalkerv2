---
templateKey: 'blog-post'
path: 'autoreload_ipython'
title: Autoreload in Ipython
date: 2020-01-01
status: draft
description: none
cover: "./flex.png"
---

# Autoreload in Ipython


This is a short script that I use to setup ipython so that it automatically reloads modules.  This allows me to use a separate terminal and editor, and keep data in memory while developing functions.

```DOS
ipython profile create
```

the edit the created file.

```python
c.InteractiveShellApp.extensions = ['autoreload']
c.InteractiveShellApp.exec_lines = ['%autoreload 2']
c.InteractiveShellApp.exec_lines.append('print("Warning: disable autoreload in ipython_config.py to improve performance.")')
```
