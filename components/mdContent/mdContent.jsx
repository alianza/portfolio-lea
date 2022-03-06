import React from "react"
import contentStyles from "./mdContent.module.scss"
import CategoryLabel from "../categoryLabel/categoryLabel"

const MdContent = ({ content: { title, date, thumbnail, category, content }, noDate, withSpacing }) => {
  return (
    <>
      <article className={contentStyles.content}>
        <h1 className={contentStyles.mainTitle}>{title}</h1>
        <div className={contentStyles.metaData}>
          {!noDate && <time className="m-0">{date}</time>}
          {category && <CategoryLabel category={category}/>}
        </div>
        {thumbnail && <img className="w-full" alt="thumbnail" src={thumbnail}/>}
        <div className="relative z-[1]" dangerouslySetInnerHTML={{ __html: content }}/>
      </article>
      {withSpacing && <hr className="my-4"/>}
    </>
  )
}

export default MdContent
