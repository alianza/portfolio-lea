import Typewriter from "typewriter-effect"
import styles from "./typeWriter.module.scss"

const getTypeWriterOptions = (typewriter, quotes) => {
  const authorElem = document.getElementById("author")

  quotes.forEach((quote) => {
    typewriter.typeString(quote.text)
      .callFunction(() => {
        authorElem.textContent = quote.author
        authorElem.style.opacity = '1'
      })
      .pauseFor(2500)
      .deleteAll()
      .callFunction(() => authorElem.style.opacity = '0' )
      .pauseFor(1000)
      .start()
  });
}

const TypeWriter = ({quotes}) => {
  return (
    <div className={styles.TypeWriter}>
      <Typewriter
        onInit={(typewriter) => getTypeWriterOptions(typewriter, quotes)}
        options={{
          autoStart: true,
          loop: true,
        }}
      />
      <span id="author" className="opacity-0 transition-opacity duration-500 block h-6 font-text">Author</span>
    </div>
  )
}

export default TypeWriter
