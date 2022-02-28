import React from 'react'

const ArticlePreview = ({ article }) => {
  return (
    <div key={article.title} className="flex gap-4 items-center">
      <img src={article.image} alt={article.title} className="w-48 h-48 object-cover m-0"/>
      <div className="flex flex-col justify-center">
        <a href={article.link} className="text-2xl block" target="_blank" rel="noreferrer">{article.title}</a>
        <p className="text-lg">{article.date}</p>
        <p className="max-h-24 overflow-ellipsis overflow-auto min-w-0" dangerouslySetInnerHTML={{ __html: article.description }}/>
      </div>
    </div>
  )
}

export default ArticlePreview
