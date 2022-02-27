import React from "react"
import utils from '../../../styles/utils.module.scss'
import DarkModeButton from "../../darkModeButton/darkModeButton"
import styles from "./footer.module.scss"

export default function Footer({ accounts, onThemeButtonClick, darkTheme }) {
  return (
    <footer id="footer" className={utils.footer}>
      <DarkModeButton onButtonClick={onThemeButtonClick} darkTheme={darkTheme} className={styles.darkModeButton}/>
      <div className="flex gap-2">
        {accounts.map(account => (
          <a key={account.name} href={account.url} rel="noreferrer" target="_blank">
            {account.name}
          </a>
        ))}
      </div>
    </footer>
  )
}
