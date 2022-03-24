import { useEffect } from "react"
import Accordion from "./accordion"

function useInstagramEmbedScript(content) {
  useEffect(() => {
    if (content.compiledSource.includes('instagram-embed') && !document.querySelector('#instagram-embed-script')) {
      const script = Object.assign(document.createElement('script'), {
        id: 'instagram-embed-script',
        src: 'https://www.instagram.com/embed.js',
      })
      setTimeout(() => document.body.insertAdjacentElement('beforeend', script))
      window?.instgrm?.Embeds?.process()
    }
    return () => {
      if (document.querySelector('#instagram-embed-script')) {
        document.body.removeChild(document.querySelector('#instagram-embed-script'))
      }
    }
  }, [])
}

function useDetailTagsAnimation() {
  useEffect(() => {
    document.querySelectorAll('details').forEach((e) => {
      new Accordion(e)
    }) // Set Accordion animation for all details tags
  }, [])
}

export { useInstagramEmbedScript, useDetailTagsAnimation }
