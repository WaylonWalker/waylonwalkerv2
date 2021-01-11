---
templateKey: blog-post
tags: ['python']
title: Minimal Python Package
date: 2021-01-10T00:00:00
status: draft

---



## What is the minimal python package

* setup.py
* my_module.py


This post is somewhat inspired by the bottle framework.


## setup.py

``` python
from setuptools import setup

setup(
    name="MiniKedroPipeline",
    version="0.1.0",
    py_modules=["mini_kedro_pipeline", "mini_kedro_pipeline.settings"],
    install_requires=["kedro"],
)
```

## name

## version

## py_modules

## install_requires
