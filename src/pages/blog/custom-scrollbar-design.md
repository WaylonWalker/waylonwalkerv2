---
templateKey: blog-post
related_post_label: Check out this related post
tags: []
twitter_announcement: I just dropped a new post check it out.
path: custom-scrollbar-design
title: Custom Scrollbar Design
date: 2020-02-19T13:02:00Z
status: published
description: ''
related_post_body: ''
related_post: []
cover: "/static/custom-scrollbar-wtih-gatsbyjs.jpg"
twitter_cover: "/static/custom-scrollbar-wtih-gatsbyjs.jpg"
twitter_week_1: ''
twitter_week_2: ''
twitter_month_1: ''
twitter_month_3: ''
short_url: ''

---
Inspired by Wes Bos's new [uses.tech](uses.tech) I wanted a custom scrollbar on my personal site.  I had tried to do it in the past, but gave up after it was not working.

## Looking at the Source

Since [uses.tech](uses.tech) is open source I jumped on github, searched for scroll and found this [layout.js](https://github.com/wesbos/awesome-uses/blob/124bdd64345bc64eb84879929f0e57cbb8752e34/src/components/layout.js#L74).

## Copy it to my own component

My first step was to take his css and copy it into a styled component for my entire layout, but it failed.  I do not fully understand why.  None of the custom style came through at all.  If you know please leave me a comment.

![](https://waylonwalker.com/why-wont-you-work.jpg)

I suspect for some reason it has to do with attatching to the html element inside of a styled-component.  I think wes was able to get around this by using `createGlobalStyle`.  But I was still using much of the default gatsby template, so I did not have a `createGlobalStyle` element, but I did have a layout.css.

## scroll.css

I added `scroll.css` to my static directory, then imported it into `gatsby-browser.js`

``` css
 /* static/scroll.css */

body::-webkit-scrollbar {
    width: 1rem;
  }

  html {
    scroll-behavior: smooth;
    scrollbar-width: thin;
    scrollbar-color: #5651B7;
  }

  body::-webkit-scrollbar-track {
    background: #392E3D;
  }

  body::-webkit-scrollbar-thumb {
    background-color: #5651B7 ;
    border-radius: .5rem;
    background: rgb(112,107,208);
    background: linear-gradient(180deg, rgba(112,107,208,1) 0%, rgba(86,81,183,1) 100%);
    border: 1px solid rgba(86,81,183,.5);
  }
```

``` javascript
// gatsby-browser.js
import './static/scroll.css
```