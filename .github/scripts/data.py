#!python
"""

example usage, edit posts that have a tag

alias blog=~/.git/waylonwalkerv2/.github/scripts/data.py
nvim $(blog --tag $(blog --tags | fzf) | fzf)

"""
import frontmatter
from pathlib import Path
from yaml.parser import ParserError


def get_posts():
    articles = []
    pages = Path("../../src/pages")
    for article in pages.glob("**/*.md"):
        default = {
            "cover": "",
            "title": "",
            "tags": [],
            "status": "draft",
            "templateKey": "",
            "path": article,
        }
        try:
            post = {**default, **frontmatter.load(article).to_dict()}
        except ParserError:
            post = default
        except ValueError:
            post = default

        if type(post["tags"]) != list:
            post["tags"] = [post["tags"]]

        if "status" not in post.keys():
            post["status"] = "draft"
        if "published" not in post.keys():
            post["published"] = True if post["status"] == "published" else False
        if "cover" not in post.keys():
            post["cover"] = ""
        if post["cover"] == "":
            post["cover"] = f"/static/{article.stem}.png"
        if "cover_image" not in post.keys():
            post["cover_image"] = (
                ("https://waylonwalker.com/" + post["cover"])
                .replace("static", "")
                .replace("//", "")
                .replace("//", "")
            )
        if "canonical_url" not in post.keys():
            post["canonical_url"] = f"https://waylonwalker.com/{article.stem}"
        if "description" not in post.keys():
            post["description"] = ""
        if "date" not in post.keys():
            post["date"] = ""
        # if post["description"] == "":
        #     html = markdown(post['content'])
        #     # sanitize multispaces, line breaks, and carriage returns
        #     description = " ".join(
        #         BeautifulSoup(html, "html.parser")
        #         .text[:120]
        #         .replace("\n", " ")
        #         .replace("\r", " ")
        #         .split()
        #     )

        #     post["description"] = description

        # expanded_content = "\n".join(
        #     [expand_line(line) for line in post['content']split("\n")]
        # )
        # if postl["content"] != expanded_content:
        #     post["content"] = expanded_content

        # if "xmas2020" not in post["cover"]:
        #     post["cover"] = post["cover"].replace(".png", "-xmas2020.png")

        articles.append(post)

    return articles


def create_card(post):
    return f"""
<li class='post'>
  <a href="{post['canonical_url']}">
  <h2>{post['title']}</h2></a>
  <p>{post['description']}</p>
  <p class='date'>{post['date']}</p>
</li>
"""


def create_index(status=None):
    posts = [post for post in get_posts()]
    if status is not None:
        posts = [post for post in posts if post["status"] == status]
    return [create_card(post) for post in posts]


if __name__ == "__main__":
    data = get_posts()
    import sys
    import itertools

    if "--create-index" in sys.argv:
        print("".join(create_index()))

    if "--tags" in sys.argv:
        print(
            "\n".join(
                [
                    tag
                    for tag in set(
                        itertools.chain.from_iterable(
                            [post["tags"] for post in data if post["tags"]]
                        )
                    )
                    if tag
                ]
            )
        )
    if "--tag" in sys.argv:
        tags = set(sys.argv[sys.argv.index("--tag") + 1 :])
        print("\n".join([post for post in data if set(post["tags"]) & tags]))

    if "--drafts" in sys.argv:
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
