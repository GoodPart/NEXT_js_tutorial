import Head from 'next/head';
// import layoutModuleStyle from './layout.module.css'
// import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'koreaCodingKing';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, home }) {
  return (
    <div>{home ? <>{children}</> : <>홈이 아니네요</>}</div>
    // <div className={layoutModuleStyle.container}>
    //   <Head>
    //     <link rel="icon" href="/favicon.ico" />
    //     <meta name="description" content="Learn how to build a personal website using Next.js" />
    //     <meta
    //       property="og:image"
    //       content={`https://og-image.now.sh/${encodeURI(
    //         siteTitle
    //       )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
    //     />
    //     <meta name="og:title" content={siteTitle} />
    //     <meta name="og:description" content="설명" />
    //     <meta name="twitter:card" content="summary_large_image" />
    //   </Head>
    //   {/*header*/}
    //   <header className={layoutModuleStyle.header}>
    //     {home ? (
    //       <>
    //         <img
    //           src="/images/profile.jpg"
    //           className={`${layoutModuleStyle.headerHomeImage} ${utilStyles.borderCircle}`}
    //           alt={name}
    //         />
    //         <h1 className={utilStyles.heading2Xl}>{name}</h1>
    //       </>
    //     ) : (
    //       <>
    //         <Link href="/">
    //           <a>
    //             {/* <img
    //               src="/images/profile.jpg"
    //               className={`${layoutModuleStyle.headerImage} ${utilStyles.borderCircle}`}
    //               alt={name}
    //             /> */}
    //           </a>
    //         </Link>
    //         <h2 className={utilStyles.headingLg}>
    //           <Link href="/">
    //             <a className={utilStyles.colorInherit}>{name}</a>
    //           </Link>
    //         </h2>
    //       </>
    //     )}
    //   </header>
    //   <main>{children}</main>
    //   {!home && (
    //     <div className={layoutModuleStyle.backToHome}>
    //       {console.log(home)}
    //       <Link href="/">
    //         <a>← Back to home</a>
    //       </Link>
    //     </div>
    //   )}
    // </div>
  );
}
