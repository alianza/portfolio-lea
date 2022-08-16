import Link from "next/link"
import * as PropTypes from "prop-types"
import React from "react"
import styles from "../../preview.module.scss"
import Image from "next/future/image"
import { AnimationOnScroll } from "react-animation-on-scroll"

PostHomePreview.propTypes = { post: PropTypes.object.isRequired }

function PostHomePreview({ post }) {
  return (
    <AnimationOnScroll initiallyVisible animateIn="animate__fadeInUp" duration=".5" offset="0" animateOnce className={styles.previewHomeContainer}>
      <Link href={`/blog/${post.id}`}>
        <a className={`${styles.imageLinkStyle} transition-transform hover:scale-[1.02] active:scale-[.98]`}>
          <span className="absolute left-2 top-2"></span>
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
