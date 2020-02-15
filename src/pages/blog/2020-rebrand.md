---
templateKey: blog-post
related_post_label: Check out this related post
tags: []
twitter_announcement: I just dropped a new post check it out.
path: 2020-rebrand
title: 2020 waylonwalker.com rebrand
date: 2020-02-14T13:02:00Z
status: draft
description: ''
related_post_body: '1. '
related_post: []
cover: ''
twitter_cover: ''
twitter_week_1: ''
twitter_week_2: ''
twitter_month_1: ''
twitter_month_3: ''
short_url: ''

---
Moving into 2020 I have been really leaning on using purple as my theme color everywhere more and more.   Its time for an update to my personal site, not just because it feels plain, not just because the cover art I am using for dev.to doesn't fit my current card layout, but because I feel **inspired** and I **want** to.

## Starting point

![This is what we are working with.](/static/2020-02-10 12-17-43_Start.png)

This is what we are working with.  It has been my card design for at least a year now.  Its not bad but, its a bit play, doesnt fit my new cover art style, and that date is not working over top of the cover art text.

* plain
* cover art does not fit
* I am not digging the date on cover art that also has text

## Colors

I have been really into using a deep purple lately.  It is a neutral color that does not get enough respect, i.e. it's not used as frequently and kinda stands out when used.

### How I pick colors

I am really bad at picking colors that go well together so for this I punt to utilizing others who have a better eye for this.  I commonly used the instant eyedropper desktop app to pick colors out of my text editor theme or colors that [canva](canva.com "Canva") recommends.  Really just find soemthing that seems to match up with your taste, goes well with a color that you want to highlight or anything that inspires you.

![](/static/how-i-pick-colors.gif)

### Tweaking colors

Once I get a couple of colors working well together its very common that I need to tweak them slightly.  Generally I hold the hue and change only the saturation and lightness.  It would probably make more sense for me to use hsla, but for some reason I always end up with a messy pallet trying to use numbers.  I typically just google color picker and use the one built into google search.  There are probably ones built into vscode now, but I have been doing this for years now.

![](/static/how-i-adjust-colors.gif)

## Gradient editor

I heavily used [cssgradient.io/](https://cssgradient.io/ "https://cssgradient.io/") to tweak in all of the very subtle gradients it was very common for me to put the same color on both sides and slightly pulling the color a bit darker or lighter until I liked the look.

![](/static/how-i-create-gradients.gif)

### Matching Gradients

I had a couple of places that needed to but up gradients against each other seemlessly.  I am sure there are better ways to do it.  I would likerally take instant eyedropper, get the color right on the border, then plug that into cssgradient.io.

## Progress

So far I have swapped out my card colors, and some of the text colors.  I also moved the date off of the cover image as I have been putting text on my cover images since starting to cross post to dev.to.  I did not like how they clashed and moved the text.   I also swapped over from gatsby fixed and gatsby fluid to make sure that the cover art always fits the card correctly.

![](/static/2020-02-15 09-36-31_Start.png)

## Feeling Inspired

Having gradients everywhere has been becoming very popular again.  Not the heavy highly saturated gradients from 00's presentation software. Gentle barely noticeable gradients, and soft gradients that flow smoothly from one color to the next.  So many splash screens and logos include these now.

I have been really inspired by the **sick** lighting that has been hot on youtube and twitch lately.  As I was gearing up to re-design my cards I saw this post by [@chrisbiscardi](https://twitter.com/chrisbiscardi "@chrisbiscardi on twitter") and knew right then that I needed to do a similar lighting effect on my redesign!  This was literally my jumping off point at which I started the re-design.

![](/static/inspiration-for-new-post-card-2020-Chris-Biscardi.png)

### Shadows

For this step I did not use any tooling, though I found some that could have been helpful later.  I literally just started stacking up different colors of box shadow, pulling a big blur, shifting them around, and adjusting the color opacity until everything looks just right.  Again I went really subtle here, comparing back to Chris's backdrop I am a bit more subtle than even that.

``` css
box-shadow:  
   -8rem -6rem 8rem -6rem rgba(253, 221, 88, .2), 
   4rem 0 8rem rgba(88, 82, 185, .3), 
   .2rem .2rem 1rem rgba(0, 0, 0, .2);
```
## Complete format

![](/static/new-post-card-2020.png)

## A few days too late

A few days later I saw this thread of tweets by [@sarah_edo](https://twitter.com/sarah_edo) and [@swyx](https://twitter.com/swyx) and realized that this style is called **neomorphism**.  There are some sweet tools referenced here, check them out if you are going for this design style.


<blockquote class="twitter-tweet"><p lang="en" dir="ltr">😍 I have to admit, I'm liking this whole Neomorphism thing, and this generator makes it pretty easy to make those soft effects in the browser: <br><br>In before the replies, it's ok if you don't like it too! Just try not to turn it into a flame war.<a href="https://t.co/ne8vSXlObc">https://t.co/ne8vSXlObc</a></p>— Sarah Drasner (@sarah_edo) <a href="https://twitter.com/sarah_edo/status/1227694049118679040?ref_src=twsrc%5Etfw">February 12, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">✨😂Added to `spark-joy`!<a href="https://t.co/1FPjqvccpb">https://t.co/1FPjqvccpb</a><br><br>Three other Card/Box Shadow Generators to give your divs a quick facelift:<br><br>- <a href="https://t.co/EFSSIiSrFj">https://t.co/EFSSIiSrFj</a> by <a href="https://twitter.com/gill_kyle?ref_src=twsrc%5Etfw">@gill_kyle</a> <br>- <a href="https://t.co/0yyw6wMuGO">https://t.co/0yyw6wMuGO</a> by <a href="https://twitter.com/funkensturm?ref_src=twsrc%5Etfw">@funkensturm</a><br>- <a href="https://t.co/tQ9NijDzUI">https://t.co/tQ9NijDzUI</a> by <a href="https://twitter.com/4lpine?ref_src=twsrc%5Etfw">@4lpine</a> <a href="https://t.co/HIrQktOABA">https://t.co/HIrQktOABA</a> <a href="https://t.co/WUcEkZqEzt">pic.twitter.com/WUcEkZqEzt</a></p>— shawn swyx wang🤗 (@swyx) <a href="https://twitter.com/swyx/status/1227697956587032576?ref_src=twsrc%5Etfw">February 12, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


