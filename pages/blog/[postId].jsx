import utils from "../../styles/utils.module.scss"
import Layout from "../../components/layout/layout/layout"
import MdContent from "../../components/mdContent/mdContent";
import { getPost, getPostIds } from "../../lib/services/postService"
import Head from "../../components/layout/head/head";

export const getStaticPaths = async () => {

  const postIds = await getPostIds()

  return {
    paths: postIds.map(({ postId }) => ({ params: { postId } })),
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {

  const post = await getPost(params.postId)

  console.log(`post`, post)

  return {
    props: {
      post,
    },
  }
}

const Post = ({ post }) => {
  return (
    <>
      <Head item={post}/>
      <div className={`${utils.page} max-w-screen-desktop`}>
        <MdContent content={post}/>
      </div>
    </>
  )
}

Post.withLayout = (page) => <Layout>{page}</Layout>

export default Post
