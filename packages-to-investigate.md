---
content: ''
cover: ''
date: 2019-10-14
datetime: 2019-10-14 00:00:00+00:00
description: '|-|-|

  |github: |https://github.com/zaxr/bulwark| I definitely want to try this out with
  kedro. Bulwark is a package for convenient property-based testing of pandas dataframes,
  supported for Python 3.5+.'
path: pages/notes/packages-to-investigate.md
related_post_label: Check out this related post
slug: packages-to-investigate
status: published
tags: []
templateKey: blog-post
title: Packages to Investigate
---

* jmespath
* Tabnine

# Bulwark

|-|-|
|github: |[https://github.com/zaxr/bulwark](https://github.com/zaxr/bulwark)|

I definitely want to try this out with kedro.

Bulwark is a package for convenient property-based testing of pandas dataframes, supported for Python 3.5+.

## Example

        import bulwark.decorators as dc

        @dc.IsShape((-1, 10))
        @dc.IsMonotonic(strict=True)
        @dc.HasNoNans()
        def compute(df):
            # complex operations to determine result
            ...
        return result_df