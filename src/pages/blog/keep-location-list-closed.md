---
templateKey: blog-post
tags: ["vim"]
title: Keep Location List Closed
date: 2020-12-18T00:00:00
status: draft
description: ''
cover: "/static/keep-location-list-closed.png"

---

Vim's (neovim in my case) location list can provide some very useful
information while developing.  Mine gives me information about linting and type
checking errors with fairly little config.  Generally it sits nicely at the
bottom of the screen and barely effects me.  Other times, especially while
zoomed way in during a presentation, it just gets in the way.


## Toggling the location list

Through some google search I found the culprit was syntastic.  It has an
`auto_loc_list` feature.  We can turn it off by setting
`syntastic_auto_loc_list=0`.

``` vim
let syntastic_auto_loc_list=0
```

## Keybindings

I want to keep the location list open automatically most of the time, but when
I dont want it to keep opening its generally detrimental.  Trying to live code
while the location list keeps taking up the whole screen is not cool.


First create a function that will toggle both the location list and syntastic
together.

``` vim
let s:syntastic_auto_loc_list = 0
function! s:ToggleLocationList()
    if s:syntastic_auto_loc_list == 1
        let s:syntastic_auto_loc_list = 0
        let syntastic_auto_loc_list = 0
        :lclose
    else
        let s:syntastic_auto_loc_list = 1
        let syntastic_auto_loc_list = 1
        :lopen
    endif
endfunction
```

This binding will allow me to use `gtl` from normal mode to toggle the location
list.

``` vim
:command! ToggleLocationList :call s:ToggleLocationList()
nnoremap gtl :ToggleLocationList<CR>
```

I am starting a set of **toggle** keymaps under the `gt` keybinding, this one
is the second one after a keybinding made to toggle paste mode.

