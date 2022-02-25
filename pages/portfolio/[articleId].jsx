import utils from "../../styles/utils.module.scss"
import content from "../../public/styles/content.module.css";
import { getPost, getPostIds } from "../../lib/services/postsService"
import Layout from "../../components/layout/layout/layout"
import layoutData from "../../content/config.json"

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
      <div className={content.content}>
        <h1 className="text-4xl">{article.data.title}</h1>
        <p className="mb-4">{article.data.date}</p>
        <img alt='thumbnail' src={article.data.thumbnail}/>
        <article dangerouslySetInnerHTML={{ __html: article.content }}/>
      </div>
    </div>
  )
}

Article.withLayout = (page, layoutData) => <Layout {...layoutData}>{page}</Layout>

export default Article
