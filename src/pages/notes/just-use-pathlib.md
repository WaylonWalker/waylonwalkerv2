---
templateKey: notes
related_post_label: Check out this related post
tags:
- Python
- quickie
- code
path: just-use-pathlob
title: Just Use Pathlib
date: 2019-09-26T05:00:00Z
status: published
description: Pathlib is an amazing cross-platform path tool.
related_post_body: ''
related_post: []
cover: ''
twitter_cover: ''

---
Pathlib is an amazing cross-platform path tool.

## Import

```python
from pathlib import Path
```

## Create path object


**Current Directory**

```python
cwd = Path('.')
```

**Users Home Directory**

```python
home = Path.home()
```

**module directory**

```python
module_path = Path(__file__)
```