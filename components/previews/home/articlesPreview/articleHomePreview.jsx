import * as PropTypes from 'prop-types';
import React from 'react';
import styles from '../../preview.module.scss';
import utils from '../../../../styles/utils.module.scss';
import { TransitionScroll } from 'react-transition-scroll';
import { hiddenStyle, transitionBaseStyle } from '../../../../lib/utils';
import Image from 'next/image';
import NewTabIcon from '../../../layout/util/newTabIcon/newTabIcon';

ArticleHomePreview.propTypes = { article: PropTypes.object.isRequired };

function ArticleHomePreview({ article }) {
  return (
    <TransitionScroll className={styles.previewHomeContainer} baseStyle={transitionBaseStyle} hiddenStyle={hiddenStyle}>
      <a
        href={article.link}
        target="_blank"
        rel="noreferrer"
        className={`${styles.imageLinkStyle} ${utils.hoverEffectSlight}`}
      >
        {article.type !== 'md' ? (
          <img alt={`${article.title} thumbnail`} className={styles.imageStyle} src={article.image} />
        ) : (
          <Image
            fill
            sizes="(max-width: 900px) 90vw, 30vw"
            alt={`${article.title} thumbnail`}
            className={styles.imageStyle}
            src={article.image}
            placeholder="blur"
            blurDataURL={`/_next/image?url=${article.image}&w=16&q=1`}
            priority
          />
        )}
        <NewTabIcon
          style={{ filter: 'invert() drop-shadow(0px 0px 4px #000)' }}
          className="absolute right-1 top-1 transition-transform hover:scale-125"
        />
      </a>
      <div className={styles.contentStyle}>
        <a
          href={article.link}
          target="_blank"
          rel="noreferrer"
          className={styles.title}
          dangerouslySetInnerHTML={{ __html: article.title }}
        />
        <time className={styles.date}>{article.date}</time>
      </div>
    </TransitionScroll>
  );
}

export default ArticleHomePreview;
