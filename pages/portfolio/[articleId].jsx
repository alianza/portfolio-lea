import utils from "../../styles/utils.module.scss"
import { getPost, getPostIds } from "../../lib/services/postsService"
import Layout from "../../components/layout/layout/layout"
import layoutData from "../../content/config.json"
import MDContent from "../../components/mdContent/MDContent"

export const getStaticPaths = async () => {

  const paths = getPostIds()

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {

  const article = getPost(params.articleId)

  return {
    props: {
      article,
      layoutData
    },
  }
}

const Article = ({ article }) => {
  return (
    <div className={utils.page}>
      <MDContent content={article} />
    </div>
  )
}

Article.withLayout = (page, layoutData) => <Layout {...layoutData}>{page}</Layout>

export default Article
