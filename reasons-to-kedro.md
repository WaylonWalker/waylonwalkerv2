---
canonical_url: https://waylonwalker.com/reasons-to-kedro
cover: /static/reasons-to-kedro-xmas2020.png
cover_image: https:waylonwalker.com/reasons-to-kedro.png
date: 2020-11-01 05:00:00+00:00
description: There are many reasons that you should be using kedro. If you are on
  a team of Data Scientists/Data Engineers processi
published: true
related_post_label: Check out this related post
status: published
tags:
- kedro
- python
templateKey: blog-post
title: reasons-to-kedro
---

<iframe src="https://anchor.fm/waylon-walker/embed/episodes/reasons-to-kedro-en6kr3" height="102px" width="400px" frameborder="0" scrolling="no"></iframe>

There are many reasons that you should be using kedro.  If you are on a team of
Data Scientists/Data Engineers processing DataFrames from many data sources
should be considering a pipeline framework.  Kedro is a great option that
provides many benefits for teams to collaborate, develop, and deploy data
pipelines


<a class="onelinelink" href="https://waylonwalker.com/what-is-kedro/">
<img style="float: right;" align='right' src="https://waylonwalker.com/static/27debd76b7282c6a93060e9eb66ba0b8/630fb/what-is-kedro-xmas2020.png" alt="article cover for What is Kedro">
<div class="right">
    <h2>What is Kedro</h2>
    <p class="description">
    Kedro is an open source data pipeline framework.  It provides guardrails to set your project up right from the start without needing to know deeply how to setup your own python library for data pipelining.  It includes really great ways to manipulate `catalogs` and `pipelines`.  This article will cover the 10K view of kedro, future articles will dive deper into each one.
    </p>
    <p class="url">
    <span class="read-more">read more</span>  waylonwalker.com
    </p>
</div>
</a>


## Starter Template

Kedro makes it super easy to get started with their cli that utilizes
cookiecutter under the hood.

``` bash
conda create -n my-new-project -y python=3.8
kedro new
kedro install
kedro run
```



