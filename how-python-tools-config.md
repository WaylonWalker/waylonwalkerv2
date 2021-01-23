---
canonical_url: https://waylonwalker.com/how-python-tools-config
cover: /static/how-python-tools-config-xmas2020.png
cover_image: https:waylonwalker.com/how-python-tools-config.png
date: 2020-07-21 05:00:00+00:00
description: null
published: true
related_post_label: Check out this related post
status: published
tags:
- python
templateKey: blog-post
title: Refactoring your blog urls
---

## mypy

Mypy's config parser seems to be one of the most complex.  This is likely in part to it having the largest backwards compatability of all projects that I looked at.

[mypy/config_parser](https://github.com/python/mypy/blob/master/mypy/config_parser.py)


## flake8



[options/config.py](https://github.com/PyCQA/flake8/blob/master/src/flake8/options/config.py)

## black

[black](https://github.com/psf/black/blob/master/src/black/__init__.py#L277-L331)

## portray

* only uses pyproject.toml

[portray/config.py](https://github.com/timothycrosley/portray/blob/master/portray/config.py)

## interrogate

* only uses pyproject.toml