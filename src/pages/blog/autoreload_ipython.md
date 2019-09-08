---
templateKey: blog-post
path: autoreload_ipython
title: Autoreload in Ipython
date: 2019-09-08
status: published
description: Autoreload in python
cover: "/static/images/alex-perez-wEgR12N01Tk-unsplash.jpg"
twitter_cover: "/static/images/alex-perez-wEgR12N01Tk-unsplash.jpg"

---
# Autoreload in Ipython

I have used autoreload for several years now with great success and 🔥 rapid reloads.  It allows me to move super fast when developing libraries and modules.  They have made some great updates this year that allows class modules to be automatically be updated.


## What I like about autoreload

🔥 Blazing Fast
💥 Keeps me in the comfort of my text editor
👏 Allows me to use Jupyter when I need
👟 Extremely Reliable


## Enabling Autoreload.

This is a short script that I use to setup ipython so that it automatically reloads modules.  This allows me to use a separate terminal and editor, and keep data in memory while developing functions.


```DOS
ipython profile create
```

Then edit the created file `~/ipython/profile``_default/ipython__``config.py`.

```python
c.InteractiveShellApp.extensions = ['autoreload']
c.InteractiveShellApp.exec_lines = ['%autoreload 2']
c.InteractiveShellApp.exec_lines.append('print("Warning: disable autoreload in ipython_config.py to improve performance.")')
```

## According to the docs

[autoreload caveates](https://ipython.org/ipython-doc/3/config/extensions/autoreload.html#caveats "IPython caveats")

> Some of the known remaining caveats are:
>
> Replacing code objects does not always succeed: changing a @property in a class to an ordinary method or a method to a member variable can cause problems (but in old objects only).
> Functions that are removed (eg. via monkey-patching) from a module before it is reloaded are not upgraded.
> C extension modules cannot be reloaded, and so cannot be autoreloaded.

## So what can gets updated??

Nearly everything...

* new/updated functions
* new/updated functions
* new/updated class methods
* new/updated class attributes

## What does not get updated

**config** files that are side loaded with modules typically do not get updated in my experience, and I tend to restart the session.

**__init__** class methods do not get reran, but the session does not need to be reloaded.  The class instance will just need to be re-instanciated.

## Testing out the capabilities

Here is a gif of me taking autoreload out for a test drive.  When creating the session test_autoreload.py does not even exist. From there new functions, classes, attributes, and methods are added in the file and all live reload into ipython.

![](/images/test_autoreload4.gif)

## What About Jupyter Notebooks????

_Exactly the Same_

Since jupyter uses ipython in be background Jupyter will use the same `ipython_config.py` file to have autoreload enabled by default.

![](/images/test_autoreload_jupyter.gif)



