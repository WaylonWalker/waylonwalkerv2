---
templateKey: blog-post
related_post_label: Check out this related post
tags: []
twitter_announcement: I just dropped a new post check it out.
path: brainstorming-kedro-hooks
title: Brainstorming Kedro Hooks
date: 2020-05-22T22:02:00Z
status: published
description: "This post is a \U0001F9E0 branstorming work in progress, I will likely
  use it as a storage location/brain dump of hook ideas."
related_post_body: ''
related_post: []
cover: "/static/brainstorming-kedro-hooks.png"
twitter_cover: ''
twitter_week_1: ''
twitter_week_2: ''
twitter_month_1: ''
twitter_month_3: ''
short_url: ''
devto-url: ''
devto-id: ''

---
This post is a 🧠 branstorming work in progress.

> ### What is Kedro 🤔
> If you are completely unsure what kedro is be sure to check out my [what is kedro](https://waylonwalker.com/wike) post


## after_catalog_created

* filepath replacer
* bucket replacer

## before_pipeline_run

* preflight
* check that data exists

## after_pipeline_run

* Great Expectations

## before_node_run

## after_node_run

* Great Expectations
* save stats/meta data

## Execution Order

hooks are executed in reverse order of the hooks list.

hooks with `tryfirst` will be moved to the end of the list  
hooks with `trylast` will be moved to the end of the list

1. after_catalog_created
2. before_pipeline_run

* args
  * run_params = run_params = {'run_id': '2020-05-23T15.24.23.958Z', 'project_path': '/mnt/c/temp/kedro0160', 'env': 'local', 'kedro_version': '0.15.9', 'tags': (), 'from_nodes': \[\], 'to_nodes': \[\], 'node_names': (), 'from_inputs': \[\], 'load_versions': {}, 'pipeline_name': None, 'extra_params': {}, 'git_sha': None}
  * pipeline
  * catalog

1. before_node_run
2. after_node_run
3. 

## When does data get saved???

* before or after node hook?

## ??Unsure??

* does before  catalog load have access to parameters?

### steel toes

* is there a way to prevent toe stepping?
* try to load `filepath_<branch>`
* if load fails try `filepath`
* save data to `filepath_<branch>`