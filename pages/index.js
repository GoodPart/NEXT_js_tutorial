import Link from 'next/link';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout/layout';

// import Header from '../components/header';

import NavLayout from '../components/Layout/NavLayout';
// import styles from '../styles/Home.module.css';
// import utilStyles from '../styles/utils.module.css';

//less 예시
// import '../styles/styles.less';
const auth = false;

// const PostLink = props => {
//   return (
//     <li>
//       <Link href={`/post?title=${props.title}`}>
//         <a>{props.title}</a>
//       </Link>
//     </li>
//   );
// };

const PostLink = props => {
  console.log('props', props);
  return (
    <li>
      <Link href="/p/[id]" as={`/p/${props.id}`}>
        <a>{props.id}</a>
      </Link>
    </li>
  );
};

export default function Home() {
  return (
    <>
      <Head>
        <title>메인입니다.</title>
      </Head>
      <NavLayout auth={auth} />
      <Layout>
        <p>안뇽</p>
        <ul>
          <PostLink id="Hello-Nextjs" />
          <PostLink id="Learn-Nextjs-is-awesome" />
          <PostLink id="Deploy-apps-with-Zeit" />
        </ul>
      </Layout>
    </>
  );
}
