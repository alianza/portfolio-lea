import React from "react"
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header() {
  const router = useRouter()
  return (
        <header id="header" className="flex gap-4 bg-accent-1 transition-colors justify-end items-center px-4 h-header fixed w-full top-0 shadow-xl ml-0">
          { router.pathname !== '/' && <Link href="/"><a>Home</a></Link> }
          <Link href="/articles"><a>Articles</a></Link>
        </header>
    )
}
