import Sun from "../svg/sun"
import Moon from "../svg/moon"
import React from "react"

const DarkModeButton = ({ onButtonClick, darkTheme, className }) => {
  return(
    <button style={{filter: `drop-shadow(0px 0px 1px ${darkTheme ? 'white' : 'black'})`}}
            className={`transition-transform hover:scale-110 active:scale-95 ${className ? className : ''}`}
            onClick={() => onButtonClick()}>{darkTheme ? <Sun white/> : <Moon white/>}</button>
  )
}

export default DarkModeButton
