import { useEffect } from "react"
import Accordion from "./accordion"
import { isExternalLink } from "./utils"

function useInstagramEmbedScript(content) {
  useEffect(() => {
    if (content?.includes('instagram-embed') && !document.querySelector('#instagram-embed-script')) {
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
    document.querySelectorAll('details').forEach((e) => new Accordion(e)) // Set Accordion animation for all details tags
  }, [])
}

function useExternalLinks(contentId) {
  useEffect(() => {
    const content = document.getElementById(contentId);
    const links = content?.querySelectorAll('a');
    links?.forEach((link) => {
      if (isExternalLink(link.href)) {
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
      }
    });
  }, [contentId]);
}

export { useInstagramEmbedScript, useDetailTagsAnimation, useExternalLinks }
