import Link from "next/link"
import Image from "next/future/image"
import styles from '../preview.module.scss'
import utils from '../../../styles/utils.module.scss'
import * as PropTypes from "prop-types"
import CategoryLabel from "../../categoryLabel/categoryLabel"
import React, { useState } from "react"
import AnimateOnScroll from "../../animateOnScroll/animateOnScroll";

PostPreview.propTypes = { post: PropTypes.object.isRequired }

function PostPreview({ post, hideCategoryLabel }) {
  const [displayCategoryLabel, setDisplayCategoryLabel] = useState(false)
  const categoryLabelStyle = !displayCategoryLabel ? { opacity: 0, transform: 'translateY(12px)' } : {}

  return (
    <AnimateOnScroll className={styles.previewContainer} callBack={() => setTimeout(() => setDisplayCategoryLabel(true), 500)}>
      <Link href={`/blog/${post.id}`}>
        <a className={`${styles.linkStyle} ${utils.hoverEffectSlight}`}>
          <Image
            fill
            sizes="100vw"
            alt={`${post.data.title} thumbnail`}
            className={styles.imageStyle}
            src={post.data.thumbnail}
            placeholder="blur"
            blurDataURL={`/_next/image?url=${post.data.thumbnail}&w=16&q=1`}/>
        </a>
      </Link>
      <div className={styles.contentStyle}>
        <Link href={`/blog/${post.id}`}>
          <a className="text-2xl">{post.data.title}</a>
        </Link>
        <time className="text-lg">{post.data.date}</time>
        <p className={styles.description}>{post.data.description}</p>
      </div>
      {!hideCategoryLabel && <CategoryLabel category={post.data.category} style={categoryLabelStyle} className={utils.categoryLabel}/>}
    </AnimateOnScroll>
  )
}

export default PostPreview
