---
canonical_url: https://waylonwalker.com/custom-python-exceptions
cover: /static/andrew-neel-_71nlAn-2YA-unsplash.jpg
cover_image: https:waylonwalker.com/andrew-neel-_71nlAn-2YA-unsplash.jpg
date: 2019-09-25 05:00:00+00:00
description: Custom Python Exceptions
published: true
related_post_label: Check out this related post
status: published
tags: []
templateKey: blog-post
title: Custom Python Exceptions
---

## Custom Exceptions

```
class ProjectNameError(NameError):
    pass


class UserNameError(NameError):
    pass


class CondaEnvironmentError(RuntimeError):
    pass


class BucketNotDefinedError(NameError):
    pass

```