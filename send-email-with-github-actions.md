---
canonical_url: https://waylonwalker.com/send-email-with-github-actions
cover: /static/send-email-with-github-actions-xmas2020.png
cover_image: https:waylonwalker.com/send-email-with-github-actions.png
date: 2020-03-31 03:39:00+00:00
description: One useful action that you can utilize no matter what content your repo
  has is sending email.
published: true
related_post_label: Check out this related post
status: published
tags:
- actions
templateKey: blog-post
title: Send Emails with GitHub Actions
---

Here is one useful thing that you can do with GitHub actions no matter what language you use, send email.  You might want to know right away when your ci passes.  You might want to give your team a nice pat on the back when a new release is deployed.  There might be subscribers wanting to see the latest release notes in their inbox as soon as the latest version is deployed.  Whatever it is, its pretty easy to do with an action right out of the actions marketplace.

## Mail on Star

Here is a silly example that sends an email to yourself anytime someone stars your repo.

``` yaml
name: Mail on Star

on:
  watch:
    types: [ started ]

# A workflow run is made up of one or more jobs that can run sequentially or in parallel
jobs:
  # This workflow contains a single job called "email"
  email:
    # The type of runner that the job will run on
    runs-on: ubuntu-latest

    # Steps represent a sequence of tasks that will be executed as part of the job
    steps:
      - name: ✨ Send email, you star
        uses: dawidd6/action-send-mail@v1.3.0
        with:
          server_address: smtp.gmail.com
          server_port: 465
          username: quadmx08
          password: ${{ secrets.GMAIL_PASS }}
          subject: Your a star ✨
          body: ${{ github.actor }} just starred your mail-on-star repo!!! ${{ github.repository }}
          to: ${{ secrets.GMAIL_ADDRESS }}
          from: ${{ secrets.GMAIL_ADDRESS }}
```