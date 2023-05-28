import utils from "../../styles/utils.module.scss"
import styles from "../../components/previews/preview.module.scss"
import Layout from "../../components/layout/layout/layout"
import config from "../../content/config.json"
import { getPage } from "../../lib/services/pageService"
import MdContent from "../../components/mdContent/mdContent"
import ArticlePreview from "../../components/previews/articlesPreview/articlePreview"
import React from "react"
import Hr from "../../components/layout/util/hr/hr";
import { getAllArticles } from "../../lib/services/articleService";

export const getStaticProps = async () => {

  const allArticles = await getAllArticles(config.usernameMedium)

  const articlesContent = await getPage("articles")

  return {
    props: {
      articles: allArticles,
      articlesContent
    },
    revalidate: 60,
  }
}

const Articles = ({ articles, articlesContent }) => {
  return (
    <div className={utils.page}>
      <MdContent content={articlesContent}/>
      <Hr/>
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

Articles.withLayout = (page) => <Layout>{page}</Layout>

export default Articles;
