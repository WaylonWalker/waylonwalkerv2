from string import Template
from pathlib import Path

slugs = [p.name.replace('.png', '') for p in Path().glob('*.png') if '-rm.png' not in p.name]

with open('template') as f:
    template = Template(f.read())

def render_file(slug):
    content = template.substitute(slug=slug, title='Python Basics | ' + slug.replace('-', ' ').title())
    with open('pb-' + slug + '.md', 'w') as f:
        f.write(content)


for slug in slugs:
    render_file(slug)
