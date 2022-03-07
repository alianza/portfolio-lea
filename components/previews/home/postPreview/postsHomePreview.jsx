import Link from "next/link"
import * as PropTypes from "prop-types"
import React from "react"
import styles from "../../preview.module.scss"

PostHomePreview.propTypes = { post: PropTypes.object.isRequired }

function PostHomePreview({ post }) {
  return (
    <div className={styles.previewHomeContainer}>
      <Link href={`/portfolio/${post.id}`}>
        <a className={styles.imageLinkStyle}>
          <img className={styles.imageStyle} alt={post.data.title} src={post.data.thumbnail}/>
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
