
import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import PropTypes from 'prop-types'
// import { graphql, Link } from 'gatsby'
import domtoimage from 'dom-to-image'
// import html2canvas from 'html2canvas'
// import pdfmake from 'pdfmake'
// import Img from 'gatsby-image'
import { FiCamera, FiTwitter } from 'react-icons/fi'

const TipWrapper = styled.div`
height: max(90vh, 512px);
width: max(100vw, 1024px);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: relative;
margin: -150px auto;

.tag {
  margin: 0;
  margin-right: 1rem;
}



.btn {
    margin-top: 4rem;
    border: none;
    display: block;
    background: white;
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    padding: 1rem;
    border-radius: 5px;
    background: linear-gradient(120deg, hsla(323deg, 100%, 90%, 1) 0%, #D68FBB 50%);
    font-size:1.5rem;
    color: #2B2E37;
}

a.btn {
  transform: rotate(2deg);
}

.camera {
  position: absolute;
  top: 200px;
  /* right: 20px; */
  margin-left: 512px;
  transform: rotate(5deg);
}

.twitter {
  position: absolute;
  display: block;
  top: calc(200px + 512px);
  /* right: 20px; */
  margin-left: 512px;
  transform: rotate(-3deg) !important;
}

`


const TipStyles = styled.div`
font-size: 1.2rem;
overflow: hidden;
word-wrap: break-word;
p {
  font-size: 2rem;
  line-height: 2.8rem;
  padding: 0 2rem;
}
height: min(100vh, 512px);
width: min(100vw, 1024px);
background: linear-gradient(81deg,rgba(40,44,52,1) 0%,rgba(58,46,61,1) 100%);
position: relative;
#halftone-overlay {
  width: 100%;
  height: 100%;
  position: absolute;
  background-image: url('/halftone-simple-alpha.png');
  background-repeat: no-repeat;
  background-size: cover;
  top: -250px;
  left: -200px;
  transform: rotate(-25deg);
  /* opacity: 0.1; */
}
#blob-overlay {
  width: 100%;
  height: 50%;
  img{
  width: 100%;
  height: 70%;
  right: 0px;
  position: absolute;
  background-repeat: no-repeat;
  background-size: cover;
  filter: blur(2px);
  }
}

border: 5px solid black;
text-align: center;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
strong {
  font-size: 2.2rem; 
  color: #DAA520;
  display: inline-block;
  transform: rotate(-10deg);
}

em {
  color: #FF66C4;
  display: inline-block;
  transform: rotate(2deg);
}

.footer {
  display: flex;
  width: 600px;
  justify-content: space-between;
  align-items: center;
}
img.after-image {
  max-width: 120px;
  max-height: 120px;
  margin: -60px;
}

`

class Tip extends React.Component {
  download = (file) => {
    domtoimage.toJpeg(document.getElementById(`tip-${file}`), { quality: 0.98 })
      .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = `ww-hot-tip-${file}.jpeg`;
        link.href = dataUrl;
        link.click();
      });
  }

  // componentDidMount = async () => {
  //   let domparser = new DOMParser()
  //   let tipEl = document.getElementById('tip')
  //   html2canvas(tipEl)
  //     .then(canvas => { document.getElementById('canvas').appendChild(canvas) })
  //     .then(canvas => {
  //       const el = document.getElementById('canvas').querySelector('canvas')
  //       console.log(el)
  //       const data = el.toDataURL()
  //       const pdfExportSetting = {
  //         content: [
  //           {
  //             image: data,
  //             width: 1024,
  //             height: 512,
  //             margin: [0, 0, 0, 0]
  //           }
  //         ]
  //       };
  //       pdfmake.createPdf(pdfExportSetting).download('test.pdf')

  //     })


  // }


  render() {
    const {
      html,
      frontmatter,
      fileAbsolutePath
    } = this.props

    const { date, tags, afterImage } = frontmatter
    let domparser = new DOMParser()
    const doc = domparser.parseFromString(html, 'text/html')
    const content = doc.querySelector('html').innerText
    const p1 = doc.querySelector('p').innerText
    const filePath = fileAbsolutePath.split('/')
    const file = filePath[filePath.length - 1].slice(0, -3)
    const link = `https://waylonwalker.com/hot-tips/${file}`
    const tweetLink = `https://twitter.com/intent/tweet?text=${encodeURIComponent(p1) + '%0A%0A' + link}`

    return (
      <>
        <Helmet
          meta={[
            { name: 'og:title', content: p1 + ' | Waylon Walker' },
            { name: 'og:article:published_time', content: date },
            { name: 'og:article:modified_time', content: date },
            { name: 'og:description', content: content },
            { name: 'description', content: content },
            { name: 'twitter:title', content: p1 + ' | Waylon Walker' },
            // { name: 'twitter:image', content: 'https://www.waylonwalker.com' + twitterImage },
            { name: 'twitter:description', content: content },
            // { name: 'og:image', content: 'https://www.waylonwalker.com' + cover.src },
          ]}

        >
          <title>{p1}</title>
        </Helmet>
        <TipWrapper id='tip-wrapper'>

          <TipStyles id={`tip-${file}`}>
            <div id='halftone-overlay' />
            {/* <div id='blob-overlay' ><img src='/light-blob-alpha2.png' alt='a hazy background blob effect' /></div> */}
            <div className="tip-content" dangerouslySetInnerHTML={{ __html: html }} />
            <div className='footer'>
              <a href={`/hot_tips/${file}`} title='link to tip'>{link}</a>
              <img className='after-image' src={afterImage} alt='footer logo inside of the tip' />
            </div>
          </TipStyles>
          <button className='btn camera' title='download an image of this tip' onClick={() => this.download(`${file}`)} ><FiCamera /></button>
          <div className='tags'>{tags.map(tag => <a ref={`https://waylonwalker.com/hot-tips/tag/${tag}`} className="tag" >{tag}</a>)}</div>
          <a className='btn twitter' href={tweetLink} title='share this tip on twitter'> <FiTwitter /> </a>
        </TipWrapper>
        <div id="canvas"></div>
      </>
    )
  }
}

Tip.propTypes = {
  date: PropTypes.string,
  fileAbsolutePath: PropTypes.string,
  tags: PropTypes.string,
  content: PropTypes.string,
  afterImage: PropTypes.string,
}






export default Tip



