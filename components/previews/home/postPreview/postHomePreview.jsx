import Link from 'next/link';
import * as PropTypes from 'prop-types';
import React, { useState } from 'react';
import styles from '../../preview.module.scss';
import utils from '../../../../styles/utils.module.scss';
import Image from 'next/image';
import CategoryLabel from '../../../categoryLabel/categoryLabel';
import TransitionScroll from 'react-transition-scroll';
import { hiddenStyle, baseStyle } from '../../../../lib/utils';

PostHomePreview.propTypes = { post: PropTypes.object.isRequired };

function PostHomePreview({ post }) {
  const [displayCategoryLabel, setDisplayCategoryLabel] = useState(false);
  const categoryLabelStyle = !displayCategoryLabel ? { opacity: 0, transform: 'translateY(12px)' } : {};

  return (
    <TransitionScroll
      className={styles.previewHomeContainer}
      baseStyle={baseStyle}
      hiddenStyle={hiddenStyle}
      callBackAfter={() => setDisplayCategoryLabel(true)}
    >
      <Link href={`/blog/${post.id}`} className={`${styles.imageLinkStyle} ${utils.hoverEffectSlight}`}>
        <Image
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt={`${post.data.title} thumbnail`}
          className={styles.imageStyle}
          src={post.data.thumbnail}
          // placeholder="blur"
          // blurDataURL={`/_next/image?url=${post.data.thumbnail}&w=16&q=1`}
        />
      </Link>
      <CategoryLabel category={post.data.category} style={categoryLabelStyle} className={utils.categoryLabel} />
      <div className={styles.contentStyle}>
        <Link href={`/blog/${post.id}`} className={styles.title}>
          {post.data.title}
        </Link>
        <time className={styles.date}>{post.data.date}</time>
      </div>
    </TransitionScroll>
  );
}

export default PostHomePreview;
