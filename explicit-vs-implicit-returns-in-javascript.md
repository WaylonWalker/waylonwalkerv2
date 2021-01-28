---
content: ''
cover: /static/explicit-vs-implicit-returns-in-javascript.png
date: 2020-05-03
datetime: 2020-05-03 00:00:00+00:00
description: Often when reading through javascript examples you will find some arrow
  functions use parentheses `()` while others use braces `{}`.  This key difference
  is that parentheses will implicitly return the last statement while braces require
  an explicit return statement.  It is important to understand the difference between
  them because it is likely that you will find code examples of both and trying to
  edit code written differently than you're used to may have unintended consequences.
path: pages/blog/explicit-vs-implicit-returns-in-javascript.md
related_post_label: Check out this related post
slug: explicit-vs-implicit-returns-in-javascript
status: published
tags: []
templateKey: blog-post
title: Explicit vs Implicit Returns in Javascript
---

Often when reading through javascript examples you will find some arrow functions use parentheses `()` while others use braces `{}`.  This key difference is that parentheses will implicitly return the last statement while braces require an explicit return statement.  It is important to understand the difference between them because it is likely that you will find code examples of both and trying to edit code written differently than you're used to may have unintended consequences.

## ![Arrow functions](https://waylonwalker.com/explicit-vs-implicit-returns-in-javascript-1.png)

Arrow functions are one-liner functions in javascript that have two main syntactical ways to create the code block.  with parentheses and braces.  Let's take a look at both ways of creating arrow functions so that when we come accross them in the wild it will all make sense.

## ![implicit returns](https://waylonwalker.com/explicit-vs-implicit-returns-in-javascript-2.png)

Here is an example of an arrow function that will implicitly return the last
statement without the return keyword.  I believe that these are a bit more restricted
in that you cannot set variables inside them.  They are a little bit more concise
and great for **one-liners.**

``` javascript
const implicit = thing => (thing)
undefined
implicit('hi')
"hi"
```

**Note** that the parentheses are not required for this example and not having
parentheses or braces are implicitly returned as well.

``` javascript
// same as above
const implicit = thing => thing
undefined
implicit('hi')
"hi"
```

## ![explicit returns](https://waylonwalker.com/explicit-vs-implicit-returns-in-javascript-3.png)

In the following example, the curly braces create an arrow function that must
explicitly return anything that you want to return from the function. Since the
return keyword is never used the function returns `undefined` by default.

``` javascript
// missing return statement
const explicit = thing => {thing}
undefined
explicit('hi')
undefined
```

In this example using the return keyword will cause the function to return `thing`
and behave similarly to our implicit return.

``` javascript
// same as original
const explicit_return = thing => {return thing}
undefined
explicit_return('hi')
"hi"
```

## ![Multiline arrow functions](https://waylonwalker.com/explicit-vs-implicit-returns-in-javascript-4.png)

Until writing this article I was unaware that you could not have a multiline arrow function with an implicit return statement.  I tried myself and ran into some issues. I also tried to find examples online and could not find one.  If it is possible to write something like below, let me know.

``` javascript
// more complex example
// only possible with an explicit return
const sayHello = who => {
    const greeting = 'Hello '
    const message = greeting + who
    return message
    }
undefined
sayHello('Waylon')
"Hello Waylon"
```