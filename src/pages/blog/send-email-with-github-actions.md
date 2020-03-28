---
templateKey: blog-post
related_post_label: Check out this related post
tags: [actions]
twitter_announcement: I just dropped a new post check it out.
path: send-email-with-github-actions
title: Send Emails with GitHub Actions
date: 2020-03-16T05:00:00.000+00:00
status: draft
description: ''
related_post_body: ''
related_post: []
cover: '/static/send-email-with-github-actions.png'
twitter_cover: ''
twitter_week_1: ''
twitter_week_2: ''
twitter_month_1: ''
twitter_month_3: ''
short_url: ''
devto-url: ''
devto-id: ''

---

## Mail on Star


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
