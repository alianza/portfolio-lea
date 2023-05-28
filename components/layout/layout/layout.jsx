import Head from "next/head"
import Header from "../header/header"
import Footer from "../footer/footer"
import { useState } from "react"
import localStorageService, { darkThemeKey } from "../../../lib/services/localStorageService"
import utils from "../../../styles/utils.module.scss"
import { useDarkTheme } from "../../../lib/eventListeners"
import dynamic from "next/dynamic"
import config from "../../../content/config.json"
const NextNProgress = dynamic(() => import('nextjs-progressbar'), { loading: () => <div /> })

export default function Layout({ children}) {
    const [darkTheme, setDarkTheme] = useState(false)

    useDarkTheme(setDarkTheme, darkTheme)

    const toggleTheme = () => { localStorageService.setKeyValue(darkThemeKey, !darkTheme); setDarkTheme(!darkTheme) }

    return (
    <div id="app">
        <Head>
            <title>{config.siteTitle}</title>
            <link rel="icon" href="/favicon.ico"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta name="description" content={config.siteDescription}/>
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
            <link rel="manifest" href="/site.webmanifest"/>
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#51a493"/>
            <meta name="msapplication-TileColor" content="#da532c"/>
            <meta name="theme-color" content={darkTheme ? '#000' : '#fff'}/>
            <meta name='application-name' content={config.siteTitle} />
            <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover' />
        </Head>

        <Header title={config.siteHeading} darkTheme={darkTheme} onThemeButtonClick={toggleTheme} />

        <main id="content" className={utils.content}>{children}</main>

        <Footer accounts={config.accounts} darkTheme={darkTheme} onThemeButtonClick={toggleTheme} />

        <NextNProgress color={darkTheme ? '#fff' : '#000'}/>

    </div>)
}
