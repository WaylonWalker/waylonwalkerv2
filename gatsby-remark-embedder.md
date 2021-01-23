---
canonical_url: https://waylonwalker.com/gatsby-remark-embedder
cover: /static/gatsby-remark-embedder-xmas2020.png
cover_image: https:waylonwalker.com/gatsby-remark-embedder.png
date: 2020-11-18 05:00:00+00:00
description: Inspired by discourse's link expansion I am rolling out expansions for
  one line links on the blog
published: true
related_post_label: Check out this related post
status: published
tags:
- webdev
templateKey: blog-post
title: gatsby-remark-embedder
---

<iframe src="https://anchor.fm/waylon-walker/embed/episodes/gatsby-remark-embedder-en6l3j" height="102px" width="400px" frameborder="0" scrolling="no"></iframe>

Inspired by discourse's link expansion I am rolling out expansions for one line
links on the blog [waylonwalker](https://waylonwalker.com).  I was able to find
a gatsby plugin
[gatsby-remark-embedder](https://www.gatsbyjs.com/plugins/gatsby-remark-embedder/?=embed)
that expands one line links for social cards for popular platforms like twitter
and YouTube through a repose from Kyle Mathews to my tweet.

<blockquote class="twitter-tweet"><p lang="und" dir="ltr">yes! <a href="https://t.co/IKmXijS9IT">https://t.co/IKmXijS9IT</a></p>&mdash; Kyle Mathews (@kylemathews) <a href="https://twitter.com/kylemathews/status/1329817928666005504?ref_src=twsrc%5Etfw">November 20, 2020</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


## Use Cases

This covers a couple of use cases I have with very little effort.

* Twitter
* YouTube

## install

``` bash
npm i gatsby-remark-embedder gatsby-plugin-twitter
```

This was super quick and simple to setup, the only thing that was extra was to
install the `gatsby-plugin-twitter` plugin as well as the
`gatsby-remark-embedder`.

## enable

``` javascript
// In your gatsby-config.js

module.exports = {
  // Find the 'plugins' array
  plugins: [
    `gatsby-plugin-twitter`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-embedder`,
            options: {
              customTransformers: [
                // Your custom transformers
              ],
              services: {
                // The service-specific options by the name of the service
              },
            },
          },

          // Other plugins here...
        ],
      },
    },
  ],
};
```

Thats it, now I can embed tweets and YouTube videos by just leaving the link on a single line.