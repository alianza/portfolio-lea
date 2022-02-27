import Head from "next/head"
import Header from "../header/header"
import Footer from "../footer/footer"
import { useEffect, useState } from "react"
import localStorageService from "../../../lib/services/localStorageService"
import useTheme from "../../../lib/theme"
import { useDarkThemeListener, useEventListeners } from "../../../lib/eventListeners"
import NextNProgress from "nextjs-progressbar"
import utils from "../../../styles/utils.module.scss"

const darkThemeKey = 'darkTheme'

export default function Layout({ site_title, site_description, accounts, children}) {
    const [darkTheme, setDarkTheme] = useState(false)

    useDarkThemeListener(setDarkTheme)

    useEffect(() => { setDarkTheme(localStorageService.getValue(darkThemeKey)) })

    useTheme(darkTheme)

    useEventListeners()

    const toggleTheme = () => { localStorageService.setKeyValue(darkThemeKey, !darkTheme); setDarkTheme(!darkTheme) }

    return (
    <div id="app">
        <Head>
            <title>{site_description}</title>
            <link rel="icon" href="/favicon.ico"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta name="description" content="Team Rockstars IT Tech Case statically rendered with Next.js"/>
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
            <meta name="msapplication-TileColor" content="#da532c"/>
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
            <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover' />
            <link rel="manifest" href="/manifest.json"/>
            <meta name="theme-color" content={darkTheme ? '#000' : '#fff'}/>
        </Head>

        <Header title={site_title} darkTheme={darkTheme} onThemeButtonClick={toggleTheme} />

        <main id="content" className={utils.content}>{children}</main>

        <Footer accounts={accounts} darkTheme={darkTheme} onThemeButtonClick={toggleTheme} />

        <NextNProgress color={darkTheme ? '#fff' : '#000'}/>

    </div>)
}
