from markdown import Extension
from markdown.inlinepatterns import InlineProcessor
from markdown.preprocessors import Preprocessor
from bs4 import BeautifulSoup
import textwrap
import re
import twitter
from markata.hookspec import hook_impl
import requests

RE_ONE_LINE = re.compile("^https://waylonwalker.com/.*")
RE_TWEET = re.compile("^https://twitter.com/.*")

API = twitter.Api()


def expand_line(line):
    """
    Todo: better error message over base exception
    Todo: try except decorator?
    """
    try:
        r = RE_ONE_LINE.match(line)
        if r and " " not in line:
            return get_one_line_link(line)
        r = RE_TWEET.match(line)
        if r and " " not in line:
            html = API.GetStatusOembed(url=line)["html"]
            return html

        return line
    except BaseException as e:
        import warnings

        warnings.warn(f"OneLineLink threw an error\n {e}")

        return line


def get_one_line_link(link):
    r = requests.get(link)
    if r.status_code != 200:
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

    description = description.replace("\n", " ").replace("\r", "")

    return textwrap.dedent(
        f"""
    <div class="onelinelink-wrapper">
        <a class="onelinelink" href="{url}">
            <img style="float: right;" align='right' src="{sm_img}" alt="article cover for {title}"/>
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
    </div>
    """
    )


@hook_impl
def render(markata):
    for article in markata.iter_articles("Expand One Line Links"):
        expanded_content = "\n".join(
            [expand_line(line) for line in article.content.split("\n")]
        )
        article.expanded_content = expanded_content
        article.content = expanded_content
        article.html = article.md.convert(expanded_content)
        article.article_html = article.md.convert(expanded_content)
