import Link from "next/link"
import Image from "next/image"
import styles from '../preview.module.scss'
import * as PropTypes from "prop-types"

PostPreview.propTypes = { post: PropTypes.object.isRequired }

function PostPreview({ post }) {
  return (
    <div className={styles.previewContainer}>
      <Link href={`/portfolio/${post.id}`}>
        <a className={`${styles.linkStyle} transition-transform hover:scale-[1.02] active:scale-[.98]`}>
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
          <a className="text-2xl">{post.data.title}</a>
        </Link>
        <time className="text-lg">{post.data.date}</time>
        <p className={styles.description}>{post.data.description}</p>
      </div>
    </div>
  )
}

export default PostPreview
