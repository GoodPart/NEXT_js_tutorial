import Head from 'next/head';
import Layout from '../../components/Layout/Layouts/default' ;
import './index.less';

export default function Data({ title }) {
    return (
        <Layout
        title={title}
         >
            {title}입니다
        </Layout>
    )
}