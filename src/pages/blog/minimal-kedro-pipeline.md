---
templateKey: blog-post
tags: []
title: Minimal Kedro Pipeline
date: 2021-01-19T00:00:00
status: draft

---

How small can a the minimum kedro pipeline ready to package be?  I made one
within 4 files that you can pip install.  It's only a total of 35 lines of
python, 8 in `setup.py` and 27 in `mini_kedro_pipeline.py`.

# Minimal Kedro Pipeline

https://github.com/WaylonWalker/mini-kedro-pipeline

This repo represents the minimal amount of structure to build a kedro pipeline
that can be shared accross projects.

## Installation

``` bash
pip install git+https://github.com/WaylonWalker/mini-kedro-pipeline
```

## Caveats

No this is not a runnable pipeline, kedro still wants a full conf directory to
setup credentials, logging, and catalog.  This is a sharable pipeline that can
be used accross many different projects.


## Usage

Once installed this proeject can be added to your standard `hooks.py` file.

``` python
# hooks.py

import mini_kedro_project as mkp

class ProjectHooks:
    @hook_impl
    def register_pipelines(self) -> Dict[str, Pipeline]:
        """Register the project's pipeline.

        Returns:
            A mapping from a pipeline name to a ``Pipeline`` object.

        """

        return {"__default__": Pipeline([]), "mkp": mkp.pipeline}
```

## Implemantation

https://waylonwalker.com/minimal-python-package/

## Directory structure

``` bash

.
├── .gitignore
├── README.md
├── setup.py
└── my_pipeline.py
```


## setup.py

``` python
from setuptools import setup

setup(
    name="MiniKedroPipeline",
    version="0.1.0",
    py_modules=["mini_kedro_pipeline"],
    install_requires=["kedro"],
)
```

## mini_kedro_pipeline.py

``` python
"""
An example of a minimal kedro pipeline project
"""
from kedro.pipeline import Pipeline, node

__version__ = "0.1.0"
__author__ = "Waylon S. Walker"

nodes = []


def create_data():
    "creates a dictionary of sample data"
    return {"beans": range(10)}


nodes.append(node(create_data, None, "raw_data", name="create_raw_data"))


def mult_data(data):
    "multiplies each record of each item by 100"
    return {item: [i * 100 for i in data[item]] for item in data}


nodes.append(node(mult_data, "raw_data", "mult_data", name="create_mult_data"))

pipeline = Pipeline(nodes)
```
