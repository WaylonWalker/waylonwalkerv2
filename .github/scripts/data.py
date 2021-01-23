#!python
"""

example usage, edit posts that have a tag

alias blog=~/.git/waylonwalkerv2/.github/scripts/data.py
nvim $(blog --tag $(blog --tags | fzf) | fzf)

"""
from typing import List, Union

import frontmatter
from pathlib import Path
from yaml.parser import ParserError

from markdown import markdown
from bs4 import BeautifulSoup

import datetime
import pytz

import background
import time


def get_posts():
    pages = Path("../../src/pages")

    # files =
    futures = [get_post(article) for article in pages.glob("**/*.md")]
    while not all([f.done() for f in futures]):
        time.sleep(0.1)
    articles = [f.result() for f in futures]

    articles.sort(key=lambda post: int(post["date"].strftime("%Y%m%d")))
    sorted(articles, key=lambda x: x["date"])
    return articles


@background.task
def get_post(path: Path):
    default = {
        "cover": "",
        "title": "",
        "tags": [],
        "status": "draft",
        "templateKey": "",
        "path": str(path),
        "description": "",
        "content": "",
    }
    try:
        post = {**default, **frontmatter.load(path).to_dict()}
    except ParserError:
        post = default
    except ValueError:
        post = default

    post["path"] = path
    if type(post["tags"]) != list:
        post["tags"] = [post["tags"]]

    if "published" not in post.keys():
        post["published"] = True if post["status"] == "published" else False
    if post["cover"] == "":
        post["cover"] = f"/static/{path.stem}.png"
    if "cover_image" not in post.keys():
        post["cover_image"] = (
            ("https://waylonwalker.com/" + post["cover"])
            .replace("static", "")
            .replace("//", "")
            .replace("//", "")
        )
    if "canonical_url" not in post.keys():
        post["canonical_url"] = f"https://waylonwalker.com/{path.stem}"
    if "date" not in post.keys():
        post["date"] = datetime.datetime(2000, 1, 1, 0, 0)
    if type(post["date"]) == str:
        post["date"] = datetime.datetime.strptime(post["date"], "%Y-%m-%dT%H:%M")
    if type(post["date"]) == datetime.date:
        post["date"] = datetime.datetime(
            year=post["date"].year,
            month=post["date"].month,
            day=post["date"].day,
            tzinfo=pytz.UTC,
        )
    else:
        post["date"] = datetime.datetime(
            year=post["date"].year,
            month=post["date"].month,
            day=post["date"].day,
            hour=post["date"].hour,
            minute=post["date"].minute,
            second=post["date"].second,
            tzinfo=pytz.UTC,
        )

    post["html"] = markdown(
        post["content"],
        extensions=[
            "markdown.extensions.tables",
            "pymdownx.magiclink",
            "pymdownx.betterem",
            "pymdownx.tilde",
            "pymdownx.emoji",
            "pymdownx.tasklist",
            "pymdownx.superfences",
            "pymdownx.saneheaders",
        ],
    )
    if post["description"] == "":
        # sanitize multispaces, line breaks, and carriage returns
        description = " ".join(
            BeautifulSoup(post["html"], "html.parser")
            .text[:120]
            .replace("\n", " ")
            .replace("\r", " ")
            .split()
        )
        post["description"] = description
    long_description = " ".join(
        BeautifulSoup(post["html"], "html.parser")
        .text[:250]
        .replace("\n", " ")
        .replace("\r", " ")
        .split()
    )

    post["long_description"] = long_description + "..."

    # expanded_content = "\n".join(
    #     [expand_line(line) for line in post['content']split("\n")]
    # )
    # if postl["content"] != expanded_content:
    #     post["content"] = expanded_content

    # if "xmas2020" not in post["cover"]:
    #     post["cover"] = post["cover"].replace(".png", "-xmas2020.png")
    return post


def create_card(post):
    return f"""
<li class='post'>
  <a href="{post['canonical_url']}">
    <h2 class='title'>{post['title']}</h2>
    <p class='description'>{post['long_description']}</p>
    <p class='date'>{post['date'].year}-{post['date'].month}-{post['date'].day}</p>
  </a>
</li>
"""


def create_index(status: str = None, tags: Union[str, List[str]] = None):
    posts = reversed(get_posts())

    if type(tags) == str:
        tags = [tags]
    if status is not None:
        posts = [post for post in posts if post["status"] == status]
    if tags is not None:
        posts = [post for post in posts if set(post["tags"]) & set(tags)]
    return [create_card(post) for post in posts]


# @background.task
def _create_post(post):
    path = Path(f"posts/{post['path'].stem}/index.html")
    path.parent.mkdir(parents=True, exist_ok=True)
    with open(path, "w+") as f:
        f.write(post["html"])


def create_posts():
    posts = reversed(get_posts())
    # futures = [_create_post(post) for post in posts]
    for post in posts:
        _create_post(post)
    # while not all([f.done() for f in futures]):
    #     time.sleep(0.1)


def list_tags():
    posts = get_posts()
    return [
        tag
        for tag in set(
            itertools.chain.from_iterable(
                [post["tags"] for post in posts if post["tags"]]
            )
        )
        if tag
    ]


if __name__ == "__main__":
    data = get_posts()
    import sys
    import itertools
    from string import Template
    import json

    if "--create-json" in sys.argv:
        print(json.dumps(get_posts(), indent=4, default=str))

    elif "--create-indexes" in sys.argv:
        tags = list_tags()
        with open("template.html") as f:
            template = Template(f.read())

        p = Path("./archive/index.html")
        p.parent.mkdir(parents=True, exist_ok=True)
        with open(p, "w+") as f:
            f.write(
                template.safe_substitute(body="".join(create_index(status="published")))
            )
        for tag in tags:
            p = Path(f"./archive/{tag}/index.html")
            p.parent.mkdir(parents=True, exist_ok=True)
            with open(p, "w+") as f:
                f.write(
                    template.safe_substitute(
                        body="".join(create_index(status="published", tags=tag))
                    )
                )

    elif "--create-index" in sys.argv:
        tags = None
        if "--tag" in sys.argv:
            tags = set(sys.argv[sys.argv.index("--tag") + 1 :])
        with open("template.html") as f:
            template = Template(f.read())

        print(
            template.safe_substitute(
                body="".join(create_index(status="published", tags=tags))
            )
        )

    elif "--tags" in sys.argv:
        print("\n".join(list_tags()))
    elif "--tag" in sys.argv:
        tags = set(sys.argv[sys.argv.index("--tag") + 1 :])
        print("\n".join([post for post in data if set(post["tags"]) & tags]))

    elif "--drafts" in sys.argv:
        print(
            "\n".join(
                [
                    str(post["path"])
                    for post in data
                    if post["status"] in ["draft", "ready"]
                    and post["templateKey"] in ["blog-post", "post"]
                ]
            )
        )
