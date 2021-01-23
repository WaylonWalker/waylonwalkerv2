---
canonical_url: https://waylonwalker.com/install-miniconda
cover: /static/install-miniconda-xmas2020.png
cover_image: https:waylonwalker.com/install-miniconda.png
date: 2020-08-10 05:00:00+00:00
description: Installing miniconda from only the command line can be a bit of an intimidating
  task your first time. Lets walk through how to do it.
published: true
related_post_label: Check out this related post
status: published
tags:
- bash
- python
templateKey: blog-post
title: How to Install miniconda on linux (from the command line only)
---

miniconda is a python distribution from continuum. It's a slimmed-down version of their very popular anaconda distribution. It comes with its own environment manager and has eased the install process for many that do not have a way to compile c-extensions. It made it much easier to install the data science stack on windows a few years ago. These days windows are much better than it was back then at compiling c-extensions. I still like its environment manager, which installs to a global directory rather than a local directory for your project.

## Installing miniconda on Linux

Installing miniconda on Linux can be a bit tricky the first time you do it completely from the terminal. The following snippet will create a directory to install miniconda into, download the latest python 3 based install script for Linux 64 bit, run the install script, delete the install script, then add a conda initialize to your bash or zsh shell. After doing this you can restart your shell and conda will be ready to go.

``` bash
mkdir -p ~/miniconda3
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh -O ~/miniconda3/miniconda.sh
bash ~/miniconda3/miniconda.sh -b -u -p ~/miniconda3
rm -rf ~/miniconda3/miniconda.sh
~/miniconda3/bin/conda init bash
~/miniconda3/bin/conda init zsh
```

## Options

The miniconda.sh script comes with a few basic options.  Most notably we used `-b` to be able to run unattended, which means that all of the agreements are automatically accepted without user prompt.  `-u` updates any existing installation in the directory of install if there is one. `-p` is the directory to install into.

```
usage: /root/miniconda3/miniconda.sh [options]

Installs Miniconda3 4.6.14

-b           run install in batch mode (without manual intervention),
             it is expected the license terms are agreed upon
-f           no error if install prefix already exists
-h           print this help message and exit
-p PREFIX    install prefix, defaults to /root/miniconda3, must not contain spaces.
-s           skip running pre/post-link/install scripts
-u           update an existing installation
-t           run package tests after installation (may install conda-build)
```


## Silent/Logged

A quick and easy way to silence everything or to log it to a file during an automated install is to wrap the script into a bash function, or save it to its own file, and call the file.  I like the function method since I can still copy it right into a terminal, or keep my install script as one single file.

``` bash
install_miniconda () {
mkdir -p ~/miniconda3
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh -O ~/miniconda3/miniconda.sh
bash ~/miniconda3/miniconda.sh -b -u -p ~/miniconda3
rm -rf ~/miniconda3/miniconda.sh
~/miniconda3/bin/conda init bash
~/miniconda3/bin/conda init zsh
}
```

**normal**
```
install_miniconda
```

**silent**
```
install_miniconda > /dev/null 2>&1
```

**logged**
```
install_miniconda > miniconda_install.log 2>&1
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


> This posts covers more ways to write reuable bash scripts

## Cross posted to DEV

Check out this post and many more on [dev.to/waylonwalker](https://dev.to/waylonwalker/installing-miniconda-on-linux-from-the-command-line-4ad7)