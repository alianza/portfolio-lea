import React from "react"
import utils from '../../../styles/utils.module.scss'

//Todo: Fix dark mode icons

export default function Footer({ accounts, onThemeButtonClick, darkTheme }) {
    return (
        <footer id="footer" className={utils.footer}>
          <button className="transition-transform hover:scale-110 active:scale-90" onClick={() => onThemeButtonClick()}>{darkTheme ? '☀' : '🌒' }</button>
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
