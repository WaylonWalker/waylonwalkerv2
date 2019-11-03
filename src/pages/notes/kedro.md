---
templateKey: notes
related_post_label: Check out this related post
tags: []
path: kedro
title: Kedro
date: 2019-11-02T05:00:00Z
status: published
description: My Notes about using kedro
related_post_body: ''
related_post: []
cover: ''
twitter_cover: ''

---
Below are some quick snippets/notes for when using kedro to build data pipelines.

## Running Pipelines

**filter by tags**

``` python
pipeline.only_nodes_with_tags('cars')
```

**filter by node**

``` python
pipeline.only_nodes('cars.csv')
```

**filter nodes like**
```
query_string = 'cars'
nodes = [node.name for node in pipeline.nodes if query_string in node.name]
pipeline.only_nodes(*nodes)
```



## Loading Data

## Building pipelines