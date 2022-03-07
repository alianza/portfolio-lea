import React from 'react'
import styles from '../preview.module.scss'
import * as PropTypes from "prop-types"

ArticlePreview.propTypes = { article: PropTypes.object.isRequired }

const ArticlePreview = ({ article }) => {
  return (
    <div className={styles.previewContainer}>
      <a className={styles.linkStyle} href={article.link} target="_blank" rel="noreferrer">
        <img className={styles.imageStyle} src={article.image} alt={article.title}/>
      </a>
      <div className={styles.contentStyle}>
        <a href={article.link} className="text-2xl" target="_blank" rel="noreferrer" dangerouslySetInnerHTML={{ __html: article.title }}/>
        <p className="text-lg">{article.date}</p>
        <p className={styles.description} dangerouslySetInnerHTML={{ __html: article.description }}/>
      </div>
    </div>
  )
}

export default ArticlePreview
