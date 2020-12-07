import { useRouter } from 'next/router';
import Layout from '../components/Layout/layout';
import Head from 'next/head';

const Page = () => {
  const router = useRouter();

  return (
    <Layout>
      <Head>
        <title>{router.query.title}</title>
      </Head>
      <h1>{router.query.title}</h1>
      <p>this is blog post content.</p>
    </Layout>
  );
};

export default Page;
