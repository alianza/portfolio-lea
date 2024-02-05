import React from 'react';
import styles from '../preview.module.scss';
import utils from '../../../styles/utils.module.scss';
import * as PropTypes from 'prop-types';
import { TransitionScroll } from 'react-transition-scroll';
import { hiddenStyle, transitionBaseStyle } from '../../../lib/utils';
import Image from 'next/image';
import NewTabIcon from '../../layout/util/newTabIcon/newTabIcon';

ArticlePreview.propTypes = { article: PropTypes.object.isRequired };

function ArticlePreview({ article }) {
  return (
    <TransitionScroll className={styles.previewContainer} baseStyle={transitionBaseStyle} hiddenStyle={hiddenStyle}>
      <a
        href={article.link}
        className={`${styles.linkStyle} ${utils.hoverEffectSlight}`}
        target="_blank"
        rel="noreferrer"
      >
        {article.type !== 'md' ? (
          <img alt={`${article.title} thumbnail`} className={styles.imageStyle} src={article.image} />
        ) : (
          <Image
            fill
            sizes="(max-width: 900px) 100vw, 33vw"
            alt={`${article.title} thumbnail`}
            className={styles.imageStyle}
            src={article.image}
            placeholder="blur"
            blurDataURL={`/_next/image?url=${article.image}&w=16&q=1`}
          />
        )}
        <NewTabIcon
          style={{ filter: 'invert() drop-shadow(0px 0px 4px #000)' }}
          className="absolute right-1 top-1 shadow-xl transition-transform hover:scale-125"
        />
      </a>
      <div className={styles.contentStyle}>
        <a
          href={article.link}
          className="text-2xl"
          target="_blank"
          rel="noreferrer"
          dangerouslySetInnerHTML={{ __html: article.title }}
        />
        <p className="text-lg">{article.date}</p>
        <p className={styles.description} dangerouslySetInnerHTML={{ __html: article.description }} />
      </div>
    </TransitionScroll>
  );
}

export default ArticlePreview;
