import * as PropTypes from "prop-types"
import React from "react"
import styles from "../../preview.module.scss"
import { AnimationOnScroll } from "react-animation-on-scroll"

ArticleHomePreview.propTypes = { article: PropTypes.object.isRequired }

function ArticleHomePreview({ article }) {
  return (
    <AnimationOnScroll initiallyVisible animateIn="animate__fadeInUp" duration=".5" offset="0" animateOnce className={styles.previewHomeContainer}>
      <a href={article.link} target="_blank" rel="noreferrer" className={`${styles.imageLinkStyle} transition-transform hover:scale-[1.02] active:scale-[.98]`}>
        <img alt={`${article.title} thumbnail`} className={styles.imageStyle} src={article.image}/>
      </a>
      <div className={styles.contentStyle}>
        <a href={article.link} target="_blank" rel="noreferrer" className={styles.title} dangerouslySetInnerHTML={{ __html: article.title }}/>
        <time className={styles.date}>{article.date}</time>
      </div>
    </AnimationOnScroll>
  )
}

export default ArticleHomePreview
