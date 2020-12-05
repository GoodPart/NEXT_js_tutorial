import Link from 'next/link';
import Layout from '../../components/layout';
import Head from 'next/head'

export default function first() {
    return (
        <Layout>
            <h1>first</h1>
        <h2>
            <Link href="/">
            <a>go Back home</a>
            </Link>
        </h2>
        </Layout>
    )
}