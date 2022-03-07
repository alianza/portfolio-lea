import * as PropTypes from "prop-types"
import React from "react"
import styles from "../../preview.module.scss"

ArticleHomePreview.propTypes = { article: PropTypes.object.isRequired }

function ArticleHomePreview({ article }) {
  return (
    <div className={styles.previewHomeContainer}>
      <a href={article.link} target="_blank" rel="noreferrer" className={styles.imageLinkStyle}>
        <img className={styles.imageStyle} src={article.image} alt={article.title}/>
      </a>
      <div className={styles.contentStyle}>
        <a href={article.link} target="_blank" rel="noreferrer" className={styles.title} dangerouslySetInnerHTML={{ __html: article.title }}/>
        <time className={styles.date}>{article.date}</time>
      </div>
    </div>
  )
}

export default ArticleHomePreview
