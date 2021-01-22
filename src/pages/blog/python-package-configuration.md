---
templateKey: blog-post
tags: ['python']
title: ⚙ How Python Packages Are Configured
date: 2021-01-21T00:00:00
status: draft

---

There are various ways to configure python tools, config files, code, or
environment variables.  Let's look at a few projects that allow users to
configure them through the use of config files and how they do it.


This will not include how they are implemented, I've looked at a few and its
not simple.  This will focus on where config is placed and the order in which
duplicates are resolved.

## Flake8

### Global

User settings can exist in the users `~/.config/flake8` file to configure how
flake8 runs on their machine.

* `~/.config/flake8`

### Per-Project

Only One project config file will be considered, but allows for several
options.  These files all use the `ini` format and must have a `[flake8]`
section  header to be consideered.

Selection of the config file can also be overridden by the `--config` cli option.

An extra config file may be selected as `--append-config`.  It will be read in
last and take highest precedence.

* `tox.ini`
* `setup.cfg`
* `.pep8`
* `.flake8`

## Example Config

_valid in any of the supported files_

``` ini
[flake8]
max-line-length = 88
extend-ignore = E203, W503
```

### Options

The number of options configured through config files is fairly short for `flake8`.

* exclude
* filename
* select
* ignore
* max-line-length
* format
* max-complexity

## Black

Black only supports `TOML` file formats for configuration.

### Global

Black provides no global config support.  If you really needed one I guess you
could make a cli alias.

### Per-Project

Black states that it includes sane defaults that do not need configured, but if
you need to do so it only supports `pyproject.toml` or cli arguments.

Personally I believe that a lot of work went into making these sane defaults
really good.  I personally do not make any configuration changes to black.

* pyproject.toml

## Example

_pyproject.toml_

``` toml
[tool.black]
line-length = 88
target-version = ['py37']
include = '\.pyi?$'
exclude = '''

(
  /(
      \.eggs         # exclude a few common directories in the
    | \.git          # root of the project
    | \.hg
    | \.mypy_cache
    | \.tox
    | \.venv
    | _build
    | buck-out
    | build
    | dist
  )/
  | foo.py           # also separately exclude a file named foo.py in
                     # the root of the project
)
'''
```

## Resolution

Black will use teh `pyproject.toml` file for configuration, then make any
addional overrides through the use of command line arguments.

## MyPy

## Kedro

## flask

## pytest

## ipython

