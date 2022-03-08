import Link from "next/link"
import * as PropTypes from "prop-types"
import React from "react"
import styles from "../../preview.module.scss"
import Image from "next/image"
import utils from "../../../../styles/utils.module.scss"

PostHomePreview.propTypes = { post: PropTypes.object.isRequired }

function PostHomePreview({ post }) {
  return (
    <div className={styles.previewHomeContainer}>
      <Link href={`/portfolio/${post.id}`}>
        <a className={`${styles.imageLinkStyle} transition-transform hover:scale-[1.02] active:scale-[.98]`}>
          <Image
            layout="fill"
            alt={`${post.data.title} thumbnail`}
            className={styles.imageStyle}
            objectFit={"cover"}
            src={post.data.thumbnail}/>
        </a>
      </Link>
      <div className={styles.contentStyle}>
        <Link href={`/portfolio/${post.id}`}>
          <a className={styles.title}>{post.data.title}</a>
        </Link>
        <time className={styles.date}>{post.data.date}</time>
      </div>
    </div>
  )
}

export default PostHomePreview
