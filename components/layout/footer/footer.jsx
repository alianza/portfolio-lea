import React from "react"
import styles from './footer.module.scss'
import Image from 'next/future/image'
import DarkModeButton from "../util/darkModeButton/darkModeButton";

export default function Footer({ accounts, onThemeButtonClick, darkTheme }) {
  return (
    <footer id="footer" className={styles.footer}>
      <div className="flex gap-8 items-center">
        <DarkModeButton onButtonClick={onThemeButtonClick} darkTheme={darkTheme} className={styles.darkModeButton}/>
        <span className="text-text-primary text-center mobile:text-left text-sm xs:text-base">Copyright Léa Shamaa © All rights reserved.</span>
      </div>
      <div className="flex gap-4">
        {accounts.map(account => (
          <a className="relative w-8 h-8 transition-transform hover:scale-110 active:scale-95" key={account.name} title={account.name} href={account.url} rel="noreferrer" target="_blank">
            <Image
              fill
              sizes="100vw"
              alt={account.name}
              className="rounded"
              src={account.icon}
            />
          </a>
        ))}
      </div>
    </footer>
  )
}
