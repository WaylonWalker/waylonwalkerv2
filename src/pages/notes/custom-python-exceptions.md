---
templateKey: notes
related_post_label: Check out this related post
tags: []
path: custom-python-exceptions
title: Custom Python Exceptions
date: 2019-09-25T05:00:00.000+00:00
status: published
description: Custom Python Exceptions
related_post_body: ''
related_post: []
cover: "/static/andrew-neel-_71nlAn-2YA-unsplash.jpg"
twitter_cover: "/static/andrew-neel-_71nlAn-2YA-unsplash-1.jpg"

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