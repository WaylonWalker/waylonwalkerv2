---
templateKey: 'blog-post'
path: 'journey'
title: Minimal Project Structure
date: 2019-02-10
status: draft
description: How to setup a data science project in python.
cover: "verstappen-photography-532656-unsplash.jpg"
coverCredits: Photo by Verstappen Photography on Unsplash
twitterCover: "./bit-01-twitter-card.jpg"
---

# TLDR

Use **[.gitignore.io](https://www.gitignore.io)** and consider adding an alias to your terminal to quickly add a .gitignore to any project missing one.

``` bash
alias gitignore='curl https://www.gitignore.io/api/vim,emacs,python,pycharm,sublimetext,visualstudio,visualstudiocode,data > .gitignore'
```

Add a minimal **setup.py** to the root of your project, and use the following command to install it.

``` bash
pip install -e .
```

consider using **[cookiecutter](https://github.com/audreyr/cookiecutter)
