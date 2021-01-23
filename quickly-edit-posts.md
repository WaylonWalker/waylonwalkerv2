---
canonical_url: https://waylonwalker.com/quickly-edit-posts
cover: /static/quickly-edit-posts-xmas2020.png
cover_image: https:waylonwalker.com/quickly-edit-posts.png
date: 2021-01-18 00:00:00
description: Recently I automated starting new posts with a python script. Today I
  want to work on the next part that is editing tho
published: true
status: published
tags:
- bash
templateKey: blog-post
title: Quickly Edit Posts
---

Recently I automated starting new posts with a python script.  Today I want to
work on the next part that is editing those posts quickly.


<a class="onelinelink" href="https://waylonwalker.com/automating-my-post-starter/">
<img style="float: right;" align='right' src="https://waylonwalker.com/static/d4770ec76e0f29cf7536bccfee99340b/630fb/automating-my-post-starter-xmas2020.png" alt="article cover for Automating my Post Starter">
<div class="right">
    <h2>Automating my Post Starter</h2>
    <p class="description">
    One thing we all dread is mundane work of getting started, and all the hoops it takes to get going. This year I want to
    </p>
    <p class="url">
    <span class="read-more">read more</span>  waylonwalker.com
    </p>
</div>
</a>


> Check out this post about setting up my posts with python 🐍

## Enter Bash

For the process of editing a post I just need to open the file in vim quickly.
I dont need much in the way of parsing and setting up the frontmatter.  I think
this is a simple job for a **bash** script and fzf.

1. change to the root of my blog
1. fuzzy find the post
1. open it with vim
1. change back to the directory I was in

## bash function

For this I am going to go with a bash function.  This is partly due to being
able to track where I was and get back.  Also the line with nvim will run fzf
everytime you source your `~/.alias` file which is not what we want.

Lets setup the **boilerplate**.  Its going to create a function called ep
`"edit post"`, track our current directory, create a sub function `_ep`.  Then
call that function and cd back to where we were no matter if `_ep` fails or
succeeds.

_<small><mark>boilerplate</mark></small>_
``` bash
ep () {
    _dir=$(pwd)
    _ep () {
        # open file here
    }
    _ep && cd $_dir || cd $_dir
}
```


<a class="onelinelink" href="https://waylonwalker.com/reusable-bash/">
<img style="float: right;" align='right' src="https://waylonwalker.com/static/96bd1b466e9e00834d0d7eda8af04b97/630fb/reusable-bash-xmas2020.png" alt="article cover for Creating Reusable Bash Scripts">
<div class="right">
    <h2>Creating Reusable Bash Scripts</h2>
    <p class="description">
    Bash is a language that is quite useful for automation no matter what language you write in. Bash can do so many powerful system-level tasks. Even if you are on windows these days you are likely to come across bash inside a cloud VM, Continuous Integration, or even inside of docker.
    </p>
    <p class="url">
    <span class="read-more">read more</span>  waylonwalker.com
    </p>
</div>
</a>


> check out this post for more information about writing reusable bash scripts.

## FZF

Let's focus in on that `_ep` function here that is going to do the bulk of the
work to edit the post.

_<small><mark>cd to where I want to edit from</mark></small>_
``` bash
cd ~/git/waylonwalkerv2/
```

Next I need to find all markdown pages within my posts directory.  There is
probably a better way to filter with the `find` command directly, but I am not
worried about perf here and I knew how to do it without google.

_<small><mark>find all markdown</mark></small>_
``` bash
find ~/git/waylonwalkerv2/src/pages/ | grep .md$
```

Now that we can list all potential posts, sending the selected post back to
neovim is as easy as piping those files into fzf inside of a command
substitution that is called with neovim.


_<small><mark>putting together the edit command</mark></small>_
``` bash
$EDITOR $(find ~/git/waylonwalkerv2/src/pages/ | grep .md$ | fzf)
```

## Final Script

_<small><mark>final ep function</mark></small>_
``` bash
ep () {
    _dir=$(pwd)
    _ep () {
        cd ~/git/waylonwalkerv2/
        $EDITOR $(find ~/git/waylonwalkerv2/src/pages/ | grep .md$ | fzf)
    }
    _ep && cd $_dir || cd $_dir
}
```