#!python
# coding: utf-8
"""
This is a simple script that generates og cover images for me.  It not very
flexible and would need modified for anyone else, the point is it works for me

cover expexts two arguments the first for the title to show up on the image,
and the second is the filename of the image.

cover "My Fancy New Post" my-fancy-new-post

"""


from PIL import Image, ImageDraw, ImageFont
import background


def get_font(draw, title, size=250):
    font = ImageFont.truetype("waterlilly-script.ttf", size=size)
    if draw.textsize(title, font=font)[0] > 800:
        return get_font(draw, title, size - 10)
    return font


@background.task
def make_cover(title, path):
    image = Image.open("../../static/cover-template.png")
    # story_im = Image.open("../../static/new-post-template.png")
    # story_draw = ImageDraw.Draw(story_im)

    draw = ImageDraw.Draw(image)

    font = get_font(draw, title)

    color = "rgb(255,255,255)"
    padding = (200, 100)
    bounding_box = [padding[0], padding[1], 1000 - padding[0], 420 - padding[1]]
    x1, y1, x2, y2 = bounding_box
    w, h = draw.textsize(title, font=font)
    x = (x2 - x1 - w) / 2 + x1
    y = (y2 - y1 - h) / 2 + y1
    draw.text((x, y), title, fill=color, font=font, align="center")
    image.save(f"../../static/{path}.png")
    # future state may include story images, but not looking the best now
    # cover_im = Image.open(f"{path}.png").rotate(4)

    # story_im.paste(cover_im, (20, 800), cover_im)
    # story_im.save(
    #     f"{path}-story.png",
    # )


if __name__ == "__main__":
    import sys

    title = sys.argv[1]
    path = sys.argv[2]
    make_cover(title, path)
