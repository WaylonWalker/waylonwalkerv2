---
templateKey: blog-post
related_post_label: Check out this related post
tags: []
twitter_announcement: Today I learned how how to diff between two branches.
path: git-diff-branches
title: Today I learned `git diff feature..master`
date: 2020-03-03T11:58:00.000+00:00
status: published
description: Sometimes we get a little `git add . && git commit -m "WIP"` happy and
  mistakenly commit something that we just cant figure out.  This is a good way to
  figure out what the heck has changed on the current branch compared to any other
  branch.
related_post_body: ''
related_post: []
cover: "/static/git-diff-branches.png"
twitter_cover: "/static/git-diff-branches.png"
twitter_week_1: ''
twitter_week_2: ''
twitter_month_1: ''
twitter_month_3: ''
short_url: ''
devto-url: ''
devto-id: ''

---
Today I learned how to diff between two branches.

```
git diff feature..master
```

Sometimes we get a little `git add . && git commit -m "WIP"` happy and mistakenly commit something that we just can't figure out. This is a good way to figure out what the heck has changed on the current branch compared to any other branch.

## Example

Let's create a new directory, initialize git and toss some content into a readme.

``` bash
mkdir git-diff
git init
echo "hello there" > readme.md
git add . && git commit -m "hello there"
cat readme.md
```

After all of that, we have a git repository on our local machine with a single file `readme.md` that contains the following.

``` txt
hello there
```

##  Create a branch and ✍ edit
![git branch icon](https://dev-to-uploads.s3.amazonaws.com/i/h5cgvxp0gy1xtm4kj6pl.png)

Let's checkout a new branch called Waylon and change the word `there` to `Waylon` in our `readme.md` file, then diff it.

``` bash
git checkout -b Waylon
echo "hello Waylon" > readme.md
git add . && git commit -m "hello Waylon"
git diff
```

``` diff
- hello there
+ hello waylon
```

At this point we have one commit.  Things are really straightforward, and our diff will be the same between the last commit and the master branch since.  Let's make another commit by adding the date.

``` bash
echo "hello waylon\n\n$(date)" > readme.md
cat readme.md
git diff
```

``` diff
hello Waylon
+
+ Fri 13 Mar 2020 04:23:21 PM DST
```
👆 At this point, our diff doesn't tell us the whole story between our current state and master, only between our current state and our last commit.  Let's commit our changes and compare our branch to master.

``` bash
git add . && git commit -m "add date"
git diff master..waylon
```

``` diff
- hello there
+ hello Waylon
+
+ Fri 13 Mar 2020 03:43:21 PM DST
```

## Git is powerful

I learn small tricks like this often with git.  Many times I forget about it and have to come back to re-learn. Sharing my thoughts gives me a better chance of remembering.