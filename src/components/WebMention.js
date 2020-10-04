import React from 'react'
import styled from 'styled-components'
import fetch from 'node-fetch'
import { FiHeart, } from 'react-icons/fi'

const WebMentionStyle = styled.div`
margin-top: 4rem;
margin-bottom: 4rem;
h2 {
    text-align: center;
}

.likes {
    font-size: 1.2rem;
    color: hsla(323, 47%, 70%, 1);
}
`

const WebMentionList = styled.ol`
list-style-type: none;
margin: 1rem auto;
padding: 0;
color: rgba(255, 255, 255, 0.85);
max-width: 500px;
min-height: 4rem;

a.mention-link {
    color: rgba(255, 255, 255, 0.85);
    display: block;
    height: 100%;
    width: 100%;
    display: flex;
    min-height: 60px;
    align-items: center;
    img {
        align-self: flex-start;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin: .4rem .8rem .4rem .4rem;
        padding: 0;
    }

    a{
        color: rgba(255, 255, 255, 0.85);
    }
    border: 1px solid #D68FBB;
    background-color: rgba(214, 143, 187, .1);
    border-radius: 5px;
    margin: 1rem;
    padding: .2rem;
    .content {
        padding-top: .2rem;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
    }
    a.mention-link {
        padding: 1rem 1rem .2rem;
        display: block;
        justify-self: flex-end;
        align-self: flex-end;
    }
}

`


export default class WebMention extends React.Component {
    constructor(props) {
        super(props)
        // url: 'https://waylonwalker.com/blog/reusable-bash',
        this.state = {
            url: props.url,
            loading: true,
            data: null,
            length: 0
        }
    }
    getWebmention = async (url) => await fetch('https://webmention.io/api/mentions?target=' + url).then(response => response.json()).then(r => r['links'])

    getWebmentions = async (url) => {
        const cleanedUrl = url.replace(/\/$/, '')
        const data_no_slash = await this.getWebmention(cleanedUrl)
        const data_slash = await this.getWebmention(cleanedUrl + '/')
        let data = [...data_no_slash, ...data_slash,]
        // console.log('webmentions')
        // console.log(data)
        // console.log(data.length)

        data.map(m => m.activity.sentence_html.replace(this.state.url, ''))
        // if desired to split likes and replies later use activity.type
        // data['likes'] = data['all'].filter(r => r.activity.type === 'like')
        // data['replies'] = [...data['all']].filter(r => r.activity.type !== 'like')
        return data
    }

    componentDidMount = async () => {

        const data = await this.getWebmentions(this.state.url)
        this.setState({ data: data, length: data.length, loading: false })
    }

    render() {
        // const { url, loading, data } = this.state
        return (
            <WebMentionStyle>
                <h2 className="no-link">
                    WebMentions
                    <span className="likes">&nbsp;<FiHeart />{this.state.length}</span>
                </h2>
                <p>tweet about this post and it will show up here.</p>

                <WebMentionList>
                    {this.state.loading ? 'loading' : this.state.data.map((m, i) => <Mention key={i} mentionData={m} url={this.state.url} />)}
                </WebMentionList>

            </WebMentionStyle>
        )
    }

}

const Mention = ({ mentionData, url }) => (
    <li>
        <a className='mention-link no-decoration' href={mentionData.data.url}>
            {mentionData.data.author ? <img alt='authors profile' src={mentionData.data.author.photo} /> : ''}
            <div className="content">
                <div dangerouslySetInnerHTML={{ __html: mentionData.activity.sentence_html.split(`<a href="${url}">${url}</a>`).join('').split(`<a href="${url}/">${url}/</a>`).join('').split(" replied '").join("<br><br> '").split('to a tweet').join('').split('favorited a tweet').join('<br><br>&nbsp&nbsp&nbsp&nbspfavorited a tweet') }} />
            </div>
        </a>
    </li>
)
