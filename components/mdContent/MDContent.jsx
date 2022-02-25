import React from "react"
import contentStyles from "../../public/styles/content.module.css"

const MDContent = ({ content: { title, date, thumbnail, category, content }, noDate, mainTitle } ) => {
  return (
    <article className={contentStyles.content}>
      <h1 className={mainTitle ? contentStyles.mainTitle : ''}>{title}</h1>
      <div className="flex w-full justify-between items-center mb-2">
        {!noDate && <p className="m-0">{date}</p>}
        {category && <p className="m-0 rounded bg-accent-2 transition-colors py-1 px-2">{category}</p>}
      </div>
      {thumbnail && <img alt='thumbnail' src={thumbnail}/>}
      <div className="relative z-[1]" dangerouslySetInnerHTML={{ __html: content }}/>
    </article>
  )
}

export default MDContent;
