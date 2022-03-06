import * as PropTypes from "prop-types"
import React from "react"

ArticleHomePreview.propTypes = { article: PropTypes.object.isRequired }

function ArticleHomePreview({ article }) {
  return(<div className="flex desktop:w-1/3 flex-col gap-2 items-center items-stretch">
    <a href={article.link} className="w-full h-64">
      <img src={article.image} alt={article.title} className="w-full h-full object-cover aspect-video"/>
    </a>
    <div className="flex flex-col justify-center">
      <a href={article.link} target="_blank" rel="noreferrer" className="text-2xl block text-center" dangerouslySetInnerHTML={{ __html: article.title }}/>
      <time className="text-lg text-center">{article.date}</time>
    </div>
  </div>)
}

export default ArticleHomePreview
