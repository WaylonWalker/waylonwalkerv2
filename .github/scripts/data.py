#!python3
"""

example usage, edit posts that have a tag

alias blog=~/.git/waylonwalkerv2/.github/scripts/data.py
nvim $(blog --tag $(blog --tags | fzf) | fzf)

"""
import frontmatter
from pathlib import Path
from yaml.parser import ParserError


def get_data():
    articles = {}
    pages = Path("../../src/pages")
    for article in pages.glob("**/*.md"):
        default = {"cover": "", "title": "", "tags": []}
        try:
            fm = {**default, **frontmatter.load(article).to_dict()}
        except ParserError:
            fm = default
        except ValueError:
            fm = default

        if type(fm["tags"]) != list:
            fm["tags"] = [fm["tags"]]

        articles[article] = fm
    return articles


if __name__ == "__main__":
    data = get_data()
    import sys
    import itertools

    if "--tags" in sys.argv:
        print(
            "\n".join(
                [
                    tag
                    for tag in set(
                        itertools.chain.from_iterable(
                            [data[post]["tags"] for post in data if data[post]["tags"]]
                        )
                    )
                    if tag
                ]
            )
        )
    if "--tag" in sys.argv:
        tags = set(sys.argv[sys.argv.index("--tag") + 1 :])
        print("\n".join([str(post) for post in data if set(data[post]["tags"]) & tags]))

    else:
        print(len(data))
