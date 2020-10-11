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


``` python
import pandas as pd

from datastore import get_sales  # ficticious library


cars = ['sedan', 'coupe', 'hatchback']
regions = ['US', 'CA', 'MX']
```


``` python
sales = pd.DataFrame()
for car in cars:
   for region in regions:
      new_sales = get_sales(cars, region)
      sales = pd.concat([sales, new_sales])
```

``` python
sales = pd.DataFrame()
for car, region in itertools.product(cars, region):
   new_sales = get_sales(cars, region)
   sales = pd.concat([sales, new_sales])
```


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

