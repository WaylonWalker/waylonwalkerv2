---
templateKey: blog-post
tags: [webdev]
title: Expand One Line Links
date: 2020-11-18T05:00:00.000+00:00
status: draft
description: ''
cover: "/static/expand-one-line-links.png"

---

I wanted a super simple way to cross link blog posts that requires as little
effort as possible, yet still looks good in vanilla markdown in GitHub.  I have
been using a snippet that puts html into the markdown.  While this works, its
more manual/difficult for me, does not look the best, and does not read well as
plain markdown.



## Goals for new card

The new card should be fully automated to expand with title, description, and
cover image.  Bonus if I am able to attach a comment behind it.

* fully automated
* card expansion
* Title
* description
* cover image

## Old Card

If you can call it a card 🤣.  This card was just an image wrapped in a an
anchor tag and a paragraph tag.  I found this was the most consistent way to
get an image narrower and centered in both GitHub and dev.to.

``` html
<p style='text-align: center'>
  <a href='https://waylonwalker.com/notes/eight-years-cat'>
    <img
    style='width:500px; max-width:80%; margin: auto;'
    src="https://waylonwalker.com/eight-years-cat.png"
    alt="My first eight years as a working professional article"
    />
  </a>
</p>
```

<p style='text-align: center'>
  <a href='https://waylonwalker.com/notes/eight-years-cat'>
    <img
    style='width:500px; max-width:80%; margin: auto;'
    src="https://waylonwalker.com/eight-years-cat.png"
    alt="My first eight years as a working professional article"
    />
  </a>
</p>

---

## New Card

``` markdown
https://waylonwalker.com/notes/eight-years-cat
```

https://waylonwalker.com/notes/eight-years-cat

## First step

My first attempt was to make my own transformer for `gatsby-remark-embedder`.
I previously set this up on my site for twitter and YouTube.

https://waylonwalker.com/blog/gatsby-remark-embedder

> using gatsby-remark-embedder to expand twitter/YouTube

> This post covers my stories


https://waylonwalker.com/latest

> this post is a redirect to my "latest post"

## Markown link on one line

[waylonwalker](https://waylonwalker.com)

## links in paragraphs

Check out [waylonwalker](https://waylonwalker.com) for more details.

## Twitter



## YouTube

https://www.YouTube.com/watch?v=K-hP727tv6E

<blockquote class="twitter-tweet" data-theme="dark"><p lang="en" dir="ltr">Is there an <a href="https://twitter.com/GatsbyJS?ref_src=twsrc%5Etfw">@GatsbyJS</a> plugin to expand urls on one line to a card like discord does?</p>&mdash; 𝚆𝚊𝚢𝚕𝚘𝚗 𝚆𝚊𝚕𝚔𝚎𝚛 (@_WaylonWalker) <a href="https://twitter.com/_WaylonWalker/status/1329817340737941505?ref_src=twsrc%5Etfw">November 20, 2020</a></blockquote>
