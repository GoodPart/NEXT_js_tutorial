import { useRouter } from 'next/router';
import Layout from '../../components/Layout/layout';

export default function Post() {
  const router = useRouter();
  console.log('[id]', router);
  return (
    <Layout>
      <h1>{router.query.id}</h1>
      <p>This is the blog post content.</p>
    </Layout>
  );
}
