import React from 'react'
import Layout from '../components/layout'
import SubscribeForm from '../components/SubscribeForm'

export default function TestPage() {
    return (
        <Layout include_subscribe={false}>
            <SubscribeForm />
        </Layout>
    )
}
