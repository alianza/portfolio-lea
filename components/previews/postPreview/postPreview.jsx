import Link from "next/link"

const PostPreview = ({ post }) => {
  return (
    <div className="flex gap-4 items-center">
      <Link href={`/portfolio/${post.id}`}><a className="basis-[34%]"><img alt="post thumbnail" src={post.data.thumbnail} className="w-full object-cover aspect-video m-0"/></a></Link>
      <div className="basis-[66%] flex flex-col justify-center">
        <Link href={`/portfolio/${post.id}`}><a className="text-2xl block">{post.data.title}</a></Link>
        <time className="text-lg">{post.data.date}</time>
        <p className="max-h-24 overflow-ellipsis overflow-auto min-w-0">{post.data.description}</p>
      </div>
    </div>
  )
}

export default PostPreview
