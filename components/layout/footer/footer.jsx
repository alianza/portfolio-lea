import React from "react"

export default function Footer(props) {
    return (
        <footer id="footer" className="flex bg-accent-1 transition-colors h-footer p-4 text-text-primary shadow-3xl absolute bottom-0 left-0 right-0">
          <button onClick={() => props.onThemeButtonClick()}>{props.darkTheme ? '☀' : '🌒' }</button>
        </footer>
    )
}
