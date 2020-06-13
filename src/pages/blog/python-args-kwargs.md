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

<style>
/* h2 {display: block;} */
h2>img { margin: auto; width: 100%;}
</style>
I setup a repl.it with these examples so that you can quickly jump in, run it, break it, fix it, add breakpoints and really get a feel for them yourself. Check it out 👉 [https://repl.it/@WaylonWalker/args#main.py](https://repl.it/@WaylonWalker/args#main.py)

## *args are for lists 

## ![recieving *args](/args-kwargs/1.png "sending *args collects all arguments into a list inside of the function")

When recieving variables as a `*<varname>`, commonly `*args`, the arguments get **packed** into an ordered list.

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

If your `*args` collection is distictly different things, then make them separate variables.  Using `*args` as a crutch can lead to a really confusing api for your users, even yourself.
  
## ❌

Here `*args` is confusing as we are a bit unsure of what to pass to `get_user_data`, or which order it needs to be in without reading the code.

``` python
def get_user_data(*args):
  "does stuff given a users GitHub and DevTo username"
  github = reuqests.get(f'https://api.github.com/users/{args[0]}')
  devto = requests.get(f'https://dev.to/api/users/by_username?url={args[1]}')
  ...
```

## ✔

Here the function signature makes it clear what `get_user_data` expects.  Users will not have to read your docstring or worse your source code to understand it each time the reference it.

``` python
def get_user_data(github_username, devto_username):
  "does stuff given a users GitHub and DevTo username"
  github = reuqests.get(f'https://api.github.com/users/{github_username}')
  devto = requests.get(f'https://dev.to/api/users/by_username?url={devto_username}')
  ...
```

## ![sending *args](/args-kwargs/2.png "sending *args unpacks a list into individual arguments to be used in the function")

Inversely we can send a list of things as individual arguments by **unpacking** them into the function call.

``` python
>>> things_to_print = ['eggs', 'spam', 'ham']
>>> printer(*things_to_print)
0 eggs
1 spam
2 ham
```

---

## **kwargs are for dictionaries


## ![recieving **kwargs](/args-kwargs/3.png)

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

## ![sending **kwargs](/args-kwargs/4.png)

``` python
>>> things_to_print = {breakfast:'eggs', lunch:'spam', dinner:'ham'}
>>> printer()
breakfast eggs
lunch spam
dinner ham
```
