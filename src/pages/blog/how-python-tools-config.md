---
templateKey: blog-post
related_post_label: Check out this related post
tags: ['python', ]
twitter_announcement: I just dropped a new post check it out.
path: how-python-tools-config
title: Refactoring your blog urls
date: 2020-07-21T05:00:00Z
status: published
description:
related_post_body: ''
related_post: []
cover: '/static/how-python-tools-config.png'
twitter_cover: '/static/how-python-tools-config.png'
twitter_week_1: ''
twitter_week_2: ''
twitter_month_1: ''
twitter_month_3: ''
short_url: ''
devto-url: ''
devto-id: ''

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
