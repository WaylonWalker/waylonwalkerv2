---
templateKey: blog-post
related_post_label: Check out this related post
tags: ['python',]
twitter_announcement: I just dropped a new post check it out.
path: testproject-io-py-actions
title: Integration testing with Python, TestProject.io, and GitHub Actions
date: 2020-07-27T05:00:00Z
status: published
description: As I continue to build out
    https://waylonwalker.com/ I sometimes run into some
    errors that are not caught becuase I do not have good testing implemented. I
    want to explore some integration testing options using GitHub actions.
related_post_body: ''
related_post: []
cover: /static/testproject-io-py-actions.png
twitter_cover: /static/testproject-io-py-actions.png
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

I am trying out [TestProject.io](https://TestProject.io) for the first time on this project.  My experience so far has been top notch.  There was an existing suite of docker images/files setup to run the TestProject agent in a docker container alongside of headless chrome and firefox drivers.  The first thing that you are going to need are a [TP\_DEV\_TOKEN ](https://app.TestProject.io/#/integrations/sdk) and [TP\_API\_KEY](https://app.TestProject.io/#/integrations/api).  These will give TestProject access to your account so that it can automatically post results to your [dashboard](https://app.TestProject.io/#/reports)

* [TP\_DEV\_TOKEN ](https://app.TestProject.io/#/integrations/sdk)
* [TP\_API\_KEY](https://app.TestProject.io/#/integrations/api)

### Put these in secrets in your repo

In your GitHub repo go to `settings>Secrets`, or append `settings/secrets` to the url to your repo, and add the tokens.  This will give GitHub safe access to them without them being available to the public, contributors, log files, or anything.

![Secrets panel in the GitHub Repo](https://waylonwalker.com/test-waylonwalker-com-secrets.png)

### [Forum](https://forum.TestProject.io/t/install-agent-inside-github-actions/2334/3)

## Setup Dev

To expedite developemnt I went ahead and setup development environment that I could log into on Digital Ocean.  This allowed me to get all of my tests working a bit quicker than just running them through GitHub, but being as similar as possible.  This allowed me to learn the ins and outs of setting up TestProject without needing to do a full install everytime through github actions.

[![Test Project Dev Machine setup notes card](https://waylonwalker.com/new-machine-tpio.png)](https://waylonwalker.com/notes/new-machine-tpio)
> I am not going to go into full dev machine setup here, but you can read my [setup notes](https://waylonwalker.com/notes/new-machine-tpio).

### [pytest](https://github.com/WaylonWalker/waylonwalker-com-tests/tree/master/tests)
_you can see my full results on [github.com/waylonwalker/waylonwalker-com-tests](https://github.com/waylonwalker/waylonwalker-com-tests/tree/master/tests)_

I chose to go down the route of using pytest.  I really liked the idea of utilizing fixtures, automatically running my test functions, and utilizing a bit of the pytest reporting capabilities.

**NOTE** per pytest standard practice I named the directory containing tests `tests`.  While this works, TestProject.io uses this director as the default name for the project.  If I were to go back I would either rename the directory to what I want to show up on TestProject.io or configure the project name inside of the config.

### [conftest.py](https://github.com/WaylonWalker/waylonwalker-com-tests/blob/master/tests/conftest.py)

pytest automatically imports [conftest.py](https://github.com/WaylonWalker/waylonwalker-com-tests/blob/master/tests/conftest.py) modules from the same directory that you are working from.  It's common to place fixtures used accross multiple files here.  I placed a driver fixture in this module so that as I create more tests it will be available everywhere by default.

``` python
# tests/conftest.py

import time
import pytest
from src.TestProject.sdk.drivers import webdriver

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


I have initially setup 3 different tests for the repo cards.  I set a list of repos that I expect to show up in the cards.  These tests are quite easy to do with TestProject.io as it is using selenium and a headless browser to execute javascript under the hood.

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

### [docker-compose.yml](https://github.com/WaylonWalker/waylonwalker-com-tests/blob/master/.github/ci/docker-compose.yml)

## [GitHub Actions](https://github.com/WaylonWalker/waylonwalker-com-tests/blob/master/.github/workflows/test-waylonwalker-com.yml)

Now that I have my GitHub repo setup with my [tests](https://github.com/WaylonWalker/waylonwalker-com-tests/tree/master/tests) successfully running in pytest, lets get it running inside of GitHub actions automatically.

``` yaml
name: Test WaylonWalker.com

# Controls when the action will run. Triggers the workflow on push or pull request
# events but only for the master branch
on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]
  schedule:
    - cron: '*/10 * * * *'
```

You can see in the section above I have setup to run everytime there is a push to or pull request open to main.  I also set a fairly agressive test schedule to run every 10 minutes.  For now this is just to build confidence in the tests and get more data in the reports to explore.  I will likely turn this down later.

``` yaml

# A workflow run is made up of one or more jobs that can run sequentially or in parallel
jobs:
  test:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@main
    - uses: actions/setup-python@v2
      with:
        python-version: '3.8' # Version range or exact version of a Python version to use, using SemVer's version range syntax
        architecture: 'x64' # optional x64 or x86. Defaults to x64 if not specified
    - run: pip install -r requirements.txt
    - name: Run TestProject Agent
      env:
        TP_API_KEY: ${{ secrets.TP_API_KEY }}
      run: |
        envsubst < .github/ci/docker-compose.yml > docker-compose.yml
        cat docker-compose.yml
        docker-compose -f docker-compose.yml up -d
    - name: Wait for Agent to Register
      run: |
        trap 'kill $(jobs -p)' EXIT
        attempt_counter=0
        max_attempts=100
        mkdir -p build/reports/agent
        docker-compose -f docker-compose.yml logs -f | tee build/reports/agent/log.txt&
        until curl -s http://localhost:8585/api/status | jq '.registered' | grep true; do
          if [ ${attempt_counter} -eq ${max_attempts} ]; then
            echo "Agent failed to register. Terminating..."
            exit 1
          fi
          attempt_counter=$(($attempt_counter+1))
          echo
          sleep 1
        done
    - run: pytest
      env:
        TP_DEV_TOKEN: ${{ secrets.TP_DEV_TOKEN }}
        TP_AGENT_URL: http://localhost:8585
```

In the test job you can see that we have rendered the [TP\_API\_KEY](https://app.TestProject.io/#/integrations/api) into the [docker-compose.yml](https://github.com/WaylonWalker/waylonwalker-com-tests/blob/master/.github/ci/docker-compose.yml) file so that TestProject has access to it.  We have also exposed our [TP\_DEV\_TOKEN ](https://app.TestProject.io/#/integrations/sdk) to pytest.

### Waiting for the Agent to register

I think the most interesting part of the workflow above is how we wait for the agent to register.  The shell script is a bit terse, but it looks for exceeding the `max_attempts` allowed or that the agent has started by using its `/api/status` rest api.  This prevents us from wasting too much time by setting a big wait, or trying to move on too early and running pytest without a running agent.



## TestProject.io Dashboard

One one of the coolest features that you get from testproject are teh [reports](https://app.testproject.io/#/reports) dashboard.  To me this felt like a premium feature for free.  Here you can see a timeseries plot of your tests success rate over time.  It gives you a bit of an ability to slice in, but not a lot.  Some of the filters are pre canned, like past 2 days are past 30 days cannot be customized.

![My Dashboard for test_repos](https://waylonwalker.com/tpio-test-repos.png)

As you drill in you can see individual tests that have been ran, select them and see individual reports for each test.  Personally I really like the layout on the side.  It converts the steps ran by the driver into a human readable "flowchart", and each step can be opened up to see their values.  It would be nice if it picked up my pytest assertions, but picking up what it did was great.

![driver flow of test_repo_stars_loaded](https://waylonwalker.com/test_repo_stars_loaded.png)
