import React from "react"
import Link from 'next/link'
import { useRouter } from 'next/router'
import utils from '../../styles/utils.module.scss'

const NavLink = ({ label, href, onClick, exact }) => {
  const router = useRouter()

  const condition = exact ? router.pathname === href : router.pathname.startsWith(href)

  return (
    <Link href={href}>
      <a
        onClick={onClick}
        className={`no-underline hover:font-bold ${condition ? utils.active : ""}`}>
        {label}
      </a
      >
    </Link>
  )
}

export default NavLink
