import utils from "../../styles/utils.module.scss"
import Link from 'next/link'
import { getPosts } from "../../lib/services/postsService"
import Layout from "../../components/layout/layout/layout"
import layoutData from "../../content/config.json"
import { getPage } from "../../lib/services/pageService"
import MDContent from "../../components/mdContent/MDContent"

export const getStaticProps = async () => {

  const articles = getPosts()

  const portfolioContent = getPage("portfolio")

  console.log(portfolioContent)

  return {
    props: {
      articles,
      portfolioContent,
      layoutData
    }
  }
}

const Articles = ({ articles, portfolioContent }) => {
  return (
    <div className={utils.page}>
      <MDContent content={portfolioContent} withSpacing />
        {articles.map(({ id, articleData }) =>
          <div key={id} className="mb-4">
            <Link href={`/articles/${id}`}><a className="text-2xl mb-2">{articleData.data.title}</a></Link>
            <p className="text-lg">{articleData.data.date}</p>
          </div>
        )}
      </div>
  )
}

Articles.withLayout = (page, layoutData) => <Layout {...layoutData}>{page}</Layout>


export default Articles;
