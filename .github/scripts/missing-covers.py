#!python
# coding: utf-8

import frontmatter
from yaml.parser import ParserError
from pathlib import Path
from cover import make_cover, make_theme
import time
from bs4 import BeautifulSoup
from markdown import markdown
import re
import requests
import textwrap
import twitter


pages = Path("../../src/pages")
static = Path("../../static")
re_one_line = re.compile("^https://waylonwalker.com/.*")
re_tweet = re.compile("^https://twitter.com/.*")
api = twitter.Api()


def expand_line(line):
    r = re_one_line.match(line)
    if r and " " not in line:
        return get_one_line_link(line)
    r = re_tweet.match(line)
    if r and " " not in line:
        html = api.GetStatusOembed(url=line)["html"]
        print("twitter returned")
        print(line)
        print(html)
        return html

    return line


def get_one_line_link(link):
    r = requests.get(link)
    if r.status_code != 200:
        print(f"One Line link not found\n{link}")
        return link
    soup = BeautifulSoup(r.text, "html.parser")
    try:
        url = soup.find("meta", attrs={"name": "og:url"})["content"]
    except KeyError:
        url = link

    try:
        sm_img = soup.find("meta", attrs={"name": "og:sm_image"})["content"]
    except KeyError:
        sm_img = soup.find("meta", attrs={"name": "og:image"})["content"]
    except KeyError:
        sm_img = ""

    try:
        title = soup.find("title").text
    except KeyError:
        title = soup.find("meta", attrs={"name": "og:title"})["content"]
    except KeyError:
        title = ""

    try:
        description = soup.find("meta", attrs={"name": "og:description"})["content"]
    except KeyError:
        description = soup.text[:120]

    return textwrap.dedent(
        f"""
    <a class="onelinelink" href="{url}">
    <img style="float: right;" align='right' src="{sm_img}" alt="article cover">
    <div class="right">
        <h2>{title}</h2>
        <p class="description">
        {description}
        </p>
        <p class="url">
        <span class="read-more">read more</span>  waylonwalker.com
        </p>
    </div>
    </a>
    """
    )


for article in pages.glob("**/*.md"):
    try:
        changed = False
        post = frontmatter.load(article)
        if "cover" not in post.metadata.keys():
            post.metadata["cover"] = ""
        if post.metadata["cover"] == "":
            changed = True
            post.metadata["cover"] = f"{article.stem}.png"
        if "description" not in post.metadata.keys():
            post.metadata["description"] = ""
        if post.metadata["description"] == "":
            changed = True
            html = markdown(post.content)
            description = BeautifulSoup(html, "html.parser").text[:120]
            post.metadata["description"] = description

        expanded_content = "\n".join(
            [expand_line(line) for line in post.content.split("\n")]
        )
        if post.content != expanded_content:
            changed = True
            post.content = expanded_content

        if changed:
            with open(article, "w+") as f:
                f.write(frontmatter.dumps(post))

    except ParserError:
        pass
        print(f"{article} raised a ParserError")
    except ValueError:
        pass
        print(f"{article} raised a ValueError")


articles = {}
for article in pages.glob("**/*.md"):
    default = {"cover": "", "title": ""}
    try:
        fm = {**default, **frontmatter.load(article).to_dict()}
    except ParserError:
        fm = default
    except ValueError:
        fm = default

    articles[article] = fm

article_stems = {page.stem for page in pages.glob("**/*.md")}
image_stems = {page.stem for page in static.glob("**/*.png")}

missing_stems = article_stems - image_stems
missing_covers = {
    article: articles[article] for article in articles if article.stem in missing_stems
}
print(f"{len(missing_covers)} articles have missing covers")

cover_futures = []
for cover in missing_covers:
    title = articles[cover]["title"]
    if title != "":
        cover_futures.append(
            make_cover(title=articles[cover]["title"], path=cover.stem)
        )

while not all([future.done() for future in cover_futures]):
    print(f"{sum([future.done() for future in cover_futures])} complete")
    time.sleep(1)

overlay_futures = []
for cover in articles:
    make_theme(cover.stem)

while not all([future.done() for future in overlay_futures]):
    print(
        f"{sum([future.done() for future in overlay_futures])}/{len(overlay_futures)} themes complete"
    )
    time.sleep(1)
