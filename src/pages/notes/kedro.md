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
cover: "/static/68747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f7175616e74756d626c61636b6c6162732f6b6564726f2f6d61737465722f696d672f6b6564726f5f62616e6e65722e6a7067.jpg"
twitter_cover: "/static/68747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f7175616e74756d626c61636b6c6162732f6b6564726f2f6d61737465722f696d672f6b6564726f5f62616e6e65722e6a7067.jpg"

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

``` python
    query_string = 'cars'
    nodes = [
       node.name 
       for node in pipeline.nodes 
       if query_string in node.name
       ]
    pipeline.only_nodes(*nodes)
```

## Loading Data

### Finding data

**simple keyword search**

``` python
    query = 'raw'
    [data for data in io.list() if query in data]
```

**multi keyword serch**

``` python
query = 'raw sales'
data_sets = io.list()
for word in query.split():
	data_sets = [
       data 
       for data in data_sets 
       if query in data
       ]
```

**🐒query monkey patch**
``` python
def query(*search_terms):
     data_sets = self.io.list()
     for search in search_terms:
         data_sets = [
         data 
         for data in data_sets 
         if search in data
         ]
     return data_sets
     
io.query = query
```
## YOLO
_You Only Load Once_

**simple**
``` python
data = [io.load(d) for d in io.query('c_pri', 'cars')]
```

**more refined**

``` python
data = {
   d: io.load(d)
   for d in io.query('c_pri', 'cars')
   }
```

**🍷 refined like a fine wine**

``` python
from collections import SimpleNamespace
data = SimpleNamesapce**{
   d: io.load(d) 
   for d in io.query('c_pri', 'cars')
   })
```

**🧀 Make it a function**
_getting funcy_

``` python
def yolo(*search_terms):
	data = SimpleNamesapce(**{
       d: io.load(d)
       for d in io.query('c_pri', 'cars')
    })
    return data
```

## Pipeline Decorators

[example - log_time](https://kedro.readthedocs.io/en/latest/_modules/kedro/pipeline/decorators.html#log_time)

## Building pipelines