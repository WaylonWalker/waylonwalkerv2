---
templateKey: blog-post
tags: ['kedro', 'python', 'data']
title: Kedro - My Data Is Not A Table
date: 2021-01-14T00:00:00
status: draft
description: ''
cover: "/static/kedro---my-data-is-not-a-table.png"

---

In python data science/engineering most of our data is in the form of some sort
of table, typically a DataFrame from a library like pandas, spark, or dask.

## DataFrames are the heart of most pipelines

These containers for data contain many convenient methods to manipulate table
like data structures.  Sometimes we leverage other data types, namely vanilla
types like lists and dicts, or even numpy data types.

## Sometimes they are not

There are times when our data doesn't fit nicely into a DataFrame. For these
cases we can use a pickle file.  Pickle is a way to store any python object to
disk.  Beware that pickle files coming from an unknown source can run malicous
code and are considered unsafe.  For the most part though when you read and
write your own pickle files they are a good tool to consider.

> See more about [pickle](https://docs.python.org/3/library/pickle.html) from python.org.

## Cataloging Pickle

I may have a dictionary that describes some cars.

``` python
{
  'truck-012-abc': {
    'type': 'truck'
    'sales': [12, 2, 3, 4, 8]
    'weight': 9024,
    'accesories': ['leather', 'audio-1']
}
```

In the catalog we will simply set the type as `pickle.PickleDataSet` and give
it a filepath.

``` yaml
cars:
  filepath: data/cars.pkl
  type: pickle.PickleDataSet
```

## Loading the dataset

The benefit of cataloging this dataset compared to leaving it as a
`MemoryDataSet` is that you can easily load this data back into memory for
further development or debugging without running any of the pipeline.



``` python
catalog.load('cars')
```
