import Link from "next/link"

const PostPreview = ({ id, post }) => {
  return (
    <div className="flex gap-4 items-center">
      <Link href={`/portfolio/${id}`}><img alt="post thumbnail" src={post.data.thumbnail} className="w-48 h-48 object-cover m-0 cursor-pointer"/></Link>
      <div className="flex flex-col justify-center">
        <Link href={`/portfolio/${id}`}><a className="text-2xl block">{post.data.title}</a></Link>
        <time className="text-lg">{post.data.date}</time>
        <p className="max-h-24 overflow-ellipsis overflow-auto min-w-0">{post.data.description}</p>
      </div>
    </div>
  )
}

export default PostPreview
