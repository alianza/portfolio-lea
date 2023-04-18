import utils from "../../styles/utils.module.scss"
import Layout from "../../components/layout/layout/layout"
import layoutData from "../../content/config.json"
import MdContent from "../../components/mdContent/mdContent";
import { getPost, getPostIds } from "../../lib/services/postService"
import { getCategory } from "../../lib/services/configService"
import Head from "../../components/layout/head/head";

export const getStaticPaths = async () => {

  const postIds = await getPostIds()

  return {
    paths: postIds.map(({ postId }) => ({ params: { postId } })),
  }
}

export const getStaticProps = async ({ params }) => {

  const post = await getPost(params.postId)

  post.category = await getCategory(post.category);

  return {
    props: {
      post,
      layoutData
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

Post.withLayout = (page, layoutData) => <Layout {...layoutData}>{page}</Layout>

export default Post
