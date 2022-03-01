import Link from "next/link"

const PostPreview = ({ post }) => {
  return (
    <div className="flex flex-col gap-2 items-center items-stretch tablet:gap-4 tablet:flex-row">
      <Link href={`/portfolio/${post.id}`}><a className="tablet:w-1/3 shrink-0"><img alt="post thumbnail" src={post.data.thumbnail} className="w-full h-full object-cover aspect-video"/></a></Link>
      <div className="flex flex-col justify-center">
        <Link href={`/portfolio/${post.id}`}><a className="text-2xl">{post.data.title}</a></Link>
        <time className="text-lg">{post.data.date}</time>
        <p className="max-h-24 overflow-ellipsis overflow-auto min-w-0">{post.data.description}</p>
      </div>
    </div>
  )
}

export default PostPreview
