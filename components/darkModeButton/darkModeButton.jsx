import Sun from "../svg/sun"
import Moon from "../svg/moon"
import React from "react"
import utils from "../../styles/utils.module.scss"

const DarkModeButton = ({ onButtonClick, darkTheme, className, whiteMoon }) => {
  return(
    <button
      style={{ filter: `drop-shadow(0px 0px 1px white)` }}
      className={`transition-transform hover:scale-110 active:scale-95 ${className ? className : ''}`}
      onClick={() => onButtonClick()}>{darkTheme ? <Sun/> : <Moon color={whiteMoon ? 'white' : ''}/>}
    </button>
  )
}

export default DarkModeButton
