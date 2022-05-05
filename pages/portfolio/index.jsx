import utils from "../../styles/utils.module.scss"
import styles from "../../components/previews/preview.module.scss"
import { getPosts } from "../../lib/services/postsService"
import Layout from "../../components/layout/layout/layout"
import layoutData from "../../content/config.json"
import { getPage } from "../../lib/services/pageService"
import MdContent from "../../components/mdContent/mdContent"
import PostPreview from "../../components/previews/postPreview/postPreview"
import React from "react"

export const getStaticProps = async () => {

  const posts = await Promise.all(await getPosts())

  const portfolioContent = await getPage("portfolio")

  return {
    props: {
      posts,
      portfolioContent,
      layoutData
    }
  }
}

const Portfolio = ({ posts, portfolioContent }) => {
  return (
    <div className={utils.page}>
      <MdContent content={portfolioContent} categoriesLink/>
      <hr className="my-4"/>
      <div className={styles.previewList}>
        {posts.map((post) => <PostPreview key={post.id} post={post}/>)}
      </div>
    </div>
  )
}

Portfolio.withLayout = (page, layoutData) => <Layout {...layoutData}>{page}</Layout>

export default Portfolio
