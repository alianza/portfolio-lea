import Typewriter from "typewriter-effect"
import styles from "./typeWriter.module.scss"
import { useEffect, useRef, useState } from "react"

const TypeWriter = ({ quotes }) => {
  const typewriterRef = useRef(null)
  const [height, setHeight] = useState(88)

  const getTypeWriterOptions = (typewriter, quotes) => {
    const authorElem = document.getElementById("author")

    quotes.forEach((quote) => {
      typewriter.typeString(quote.text)
        .callFunction(() => {
          authorElem.textContent = quote.author
          authorElem.style.opacity = '1'
          updateHeight()
        })
        .pauseFor(quote.text.length * 150)
        .deleteAll()
        .callFunction(() => {
          authorElem.style.opacity = '0'
          updateHeight()
        })
        .pauseFor(1000)
        .start()
    })
  }

  const updateHeight = () => setHeight(typewriterRef?.current?.clientHeight + 24)

  useEffect(() => {
    const interval = setInterval(() => updateHeight(), 500)
    return () => clearInterval(interval)
  })

  return (
    <div className={styles.TypeWriter} style={{ height }}>
      <div ref={typewriterRef}>
        <Typewriter
          onInit={(typewriter) => getTypeWriterOptions(typewriter, quotes)}
          options={{
            autoStart: true,
            loop: true,
          }}
        />
        <span id="author" className="opacity-0 transition-opacity duration-500 block h-6 font-text">Author</span>
      </div>
    </div>
  )
}

export default TypeWriter
