import Link from "next/link"
import Image from "next/image"
import styles from '../preview.module.scss'
import utils from '../../../styles/utils.module.scss'
import * as PropTypes from "prop-types"
import CategoryLabel from "../../categoryLabel/categoryLabel"
import React, { useState } from "react"
import { TransitionScroll } from "react-transition-scroll";
import { hiddenStyle, transitionBaseStyle } from "../../../lib/utils";

PostPreview.propTypes = { post: PropTypes.object.isRequired }

function PostPreview({ post, hideCategoryLabel }) {
  const [displayCategoryLabel, setDisplayCategoryLabel] = useState(false)
  const categoryLabelStyle = !displayCategoryLabel ? { opacity: 0, transform: 'translateY(12px)' } : {}

  return (
    <TransitionScroll
      className={styles.previewContainer}
      baseStyle={transitionBaseStyle}
      hiddenStyle={hiddenStyle}
      callBack={() => setTimeout(() => setDisplayCategoryLabel(true), 500)}
    >
      <Link href={`/blog/${post.id}`} className={`${styles.linkStyle} ${utils.hoverEffectSlight}`}>
        <Image
          fill
          sizes="100vw"
          alt={`${post.data.title} thumbnail`}
          className={styles.imageStyle}
          src={post.data.thumbnail}
          placeholder="blur"
          blurDataURL={`/_next/image?url=${post.data.thumbnail}&w=16&q=1`}/>
      </Link>
      <div className={styles.contentStyle}>
        <Link href={`/blog/${post.id}`} className="text-2xl">{post.data.title}</Link>
        <time className="text-lg">{post.data.date}</time>
        <p className={styles.description}>{post.data.description}</p>
      </div>
      {!hideCategoryLabel && <CategoryLabel category={post.data.category} style={categoryLabelStyle} className={utils.categoryLabel}/>}
    </TransitionScroll>
  )
}

export default PostPreview
