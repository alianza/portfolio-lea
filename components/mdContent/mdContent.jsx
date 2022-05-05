import React from "react"
import contentStyles from "./mdContent.module.scss"
import CategoryLabel from "../categoryLabel/categoryLabel"
import { useDetailTagsAnimation, useInstagramEmbedScript } from "../../lib/markdownEnrichment"
import Link from "next/link"

const MdContent = ({ content: { title, date, thumbnail, category, content }, noDate, categoriesLink = false }) => {

  useDetailTagsAnimation()

  useInstagramEmbedScript(content)

  return (
    <article className={contentStyles.content}>
      <div className="flex justify-between items-center flex-wrap">
        <h1 className={contentStyles.mainTitle}>{title}</h1>
        {categoriesLink && <Link href="/portfolio/categories"><a className="text-text-primary h-100">All Categories</a></Link>}
      </div>
      <div className={contentStyles.metaData}>
        {!noDate && <time className="m-0">{date}</time>}
        {category && <CategoryLabel category={category}/>}
      </div>
      {thumbnail && <img className="w-full" alt="thumbnail" src={thumbnail}/>}
      <div className="relative z-[1]" dangerouslySetInnerHTML={{ __html: content }}/>
    </article>
  )
}

export default MdContent
