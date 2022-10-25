import React from "react"
import Link from 'next/link'
import { useRouter } from 'next/router'
import headerStyles from '../../header/header.module.scss'

const NavLink = ({ label, href, onClick, exact }) => {
  const router = useRouter()

  const condition = exact ? router.pathname === href : router.pathname.startsWith(href)

  return (
    <Link href={href} onClick={onClick}
        className={`no-underline hover:font-bold ${condition ? headerStyles.activeMenuItem : ""}`}>
        {label}
    </Link>
  )
}

export default NavLink
