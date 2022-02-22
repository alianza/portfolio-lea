import utils from "../../styles/utils.module.scss"
import Link from 'next/link'
import { getArticles } from "../../lib/services/articleService"

export const getStaticProps = async () => {
  const articles = getArticles()

  return {
    props: {
      articles
    }
  }
}

const Articles = ({ articles }) => {
  return (
    <div className={utils.page}>
      <div className={utils.container}>
      <h1 className="text-3xl mb-2">Articles</h1>
        {articles.map(({ id, articleData }) =>
          <div key={id} className="mb-4">
            <Link href={`/articles/${id}`}><a className="text-2xl mb-2">{articleData.data.title}</a></Link>
            <p className="text-lg">{articleData.data.date}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Articles;
