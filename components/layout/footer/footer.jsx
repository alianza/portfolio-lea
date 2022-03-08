import React from "react"
import utils from '../../../styles/utils.module.scss'
import DarkModeButton from "../../darkModeButton/darkModeButton"
import styles from "./footer.module.scss"
import Image from 'next/image'

export default function Footer({ accounts, onThemeButtonClick, darkTheme }) {
  return (
    <footer id="footer" className={utils.footer}>
      <div className="flex gap-8 items-center">
        <DarkModeButton onButtonClick={onThemeButtonClick} darkTheme={darkTheme} className={styles.darkModeButton} whiteMoon/>
        <span className="text-text-light mobile:font-bold text-sm xs:text-base">Copyright Léa Shamaa © All rights reserved.</span>
      </div>
      <div className="flex gap-4">
        {accounts.map(account => (
          <a className={`relative w-8 h-8 ${utils.hoverEffectStrong}`} key={account.name} title={account.name} href={account.url} rel="noreferrer" target="_blank">
            <Image layout="fill" alt={account.name} className="rounded" src={account.icon} />
          </a>
        ))}
      </div>
    </footer>
  )
}
