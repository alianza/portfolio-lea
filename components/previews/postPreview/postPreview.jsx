import Link from "next/link"
import Image from "next/future/image"
import styles from '../preview.module.scss'
import utils from '../../../styles/utils.module.scss'
import * as PropTypes from "prop-types"
import { AnimationOnScroll } from "react-animation-on-scroll"
import CategoryLabel from "../../categoryLabel/categoryLabel"
import React, { useState } from "react"

PostPreview.propTypes = { post: PropTypes.object.isRequired }

function PostPreview({ post, hideCategoryLabel }) {
  const [displayCategoryLabel, setDisplayCategoryLabel] = useState(false)
  const categoryLabelCondition = !hideCategoryLabel && displayCategoryLabel
  const categoryLabelStyle = {opacity: categoryLabelCondition ? 100 : 0, transform: `translateY(${categoryLabelCondition ? '0' : '12px'})`}
  return (
    <AnimationOnScroll
      afterAnimatedIn={() => {setDisplayCategoryLabel(true)}}
      initiallyVisible
      animateIn="animate__fadeInUp"
      duration=".5"
      offset="0"
      animateOnce
      className={styles.previewContainer}>
      <Link href={`/portfolio/${post.id}`}>
        <a className={`${styles.linkStyle} transition-transform hover:scale-[1.02] active:scale-[.98]`}>
          <Image
            fill
            sizes="100vw"
            alt={`${post.data.title} thumbnail`}
            className={styles.imageStyle}
            src={post.data.thumbnail}
            placeholder="blur"
            blurDataURL={`/_next/image?url=${post.data.thumbnail}&w=16&q=1`}/>/>
        </a>
      </Link>
      <div className={styles.contentStyle}>
        <Link href={`/blog/${post.id}`}>
          <a className="text-2xl">{post.data.title}</a>
        </Link>
        <time className="text-lg">{post.data.date}</time>
        <p className={styles.description}>{post.data.description}</p>
      </div>
      <CategoryLabel category={post.data.category} style={categoryLabelStyle} className={utils.categoryLabel}/>
    </AnimationOnScroll>
  )
}

export default PostPreview
