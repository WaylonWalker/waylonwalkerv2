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


# 🗣 Heads up
Below are some quick snippets/notes for when using kedro to build data pipelines. So far I am just compiling snippets.  Eventually I will create several posts on kedro.  These are mostly things that I use In my everyday with kedro.  Some are a bit more essoteric.  Some are helpful when writing production code, some are useful more usefule for exploration.

## 📚 Catalog
![catalogs](/jesse-orrico-h6xNSDlgciU-unsplash.jpg)
_Photo by jesse orrico on Unsplash_


## ⏳ Loading Data
![loading data](/battlecreek-coffee-roasters-eg6OUchGCsw-unsplash.jpg)
_Photo by Battlecreek Coffee Roasters on Unsplash_

### Simple Loading

``` python
catalog.load('cars')
```

### list all datasets

``` python
catalog.list()
```

### Saving Data

``` python
catalog.save('cars', cars)
```

### 🔍 Finding data

**simple keyword search**

``` python
query = 'raw'
[data for data in catalog.list() if query in data]
```

**multi keyword serch**

``` python
query = 'raw sales'
data_sets = catalog.list()
for word in query.split():
	data_sets = [
       data 
       for data in data_sets 
       if query in data
       ]
```

**🐒 monkey patch it**

``` python
def query(*search_terms):
     data_sets = self.catalog.list()
     for search in search_terms:
         data_sets = [
         data 
         for data in data_sets 
         if search in data
         ]
     return data_sets
     
catalog.query = query
```

### 🤙 YOLO

_You Only Load Once_

**simple**

``` python
data = [catalog.load(d) for d in catalog.query('c_pri', 'cars')]
```

**more refined**

``` python
data = {
   d: catalog.load(d)
   for d in catalog.query('c_pri', 'cars')
   }
```

**🍷 refined like a fine wine**

``` python
from collections import SimpleNamespace
data = SimpleNamesapce**{
   d: catalog.load(d) 
   for d in catalog.query('c_pri', 'cars')
   })
```

**🧀 Make it a function**
_getting funcy_

``` python
def yolo(*search_terms):
	data = SimpleNamesapce(**{
       d: catalog.load(d)
      for d in catalog.query('c_pri', 'cars')
    })
    return data
```

**🐒 monkey patch it**

``` python
pipeline.yolo = yolo
```

## 🛢 Building pipelines

![building pipelines](/roman-pentin-T5QT2bmiD4E-unsplash.jpg)
_Photo by roman pentin on Unsplash_
### 📍 Creating Nodes

### 🛢 Creating a pipeline

### Don't be so verbose

Create similar nodes dynamically

``` python
def halve_dataframe(data: pd.DataFrame) -> List[pd.DataFrame]:
    return np.array_split(data, 2)

nodes = []
datasets = [
   'cars', 'trucks', 'boats', 'motorcycles', 'planes', 
   'ships', 'busses', 'trains', 'subways'
   ]

for dataset in datasets
   nodes.append(
       node(halve_dataframe,
            'e_modin_{dataset}',
            ['train_{dataset}', 'test_{dataset}']),
   )

```


## 🏃‍♂️ Running Pipelines
![running pipelines](/rodion-kutsaev-xNdPWGJ6UCQ-unsplash.jpg)
_Photo by Rodion Kutsaev on Unsplash_


**🔖 filter by tags**

``` python
nodes = pipeline.only_nodes_with_tags('cars')
```

**filter by node**

``` python
nodes = pipeline.only_nodes('b_int_cars')
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

**only nodes with tags** _or_

``` python
nodes = pipeline.only_nodes_with_tags('cars', 'trains')
```

**only nodes with tags** _and_
``` python
raw_nodes = pipeline.only_nodes_with_tags('raw')
car_nodes = pipeline.only_nodes_with_tags('cars')
raw_car_nodes = raw_nodes & car_nodes
```

``` python
raw_nodes = (
   pipeline
   .only_nodes_with_tags('raw')
   .only_nodes_with_tags('cars')
   )
```


**add pipelines**
``` python
car_nodes = pipeline.only_nodes_with_tags('cars')
train_nodes = pipeline.only_nodes_with_tags('trains')
transportation_nodes = car_nodes + train_nodes
```

**ensure nodes are attached**
``` python
cars_attached = len(
   pipeline
   .only_nodes_with_tags('cars')
   .grouped_nodes
   ) == 1
```


### 🎂 Pipeline Decorators

[example - log_time](https://kedro.readthedocs.io/en/latest/_modules/kedro/pipeline/decorators.html#log_time)



