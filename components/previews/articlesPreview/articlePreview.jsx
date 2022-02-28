import React from 'react'

const ArticlePreview = ({ article }) => {
  return (
    <div key={article.title} className="flex gap-4 items-center">
      <a className="basis-[34%]" href={article.link} target="_blank" rel="noreferrer"><img src={article.image} alt={article.title} className="w-full aspect-video object-cover m-0"/></a>
      <div className="basis-[66%] flex flex-col justify-center">
        <a href={article.link} className="text-2xl block" target="_blank" rel="noreferrer">{article.title}</a>
        <p className="text-lg">{article.date}</p>
        <p className="max-h-24 overflow-ellipsis overflow-auto min-w-0" dangerouslySetInnerHTML={{ __html: article.description }}/>
      </div>
    </div>
  )
}

export default ArticlePreview
