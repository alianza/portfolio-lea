import * as PropTypes from "prop-types"
import React from "react"
import styles from "../../preview.module.scss"
import Image from "next/image"
import utils from "../../../../styles/utils.module.scss"

ArticleHomePreview.propTypes = { article: PropTypes.object.isRequired }

function ArticleHomePreview({ article }) {
  return (
    <div className={styles.previewHomeContainer}>
      <a href={article.link} target="_blank" rel="noreferrer" className={`${styles.imageLinkStyle} ${utils.hoverEffectSlight}`}>
        <Image
          layout="fill"
          alt={`${article.title} thumbnail`}
          className={styles.imageStyle}
          objectFit={"cover"}
          src={`/api/imageProxy?imageUrl=${article.image}`}/>
      </a>
      <div className={styles.contentStyle}>
        <a href={article.link} target="_blank" rel="noreferrer" className={styles.title} dangerouslySetInnerHTML={{ __html: article.title }}/>
        <time className={styles.date}>{article.date}</time>
      </div>
    </div>
  )
}

export default ArticleHomePreview
