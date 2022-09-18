import * as PropTypes from "prop-types"
import React from "react"
import styles from "../../preview.module.scss"
import utils from '../../../../styles/utils.module.scss'
import { TransitionScroll } from "react-transition-scroll";
import { hiddenStyle, transitionBaseStyle } from "../../../../lib/utils";

ArticleHomePreview.propTypes = { article: PropTypes.object.isRequired }

function ArticleHomePreview({ article }) {
  return (
    <TransitionScroll className={styles.previewHomeContainer} baseStyle={transitionBaseStyle} hiddenStyle={hiddenStyle}>
      <a href={article.link} target="_blank" rel="noreferrer" className={`${styles.imageLinkStyle} ${utils.hoverEffectSlight}`}>
        <img alt={`${article.title} thumbnail`} className={styles.imageStyle} src={article.image}/>
      </a>
      <div className={styles.contentStyle}>
        <a href={article.link} target="_blank" rel="noreferrer" className={styles.title} dangerouslySetInnerHTML={{ __html: article.title }}/>
        <time className={styles.date}>{article.date}</time>
      </div>
    </TransitionScroll>
  )
}

export default ArticleHomePreview
