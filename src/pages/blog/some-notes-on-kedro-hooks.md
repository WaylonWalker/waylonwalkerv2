---
templateKey: blog-post
related_post_label: Check out this related post
tags: []
twitter_announcement: I just dropped a new post check it out.
path: kedro-class-hooks
title: Kedro Class Hooks
date: 2020-05-23T05:00:00Z
status: published
description: ''
related_post_body: ''
related_post: []
cover: "/static/kedro-class-hooks.png"
twitter_cover: ''
twitter_week_1: ''
twitter_week_2: ''
twitter_month_1: ''
twitter_month_3: ''
short_url: ''
devto-url: ''
devto-id: ''

---
There are two main ways to create kedro hooks, with modules and classes.  Each one still uses the same verbiage as the function/method names.

## class hook without `self`

If we create a class-based kedro hook without `self` in the method calls, we simply pass the hook class itself into the hooks list.

``` python
class debug_hook:
    """debugs all kedro hook points"""

    @hook_impl
    def before_pipeline_run(run_params, pipeline, catalog):
        "pops into a debugger before pipeline run"
        print('I hooked in right before the pipeline run')
        if self.should_before_pipeline_run:
            breakpoint()

    @hook_impl
    def after_pipeline_run(run_params, pipeline, catalog):
        "pops into a debugger after pipeline run"
        print('I hooked in right after the pipeline run')
        breakpoint()

    @hook_impl
    def on_pipeline_error(error, run_params, pipeline, catalog):
        "pops into a debugger on pipeline error"
        print('I hooked into the pipeline during an error')
        breakpoint()

    @hook_impl
    def after_catalog_created(catalog, conf_catalog, conf_creds, feed_dict, save_version, load_versions, run_id):
        "pops into a debugger after catalog created"
        print('I hooked in right after the catalog created')
        breakpoint()

    @hook_impl
    def before_node_run(node, catalog, inputs, is_async, run_id):
        "pops into a debugger before node run"
        print('I hooked in right before the node run')
        breakpoint()

    @hook_impl
    def after_node_run(node, catalog, inputs, outputs, is_async, run_id):
        "pops into a debugger after node run"
        print('I hooked in right after the node run')
        breakpoint()

    @hook_impl
    def on_node_error(error, node, catalog, inputs, is_async, run_id):
        "pops into a debugger on node error"
        print('I hooked into the node during an error')
        breakpoint()
```

With this version of the hook it gets added to the `ProjectContext` as the class itself, not an instance.

``` python
class ProjectContext(KedroContext):
    """Users can override the remaining methods from the parent class here,
    or create new ones (e.g. as required by plugins)
    """

    project_name = "kedro0160"
    # `project_version` is the version of kedro used to generate the project
    project_version = "0.16.1"
    package_name = "kedro0160"

    hooks = [
        debug_hook
    ]
```

## Generalizing debug_hook

If we want to generalize the debug hook and make it a bit more re-usable accross all of our projects, we can include the `self` argument, on each method and a `__init__` method in which we can configure our hook.

``` python

class debug_hook:
   """debugs all kedro hook points"""

   def __init__(
       self,
       should_debug_all=False,
       should_debug_before_pipeline_run=False,
       should_debug_after_pipeline_run=False,
       should_debug_on_pipeline_error=False,
       should_debug_before_node_run=False,
       should_debug_after_node_run=False,
       should_debug_on_node_error=False,
       should_debug_after_catalog_created=False,
   ):
       self.should_debug_before_pipeline_run = (
           should_debug_before_pipeline_run or should_debug_all
       )
       self.should_debug_after_pipeline_run = (
           should_debug_after_pipeline_run or should_debug_all
       )
       self.should_debug_on_pipeline_error = (
           should_debug_on_pipeline_error or should_debug_all
       )
       self.should_debug_before_node_run = (
           should_debug_before_node_run or should_debug_all
       )
       self.should_debug_after_node_run = (
           should_debug_after_node_run or should_debug_all
       )
       self.should_debug_on_node_error = should_debug_on_node_error or should_debug_all
       self.should_debug_after_catalog_created = (
           should_debug_after_catalog_created or should_debug_all
       )

   @hook_impl
   def before_pipeline_run(self, run_params, pipeline, catalog):
       "pops into a debugger before pipeline run"
       print("I hooked in right before the pipeline run")
       print(f"\n\n should: {self.should_debug_before_pipeline_run}")
       if self.should_debug_before_pipeline_run:
           breakpoint()

   @hook_impl
   def after_pipeline_run(self, run_params, pipeline, catalog):
       "pops into a debugger after pipeline run"
       print("I hooked in right after the pipeline run")
       if self.should_debug_after_pipeline_run:
           breakpoint()

   @hook_impl
   def on_pipeline_error(self, error, run_params, pipeline, catalog):
       "pops into a debugger on pipeline error"
       print("I hooked into the pipeline during an error")
       if self.should_debug_on_pipeline_error:
           breakpoint()

   @hook_impl
   def after_catalog_created(
       self,
       catalog,
       conf_catalog,
       conf_creds,
       feed_dict,
       save_version,
       load_versions,
       run_id,
   ):
       "pops into a debugger after catalog created"
       print("I hooked in right after the catalog created")
       if self.should_debug_after_catalog_created:
           breakpoint()

   @hook_impl
   def before_node_run(self, node, catalog, inputs, is_async, run_id):
       "pops into a debugger before node run"
       print("I hooked in right before the node run")
       if self.should_debug_before_node_run:
           breakpoint()

   @hook_impl
   def after_node_run(self, node, catalog, inputs, outputs, is_async, run_id):
       "pops into a debugger after node run"
       print("I hooked in right after the node run")
       if self.should_debug_after_node_run:
           breakpoint()

   @hook_impl
   def on_node_error(self, error, node, catalog, inputs, is_async, run_id):
       "pops into a debugger on node error"
       print("I hooked into the node during an error")
       if self.should_debug_on_node_error:
           breakpoint()
```

When `self` is used in the method calls we must pass an instance of the `debug_hook` into

``` python
class ProjectContext(KedroContext):
    """Users can override the remaining methods from the parent class here,
    or create new ones (e.g. as required by plugins)
    """

    project_name = "kedro0160"
    # `project_version` is the version of kedro used to generate the project
    project_version = "0.16.1"
    package_name = "kedro0160"

    hooks = [
        debug_hook
    ]
```