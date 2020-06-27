import React from 'react'
import Layout from '../components/layout'
import SubscribeForm from '../components/SubscribeForm'
import Helmet from 'react-helmet'

export default function TestPage() {
    return (
        <Layout include_subscribe={false}>
            <Helmet
                meta={[
                    { name: 'og:title', content: "Waylon Walker's Newsletter" },
                    { name: 'og:image', content: 'https://waylonwalker.com/waylon-walker-newsletter.png' },
                    { name: 'twitter:image', content: 'https://waylonwalker.com/waylon-walker-newsletter.png' },
                    { name: 'twitter:title', content: "Waylon Walker's Newsletter" },
                ]}
            />


            <SubscribeForm />
        </Layout>
    )
}
