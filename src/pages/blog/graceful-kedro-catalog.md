---
templateKey: blog-post
related_post_label: Check out this related post
tags: ['blog', 'JAMStack', 'netlify']
twitter_announcement: I just dropped a new post check it out.
path: graceful-kedro-catalog
title: Gracefully adopt kedro, the catalog
date: 2020-06-29T03:00:00Z
status: published
description:
related_post_body: ''
related_post: []
cover: '/static/graceful-kedro-catalog.png'
twitter_cover: '/static/graceful-kedro-catalog.png'
twitter_week_1: ''
twitter_week_2: ''
twitter_month_1: ''
twitter_month_3: ''
short_url: ''
devto-url: ''
devto-id: ''

---

## Reasons you might not be ready to fully adopt kedro

There is no shame in not being ready to fully adopt a new framework.  It may feel a bit overwhelming to mentally adopt.  It might feel like a big task to convert an existing codebase.  The catalog is probably the easiest component of kedro to start adopting.

* Existing projects not built with kedro
* kedro feels too complicated for your use-case
* stepping into the framework

## Why use kedro catalog

While using the catalog alone will not reap all of the benefits of the framework, it does get you and your project ready for the full framework eventually.  For me the full benefit of the catalog comes when you combine it with the pipeline and dont even touch read/write steps at all.

Taking a step into kedro by adopting the catalog first will give you a way to organize all of your data loads in one place, and stop manually writing read/write code, which can be different for each data and storage type. You just don't need to think about it.

* iperitive loading style
* warms you up for the full framework
* warms up the project for the full framework
* organizes your data
* all file locations can be quickly identified
* gives you one place to load from
* gets your mind into thinking about layers rather than `df1`, `df2`...

## 2 Ways to Gracefully adopt the catalog

* add with the code api
* load from yaml (**recommended**)


## 1. Adding to the catalog with the code api

## 2. Creating a catalog config file

**recommended**

This method is my favorite as it will simply drop right in if you were ever ready to adopt the framework as a whole.  The downside to gracefully adopting the framework is that you need to have a bit of an understanding of the internals to do it.  When using the framework as a whole it seemlessly takes care of everything for you.



``` python
from kedro.config import ConfigLoader
from kedro.io import DataCatalog

conf_loader = ConfLoader(['conf/base'])
conf_catalog = conf_loader.get('catalog*', 'catalog/**')
catalog = DataCatalog.from_config(conf_catalog)
```
