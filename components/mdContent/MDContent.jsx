import React from "react"
import contentStyles from "../../public/styles/content.module.css"

const MDContent = ({ content: { title, date, thumbnail, category, content }, noDate } ) => {
  return (
    <div className={contentStyles.content}>
      <h1>{title}</h1>
      <div className="flex w-full justify-between items-center mb-2">
        {!noDate && <p className="m-0">{date}</p>}
        {category && <p className="m-0 rounded bg-accent-2 transition-colors py-1 px-2">{category}</p>}
      </div>
      {thumbnail && <img alt='thumbnail' src={thumbnail}/>}
      <article dangerouslySetInnerHTML={{ __html: content }}/>
    </div>
  )
}

export default MDContent
