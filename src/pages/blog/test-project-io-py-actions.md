---
templateKey: blog-post
related_post_label: Check out this related post
tags: ['python',]
twitter_announcement: I just dropped a new post check it out.
path: test-project-io-py-actions
title: Integration testing with Python, TestProject.io, and GitHub Actions
date: 2020-07-27T05:00:00Z
status: published
description: As I continue to build out
    https://waylonwalker.com/ I sometimes run into some
    errors that are not caught becuase I do not have good testing implemented. I
    want to explore some integration testing options using GitHub actions.
related_post_body: ''
related_post: []
cover: /static/test-project-io-py-actions.png
twitter_cover: /static/test-project-io-py-actions.png
twitter_week_1: ''
twitter_week_2: ''
twitter_month_1: ''
twitter_month_3: ''
short_url: ''
devto-url: ''
devto-id: ''

---
As I continue to build out [waylonwalker.com](https://waylonwalker.com/) I sometimes run into some errors that are not caught becuase I do not have good testing implemented.  I want to explore some integration testing options using GitHub actions.

Running integration tests will not prevent bugs from happening completely, but it will allow me to quickly spot them and roll back.


## 🤔 What to test first?

The very first thing that comes to my mind is anything that is loaded or ran client side.  Two things quickly came to mind here.  I run gatsby so most of my content is statically rendered, and it yells at me if something isn't as expected.  For performance reasons I lazy load cards on my blogroll, loading all of the header images gets heavy and kills lighthouse (if anyone actually cares). I am also loading some information from my top open source libraries that I have created.  To prevent the need to rebuild the whole site to get the latest information I am just using the GitHub api client side.

* lazy loaded blog cards
* GitHub repos

I chose to start with the GitHub repos as they seemed a bit more straight forward, and it's been awhile since I have done any selenium.

![Open Source cards as they look on waylonwalker.com](https://waylonwalker.com/open-source-cards.png)
> here is what the GitHub repo cards look like

## TestProject.io

I am trying out [testproject.io](https://testproject.io) for the first time on this project.  My experience so far has been top notch.  There was an existing suite of docker images/files setup to run the testproject agent in a docker container alongside of headless chrome and firefox drivers.  The first think that you are going to need are a [TP\_DEV\_TOKEN ](https://app.testproject.io/#/integrations/sdk) and [TP\_API\_KEY](https://app.testproject.io/#/integrations/api).  These will give testproject access to your account so that it can post results to your [dashboard](https://app.testproject.io/#/reports)

* [TP\_DEV\_TOKEN ](https://app.testproject.io/#/integrations/sdk)
* [TP\_API\_KEY](https://app.testproject.io/#/integrations/api)

### Put these in secrets in your repo

In your GitHub repo go to `settings>Secrets`, or append `settings/secrets` to the url to your repo, and add the tokens.  This will give GitHub safe access to them without them being available to the public, contributors, log files, or anything.

![Secrets panel in the GitHub Repo](https://waylonwalker.com/test-waylonwalker-com-secrets.png)

### [Forum](https://forum.testproject.io/t/install-agent-inside-github-actions/2334/3)

## Setup Dev

To expedite developemnt I went ahead and setup development environment that I could log into on Digital Ocean.  This allowed me to get all of my tests working a bit quicker than just running them through GitHub, but being as similar as possible.  This allowed me to learn the ins and outs of setting up testproject without needing to do a full install everytime through github actions.

[![Test Project Dev Machine setup notes card](https://waylonwalker.com/notes/new-machine-tpio.png)](https://waylonwalker.com/notes/new-machine-tpio)
> I am not going to go into full dev machine setup here, but you can read my [setup notes](https://waylonwalker.com/notes/new-machine-tpio).

### [pytest](https://github.com/WaylonWalker/waylonwalker-com-tests/tree/master/tests)
_you can see my full results on [github.com/waylonwalker/waylonwalker-com-tests](https://github.com/waylonwalker/waylonwalker-com-tests/tree/master/tests)_

I chose to go down the route of using pytest.  I really liked the idea of utilizing fixtures, automatically running my test functions, and utilizing a bit of the pytest reporting capabilities.

**NOTE** per pytest standard practice I named the directory containing tests `tests`.  While this works, testproject.io uses this director as the default name for the project.  If I were to go back I would either rename the directory to what I want to show up on testproject.io or configure the project name inside of the config.

### [conftest.py](https://github.com/WaylonWalker/waylonwalker-com-tests/blob/master/tests/conftest.py)

pytest automatically imports [conftest.py](https://github.com/WaylonWalker/waylonwalker-com-tests/blob/master/tests/conftest.py) modules from the same directory that you are working from.  It's common to place fixtures used accross multiple files here.  I placed a driver fixture in this module so that as I create more tests it will be available everywhere by default.

``` python
# tests/conftest.py

import time
import pytest
from src.testproject.sdk.drivers import webdriver

@pytest.fixture
def driver():
    "creates a webdriver and loads the homepage"
    driver = webdriver.Chrome()
    driver.get("https://waylonwalker.com/")
    yield driver
    driver.quit()
```
> Look at the full version of [conftest.py](https://github.com/WaylonWalker/waylonwalker-com-tests/blob/master/tests/conftest.py)

The above sample is a bit **simplified**.  I ran into some inconsistencies in the real version and found that some tests had a better pass rate if I added a wait.  I eneded up with a `driver` and a `slow_driver` fixture.

### [test_repos](https://github.com/WaylonWalker/waylonwalker-com-tests/blob/master/tests/test_repos.py)


I have initially setup 3 different tests for the repo cards.  I set a list of repos that I expect to show up in the cards.  These tests are quite easy to do with testproject.io as it is using selenium and a headless browser to execute javascript under the hood.

If you are not familiar a **headless browser** runs the engine as your browser without a graphical user interface.  JavaScript gets fully loaded and parsed, and the dom is completely interactive programatically.

``` python
"""
Test that GitHub repo data dynamically loads client side.
"""

REPOS = [
    "find-kedro",
    "kedro-static-viz",
    "kedro-action",
    "steel-toes",
]

def test_repos_loaded(slow_driver):
    """
    Test that the each repo-name exists as a title in one of the repo cards.

    On waylonwalker.com repo cards have a title with a class of "repo-name"
    """
    repos = slow_driver.find_elements_by_class_name("repo-name")
    # get innertext from elements
    header_text = [
        header.text for header in repos
    ]
    for repo in REPOS:
        assert repo in header_text


def test_repo_description_loaded(slow_driver):
    """
    Test that each repo has a description longer than 10 characters

    On waylonwalker.com repo cards have a descriptiion with a class of "repo-description"
    """
    repo_elements = slow_driver.find_elements_by_class_name("repo")
    for el in repo_elements:
        desc = el.find_element_by_class_name("repo-description")
        assert len(desc.text) > 10


def test_repo_stars_loaded(slow_driver):
    """
    Ensure that stars are properly parsed from the api and loaded client side

    On waylonwalker.com repo cards have a stars element with a class of "repo-stars" and
    is displayed as "n stars"
    """
    repo_elements = slow_driver.find_elements_by_class_name("repo")
    for el in repo_elements:
        stars = el.find_element_by_class_name("repo-stars")
        num_stars, label = stars.text.split()
        assert int(num_stars) > 0
        assert label == 'stars'
```
## [GitHub Actions](https://github.com/WaylonWalker/waylonwalker-com-tests/blob/master/.github/workflows/test-waylonwalker-com.yml)



### [docker-compose.yml](https://github.com/WaylonWalker/waylonwalker-com-tests/blob/master/.github/ci/docker-compose.yml)


## TextProject.io Dashboard

![My Dashboard for test_repos](https://waylonwalker.com/tpio-test-repos.png)
