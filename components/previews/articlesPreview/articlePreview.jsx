import React from "react"
import styles from "../preview.module.scss"
import utils from "../../../styles/utils.module.scss"
import * as PropTypes from "prop-types"
import { TransitionScroll } from "react-transition-scroll";
import { hiddenStyle, transitionBaseStyle } from "../../../lib/utils";


ArticlePreview.propTypes = { article: PropTypes.object.isRequired }

function ArticlePreview({ article }) {
  return (
    <TransitionScroll className={styles.previewContainer} baseStyle={transitionBaseStyle} hiddenStyle={hiddenStyle}>
      <a href={article.link} className={`${styles.linkStyle} ${utils.hoverEffectSlight}`} target="_blank" rel="noreferrer">
        <img alt={`${article.title} thumbnail`} className={styles.imageStyle} src={article.image} />
      </a>
      <div className={styles.contentStyle}>
        <a href={article.link} className="text-2xl" target="_blank" rel="noreferrer" dangerouslySetInnerHTML={{ __html: article.title }} />
        <p className="text-lg">{article.date}</p>
        <p className={styles.description} dangerouslySetInnerHTML={{ __html: article.description }} />
      </div>
    </TransitionScroll>
  )
}

export default ArticlePreview
