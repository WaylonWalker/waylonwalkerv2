---
content: ''
cover: ''
date: 2019-09-26
datetime: 2019-09-26 00:00:00+00:00
description: Pathlib is an amazing cross-platform path tool.
path: pages/notes/just-use-pathlib.md
related_post_label: Check out this related post
slug: just-use-pathlib
status: published
tags:
- python
templateKey: blog-post
title: Just Use Pathlib
---

Pathlib is an amazing cross-platform path tool.

## Import

```python
from pathlib import Path
```

## Create path object

**Current Directory**

```python
cwd = Path('.').absolute()
```

**Users Home Directory**

```python
home = Path.home()
```

**module directory**

```python
module_path = Path(__file__)
```

**Others**
Let's create a path relative to our current module.

```python
data_path = Path(__file__) / 'data'
```

## Check if files exist

## Make Directories

```python
data_path.mkdir(parents=True, exists_ok=True)
```

## rename files

```python
Path(data_path /'example.csv').rename('real.csv')
```

## List files

## Glob Files

```python
data_path.glob('*.csv')
```

**recursively**

```python
data_path.rglob('*.csv')
```

## Write

```python
Path(data_path / 'meta.txt').write_text(f'created on {datetime.datetime.today()})
```