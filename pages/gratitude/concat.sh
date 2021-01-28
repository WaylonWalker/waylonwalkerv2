cat $( ls -r *.md ) | pandoc -o content.html
grep -v "<style>.*style>" content.html > tmp.html && mv tmp.html content.html
sassc gratitude.sass > gratitude.css
pug index.pug
