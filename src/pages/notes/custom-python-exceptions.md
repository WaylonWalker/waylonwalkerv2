---
templateKey: notes
related_post_label: Check out this related post
tags: []
path: custom-python-exceptions
title: Custom Python Exceptions
date: 2019-09-25T05:00:00Z
status: published
description: Custom Python Exceptions
related_post_body: ''
related_post: []
cover: ''
twitter_cover: ''

---
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