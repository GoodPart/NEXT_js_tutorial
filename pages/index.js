import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { countPlusAction, countMinusAction } from "../reducers/count";

import Link from "next/link";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
// import styles from '../styles/Home.module.css'

import utilStyles from "../styles/utils.module.less";

const Home = () => {
  const dispatch = useDispatch(); // dispatch를 사용하기 쉽게 하는 hook
  const count = useSelector((state) => state.count); // store의 state를 불러오는 hook   store의 state 중에서 count의 state를 불러온다.

  const onClickPlus = useCallback(() => {
    // useCallback은 최적화를 위한 hook이다 이 앱에선 굳이 사용 안 해도 되는데 습관이 들면 좋기에 사용.
    dispatch(countPlusAction());
  }, []);

  const onClickMinus = useCallback(() => {
    dispatch(countMinusAction());
  }, []);

  return (
    <div>
      카운트 : {count}
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinus}>-</button>
    </div>
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
