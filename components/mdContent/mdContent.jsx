import React from "react"
import contentStyles from "./mdContent.module.scss"
import CategoryLabel from "../categoryLabel/categoryLabel"
import { useDetailTagsAnimation, useExternalLinks, useInstagramEmbedScript } from "../../lib/markdownEnrichment"
import Link from "next/link"
import StartEndDateLabel from "../layout/util/startEndDateLabel/startEndDateLabel";

const contentId = "article-content";

const MdContent = ({ content: { title, date, startDate, endDate, thumbnail, category, content }, noDate, categoriesLink }) => {

  useDetailTagsAnimation()

  useInstagramEmbedScript(content)

  useExternalLinks(contentId)

  return (
    <article className={contentStyles.content}>
      <div className="flex justify-between items-center flex-wrap gap-2">
        <h1 className={contentStyles.mainTitle}>{title}</h1>
        {categoriesLink && <Link href="/blog/categories" className="text-text-primary h-100">All Categories</Link>}
      </div>
      <div className={contentStyles.metaData}>
        {!noDate && date && <time className="m-0">{date}</time>}
        {startDate && <StartEndDateLabel startDate={startDate} endDate={endDate}/>}
        {category && <CategoryLabel category={category}/>}
      </div>
      {thumbnail && <img className="w-full" alt="thumbnail" src={thumbnail}/>}
      <div id={contentId} className="relative z-[1]" dangerouslySetInnerHTML={{ __html: content }}/>
    </article>
  )
}

export default MdContent
