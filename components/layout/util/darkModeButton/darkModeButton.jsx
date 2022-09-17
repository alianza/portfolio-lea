import Sun from "../svg/sun"
import Moon from "../svg/moon"
import React from "react"

const DarkModeButton = ({ onButtonClick, darkTheme, className }) => {
  return(
    <button
      className={`transition-transform hover:scale-110 active:scale-95 drop-shadow-[0_0_1px_var(--accent-9)] ${className ? className : ''}`}
      onClick={() => onButtonClick()}>{darkTheme ? <Sun/> : <Moon/>}
    </button>
  )
}

export default DarkModeButton
