---
canonical_url: https://waylonwalker.com/ipython-config
cover: /static/ipython-config-xmas2020.png
cover_image: https:waylonwalker.com/ipython-config.png
date: 2020-12-20 00:00:00
description: I use my ipython terminal daily. It's my go to way of running python
  most of the time. After you use it for a little b
published: true
status: published
tags:
- python
templateKey: blog-post
title: Ipython-Config
---

I use my ipython terminal daily.  It's my go to way of running python most of
the time.  After you use it for a little bit you will probably want to setup a
bit of your own configuration.


## install ipython

Activate your virtual environment of choice and pip install it.  Any time you
are running your project in a virtual environment, you will need to install
ipython inside it to access those packages from ipython.


```bash
pip install ipython
```

> You are using a virtual environment right? Virtual environments like venv or
> conda can save you a ton of pain down the road.

## profile_default

When you install ipython you start out with no config at all.  Runnign `ipython
profile create` will start a new profile called `profile_default` that contains
all of the default configuration.

```
ipython profile create
```

This command will create a directory `~/.ipython/profile_default`

## multiple configurations

You can run multiple configurations by naming them with `ipython profile create
[profile_name]` This command will create a directory
`~/.ipython/[profile_name]`

```
ipython profile create my_profile
ipython --profile=my-profile
```

## startup

Inside the profile there will be a startup directory
`~/.ipython/profile_default/startup`.  Ipython will execute each of the files
in this directory on startup.  This is particularly handy to create custom
prompts, search, or import packages automatically for certian profiles.



<a class="onelinelink" href="https://waylonwalker.com/custom-ipython-prompt/">
<img style="float: right;" align='right' src="https://waylonwalker.com/static/0e2bfeb88fd0cc71e3e74de3fc65f7c5/630fb/custom-ipython-prompt-xmas2020.png" alt="article cover for Custom Ipython Prompt">
<div class="right">
    <h2>Custom Ipython Prompt</h2>
    <p class="description">
    I've grown tired of the standard ipython prompt as it doesn't do much to give me any useful information. The default on
    </p>
    <p class="url">
    <span class="read-more">read more</span>  waylonwalker.com
    </p>
</div>
</a>


> This post creates a custom ipython prompt by creating a
> `~/.ipython/profile_default/startup/prompt.py` file.

## ipython_config.py


There are tons of options that are in the `ipython_config.py` file.  My
favorite is to automatically enable my favorite magic command autoreload.


<a class="onelinelink" href="https://waylonwalker.com/autoreload-ipython/">
<img style="float: right;" align='right' src="https://waylonwalker.com/static/de227ffcb7da2e5c1170a8434163bec9/630fb/autoreload-ipython-xmas2020.png" alt="article cover for Autoreload in Ipython">
<div class="right">
    <h2>Autoreload in Ipython</h2>
    <p class="description">
    Autoreload in python
    </p>
    <p class="url">
    <span class="read-more">read more</span>  waylonwalker.com
    </p>
</div>
</a>


``` python
c.InteractiveShellApp.extensions = ['autoreload'
c.InteractiveShellApp.exec_lines = []'%autoreload 2']
c.InteractiveShellApp.exec_lines.append('print("Warning: disable autoreload in ipython_config.py to improve performance.")')
```