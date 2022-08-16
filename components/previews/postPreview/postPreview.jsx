import Link from "next/link"
import Image from "next/future/image"
import styles from '../preview.module.scss'
import * as PropTypes from "prop-types"
import { AnimationOnScroll } from "react-animation-on-scroll"

PostPreview.propTypes = { post: PropTypes.object.isRequired }

function PostPreview({ post }) {
  return (
    <AnimationOnScroll initiallyVisible animateIn="animate__fadeInUp" duration=".5" offset="0" animateOnce className={styles.previewContainer}>
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
    </AnimationOnScroll>
  )
}

export default PostPreview
