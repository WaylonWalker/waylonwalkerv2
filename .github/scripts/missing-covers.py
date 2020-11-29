#!python
# coding: utf-8

import frontmatter
from yaml.parser import ParserError
from pathlib import Path
from cover import make_cover
import time


pages = Path("../../src/pages")
static = Path("../../static")

# stem_cover = [get_stem_cover(page) for page in  pages.glob('**/*.md')]

articles = {}
for article in pages.glob("**/*.md"):
    default = {"cover": "", "title": ""}
    try:
        fm = {**default, **frontmatter.load(article).to_dict()}
    except ParserError:
        fm = default
    except ValueError:
        fm = default

    articles[article.stem] = fm

article_stems = {page.stem for page in pages.glob("**/*.md")}
image_stems = {page.stem for page in static.glob("**/*.png")}

missing_covers = article_stems - image_stems

cover_futures = []
for cover in missing_covers:
    title = articles[cover]["title"]
    if title != "":
        cover_futures.append(make_cover(title=articles[cover]["title"], path=cover))

while not all([future.done() for future in cover_futures]):
    time.sleep(1)
