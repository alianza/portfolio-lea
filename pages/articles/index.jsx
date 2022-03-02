import utils from "../../styles/utils.module.scss"
import Layout from "../../components/layout/layout/layout"
import layoutData from "../../content/config.json"
import { getArticles } from "../../lib/services/mediumService"
import { getPage } from "../../lib/services/pageService"
import MdContent from "../../components/mdContent/mdContent"
import ArticlePreview from "../../components/previews/articlesPreview/articlePreview"

export const getStaticProps = async () => {

  const articles = await getArticles(layoutData.username_medium)

  const articlesContent = getPage("articles")

  return {
    props: {
      articles: articles.dataMedium,
      articlesContent,
      layoutData
    }
    // revalidate: 60,
  }
}

const Articles = ({ articles, articlesContent }) => {
  return (
    <div className={utils.page}>
      <MdContent content={articlesContent} withSpacing/>
      <div className="flex flex-col gap-8 mx-auto py-4 tablet:py-8 max-w-4xl">
        {articles.map((article) => <ArticlePreview key={article.title} article={article}/> )}
      </div>
    </div>
  )
}

Articles.withLayout = (page, layoutData) => <Layout {...layoutData}>{page}</Layout>


export default Articles;
