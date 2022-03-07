import Link from "next/link"
import styles from '../preview.module.scss'
import * as PropTypes from "prop-types"

PostPreview.propTypes = { post: PropTypes.object.isRequired }

const PostPreview = ({ post }) => {
  return (
    <div className={styles.previewContainer}>
      <Link href={`/portfolio/${post.id}`}>
        <a className={styles.linkStyle}>
          <img className={styles.imageStyle} alt="post thumbnail" src={post.data.thumbnail}/>
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
