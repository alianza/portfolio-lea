import React from 'react'
import styles from '../preview.module.scss'
import utils from '../../../styles/utils.module.scss'
import * as PropTypes from "prop-types"
import Image from "next/image"

ArticlePreview.propTypes = { article: PropTypes.object.isRequired }

function ArticlePreview({ article }) {
  return (
    <div className={styles.previewContainer}>
      <a className={`${styles.linkStyle} ${utils.hoverEffectSlight}`} href={article.link} target="_blank" rel="noreferrer">
        <Image
          layout="fill"
          alt={`${article.title} thumbnail`}
          className={styles.imageStyle}
          objectFit={"cover"}
          src={`/api/imageProxy?imageUrl=${article.image}`}/>
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
