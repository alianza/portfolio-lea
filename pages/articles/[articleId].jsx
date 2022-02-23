import utils from "../../styles/utils.module.scss"
import { getArticle, getArticleIds } from "../../lib/services/articleService"
import Layout from "../../components/layout/layout/layout"

export const getStaticPaths = async () => {

  const paths = getArticleIds()

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {

  const article = getArticle(params.articleId)

  return {
    props: {
      article
    },
  }
}

const Article = ({ article }) => {
  return (
    <div className={utils.page}>
      <div className={utils.container}>
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
