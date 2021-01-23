---
canonical_url: https://waylonwalker.com/vim-replace-visual-star
cover: /static/vim-replace-visual-star-xmas2020.png
cover_image: https:waylonwalker.com/vim-replace-visual-star.png
date: 2021-01-10 00:00:00
description: Replacing text based on whats in the current search register is a quite
  handy tool that I use often. I believe I picked
published: true
status: published
tags:
- vim
templateKey: blog-post
title: Vim Replace Visual Star
---

Replacing text based on whats in the current search register is a quite handy
tool that I use often.  I believe I picked this tip up from Nick Janetakis,
check out his YouTube channel for some amazing vim tips.

https://www.youtube.com/watch?v=fP_ckZ30gbs

If there is one thing that I Like most about vim it's the ability to hack on it
and make it work well for you.

## Replacing text in vim

Vim can often be a bit verbose, but that's ok because we can hack on it, and 
make our own shortcuts and keybindings.  For instance, finding and replacing 
text requires using a command at the vim command-line `:`.  Replacing foo with
bar looks like this `:%s/foo/bar/g`, the final g means all of the foos, not just 
the first one on the line.

## making it better

I have a keybinding in my `init.vim` that will allow me to search for a pattern
with the usual `/` character, page through them as normal with `n` and `N`, but
when I press `<C-R>` it will populate the replace command for me so that all I
need to do is type out the new text.

``` vim
nnoremap <c-r> :%s/<C-R>///g<Left><Left>
```

## Note on the `<C-R>/`

In command mode `:` vim allows you to paste any text from any register into the
current command.  The `<C-R>/` will paste the text from the current search
register into the command.

`<C-R>` in command mode can paste text from any register, you can see what
registers are in use with the `:reg` command.  There are a lot of them and many
get populated automatically as you yank text or create macros.


<a class="onelinelink" href="https://waylonwalker.com/save-vim-macro/">
<img style="float: right;" align='right' src="https://waylonwalker.com/static/de331984b5e3d37beacd574593394ca3/630fb/save-vim-macro-xmas2020.png" alt="article cover for Save Vim Macro">
<div class="right">
    <h2>Save Vim Macro</h2>
    <p class="description">
    If you are like me, you have created a macro or two that is pure glory, and you forget how you made it after a day or so
    </p>
    <p class="url">
    <span class="read-more">read more</span>  waylonwalker.com
    </p>
</div>
</a>


> Also see how to use <C-R> to save macros to key bindings easily