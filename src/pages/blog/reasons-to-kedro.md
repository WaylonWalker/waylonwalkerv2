---
templateKey: blog-post
related_post_label: Check out this related post
tags: []
twitter_announcement: I just dropped a new post check it out.
path: reasons-to-kedro
title: reasons-to-kedro
date: 2020-11-01T05:00:00Z
status: published
description: ''
related_post_body: ''
related_post: []
cover: ''
twitter_cover: ''
twitter_week_1: ''
twitter_week_2: ''
twitter_month_1: ''
twitter_month_3: ''
short_url: ''
devto-url: ''
devto-id: ''

---
There are many reasons that you should be using kedro.  If you are on a team of Data Scientists/Data Engineers processing dataframes from many data sources should should be considering a pipeline framework.  Kedro is a great option that provides many benefits for teams to collaborate, develop, and deploy data pipelines


## Collaboration

Kedro provides many tools that help teams collaborate on a single codebase.  While writing monolithic scripts it can be easy to pin yourself in a corner where it is difficult to have multiple poeple making change to the notebook/script at the same time.  Kedro helps guide your team to break your project down into small pieces that different members of the team can work on in parallel.

### sharable catalog

Kedro makes it easy to collaborate with members who aren't even working on the pipeline.  I often see team members who want to investigate datasets from different points in the pipeline.  Kedro makes it really easy for them to load it into python.

**for python users**

Share catalog entries with folks doing EDA.

``` python
catalog.load('main_table')
```

**for non-python users**

For those who may not be using python we can easily kick out a csv version of that `main_table` that they can get from s3 or your cloud storage solution of choice.

``` yaml
master_table:
  type: pandas.CSVDataSet
  filepath: s3://bucket/data/03_primary/master_table.csv
  layer: primary
```

**for the sql folks**

We aren't even contrained to those who only use python or excel, we can kick out any kind of dataset that python can output.  Kedro even comes with many DataSet types out of the box so that we dont have to write any read/write code.

``` yaml
master_table:
  type: SQLTableDataSet
  table_name: master_table
  credentials: postgres
```

### small nodes over monolithic scripts

## No More read and write code

## Execution order is take care of

## Easily slice up a pipeline

## plugins

### pip install plugin

### hooks




* collaboration
  * Sharable catalog
  * small nodes over monolithic notebooks
* catalog
  * easily load anything without needing to run
  * No need to write read/write code
* pipeline
  * No need to keep execution order in your head
  * easily run a slice of a pipeline
* plugins
  * pip install
  * make your own
* hooks
* flexible expandable cli