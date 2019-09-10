---
templateKey: blog-post
path: python-data-science-background
title: Background Tasks in Python for Data Science
date: 2019-09-10T05:00:00Z
status: draft
description: ''
cover: ''
twitter_cover: ''

---
This post is intended as an extension/update from [background tasks in python](https://waylonwalker.com/blog/background_1/).  I started using `background` the week that Kenneth Reitz released it.  It takes away so much boilerplate from running background tasks that I use it in more places than I probably should. After taking a look at that post today, I wanted to put a better data science example in here to help folks get started.


## Installation

### pip
```
pip install background
```



### from the repo

I believe one of the later pr's to the project fixes the way arguments are passed in.  I generally clone the repo or copy the module directly into my project.

**clone it**
```
git clone https://github.com/ParthS007/background.git
cd background
python setup.py install
```

**copy the module**
```
curl https://raw.githubusercontent.com/ParthS007/background/master/background.py > background.py
```



```
import background
from time import sleep
import pandas as pd

@background.task
def long_func(i):
	"""
    Simulates fetching data from a service 
    and returning a pandas DataFrame.
    
    """
    sleep(10)
    return pd.DataFrame({'number_squared': [i**2]})
    
```

```
%time futures = [long_func(i) for i in range(10)]
```

CPU times: user 319 µs, sys: 197 µs, total: 516 µs
Wall time: 212 µs

```
%%time 
futures = [long_func(i) for i in range(10)]
pd.concat([future.result() for future in futures])
```

CPU times: user 5.38 ms, sys: 3.53 ms, total: 8.9 ms
Wall time: 10 s