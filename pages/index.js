import Link from 'next/link';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
// import styles from '../styles/Home.module.css';
// import utilStyles from '../styles/utils.module.css';

//less 예시
import '../styles/styles.less';

export default function Home() {
  return (
    <>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section>
          <p className="example">[Your Self Introduction]</p>
          <p>
            (This is a sample website - you’ll be building a site like this on{' '}
            <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
          </p>
        </section>
      </Layout>
    </>
  );
}
