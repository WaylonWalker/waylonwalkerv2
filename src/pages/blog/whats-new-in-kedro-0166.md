---
templateKey: blog-post
related_post_label: Check out this related post
tags: ['python', 'kedro',]
twitter_announcement: I just dropped a new post check it out.
path: whats-new-in-kedro-0166
title: What's New in Kedro 0.16.6
date: 2020-10-25T05:00:00Z
status: published
description: This version of kedro releases a new set of supported deployment
    options and the spaceflights pipeline is officially added as a starter alias.
related_post_body: ''
related_post: []
cover: '/static/whats-new-in-kedro-0166.png'
twitter_cover: '/static/whats-new-in-kedro-0166.png'
twitter_week_1: ''
twitter_week_2: ''
twitter_month_1: ''
twitter_month_3: ''
short_url: ''
devto-url: ''
devto-id: ''

---

Kedro [0.16.6](https://github.com/quantumblacklabs/kedro/releases) is out!  Let's take a look through the [release notes]()

## Deployment Docs

This is really exciting to see more deployment options coming from the kedro team.  It really shows the power of the framework.  The power of some of these orchestrations options is incredible.  It appears that most of them hinge on a sweet combination of the kedro cli, docker image, and the pipeline knowing your nodes dependencies.  The ones that I have had the opportunity to read through submit jobs to the orchestrator one node per job and listen for them to complete.  It will submit all nodes with completed dependencies at once, meaning that we can get some massive parallelization on some of these platforms.  I did a quick and dirty test of one of these by simulating the technique in a bash script and saw a 40 hr pipeline finish in about 1 hour.  I am excited to get this working in my production workflow.


## Spaceflight starter

They have officially added the spaceflights pipeline as a starter.  I have not yet had a chance to try this out, but I anticipate this will be a great pipeline to teach from as it is a bit more complex than the iris pipeline.  I tell folks all the time the best way to learn something new like kedro is to practice, practice, practice.  Having this at their fingertips will give an easy way to fire up a pipeline that is ok to break try out some new ideas and leave it.  I see this helping me testing out plugins on more complex pipelines and writing blog posts with examples that readers can more easily follow along with.

* practice
* testing
* blog posts
* tutorials

## Better Error Messages

Shamless pug, my PR landed in kedro, but fell off of the release.md in a merge issue.  I was frustrated working on large projects when the wrong arguments were passed into a node and it did not give you any information in the Error to figure out where the error was thrown.  Now it will at least give the name of the function that caused the error.  This was a simple fix as all of the information was already there.


## Overall

Love the progress that the project is seeing and the focus on all of the deployment options.

## Thanks for supporting contributions

[Deepyaman Datta](https://github.com/deepyaman), [Bhavya Merchant](https://github.com/bnmerchant), [Lovkush Agarwal](https://github.com/Lovkush-A), [Varun Krishna S](https://github.com/vhawk19), [Sebastian Bertoli](https://github.com/sebastianbertoli), [noklam](https://github.com/noklam), [Daniel Petti](https://github.com/djpetti), [Waylon Walker](https://github.com/waylonwalker)

