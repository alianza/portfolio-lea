import React from "react"
import utils from '../../../styles/utils.module.scss'
import Sun from "../../svg/sun"
import Moon from "../../svg/moon"

export default function Footer({ accounts, onThemeButtonClick, darkTheme }) {
  return (
    <footer id="footer" className={utils.footer}>
      <button className="transition-transform hover:scale-110 active:scale-90"
              onClick={() => onThemeButtonClick()}>{darkTheme ? <Sun/> : <Moon/>}</button>
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
