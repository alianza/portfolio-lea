import { useEffect } from "react"
import localStorageService, { darkThemeKey } from "./services/localStorageService"

const useDarkTheme = (setDarkTheme, darkTheme) => {
    let hasThemePreference = false

    useEffect(() => { // Listen for dark theme preference changes and set theme accordingly if preference doesn't exist
        const matchDarkMedia = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)')
        matchDarkMedia?.addEventListener('change', onColorSchemeChange)
        hasThemePreference = localStorageService.hasValue(darkThemeKey)
        hasThemePreference ?
          setDarkTheme(localStorageService.getValue(darkThemeKey)) :
          setDarkTheme(matchDarkMedia.matches)

        return () => matchDarkMedia.removeEventListener('change', onColorSchemeChange)
    }, [])

    useEffect(() => {
        document.body.dataset.theme = darkTheme ? 'dark' : ''
    }, [darkTheme])

    const onColorSchemeChange = ({ matches }) => {
        if (!hasThemePreference) {
            document.body.dataset.theme = matches ? 'dark' : ''
        }
    }
}

const useNetlifyIdentityRedirectHook = () => {
    useEffect(() => {
        if (window.netlifyIdentity) {
            window.netlifyIdentity.on("init", user => {
                if (!user) {
                    window.netlifyIdentity.on("login", () => {
                        document.location.href = "/admin/"
                    })
                }
            })
        }
    }, [])
}

export { useNetlifyIdentityRedirectHook, useDarkTheme }
