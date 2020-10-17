---
templateKey: blog-post
related_post_label: Check out this related post
tags: []
twitter_announcement: I just dropped a new post check it out.
path: fix-git-author
title: Fix git commit author
date: 2020-10-17T05:00:00Z
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
I was 20 commits into a hackoberfest PR when I suddenly realized they they all had my work email on them instead of my personal email 😱.


## Change the email for this repo
_stop the bleeding_

Before anything else set the email correctly!

``` bash
cd kedro
git config user.name "Waylon Walker"
git config user.email quadmx08@gmail.com
```

## Prepare for rebasing

First thing is to find how many commits back this mistake goes.  I opened up the git log, and saw mine went back 19 commits.  I rolled back 20 just to be sure.

``` bash
$ git log
...
commit a355926b9d7ec4c05659adaa254beefbdb036332
Author: WaylonWalker <email@work.com>
Date:   Sat Oct 17 10:28:59 2020 -0500

    give name of function inside incorrect parameters error
  
commit 1756f5d121bd06c459560b2e982e0d7b6879e9ca
Author: Kiyohito Kunii (Kiyo) <8097799+921kiyo@users.noreply.github.com>
Date:   Fri Oct 2 15:33:09 2020 +0100

    Fix docs reference for registering `pipelines`
```

## start the rebase

Now I start the rebase 20 commits back from HEAD.  THis will pop you into a text file with a list of commits, for this change simply replace all `pick` with `edit`.
  
``` bash
git rebase -i HEAD~20
```

Run git log to see where we ended up.
  
``` bash
$ git log
commit 1756f5d121bd06c459560b2e982e0d7b6879e9ca
Author: Kiyohito Kunii (Kiyo) <8097799+921kiyo@users.noreply.github.com>
Date:   Fri Oct 2 15:33:09 2020 +0100

    Fix docs reference for registering `pipelines`
```

As expected we ended up on Kiyo's commit. So we can simply move forward without any edits.
  
``` bash
$ git rebase --continue
Stopped at e162ca7...  correct function name in tests
You can amend the commit now, with

  git commit --amend

Once you are satisfied with your changes, run

  git rebase --continue
```

## Fix First wrong Commit

Checking the log again I an now on my first commit with a mistake.

``` bash
$ git log
commit 95c209a740d6d0340e19a8fc36298cbf874f8bf7 (HEAD)
Author: WaylonWalker <email@work.com>
Date:   Sat Oct 3 11:59:44 2020 -0500

    correct function name in tests

commit cde2e8baa3c1c4a9f1da4135258381466b1da40a
Author: Waylon Walker <quadmx08@gmail.com>
Date:   Sat Oct 17 10:30:07 2020 -0500

    update tests

commit a355926b9d7ec4c05659adaa254beefbdb036332
Author: Waylon Walker <quadmx08@gmail.com>
Date:   Sat Oct 17 10:28:59 2020 -0500

    give name of function inside incorrect parameters error

commit 1756f5d121bd06c459560b2e982e0d7b6879e9ca
Author: Kiyohito Kunii (Kiyo) <8097799+921kiyo@users.noreply.github.com>
Date:   Fri Oct 2 15:33:09 2020 +0100

    Fix docs reference for registering `pipelines`
```

Running the following command will reset the author on the current commit.

``` bash
git commit --amend --reset-author
```

Double check with a quick `git log` that the author was fixed.

``` bash
commit ccaaa56059ee4554731fa83297ca9e8e387a7592 (HEAD)
Author: Waylon Walker <quadmx08@gmail.com>
Date:   Sat Oct 17 10:35:40 2020 -0500

    correct function name in tests

commit cde2e8baa3c1c4a9f1da4135258381466b1da40a
Author: Waylon Walker <quadmx08@gmail.com>
Date:   Sat Oct 17 10:30:07 2020 -0500

    update tests

commit a355926b9d7ec4c05659adaa254beefbdb036332
Author: Waylon Walker <quadmx08@gmail.com>
Date:   Sat Oct 17 10:28:59 2020 -0500

    give name of function inside incorrect parameters error

commit 1756f5d121bd06c459560b2e982e0d7b6879e9ca
Author: Kiyohito Kunii (Kiyo) <8097799+921kiyo@users.noreply.github.com>
Date:   Fri Oct 2 15:33:09 2020 +0100

    Fix docs reference for registering `pipelines`
```

# Fix all commits

Now to do this for 18 other commits.  I found that chaining the three commands into a bash oneliner was quite helpful.  I turned off pre-commit hooks with `--no-verify`.  I also turned off the `log` pager by adding `--no-pager`.

``` bash
git rebase --continue && git commit --amend --reset-author --no-edit --no-verify && git --no-pager log -n 3
```

## Done

This was quick and easy for 19 commits.  I have tried to loop through changes like this in the past, and it does get a bit hairy.  I find its easier to just setup a one-liner and crank through them one by one.
  
## ReCap
 
``` bash
cd kedro
git config user.name "Waylon Walker"
git config user.email quadmx08@gmail.com
git log
git rebase -i HEAD~20
git log
git rebase --continue
git log
git rebase --continue && git commit --amend --reset-author --no-edit --no-verify && git --no-pager log -n 3
```
