import Link from "next/link"
import * as PropTypes from "prop-types"
import React, { useState } from "react"
import styles from "../../preview.module.scss"
import utils from '../../../../styles/utils.module.scss'
import Image from "next/future/image"
import { AnimationOnScroll } from "react-animation-on-scroll"
import CategoryLabel from "../../../categoryLabel/categoryLabel"

PostHomePreview.propTypes = { post: PropTypes.object.isRequired }

function PostHomePreview({ post }) {
  const [displayCategoryLabel, setDisplayCategoryLabel] = useState(false)
  const categoryLabelStyle = {opacity: displayCategoryLabel ? 100 : 0, transform: `translateY(${displayCategoryLabel ? '0' : '12px'})`}
  return (
    <AnimationOnScroll
      afterAnimatedIn={() => {setDisplayCategoryLabel(true)}}
      initiallyVisible
      animateIn="animate__fadeInUp"
      duration=".5"
      offset="0"
      animateOnce
      className={styles.previewHomeContainer}
    >
      <Link href={`/blog/${post.id}`}>
        <a className={`${styles.imageLinkStyle} transition-transform hover:scale-[1.02] active:scale-[.98]`}>
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
    </AnimationOnScroll>
  )
}

export default PostHomePreview
