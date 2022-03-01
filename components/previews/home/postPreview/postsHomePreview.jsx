import Link from "next/link"
import * as PropTypes from "prop-types"
import React from "react"

PostHomePreview.propTypes = { post: PropTypes.object.isRequired }

function PostHomePreview({ post }) {
  return(
    <div className="flex tablet:w-1/3 flex-col gap-2 items-center items-stretch">
      <Link href={`/portfolio/${post.id}`}><a className="w-full h-64">
        <img alt={post.data.title} src={post.data.thumbnail} className="w-full h-full object-cover aspect-video"/></a></Link>
      <div className="flex flex-col justify-center">
        <Link href={`/portfolio/${post.id}`}><a
          className="text-2xl block text-center">{post.data.title}</a></Link>
        <time className="text-lg text-center">{post.data.date}</time>
      </div>
    </div>)
}

export default PostHomePreview
