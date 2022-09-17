import Link from "next/link"
import * as PropTypes from "prop-types"
import React, { useState } from "react"
import styles from "../../preview.module.scss"
import utils from '../../../../styles/utils.module.scss'
import Image from "next/future/image"
import CategoryLabel from "../../../categoryLabel/categoryLabel"
import AnimateOnScroll from "../../../animateOnScroll/animateOnScroll";

PostHomePreview.propTypes = { post: PropTypes.object.isRequired }

function PostHomePreview({ post }) {
  const [displayCategoryLabel, setDisplayCategoryLabel] = useState(false)
  const categoryLabelStyle = !displayCategoryLabel ? { opacity: 0, transform: 'translateY(12px)' } : { }

  return (
    <AnimateOnScroll className={styles.previewHomeContainer} callBack={() => setTimeout(() => setDisplayCategoryLabel(true), 500)}>
      <Link href={`/blog/${post.id}`}>
        <a className={`${styles.imageLinkStyle} ${utils.hoverEffectSlight}`}>
          <Image
            fill
            sizes="100vw"
            alt={`${post.data.title} thumbnail`}
            className={styles.imageStyle}
            src={post.data.thumbnail}
            placeholder="blur"
            blurDataURL={`/_next/image?url=${post.data.thumbnail}&w=16&q=1`}
          />
        </a>
      </Link>
      <CategoryLabel category={post.data.category} style={categoryLabelStyle} className={utils.categoryLabel}/>
      <div className={styles.contentStyle}>
        <Link href={`/blog/${post.id}`}>
          <a className={styles.title}>{post.data.title}</a>
        </Link>
        <time className={styles.date}>{post.data.date}</time>
      </div>
    </AnimateOnScroll>
  )
}

export default PostHomePreview
