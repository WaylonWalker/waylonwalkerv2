---
canonical_url: https://waylonwalker.com/gracefully-redirect
cover: /static/gracefully-redirect-xmas2020.png
cover_image: https:waylonwalker.com/gracefully-redirect.png
date: 2020-06-11 05:00:00+00:00
description: I just did a quick refactoring of my JAMStack blog urls.  Some didn't
  fit with my style, some had `_` that I wanted to switch to `-`, and others were
  rediculously long.  I've been using forestry as my CMS, I write many of my posts
  there, and sometimes it picks some crazy file names (based on my titles).  It was
  time to refactor.
published: true
related_post_label: Check out this related post
status: published
tags:
- webdev
- blog
templateKey: blog-post
title: Refactoring your blog urls
---

I just did a quick refactoring of my JAMStack blog urls.  Some didn't fit with
my style, some had `_` that I wanted to switch to `-`, and others were
rediculously long.  I've been using forestry as my CMS, I write many of my
posts there, and sometimes it picks some crazy file names (based on my titles).
It was time to refactor.



<a class="onelinelink" href="https://waylonwalker.com/refactor-in-cli/">
<img style="float: right;" align='right' src="https://waylonwalker.com/static/caee54c45632d974fe802bdbb34f8b54/630fb/refactor-in-cli-xmas2020.png" alt="article cover for Large Refactor At The Command Line">
<div class="right">
    <h2>Large Refactor At The Command Line</h2>
    <p class="description">
    As projects grow patterns that worked early on break and we need to change things to make the project easier to work wit
    </p>
    <p class="url">
    <span class="read-more">read more</span>  waylonwalker.com
    </p>
</div>
</a>


> When refactorings similar to this get really big I often need to do some
> project wide find an replace, I usually do this right from the command line.

## 🖊 Rename posts _change the filename_

My post urls are based on the file name of my markdown file, so I can simply go
through my filesystem and rename anything I want.  From here its probably best
to only commit the addition of the new file name, until the redirects clear,
but these are all low traffic posts for me so I just commited both at once.

> Safely redirect without breaking links

## _redirects ⤴ _/redirects_

I am hosted on netlify, which automatically puts very ⚡ performant redirects
on the edge based on a `/_redirects` route on your site.  So I added a redirect
from the old route to the new route there.

## rename long posts

``` bash 
/blog/i-finally-fixed-my-styled-components-in-gatsby-js
/blog/fix-styled-components-in-gatsby
/blog/interrogate-is-a-pretty-awesome-brand-new-cli-for-python-packages
/blog/interrogate
```

## pedantic 🤔 _probably_

This is probably being a bit pedantic.  Realistically my urls were probably ok.
These posts probably aren't going to be topping the google search charts
anyways, but I wanted to do it without killing off any links that I may have
happened to post somewhere.