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
I previously set this up on my site for twitter and YouTube.  I tried to get
some custom transformers going, to do what I wanted for my own website, but
failed.  I really struggled to understand what data was coming in and out of
the transformer.  My lack of js/node debugging skills were really showing.

https://waylonwalker.com/gatsby-remark-embedder

> using gatsby-remark-embedder to expand twitter/YouTube

## Redirects

It also works with redirects. I have a redirect to my "latest" post.  Its
something that I don't do the best job at keeping up to date, but when I feel
really proud of a post I make it the latest.


https://waylonwalker.com/latest

> this post is a redirect to my "latest post"

## Client Side

I started out by running this card expansion client side. This was the strategy
that I used to find the list of elements that should be transformed.

* get all anchors
* get all paragraphs
* filter paragraphs where the content is one of the links
* filter paragraphs where there is only one element in the paragraph
* filter to paragraphs with links that `shouldTransform`
* These elements should have the `oneLineLinkCard` applied.

``` javascript
const oneLineLinks = () => {
  const linkText = [...document.querySelectorAll('.post-body p a')].map(
    (p) => p.innerText
  )
  const paragraphs = document.querySelectorAll('.post-body p') //

  const regex = /^https?:\/\/waylonwalker\.com\//
  const shouldTransform = (url) => regex.test(url)

  const anchorOnly = [...paragraphs].filter(
    (p) => linkText.includes(p.innerText) && p.childElementCount === 1
  )

  anchorOnly
    .filter((p) => shouldTransform(p.firstElementChild.href))
    .map(
      async (p) =>
        (p.outerHTML = await oneLineLinkCard(p.firstElementChild.href))
    )
}
```

## Expansion

I'm sure that all of this can be better, my js skills are still forming.  It's
quite humbling to see how hard it is to think in an unfamiliar language.  The
following `oneLineLineCard` renders a string template literal from a paragraph
with a single anchor to a card that contains some of that pages meta
information.  The `getDescription` function uses a fetch to get the metadata
right from the content of the page.

``` javascript
const getDescription = (url) =>
  fetch(url)
    .then((r) => r.text())
    .then((html) => {
      let parser = new DOMParser()
      let doc = parser.parseFromString(html, 'text/html')
      let meta = doc.querySelectorAll('meta')
      const description = [...meta].filter(
        (m) => m.name === 'og:description'
      )[0].content
      const image = [...meta].filter((m) => m.name === 'og:image')[0]?.content
      const sm_image = [...meta].filter((m) => m.name === 'og:sm_image')[0]
        ?.content
      const url = [...meta].filter((m) => m.name === 'og:url')[0]?.content
      const title = [...meta].filter((m) => m.name === 'title')[0]?.content
      return { description, image, url, title, sm_image }
    })

const oneLineLinkCard = (url) => {
  return getDescription(url).then(
    (meta) =>
      `<a class="onelinelink" href=${meta.url}>
  <img src='${meta.sm_image ? meta.sm_image : meta.image ? meta.image : ''}' >
  <div class="right">
    <h2>${meta.title ? meta.title : ''}</h2>
    <p class='description'>
      ${meta.description ? meta.description : ''}
    </p>
    <p class="url">
       <span class='read-more'>read more</span>  waylonwalker.com
    </p>
  </div>

</a>
  `
  )
}
```

## It works...

And it works.  Whenever I reference my own blog with just a single link on a
line in markdown I get a nice card link out to the other post, with a small
image sized for the card, the title, and description of the post.


## But

* too much client side
* does not work well with cross posting

For every link I do this with the client will pull the full page just to get a
bit of metadata.  I am already doing a bit more than I want to do client side
for a blog, so I would prefer to do it ahead of time.

Additionally since it is done client side it does not translate well when I
copy my markdown to various other blogging platforms.  If it were rendered
right into the markdown cross posting would be much easier.

## Future State

_actually already implemented at this point_

The direction I am going to try is to use python to load each post, look for
lines that contain only a link, then render this same markup right in the
markdown.  For this I am going to use a language I am more familiar with,
python, and do this inside of github actions just before build time so that the
markdown I write stays the same, the cards will only be rendered in prod.
