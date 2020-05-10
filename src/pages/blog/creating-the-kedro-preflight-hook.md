---
templateKey: blog-post
related_post_label: Check out this related post
tags: []
twitter_announcement: I just dropped a new post check it out.
path: kedro-hooks-preflight
title: creating the kedro-preflight hook
date: 2020-05-10T07:12:00Z
status: published
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
devto-url: ''
devto-id: ''

---
kedro hooks are an exciting upcoming feature of kedro `0.16.0`.  They allow you to hook into `catalog_created`,`pipeline_run`, `node_run`(nouns). With a `before`, or `after` (adjective).  This really reminds me of reacts lifecycle hooks, that let you hook into various state of react web components.  This is going to make kedro so extendable by the community.  I am super pumped to see what the community is able to do with this ability.


# Docs

As this is a part of an upcoming release you will need to look in the `latest` docs, **not** `stable` and you will find a [15_hoooks](https://kedro.readthedocs.io/en/latest/04_user_guide/15_hooks.html?highlight=hooks) page.  As these docs are still in development they are not very complete at this point and do require a bit more existing `kedro` knowledge to understand.  I am sure they will get much better as we approach the realease of hooks.


# Installation

As this is part of an upcoming release you will need to get the library straight from github.  Since this is not a stable release of `kedro` I cannot express the importance of using a virtual environment enough.  Trying to install this version in the same place that you are trying to develop a pipeline potentially break your existing working development environment.

``` bash
conda create -n kedro0160 -y
conda activate kedro0160 # may also be source activate kedro0160 or activate kedro0160
pip install git+https://github.com/quantumblacklabs/kedro.git
pip install colorama
```

**note** the version is still somewhere between `0.15.9` and `0,16.0`.  `kedro.__version__` will still be `0.15.9` and wiill not roll until the official release.

# Create a sample project

For this post I really just want a working pipeline as fast as possible.  For this I am going to use iris pipeline that is generated from the `kedro new` command in the cli.  It's **important** that you answer `y` to create an example pipeline.

> ## STOP
> Did you create a separate environment for this?

``` bash
kedro new
```

After you run the `kedro new` command it will ask a series of questions.  Here is how I answered them.

``` bash
Project Name:
=============
Please enter a human readable name for your new project.
Spaces and punctuation are allowed.
 [New Kedro Project]: Kedro Hooks
Repository Name:
================
Please enter a directory name for your new project repository.
Alphanumeric characters, hyphens and underscores are allowed.
Lowercase is recommended.
 [kedro-hooks]:
Python Package Name:
====================
Please enter a valid Python package name for your project package.
Alphanumeric characters and underscores are allowed.
Lowercase is recommended. Package name must start with a letter or underscore.
 [kedro_hooks]:
Generate Example Pipeline:
==========================
Do you want to generate an example pipeline in your project?
Good for first-time users. (default=N)
 [y/N]: y
Change directory to the project generated in /mnt/c/temp/kedro-hooks/
A best-practice setup includes initialising git and creating a virtual environment before running `kedro install` to install project-specific dependencies. Refer to the Kedro documentation: https://kedro.readthedocs.io/
```

# Install the Project

Next install the project itself and all of its dependencies with the `kedro install` command.

``` bash
cd kedro-hooks
kedro install
```

# Run the pipeline

Before we start developing any hooks lets make sure everything is setup correctly by running the pipeline with `kedro run`.

``` bash
kedro run
```

# preflight hook


Now that we have a project scaffolded up and running we can develop a hook for it.  As far as I can tell hooks can be implemented one of two ways.  As a function inside of a module, then import that module and pass it into the hooks list. It can also be implemented as a method on a class, them the class is passed into the hooks list.  Either method must follow the naming convention with the `@hook_impl` decorator.  Each module/class can implement more than one hook.

``` python
# kedro-hooks/src/kedro-hooks/preflight.py
from kedro.hooks import hook_impl
from kedro.io.core import DataSetNotFoundError
from colorama import Fore
import textwrap


@hook_impl
def before_pipeline_run(run_params, pipeline, catalog):
    missing_input = [i for i in pipeline.inputs() if not getattr(catalog.datasets, i)._exists()]
    if len(missing_input) != 0:
        raise DataSetNotFoundError(textwrap.dedent(f'''

    {Fore.LIGHTBLACK_EX}――――――――  {Fore.RED}PREFLIGHT ERROR {Fore.LIGHTBLACK_EX}―――――――――
    {Fore.RESET} preflight of pipeline failed due to {Fore.YELLOW}missing datasets
    {Fore.BLUE} {missing_input}{Fore.RESET}
    '''))
```