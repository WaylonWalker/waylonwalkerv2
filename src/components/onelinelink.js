const oneLineLinkCardStyle = `

.onelinelink + blockquote {
  position: relative;
  left: 2rem;
  background: rgba(0, 0, 0, .2);
  margin: -6rem auto 1rem;
  padding-top: 3rem;
  border: 1px solid goldenrod;
  border-top: 2px solid goldenrod;

  max-width: 300px;
  @media (max-width: 350px) {
  left: 0rem;
  margin-left: .4rem;
  margin-right: .4rem;
  }
  @media (min-width: 800px) {
    max-width: 600px;
  }
  @media (min-width: 900px) {
    max-width: 700px;
  }
  @media (min-width: 1000px) {
    max-width: 800px;
  }
  border-radius: 15px/45px;
  display: block;
  }

}

.onelinelink {
  position: relative;
  z-index: 2;
  margin: 4rem;
  overflow: hidden;
  display: flex;
  border: 2px solid rgba(255, 50, 50, .1);
  background: rgba(255, 50, 50, .015);
  background: #262236;
  text-decoration: none;
  border-radius: 8px;
  max-height: 126px;

  @media (max-width: 800px) {
    flex-direction: column;
    max-height: 800px;
    max-width: 300px;
    margin: 4rem auto;

  }

  h2 {
    top: -1.2rem;
    postition: relative;
    margin: 0;
    padding: 0;
    font-size: .8rem;
    font-weight: 400;

  }

  .right {
  width: 100%;
    padding: 5px 15px;
  }
  .description {
    font-size: 1rem;
    line-height: 1.2rem;
    height: calc(100% - 31px - 1rem);
    padding: 0;
    padding-bottom: 1rem;
    padding-top: .1rem;
    margin: 0;
  }
  .url {
    padding-right: 30px;
    color: rgba(255, 255, 255, .1);
    text-align: right;
    position: relative;
    z-index: 2;
    background: #262236;
  }
  
  img {
    max-width: 300px;
    max-height: 126px;
    padding: 0;
    margin: 0;
    border-radius: 8px 0 0 8px;
  }
  .read-more {
    font-size: .6rem;
    color: rgba(255, 255, 255, .08);
  }
}
`
const getDescription = (url) => (
  fetch(url)
    .then(r => r.text())
    .then(html => {
      let parser = new DOMParser()
      let doc = parser.parseFromString(html, 'text/html')
      let meta = doc.querySelectorAll('meta')
      const description = [...meta].filter(m => m.name === 'og:description')[0].content
      const image = [...meta].filter(m => m.name === 'og:image')[0]?.content
      const sm_image = [...meta].filter(m => m.name === 'og:sm_image')[0]?.content
      const url = [...meta].filter(m => m.name === 'og:url')[0]?.content
      const title = [...meta].filter(m => m.name === 'title')[0]?.content
      return {description, image, url, title, sm_image}
      })
)


const oneLineLinkCard = (url) => {
  return getDescription(url).then( meta => 
`<a class="onelinelink" href=${meta.url}>
  <img
    src='${meta.sm_image ? meta.sm_image : meta.image ? meta.image : ''}'
  >
  <div class="right">
    <h2>${meta.title ? meta.title : ''}</h2>
    <p class='description'>
      ${meta.description ? meta.description : ''}
    </p>
    <p class="url">
       <span class='read-more'>read more</span>  waylonwalker.com
    </p>
  </div>

</a>
  `
  )
}

const oneLineLinks = () => {
  const linkText = [...document.querySelectorAll('.post-body p a')].map(p => p.innerText)
  const paragraphs = document.querySelectorAll('.post-body p') //

  const regex = /^https?:\/\/waylonwalker\.com\//;
  const shouldTransform = (url) => regex.test(url);


  const anchorOnly = [...paragraphs].filter(p => linkText.includes(p.innerText) && p.childElementCount === 1)//.map(p => p.firstElementChild)

  anchorOnly
    .filter( p => shouldTransform(p.firstElementChild.href))
    .map(async p => p.outerHTML = await oneLineLinkCard(p.firstElementChild.href))

}

export { oneLineLinks, oneLineLinkCardStyle }
