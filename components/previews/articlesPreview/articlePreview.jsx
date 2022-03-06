import React from 'react'

const ArticlePreview = ({ article }) => {
  return (
    <div className="flex flex-col gap-2 items-center items-stretch tablet:gap-4 tablet:flex-row">
      <a className="tablet:w-1/3 shrink-0" href={article.link} target="_blank" rel="noreferrer"><img width="100%" height="100%" src={article.image} alt={article.title} className="w-full h-full object-cover aspect-video"/></a>
      <div className="grow flex flex-col justify-center">
        <a href={article.link} className="text-2xl" target="_blank" rel="noreferrer" dangerouslySetInnerHTML={{ __html: article.title }}/>
        <p className="text-lg">{article.date}</p>
        <p className="max-h-24 overflow-ellipsis overflow-auto min-w-0 pr-1" dangerouslySetInnerHTML={{ __html: article.description }}/>
      </div>
    </div>
  )
}

export default ArticlePreview
