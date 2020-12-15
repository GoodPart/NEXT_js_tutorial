import Head from 'next/head';
import Layout from '../../components/Layout/Layouts/default' ;
import './index.less';

export default function About({ title }) {
    return (
        <Layout
        title={title}
         >
            about입니다
        </Layout>
    )
}