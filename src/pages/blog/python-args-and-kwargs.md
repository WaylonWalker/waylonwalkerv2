---
templateKey: blog-post
related_post_label: Check out this related post
tags: []
twitter_announcement: I just dropped a new post check it out.
path: python-args-kwargs
title: understanding python *args and **kwargs
date: 2020-06-10T05:00:00Z
status: published
description: ''
related_post_body: ''
related_post: []
cover: ''
twitter_cover: ''
twitter_week_1: ''
twitter_week_2: ''
twitter_month_1: ''
twitter_month_3: ''
short_url: ''
devto-url: ''
devto-id: ''

---
Passing inputs into kedro is a key concept.  Understanding how it accepts a single catalog key as input is quite trivial that easily makes sense, but passing a list or dictionary of catalog entries can be a bit confusing.

## *args/**args review

I setup a repl.it with these examples so that you can quickly jump in, run it, break it, fix it, add breakpoints and really get a feel for them yourself. Check it out 👉 [https://repl.it/@WaylonWalker/args#main.py](https://repl.it/@WaylonWalker/args#main.py)

## *args are for lists

## recieving *args

When recieving variables as a `*<varname>`, commonly `*args`, the arguments get translated into an ordered list.

> Never add *args to your function definition (almost never)

Generally I find `*args` poor naming and it only drives confusion to the user looking at your function trying to decide what exactly it does.  Here I have chosen the name `printrows` since we are printing each item as a row.

``` python
def printer(*printrows: str) -> None:
  for i, row in enumerate(printrows):
    print(i, row)
```

``` python
>>> printer('eggs', 'spam', 'ham')
0 eggs
1 spam
2 ham
```
  
## Be Aware of AntiPatterns

If your *args collection is distictly different things, then make them separate variables.
  
## ❌

``` python
def fetcher(*args):
  

## sending *args

``` python
>>> things_to_print = ['eggs', 'spam', 'ham']
>>> printer(*things_to_print)
0 eggs
1 spam
2 ham
```

---

## **kwargs are for dictionaries


## recieving **kwargs

``` python
def printer(**printrows: str) -> None:
  for key in printrows:
    print(key, printrows[key])
```

``` python
>>> printer(breakfast='eggs', lunch='spam', dinner='ham')
breakfast eggs
lunch spam
dinner ham
```

## sending **kwargs

``` python
>>> things_to_print = {breakfast:'eggs', lunch:'spam', dinner:'ham'}
>>> printer()
breakfast eggs
lunch spam
dinner ham
```