---
templateKey: blog-post
related_post_label: Check out this related post
tags: []
twitter_announcement: I just dropped a new post check it out.
path: kedro-static-viz-0-3-0
title: Kedro Static Viz 0.3.0 is out with Hooks Support
date: 2020-05-28T05:00:00Z
status: published
description: ''
related_post_body: ''
related_post: []
cover: "/static/kedro-static-viz-0-3-0-is-out-with-hooks-support.png"
twitter_cover: ''
twitter_week_1: ''
twitter_week_2: ''
twitter_month_1: ''
twitter_month_3: ''
short_url: ''
devto-url: ''
devto-id: ''

---
[kedro-static-viz](https://github.com/WaylonWalker/kedro-static-viz) is out with support for the newly released hooks feature.  This means that you can have `kedro-static-viz` automatically deploy a full gatsby site `before_pipeline_run` keeping your visualization always up to date.

Even though it is a static site there is no functionality lost.  The only thing that's missing is the flask server.  With [kedro-static-viz](https://github.com/WaylonWalker/kedro-static-viz) you can deploy your visualization to a number of static hosting providers such as GitHub pages free of charge with wicked fast performance

## ⚡ It's Fast

Even though its built on gatsbyjs the full site builds in under 2s even on slower hardware.  This is because the site is already pre-rendered and stripped of any excess.  Its zipped up right into the python package and is typically used with the cli, but now can be used with python, or as a hook as well.


> ### What is [kedro-viz](https://github.com/quantumblacklabs/kedro-viz) 🤔

Kedro viz is a fantastic kedro plugin that allows you to visualize your data pipeline.  Kedro allows you to quickly build production-ready pipelines where you just configure a catalog, then toss python functions into a big pile.  Kedro figures out the order everything needs ran in for you, allows you to run a datasets dependencies or dependents only.  [kedro-viz](https://github.com/quantumblacklabs/kedro-viz) gives you a great way to see this ordering visually.

![a visualization of a kedro data pipeline featuring data and functions flowing together.](/static/pipeline_visualisation-1.png "kedro visualization")

> kedro visualization from the projects readme

## Check out a live running example

Using the power of github actions the I have built a kedro iris pipeline visualization that can be found on [http://kedro-static-viz.waylonwalker.com/](http://kedro-static-viz.waylonwalker.com/)


## Itching to get started with kedro

You can be up and running in a matter of minutes if you already have python running on your machine.

Make a virtual environment with your environment manager of choice.
``` python
conda create -n kedro-practice python=3.8 -y
conda activate kedro-practice
```

Install kedro. Then create a new project with their awesome cli template built on cookiecutter. Make sure to answer `y` to get a prebuilt example pipeline with data.

```
pip install kedro kedro-static-viz
kedro new
```

## Vizualize your pipeline with the cli 〽

For local use when you already have the full project `kedro viz` is a great tool to use, but this is an article about kedro-static-viz.

``` python
kedro-static-viz static-viz
```

Since we used `kedro-static-viz` you will have a new directory called `public` that you can host on any static web hosting service, like GitHub pages or Netlify.

## Ready to try out the new hooks feature 🙋‍♀️


Open up your `<project>/src/run.py` and add the hook to your `ProjectContext` class.  Next time you run your pipeline you will have an updated pipeline.
  

``` python
from kedro_static_viz.hooks import StaticViz

class ProjectContext(KedroContext):
   project_name = "kedro0160"
   project_version = "0.16.1"
   package_name = "kedro0160"
   hooks = [ StaticViz() ]
```

## Now Run that pipeline 🏃‍♀️
  
  
Run your pipeline and enjoy that fresh kedro viz each and every time you run your pipeline.

``` bash
kedro run
```
  
## Want to make your own hooks 🎣

Check out some of my other articles on building kedro hooks.
  
[![creating customizable kedro hooks](https://waylonwalker.com/configurable-kedro-hooks.png)](https://waylonwalker.com/blog/kedro-class-hooks/)

  
[![creating the kedro preflight hook](https://waylonwalker.com/kedro-hooks.png)](https://waylonwalker.com/blog/creating-the-kedro-preflight-hook/)