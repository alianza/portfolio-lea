import React from "react"
import styles from "../preview.module.scss"
import utils from "../../../styles/utils.module.scss"
import * as PropTypes from "prop-types"
import AnimateOnScroll from "../../animateOnScroll/animateOnScroll";

ArticlePreview.propTypes = { article: PropTypes.object.isRequired }

function ArticlePreview({ article }) {
  return (
    <AnimateOnScroll reAnimate className={styles.previewContainer}>
      <a href={article.link} className={`${styles.linkStyle} ${utils.hoverEffectSlight}`} target="_blank" rel="noreferrer">
        <img alt={`${article.title} thumbnail`} className={styles.imageStyle} src={article.image} />
      </a>
      <div className={styles.contentStyle}>
        <a href={article.link} className="text-2xl" target="_blank" rel="noreferrer" dangerouslySetInnerHTML={{ __html: article.title }} />
        <p className="text-lg">{article.date}</p>
        <p className={styles.description} dangerouslySetInnerHTML={{ __html: article.description }} />
      </div>
    </AnimateOnScroll>
  )
}

export default ArticlePreview
