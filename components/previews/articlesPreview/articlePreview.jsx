import React from 'react'
import styles from '../preview.module.scss'
import * as PropTypes from "prop-types"
import { AnimationOnScroll } from "react-animation-on-scroll"

ArticlePreview.propTypes = { article: PropTypes.object.isRequired }

function ArticlePreview({ article }) {
  return (
    <AnimationOnScroll initiallyVisible animateIn="animate__fadeInUp" duration=".5" offset="0" animateOnce className={styles.previewContainer}>
      <a href={article.link} className={`${styles.linkStyle} transition-transform hover:scale-[1.02] active:scale-[.98]`} target="_blank" rel="noreferrer">
        <img alt={`${article.title} thumbnail`} className={styles.imageStyle} src={article.image}/>
      </a>
      <div className={styles.contentStyle}>
        <a href={article.link} className="text-2xl" target="_blank" rel="noreferrer" dangerouslySetInnerHTML={{ __html: article.title }}/>
        <p className="text-lg">{article.date}</p>
        <p className={styles.description} dangerouslySetInnerHTML={{ __html: article.description }}/>
      </div>
    </AnimationOnScroll>
  )
}

export default ArticlePreview
