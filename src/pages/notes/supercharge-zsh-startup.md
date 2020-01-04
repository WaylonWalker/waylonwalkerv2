---
templateKey: notes
related_post_label: Check out this related post
tags: []
path: speed-up-cli-apps
title: Supercharge Zsh Startup
date: 2020-01-03T06:00:00Z
status: published
description: ''
related_post_body: ''
related_post: []
cover: "/static/max-larochelle-uu-Jw5SunYI-unsplash.jpg"
twitter_cover: "/static/max-larochelle-uu-Jw5SunYI-unsplash.jpg"

---
![](/static/max-larochelle-uu-Jw5SunYI-unsplash.jpg)
> Photo by [Max LaRochelle](https://unsplash.com/@maxlarochelle?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/lightning?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)


I have been using oh-my-zsh successfully for about 2 years now. But lately my startup time has been really bothersome. It has grown to the point where it was taking about **5.5s** to startup a shell!  This is ok if I am going to spend some time in here for awhile and do some work that benefits from all of the autocompletions, plugins, and shortcuts that oh-my-zsh brings.  But to only jump in to run a handful of commands is infuriating.

### My Setup

I believe the real issue is io speed on wsl.  I have some remote servers with similar configs that are 10x faster, loading in 100s of milliseconds rather than seconds.


## How Fast can it be

> Quick side note: your zsh config is controled by your ~/.zshrc file.  This file can source other files, load plugins, or run literally anything.

Time the **initial** time
``` bash
time zsh -c exit
```

Move your **~/.zshrc** config file.
``` bash
mv ~/.zshrc ~/.zshrc-back
```

Time the fastest startup possible with nothing in your **~/.zshrc** config file.
``` bash
time zsh -c exit
```

Move your **~/.zshrc** back
``` bash
mv ~/.zshrc-back ~/.zshrc
```

## Profile your startup time

It is possible to profile your zsh startup time by adding `zmodload zsh/zprof` to the start of your `~/.zshrc` file and `zprof` at the end.  This was unsuccessfull for me.  I ended up just backing up `~/.zshrc` file, then deleting half of it to see where the hot spots were.  I found that two places that were really hot for me.  One I was inadvertantly setting git and npm settings everytime that didnt need to be set everytime.  That was an easy 2s gain.  Another easy 3s gain was removing oh-my-zsh.

## But I really like oh-my-zsh

without all the bells and whistle that oh-my-zsh provided zsh became lightning fast to load, but incredibly boring.  It was also very painful to manually type out everything that it autocompleted or aliased all teh time.  Next I headed down a path to get all of that functionality back without sacrificing load time.

> Without oh-my-zsh, zsh became incredibly boring.

## Plugin Managers

![](/static/steve-johnson-ZUabNmumOcA-unsplash.jpg)
> Photo by [Steve Johnson](https://unsplash.com/@steve_j?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/plug?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

* oh-my-zsh
* zplugin
* zgen


There are a number of plugin managers for zsh, I tried each of the ones listed above, but found that as I approached a nice setup that I liked the load time would creep up above the 2s mark each time. I would turn certain plugins on and off, try different plugin managers, before realizing that I had spent enough time on this problem and it was going to be time to settle on fast startup or functionality.

## Prompt

After removing oh-my-zsh the first thing that I missed was the themes that it provided.  I went through a number of them and the one that seemed to have the smallest effect on performance and everything I needed was [starship](https://starship.rs/).  It's a really fast prompt written in rust.  The biggest thing that I needed to have that other prompts were misssing was conda environments.  I live much of my work life running python from various conda environments and it is crutial that I can see what environment I am in at all times.



## Semi-lazy loading