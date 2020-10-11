---
templateKey: blog-post
related_post_label: Check out this related post
tags: []
twitter_announcement: I just dropped a new post check it out.
path: avoid-nesting-loops
title: Avoid Nesting Loops in Python
date: 2020-10-11T05:00:00Z
status: draft
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
Nesting loops inside of each other in python makes for much harder code to understand, it takes more brain power to understand, and is thus more error prone than if its avoidable.


## setup

``` python
import pandas as pd

from datastore import get_sales  # ficticious library


cars = ['sedan', 'coupe', 'hatchback']
regions = ['US', 'CA', 'MX']
```


## ❌ Nesting Loops
``` python
sales = pd.DataFrame()
for car in cars:
   for region in regions:
      new_sales = get_sales(cars, region)
      sales = pd.concat([sales, new_sales])
```

## itertools.product

``` python
list(itertools.product(cars, region))
```

output
``` python
itertools.product(cars, region)
```

## itertools.procuct for loop

``` python
sales = pd.DataFrame()
for car, region in itertools.product(cars, regions):
   new_sales = get_sales(cars, region)
   sales = pd.concat([sales, new_sales])
```

## itertools.product list comprehension

``` python
pd.concat([get_sales(cars, region) for cars, region in product(cars, regions)])
```


``` python
sales_args = {
   'cars': ['sedan', 'coupe', 'hatchback'],
   'regions': ['US', 'CA', 'MX'],
}

pd.concat([get_sales(*sales_arg) for sales_arg in product(sales_args)])
```

``` python
sales_args = {
   'cars': ['sedan', 'coupe', 'hatchback'],
   'regions': ['US', 'CA', 'MX'],
   'month': ['MAR', 'APR', 'MAY']
}

pd.concat([get_sales(*sales_arg) for sales_arg in product(sales_args)])
```

---

## Chaining
_containers of containers_

``` python
vehicles = {
	'cars': ['sedan', 'coupe', 'hatchback'],
    'trucks': ['light', 'heavy', 'sport', 'offroad'],
    'van': ['box', 'mini', 'full', ],

}
```

```
for vehicle in vehicles:
	for sub_class in vehicles[vehicle]:
      new_sales = get_sales(sub_class)
      new_sales['sub_class'] = sub_class
      new_sales['vehicle'] = vehicle
      sales = pd.concat([sales, new_sales])
```

```
 list(itertools.chain(*[list(itertools.product([k], v)) for k, v in vehicles.items()]))
```

output
```
[('cars', 'sedan'),
 ('cars', 'coupe'),
 ('cars', 'hatchback'),
 ('trucks', 'light'),
 ('trucks', 'heavy'),
 ('trucks', 'sport'),
 ('trucks', 'offroad'),
 ('van', 'box'),
 ('van', 'mini'),
 ('van', 'full')]
 ```
 