<a class="onelinelink" href="https://waylonwalker.com/create-new-kedro-project/">
<img style="float: right;" align='right' src="https://waylonwalker.com/static/499424b4636332a0ca68d4984b83705e/630fb/create-new-kedro-project-xmas2020.png" alt="article cover for Create New Kedro Project">
<div class="right">
    <h2>Create New Kedro Project</h2>
    <p class="description">
    Getting up and going with a brand new [kedro](https://kedro.readthedocs.io) project is super simple, thanks to the help of the `kedro new` command.  The ability to add an example pipeline from the start makes it that much easier to get going and have a template to follow for your own projects.
    </p>
    <p class="url">
    <span class="read-more">read more</span>  waylonwalker.com
    </p>
</div>
</a>


> read more about how to start your first kedro project here

## Collaboration

Kedro provides many tools that help teams collaborate on a single codebase.
While writing monolithic scripts it can be easy to pin yourself in a corner
where it is difficult to have multiple people making changes to the
notebook/script at the same time.  Kedro helps guide your team to break your
project down into small pieces that different members of the team can work on
in parallel.

### sharable catalog

Kedro makes it easy to collaborate with members who aren't even working on the
pipeline.  I often see team members who want to investigate datasets from
different points in the pipeline.  Kedro makes it really easy for them to load
it into python.

**for python users**

Share catalog entries with folks doing EDA.

``` python
catalog.load('main_table')
```

**for non-python users**

For those who may not be using python, we can easily kick out a CSV version of
that `main_table` that they can get from s3 or your cloud storage solution of
choice.

``` yaml
master_table:
  type: pandas.CSVDataSet
  filepath: s3://bucket/data/03_primary/master_table.csv
  layer: primary
```

**for the SQL folks**

We aren't even constrained to those who only use python or excel, we can kick
out any kind of dataset that python can output.  Kedro even comes with many
DataSet types out of the box so that we don't have to write any read/write
code.

``` yaml
master_table:
  type: SQLTableDataSet
  table_name: master_table
  credentials: postgres
```

### small nodes over monolithic scripts

As I said before single notebooks/scripts are really hard to collaborate on.  I
have seen Data Engineers sitting idle waiting to get their changes manually
added into the master notebook.  When you find yourself in this situation, find
a better solution.  It's time to break things down into individual modules and
utilize a version control system that can automatically merge changes in.

Kedro encourages the use of git version control and storing all node functions
inside of modules while still making it really easy to load data into a
notebook/shell and start trying out new things.

## No More read and write code

As I said earlier kedro comes with datasets for the most popular output
formats.  It is also backed by a really amazing library called `fsspec`, this
library makes the filesystem that you are storing agnostic to how you write to
it.  This means that the kedro library utilizes `fsspec` under the hood and
writes to the file as if it was to disk, but based on the prefix to the file it
may actually be writing to the local filesystem, gcp, azure blob, or s3.

**custom DataSets**

If kedro does not have a `DataSet` for the format that you need to read or
write you can easily create your own custom `DataSet`  all you need to do is
inherit from `kedro.io.AbstractDataSet` and create methods for `__init__`,
`_load`, `_save`, `_exists`, and `_describe`.

Check out this example from their docs.  I removed the docstrings for brevity,
you can see the entire `DataSet` in their
[docs](https://kedro.readthedocs.io/en/0.15.2/03_tutorial/03_set_up_data.html?highlight=custom%20dataset#creating-custom-datasets).

> The complete example all in one was only available in an older version, more up to date [docs](https://kedro.readthedocs.io/en/0.16.6/07_extend_kedro/01_custom_datasets.html?highlight=custom%20dataset) have a good writeup that walks through everything separately.

``` python
from os.path import isfile
from typing import Any, Union, Dict

import pandas as pd

from kedro.io import AbstractDataSet

class ExcelLocalDataSet(AbstractDataSet):

    def _describe(self) -> Dict[str, Any]:
        return dict(filepath=self._filepath,
                    engine=self._engine,
                    load_args=self._load_args,
                    save_args=self._save_args)

    def __init__(
        self,
        filepath: str,
        engine: str = "xlsxwriter",
        load_args: Dict[str, Any] = None,
        save_args: Dict[str, Any] = None,
    ) -> None:

        self._filepath = filepath
        default_save_args = {}
        default_load_args = {"engine": "xlrd"}

        self._load_args = {**default_load_args, **load_args} \
            if load_args is not None else default_load_args
        self._save_args = {**default_save_args, **save_args} \
            if save_args is not None else default_save_args
        self._engine = engine

    def _load(self) -> Union[pd.DataFrame, Dict[str, pd.DataFrame]]:
        return pd.read_excel(self._filepath, **self._load_args)

    def _save(self, data: pd.DataFrame) -> None:
        writer = pd.ExcelWriter(self._filepath, engine=self._engine)
        data.to_excel(writer, **self._save_args)
        writer.save()

    def _exists(self) -> bool:
        return isfile(self._filepath)
```

## Execution order is taken care of

As you build up complex pipelines containing 10's or 100's of nodes it becomes
difficult to splice in new nodes/steps without messing up or a framework to
help.  Kedro simply needs a set of nodes that each takes in catalog entries as
input and output to catalog entries and it will figure out the order for you.

These nodes can be made for one-off purposes, take in functions from reusable
libraries, and even be dynamically generated from a configuration.  There is
no need to worry about hand curating the execution order, that's all taken care
of.

## Easily slice up a pipeline

Since kedro is a DAG that takes in a pile of nodes and figures out all of the
dependencies for you it knows a lot about your pipeline.  You can slice it up to
only the specific pieces that you need.

``` python
# single nodes
pipeline.only_nodes("node1")

# single nodes and all of thier dependencies
pipeline.to_nodes("node1", "node2")

# from a dataset to all of its dependants
pipeline.from_inputs("dataset1", "dataset2")

# to a an outputs with all of its dependencies
pipeline.to_outputs("dataset6", "dataset7")
```

## plugins/hooks

Creating your own modifications to how kedro behaves is made really simple
through the use of hooks.  There are several hooks that happen at different
points in the kedro lifecycle.  For instance, you can hook in before pipeline
run or after pipeline run to do whatever your project needs.


<a class="onelinelink" href="https://waylonwalker.com/creating-the-kedro-preflight-hook/">
<img style="float: right;" align='right' src="https://waylonwalker.comundefined" alt="article cover for creating the kedro-preflight hook">
<div class="right">
    <h2>creating the kedro-preflight hook</h2>
    <p class="description">
    Kedro Hooks Intro - kedro hooks are an exciting upcoming feature of kedro `0.16.0`.  They allow you to hook into `catalog_created`,`pipeline_run`, and `node_run`(nouns). With a `before`, or `after` (adjective).  This really reminds me of reacts lifecycle hooks, that let you hook into various state of react web components.  This is going to make kedro so extendable by the community.  I am super pumped to see what the community is able to do with this ability.
    </p>
    <p class="url">
    <span class="read-more">read more</span>  waylonwalker.com
    </p>
</div>
</a>


### pip install plugin

There is a growing list of plugins available from pypi that is only a `pip
install` away.  Most of them are on
[GitHub](https://github.com/topics/kedro-plugin) and tagged as a
[kedro-plugin](https://github.com/topics/kedro-plugin) topic.

## flexible cli

In the end, you have a cli for your project that can run your pipeline in all
sorts of cool ways since it knows about each node's dependencies.  This makes
running and scheduling production a breeze.

``` bash
# single nodes
kedro run --node node1

# single nodes and all of their dependencies
kedro run --to-nodes node1,node2 

# from a dataset to all of its dependents
kedro run --from-inputs dataset1,dataset2

# to outputs with all of their dependencies
kedro run --to-outputs dataset6,dataset7
```

## Try it out

Hopefully this post gave you the inspiration to get started today, if it did `pip install kedro` and run `kedro new` to try it out.