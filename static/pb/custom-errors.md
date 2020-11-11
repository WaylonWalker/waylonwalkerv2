---
templateKey: blog-post
related_post_label: Check out this related post
tags: ['python', 'beginners', ]
twitter_announcement: I just dropped a new post check it out.
path: custom-errors
title: Custom Errors
date: 2020-06-11T05:00:00Z
status: draft
description:
related_post_body: ''
related_post: []
cover: '/static/pb/custom-errors.png'
twitter_cover: '/static/pb/custom-errors.png'
twitter_week_1: ''
twitter_week_2: ''
twitter_month_1: ''
twitter_month_3: ''
short_url: ''
devto-url: ''
devto-id: ''

---

<!--
<p style='text-align: center'>
<a href='https://waylonwalker.com/blog/custom-errors'>
  <img
    style='width:500px; max-width:80%; margin: auto;'
    src="https://waylonwalker.com/custom-errors.png"
    alt="Read more from the Custom Errors article"
  />
  </a>
</p>

-->

Custom exception classes are super simple to create and make your libraries much easier to work with for your users.  For this example we are going to be working with a data api for a social blogging platform called VED.

## Built in Exceptions


## Our API

``` python
import ved

ved.get_articles(user='waylonwalker', per_page=2, page=1)

[
  {
    "user": "waylonwalker",
    "article_id": "49202048",
    "title": "My Awesome Article"

  }
]
```
## Our First Exception

## Custom Base Class

It is common courtesy to create a common base exception for all of your exceptions to derive from.  This will give the users of your library more control to handling layers of your ex
