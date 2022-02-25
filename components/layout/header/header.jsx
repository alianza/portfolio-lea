import React from "react"
import utils from '../../../styles/utils.module.scss'
import NavLink from "../../navLink/navLink"

export default function Header({ title }) {
  return (
    <header id="header" className={utils.header}>
      <h1 className={utils.title}>{title}</h1>
      <div className="flex gap-2">
        <NavLink label="Home" href="/" />
        <NavLink label="About" href="/about" />
        <NavLink label="Portfolio" href="/portfolio" />
        <NavLink label="Articles" href="/articles" />
        <NavLink label="Contact" href="/contact" />
      </div>
    </header>
    )
}
