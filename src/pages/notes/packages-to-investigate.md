---
templateKey: notes
related_post_label: Check out this related post
tags: []
path: python-packages
title: Packages to Investigate
date: 2019-10-14T05:00:00.000+00:00
status: published
description: ''
related_post_body: ''
related_post: []
cover: ''
twitter_cover: ''

---
* jmespath

# Bulwark

|-|-|
|github: |[https://github.com/zaxr/bulwark](https://github.com/zaxr/bulwark)|

I definitely want to try this out with kedro.

Bulwark is a package for convenient property-based testing of pandas dataframes, supported for Python 3.5+.

## Example

```
    import bulwark.decorators as dc

    @dc.IsShape((-1, 10))
    @dc.IsMonotonic(strict=True)
    @dc.HasNoNans()
    def compute(df):
        # complex operations to determine result
        ...
    return result_df
    
```