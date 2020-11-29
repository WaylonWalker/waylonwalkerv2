#!python
# coding: utf-8

import frontmatter
from yaml.parser import ParserError
from pathlib import Path
from cover import make_cover, make_theme
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
