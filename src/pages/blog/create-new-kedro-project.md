---
templateKey: blog-post
related_post_label: Check out this related post
tags: []
twitter_announcement: I just dropped a new post check it out.
path: create-new-kedro-project
title: Create New Kedro Project
date: 2020-02-22T06:00:00Z
status: draft
description: ''
related_post_body: ''
related_post: []
cover: ''
twitter_cover: ''
twitter_week_1: ''
twitter_week_2: ''
twitter_month_1: ''
twitter_month_3: ''
short_url: ''

---
## Create a Virtual Environment

I use conda to control my virtual environments and will create a new environment called `kedro_iris` with the following command.  **note** the latest compatible version of python is 3.7.

``` bash
conda create -n kedro_iris python=3.7 -y
```

![](/static/conda-create-kedro-iris.gif)

## Activate your conda environment

I try to keep my base environment as clean as possible.  I have ran into too many issues installing things in the base environment.  Almost always its some dependency that starts causing issues making it even harder to realize where its coming from as I never even installed it in base.

``` bash
source activate kedro_iris
```

## Install Kedro

Currently `kedro==0.15.5` is available on pypi and can be pip installed.

``` bash
pip install kedro
```

## Make sure you are in the directory that you want your project in

``` bash
cd /mnt/c/temp
```

## Create a new Kedro project

``` bash
kedro new
cd kedro-iris
git init
kedro install
```

![](/static/kedro-new-iris.gif)

## END