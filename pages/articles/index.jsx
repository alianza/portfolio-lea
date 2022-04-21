import utils from "../../styles/utils.module.scss"
import styles from "../../components/previews/preview.module.scss"
import Layout from "../../components/layout/layout/layout"
import layoutData from "../../content/config.json"
import { getArticles } from "../../lib/services/mediumService"
import { getPage } from "../../lib/services/pageService"
import MdContent from "../../components/mdContent/mdContent"
import ArticlePreview from "../../components/previews/articlesPreview/articlePreview"
import React from "react"

export const getStaticProps = async () => {

  const articles = await getArticles(layoutData.username_medium)

  const articlesContent = await getPage("articles")

  return {
    props: {
      articles: articles.dataMedium,
      articlesContent,
      layoutData
    },
    revalidate: 60,
  }
}

const Articles = ({ articles, articlesContent }) => {
  return (
    <div className={utils.page}>
      <MdContent content={articlesContent}/>
      <hr className="my-4"/>
      <div className={styles.previewList}>
        {articles.map((article) => <ArticlePreview key={article.title} article={article}/> )}
          <a href={articlesContent.readMoreLink.link} className={`${utils.arrowLink} mt-4 mobile:mt-8 self-end group inline-flex`} target="_blank" rel="noreferrer">
            <span className={utils.label}>{articlesContent.readMoreLink.label}</span>
            <span className={`${utils.arrow} group-hover:translate-x-2`}>→</span>
          </a>
      </div>
    </div>
  )
}

Articles.withLayout = (page, layoutData) => <Layout {...layoutData}>{page}</Layout>

export default Articles;
