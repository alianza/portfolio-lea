import React from "react"
import styles from './footer.module.scss'
import DarkModeButton from "../../darkModeButton/darkModeButton"
import Image from 'next/image'

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
              layout="fill"
              alt={account.name}
              className="rounded"
              src={account.icon}
              placeholder="blur"
              blurDataURL={`/_next/image?url=${account.icon}&w=16&q=1`}/>
          </a>
        ))}
      </div>
    </footer>
  )
}
