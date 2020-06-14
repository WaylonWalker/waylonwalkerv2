---
templateKey: blog-post
related_post_label: Check out this related post
tags: ['blog', 'JAMStack', 'netlify']
twitter_announcement: I just dropped a new post check it out.
path: kedro-inputs
title: How Kedro handles your inputs
date: 2020-06-11T05:00:00Z
status: published
description: 
related_post_body: ''
related_post: []
cover: '/kedro-inputs.png'
twitter_cover: '/kedro-inputs.png'
twitter_week_1: ''
twitter_week_2: ''
twitter_month_1: ''
twitter_month_3: ''
short_url: ''
devto-url: ''
devto-id: ''

---

Passing inputs into kedro is a key concept.  Understanding how it accepts a single catalog key as input is quite trivial that easily makes sense, but passing a list or dictionary of catalog entries can be a bit confusing.

## *args/**args review

Check out this post for a review of how `*args` `**kwargs` work in python.

[![python args and kwargs](https://waylonwalker.com/python-args-kwargs.png)](https://waylonwalker.com/blog/python-args-kwargs)
> [python args and kwargs](https://waylonwalker.com/blog/python-args-kwargs) article by [@_waylonwalker](https://twitter.com/_WaylonWalker)


## Single Inputs

These are fairly straightforward to understand.  In the example below when `kedro` runs the pipeline it will load the input from the catalog, then pass that input to the func, then save the returned value to the output catalog entry.

``` python
from kedro.pipeline import node

def create_int_sales(sales):
    "cleans up raw sales data"
    ...
    return cleaned_sales

my_node = node(
    func=create_int_sales,
    inputs='raw_sales',
    output='int_sales',
    )
```

---

## List of inputs

Lets look at an example node that combines more than one dataset. When kedro has sees a list of catalog entries it will load up each catalog entry sequentially then pass them in order to the `create_sales_report` function.

``` python
from kedro.pipeline import node

def create_sales_report(sales, products):
    "decodes product codes into 


my_node = node(
    func=create_sales_report,
    inputs=['pri_sales', 'pri_products'],
    output='sales_report',
    )
```

## simulating pipeline run

Here We can simulate what kedro does during the pipeline run by using `*args`.

``` python
# inputs you gave kedro
inputs=['pri_sales', 'pri_products']
# load data
input_data = [catalog.load(entry) for entry in  inputs]
# run the node
sales_report = create_sales_report(*input_data)
# save the data to the output
catalog.datasets.sales_report.save(sales_report)
```
