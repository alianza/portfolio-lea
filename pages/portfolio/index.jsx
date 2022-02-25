import utils from "../../styles/utils.module.scss"
import Link from 'next/link'
import { getPosts } from "../../lib/services/postsService"
import Layout from "../../components/layout/layout/layout"
import layoutData from "../../content/config.json"

export const getStaticProps = async () => {

  const articles = getPosts()

  return {
    props: {
      articles,
      layoutData
    }
  }
}

const Articles = ({ articles }) => {
  return (
    <div className={utils.page}>
      <h1 className={utils.title}>Articles</h1>
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
