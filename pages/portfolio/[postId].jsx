import utils from "../../styles/utils.module.scss"
import Layout from "../../components/layout/layout/layout"
import layoutData from "../../content/config.json"
import MdContent from "../../components/mdContent/mdContent"
import Head from "next/head"
import { getPost, getPostIds } from "../../lib/services/postsService"
import { getCategory } from "../../lib/services/configService"

export const getStaticPaths = async () => {

  const paths = getPostIds()

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {

  const post = getPost(params.postId)

  const category = getCategory(post.category);

  post.category = category;

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
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.description} />
      </Head>
      <div className={utils.page}>
        <MdContent content={post}/>
      </div>
    </>
  )
}

Post.withLayout = (page, layoutData) => <Layout {...layoutData}>{page}</Layout>

export default Post
