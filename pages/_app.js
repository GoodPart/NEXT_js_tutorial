import '../styles/globals.less'

import '../styles/test.less'
// import Header from '../components/Layout/Header/header'
import Navbar from '../components/Layout/navigation/Navbar'
import Head from 'next/head';
import Footer from '../components/Layout/footer/footer'


import { faCheckSquare, faSpinner } from "@fortawesome/free-solid-svg-icons"
import { faSquare } from "@fortawesome/free-regular-svg-icons"

function MyApp({ Component, pageProps }) {
  return (
    <div className="wrapper">
      <Head>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" />
      </Head>
      {/* <Header /> */}
      <Navbar />
      <div className="contents">
      <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  )
}

export default MyApp
