import React from "react"
import contentStyles from "./mdContent.module.scss"
import CategoryLabel from "../categoryLabel/categoryLabel"
import { useDetailTagsAnimation, useInstagramEmbedScript } from "../../lib/markdownEnrichment"
import TestComponent from "../testComponent/TestComponent"
import { MDXRemote } from 'next-mdx-remote'
import YouTube from "react-youtube";

const components = { TestComponent, YouTube }

const MdContent = ({ content: { title, date, thumbnail, category, content }, noDate }) => {

  useDetailTagsAnimation()

  useInstagramEmbedScript(content)

  return (
    <article className={contentStyles.content}>
      <h1 className={contentStyles.mainTitle}>{title}</h1>
      <div className={contentStyles.metaData}>
        {!noDate && <time className="m-0">{date}</time>}
        {category && <CategoryLabel category={category}/>}
      </div>
      {thumbnail && <img className="w-full" alt="thumbnail" src={thumbnail}/>}
      {/*<div className="relative z-[1]" dangerouslySetInnerHTML={{ __html: content }}/>*/}
      <MDXRemote {...content} components={components} />
    </article>
  )
}

export default MdContent
