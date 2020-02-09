---
templateKey: blog-post
related_post_label: Check out this related post
tags: []
twitter_announcement: I just updated my personal site with a sick navbar with react-headroom.
path: react-headroom
title: I just added react-headroom to my site
date: 2020-02-11T12:57:00Z
status: published
description: It was so easy to get a professional looking navbar with just 3 lines
  of code.  This thing is so usable on mobile.
related_post_body: ''
related_post: []
cover: "/static/react-headroom.png"
twitter_cover: "/static/react-headroom.png"
twitter_week_1: 'It was so easy to get a professional looking navbar with just 3 lines
  of code. '
twitter_week_2: react-headroom makes navbars so pleasant  to use on a mobile device
twitter_month_1: ''
twitter_month_3: ''
short_url: waylonwalker.com/hdrm

---
It was so easy to get a professional looking navbar with just 3 lines of code.  This package seriously is so usable on mobile it is rediculous.  I found this package from [day 4](https://www.gatsbyjs.org/blog/100days/react-component/?utm_campaign=100%20Days%20of%20Gatsby&utm_source=hs_email&utm_medium=email&utm_content=82376619&_hsenc=p2ANqtz-_DBh1A1A-GEy2TujddXq_H1de5wGZ_X6jIqB2wv_PE7QgUk40pfi64jbSVHv-S3bfzKZOQywtoTuup2aeO0o_KpeiF8w&_hsmi=82376619) of the 100 days of gatsby challenge.  It is by the wonderful man who brought us gatsbyjs Kyle Mathews, so you know its gotta be good.

## install react-headroom

installation is easy

``` bash
npm i react-headroom
```

## Import Headroom

There was no instructions for es6 style imports that are common with gatsbyjs sites like mine, but it was intuitive to figure out.

``` js
import Headroom from 'react-headroom'
```

## Using Headroom

Simply wrap your existing content, Nav in my case, with the `<Headroom />` component and your off to the races.  The content will pop back into view when you scroll past then back up.

``` html
<Headroom>
   <-- Your content goes here -->
</Headroom>
```

## See it in action

I think this simple package completely changes the ux of your site on mobile.  You can get that sticky nav out of the way, but its still right there with just a little bit of a scroll up.

![](/static/react-headroom-b.gif)

> Here it is on [waylonwalker.com](waylonwalker.com)

## Configurable

`react-headroom` is configurable, but I did not find it necessary.  I really like the simplicity that it brought by just adding the `<Headroom\>` component.

![](/static/react-headroom-docs.png)

## Links

Check out the relavant links for more details.

**GitHub**: https://github.com/KyleAMathews/react-headroom
**Demo Site**: https://kyleamathews.github.io/react-headroom/
**Docs**: https://kyleamathews.github.io/react-headroom/