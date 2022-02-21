import '../styles/globals.scss'
import Layout from "../components/layout/layout/layout"
import { useDarkThemeListener } from "../lib/eventListeners"
import NextNProgress from "nextjs-progressbar"
import Head from "next/head"
import { useState } from "react"

function MyApp({Component, pageProps}) {
  const [darkTheme, setDarkTheme] = useState(false)

  useDarkThemeListener(setDarkTheme)

  return (
    <Layout>
      <Head>
        <meta name="theme-color" content={darkTheme ? '#ffe000' : '#232323'}/>
      </Head>
      <NextNProgress color={darkTheme ? '#232323' : '#ffe000'}/>
      <Component {...pageProps} />
    </Layout>)
}

export default MyApp
