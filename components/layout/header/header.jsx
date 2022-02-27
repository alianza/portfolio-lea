import React, { useEffect } from "react"
import utils from '../../../styles/utils.module.scss'
import NavLink from "../../navLink/navLink"
import styles from "./header.module.scss"
import DarkModeButton from "../../darkModeButton/darkModeButton"
import Hamburger from "../../svg/hamburger"
import Close from "../../svg/close"

export default function Header({ title, onThemeButtonClick, darkTheme }) {
  const [isActive, setIsActive] = React.useState(false)

  useEffect(() => {
    isActive ? document.body.classList.add('no-scroll') : document.body.classList.remove('no-scroll')
  }, [isActive])

  return (
    <header id="header" className={utils.header}>
      <div className={utils.controls}>
        <h1 className={utils.title}>{title}</h1>
        <button onClick={() => setIsActive(!isActive)} className={`transition-transform hover:scale-110 active:scale-95 ${utils.menuButton}`}>{isActive ? <Close/> : <Hamburger/>}</button>
      </div>
      <nav onClick={() => setIsActive(false)} className={`${styles.navigation} ${isActive ? styles.active : ''}`}>
        <NavLink label="Home" href="/" />
        <NavLink label="About" href="/about" />
        <NavLink label="Portfolio" href="/portfolio" />
        <NavLink label="Articles" href="/articles" />
        <NavLink label="Contact" href="/contact" />
        <DarkModeButton onButtonClick={onThemeButtonClick} darkTheme={darkTheme} className={styles.darkModeButton}/>
      </nav>
    </header>
    )
}
