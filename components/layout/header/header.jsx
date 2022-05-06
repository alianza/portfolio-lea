import React, { useEffect } from "react"
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

  const closeMenu = () => { setMenuOpen(false) }

  return (
    <header id="header" className={styles.header}>
      <div className={styles.controls}>
        <Link href="/"><a className="no-underline"><h1 className={styles.title}>{title}</h1></a></Link>
        <button aria-label={`${menuOpen ? 'close' : 'open'} Menu`}
                onClick={() => setMenuOpen(!menuOpen)}
                className={`${styles.menuButton} transition-transform hover:scale-110 active:scale-95`}>
          {menuOpen ? <Close/> : <Hamburger/>}
        </button>
      </div>
      <nav className={`${styles.navigation} ${menuOpen ? styles.navActive : ''}`}>
        <NavLink label="Home" href="/" exact onClick={closeMenu} />
        <NavLink label="About" href="/about" onClick={closeMenu} />
        <NavLink label="Portfolio" href="/portfolio" onClick={closeMenu} />
        <NavLink label="Articles" href="/articles" onClick={closeMenu} />
        <NavLink label="Blog" href="/blog" onClick={closeMenu} />
        <NavLink label="Contact" href="/contact" onClick={closeMenu} />
        <DarkModeButton onButtonClick={onThemeButtonClick} darkTheme={darkTheme} className={styles.darkModeButton}/>
      </nav>
    </header>
    )
}
