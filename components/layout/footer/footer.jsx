import React from "react"
import utils from '../../../styles/utils.module.scss'

export default function Footer(props) {
    return (
        <footer id="footer" className={utils.footer}>
          <button className="transition-transform hover:scale-110 active:scale-90" onClick={() => props.onThemeButtonClick()}>{props.darkTheme ? '☀' : '🌒' }</button>
        </footer>
    )
}
