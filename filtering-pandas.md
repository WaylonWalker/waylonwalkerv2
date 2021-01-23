---
canonical_url: https://waylonwalker.com/filtering-pandas
cover: /static/nathan-dumlao-eksqjXTLpak-unsplash.jpg
cover_image: https:waylonwalker.com/nathan-dumlao-eksqjXTLpak-unsplash.jpg
date: 2019-09-24 05:00:00+00:00
description: Filtering pandas DataFrames many different ways.
published: true
related_post_label: Check out this related post
status: published
tags:
- python
- data
templateKey: blog-post
title: Filtering Pandas
---

## query

Good for method chaining, i.e. adding more methods or filters without assigning a new variable.

```python
# is
skus.query('AVAILABILITY == " AVAILABLE"')
# is not
skus.query('AVAILABILITY != " AVAILABLE"')
```

## masking

general purpose, this is probably the most common method you see in training/examples

```python
# is
skus[skus['AVAILABILITY'] == 'AVAILABLE']
# is not
skus[~skus['AVAILABILITY'] == 'AVAILABLE']
```

## isin

capable of including multiple strings to include

    # is in
    df[df.AVAILABILITY.isin(['AVAILABLE', 'AVL'])]
    # is not in
    df[~df.AVAILABILITY.isin(['AVAILABLE', 'AVL'])]

## contains

Good For partial matches

    # contains
    df[df.AVAILABILITY.str.contains('AVA')]
    # not contains
    df[~df.AVAILABILITY.str.contains('AVA')]

## MASKS

anything that we put inside of square brackets can be set as a variable then passed in.

    service_mask = skus['AVAILABILITY'] == 'AVAILABLE'
    name_mask = skus['NAME'] == 'Dell chromebook 11'

### Operators

& - and
\~ - not
| - or

### AVAILABLE and NAME

    df[service_mask & name_mask]

### AVAILABLE or NAME

    df[service_mask | name_mask]

### AVAILABLE and not NAME

    df[service_mask & ~name_mask]