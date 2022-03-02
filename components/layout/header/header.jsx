import React, { useEffect } from "react"
import utils from '../../../styles/utils.module.scss'
import NavLink from "../../navLink/navLink"
import styles from "./header.module.scss"
import DarkModeButton from "../../darkModeButton/darkModeButton"
import Hamburger from "../../svg/hamburger"
import Close from "../../svg/close"
import Link from "next/link"

export default function Header({ title, onThemeButtonClick, darkTheme }) {
  const [menuOpen, setMenuOpen] = React.useState(false)

  useEffect(() => {
    menuOpen ? document.body.classList.add('no-scroll') : document.body.classList.remove('no-scroll')
  }, [menuOpen])

  return (
    <header id="header" className={utils.header}>
      <div className={utils.controls}>
        <Link href="/"><a className="no-underline"><h1 className={utils.title}>{title}</h1></a></Link>
        <button onClick={() => setMenuOpen(!menuOpen)} className={`transition-transform hover:scale-110 active:scale-95 ${utils.menuButton}`}>
          { menuOpen ? <Close/> : <Hamburger/> }
        </button>
      </div>
      <nav className={`${styles.navigation} ${menuOpen ? styles.active : ''}`}>
        <NavLink label="Home" href="/" onClick={() => setMenuOpen(false)} />
        <NavLink label="About" href="/about" onClick={() => setMenuOpen(false)} />
        <NavLink label="Portfolio" href="/portfolio" onClick={() => setMenuOpen(false)} />
        <NavLink label="Articles" href="/articles" onClick={() => setMenuOpen(false)} />
        <NavLink label="Contact" href="/contact" onClick={() => setMenuOpen(false)} />
        <DarkModeButton onButtonClick={onThemeButtonClick} darkTheme={darkTheme} className={styles.darkModeButton}/>
      </nav>
    </header>
    )
}
