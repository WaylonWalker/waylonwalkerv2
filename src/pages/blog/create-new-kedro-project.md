---
templateKey: blog-post
related_post_label: Check out this related post
tags: []
twitter_announcement: ''
path: create-new-kedro-project
title: Create New Kedro Project
date: 2020-02-27T12:09:00Z
status: published
description: Getting up and going with a brand new [kedro](kedro.readthedocs.io) project
  is super simple, thanks to the help of the `kedro new` command.  The ability to
  add an example pipeline from the start makes it that much easier to get going and
  have a template to follow for your own projects.
related_post_body: ''
related_post: []
cover: "/static/create-new-kedro-project.png"
twitter_cover: ''
twitter_week_1: ''
twitter_week_2: ''
twitter_month_1: ''
twitter_month_3: ''
short_url: ''

---
This is a quickstart to getting a new [kedro](kedro.readthedocs.io) pipeline up and running.  After this article you should be able to understand how to get started with [kedro](kedro.readthedocs.io).  You can learn more about this [Hello World Example](https://kedro.readthedocs.io/en/stable/02_getting_started/04_hello_world.html) in the [docs](https://kedro.readthedocs.io/en/stable/02_getting_started/04_hello_world.html)

🧹 Install [Kedro](kedro.readthedocs.io)

🛢 Create the Example Pipeline

💨 Run the example

📉 Show the pipeline visualization

## Create a Virtual Environment

I use conda to control my virtual environments and will create a new environment called `kedro_iris` with the following command.  **note** the latest compatible version of python is 3.7.

``` bash
conda create -n kedro_iris python=3.7 -y
```

![](/static/conda-create-kedro-iris.gif)

Options

## Activate your conda environment

I try to keep my base environment as clean as possible.  I have ran into too many issues installing things in the base environment.  Almost always its some dependency that starts causing issues making it even harder to realize where its coming from as I never even installed it in base.

``` bash
source activate kedro_iris
```

## Install [Kedro](kedro.readthedocs.io)

Currently `kedro==0.15.5` is available on pypi and can be pip installed.

``` bash
pip install kedro
```

## Make sure you are in the directory that you want your project in

``` bash
cd /mnt/c/temp
```

## Create a new [Kedro](kedro.readthedocs.io) project

``` bash
kedro new
cd kedro-iris
git init
kedro install
```

![](/static/kedro-new-iris.gif)

## Run the pipeline

This will tell kedro to run your pipeline.  It will look at all of your nodes and determine the correct execution order for you, then run each one of them.  You can do this from a python script, python terminal session, or from the [kedro](kedro.readthedocs.io) cli.

> ✨ It will look at all of your nodes and determine the correct execution order for you

Lets run from the cli while in the same directory as kedro-iris

``` bash
kedro run
```

![](/static/kedro-new-iris.gif)

## Viz

[kedro-viz](https://github.com/quantumblacklabs/kedro-viz) is a priceless feature of [kedro](kedro.readthedocs.io).  It's like x-ray vision into your pipeline.  I can't imagine working without it after having it over the past year.  Unlike traditional documentation [kedro-viz](https://github.com/quantumblacklabs/kedro-viz) cannot lie to you.  It will help guarantee your changes line up properly, plan out adding nodes, and identify dependencies of deprecating nodes.

> Unlike traditional documentation [kedro-viz](https://github.com/quantumblacklabs/kedro-viz) cannot lie to you.

## Install [kedro-viz](https://github.com/quantumblacklabs/kedro-viz)

[kedro-viz](https://github.com/quantumblacklabs/kedro-viz) is also on pypi and can be installed just like any other python package with `pip`.

```bash
pip install kedro-viz
```

## Visualize the pipeline

[kedro-viz](https://github.com/quantumblacklabs/kedro-viz) is ran from the command line in the same directory as your kedro project.  There are ways to store your pipeline data as json, then load them from outside your project, but we will follow the standard practice for now.

``` bash
kedro viz
```

![](/static/kedro-viz-iris.gif)

## 🏗 Docker

There is another package that makes creating docker images from kedro projects super simple [kedro-docker](https://github.com/quantumblacklabs/kedro-docker).

If you dont already have docker installed on your machine, feel free to skip this section.

### install [kedro-docker](https://github.com/quantumblacklabs/kedro-docker)

``` bash
pip install kedro-docker
```

### build the image

``` bash
kedro docker build
```

### run the image

``` bash
kedro docker run
```

## Simple Huh

Getting up and going with a brand new [kedro](kedro.readthedocs.io) project is super simple, thanks to the help of the `kedro new` command.  The ability to add an example pipeline from the start makes it that much easier to get going and have a template to follow for your own projects.

## Recap

``` bash
conda create -n kedro_iris python=3.7 -y
source activate kedro_iris
pip install kedro
cd /mnt/c/temp
kedro new
# give it a project name Kedro Iris
# accept default package name kedro_iris
# addept default directory name kedro-iris
# yes for an example pipeline
cd kedro-iris
git init
git add .
git commit -m "initialized new kedro project"
kedro install
kedro run
pip install kedro-viz
kedro viz
pip install kedro-docker
kedro docker build
kedro docker run
```