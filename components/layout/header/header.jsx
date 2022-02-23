import React from "react"
import { useRouter } from 'next/router'
import utils from '../../../styles/utils.module.scss'
import NavLink from "../../navLink/navLink"

export default function Header() {
  const router = useRouter()

  return (
        <header id="header" className={utils.header}>
          { router.pathname !== '/' && <NavLink label="Home" href="/" /> }
          <NavLink label="Articles" href="/articles" />
          <NavLink label="About" href="/about" />
          <NavLink label="Contact" href="/contact" />
        </header>
    )
}
