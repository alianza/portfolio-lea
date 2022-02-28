import React from "react"
import Link from 'next/link'
import { useRouter } from 'next/router'
import utils from '../../styles/utils.module.scss'

const NavLink = ({ label, href, pathName, onClick }) => {
  const router = useRouter()

  !pathName && (pathName = href)

  return (
    <Link href={href}>
      <a
        onClick={onClick}
        className={`no-underline hover:font-bold ${router.pathname === pathName ? utils.active : ""}`}>
        {label}
      </a
      >
    </Link>
  )
}

export default NavLink
