import Typewriter from "typewriter-effect"
import styles from "./typeWriter.module.scss"
import { useEffect, useRef, useState } from "react"

const TypeWriter = ({ quotes }) => {
  const typewriterRef = useRef(null)
  const [height, setHeight] = useState(88)

  const getTypeWriterOptions = (typewriter, quotes) => {
    const authorElem = document.getElementById("author")
    const randomQuotes = quotes.sort(() => 0.5 - Math.random())

    randomQuotes.forEach(({ author, text }) => {
      typewriter.typeString(text)
        .callFunction(() => {
          authorElem.textContent = author
          authorElem.style.opacity = '1'
          updateHeight()
        })
        .pauseFor(text.length * 60)
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
  }, [])

  return (
    <div className={styles.TypeWriter} style={{ height }}>
      <div ref={typewriterRef}>
        <Typewriter
          onInit={(typewriter) => getTypeWriterOptions(typewriter, quotes)}
          options={{
            delay: 80,
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
