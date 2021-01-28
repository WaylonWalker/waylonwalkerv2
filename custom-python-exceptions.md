---
content: ''
cover: /static/andrew-neel-_71nlAn-2YA-unsplash.jpg
date: 2019-09-25
datetime: 2019-09-25 00:00:00+00:00
description: Custom Python Exceptions
path: pages/notes/custom-python-exceptions.md
related_post_label: Check out this related post
slug: custom-python-exceptions
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