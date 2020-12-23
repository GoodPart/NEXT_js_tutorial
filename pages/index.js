import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  countPlusAction,
  countMinusAction,
} from "../redux/_action/counter_action";

import Link from "next/link";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
// import styles from '../styles/Home.module.css'

import utilStyles from "../styles/utils.module.less";

import CounterContainer from "../components/CounterContainer";

const Home = () => {
  return (
    // <div>
    <CounterContainer />
    // </div>
  );
};

export default Home;

// export default function Home() {
//   return (
//     <Layout home>
//       <Head>
//         <title>{siteTitle}</title>
//       </Head>
//       <section className={utilStyles.headingMd}>
//         <p>[Your Self Introduction]</p>
//         <p>
//           (This is a sample website - you’ll be building a site like this on{' '}
//           <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
//         </p>
//       </section>
//     </Layout>
//   )
// }
