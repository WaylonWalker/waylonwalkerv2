---
templateKey: blog-post
tags: ['python']
title: 🐍 Pluggable Architecture with Python
date: 2021-01-23T00:00:00
status: draft

---

pytest has open sourced their amazing plugin framework `pluggy`, it allows
library authors to give their users a way to modify the libaries behavior
without needing to submit a change that may not make sense to the entire
library.

## Previous Experience

My experience so far as a plugin user, and plugin author has been great.
Building and using plugins are incredibly intuitive.  I wanted to dive a bit
deeper and see how they are implemented inside of a library and its a bit of a
mind bend the first time you try to do it.

## Plugins vs. Hooks

A hook is a single function that has a specific place that it is ran by the PluginManager.

A Plugin is a collection of one or more hooks.

## Layers

* library author
* plugin author
* end user

## Using a plugin

For a plugin to be registered is must be registered by the PluginManager which
is implemented by the library author.  It is the job of the library author to
determine what plugins are actively registered or disabled.  There are two
common ways that I have seen that plugins are registered, through entrypoints
or configuration.

## Using a plugin - entrypoints

Plugins that are implemented with entrypoints are the simplest for the user.
They are simply activated by `pip install plugin` or deactivated by `pip
uninstall plugin`.  The library author will show an entrypoint in their docs
which tells plugin authors how to setup entrypoints so that they will be loaded
autommatically.

## Using a plugin - config

Another way to configure plugins is through configuration.  This may come in
the form of a list in a python module or listed in a text file in the config.
This route requires the user to add the plugin to a list or import it into a
python module.

## Examples

I really stuggled to find a good example of pluggy to get started.  I found the
best way for me to understand was to create one myself.  the pluggy repo has
one simple
[example](https://github.com/pytest-dev/pluggy/blob/master/docs/examples/toy-example.py),
but it is unclear who owns each piece from the example.  The whole point of
pluggy is to pass ownership of  implementation from the library author to the
plugin author.

## Plugin Components

* project_name
    * implemented by the library author
    * gives a namespace for pluggy to store hooks
* hookspec
    * created and used by libary author
* hookimpl
    * created by libary author
    * used by plugin author
* PluginManager
    * implementation of plugins in the library

## hookspec
_empty hooks created by the 


## hookimpl


## Plugin Manager



