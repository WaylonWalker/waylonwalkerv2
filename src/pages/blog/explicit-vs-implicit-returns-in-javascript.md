---
templateKey: blog-post
related_post_label: Check out this related post
tags: []
twitter_announcement: I just dropped a new post check it out.
path: js-explicit-vs implicit-return
title: Explicit vs Implicit Returns in Javascript
date: 2020-05-03T11:55:00Z
status: published
description: ''
related_post_body: ''
related_post: []
cover: "/static/explicit-vs-implicit-returns-in-javascript.png"
twitter_cover: "/static/explicit-vs-implicit-returns-in-javascript.png"
twitter_week_1: ''
twitter_week_2: ''
twitter_month_1: ''
twitter_month_3: ''
short_url: ''
devto-url: ''
devto-id: ''

---

Often when reading through javascript examples you will find some arrow functions
use parentheses `()` while others use braces `{}`.  This key difference is that 
parentheses will implicitly return the last statement while braces require an
explicit return statement.

## implicit returns

Here is an example of an arrow function that will implicitly return the last
statement without the return keyword.

``` javascript
const implicit = thing => (thing)
undefined
implicit('hi')
"hi"
```

**Note** that the parentheses are not required for this example and not having 
paretheses or braces are implicitly returned as well.

``` javascript
const implicit = thing => thing
undefined
implicit('hi')
"hi"
```

``` javascript
const explicit = thing => {thing}
undefined
explicit('hi')
undefined
```

``` javascript
const explicit_return = thing => {return thing}
undefined
explicit_return('hi')
"hi"
const implicit_return = thing => (return thing)
VM790:1 Uncaught SyntaxError: Unexpected token 'return'
let arr = ['😳', '🔥', '🎉', '🤞', '👏', '💯']
undefined
arr
(6) ["😳", "🔥", "🎉", "🤞", "👏", "💯"]
arr.length = 3
3
arr
(3) ["😳", "🔥", "🎉"]
```