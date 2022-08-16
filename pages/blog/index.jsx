import utils from "../../styles/utils.module.scss"
import styles from "../../components/previews/preview.module.scss"
import Layout from "../../components/layout/layout/layout"
import layoutData from "../../content/config.json"
import { getPage } from "../../lib/services/pageService"
import MdContent from "../../components/mdContent/mdContent"
import React from "react"
import PostPreview from "../../components/previews/postPreview/postPreview"
import { getPosts } from "../../lib/services/postsService"

export const getStaticProps = async () => {

  const posts = await getPosts({ preview: true })

  const portfolioContent = await getPage("blog")

  return {
    props: {
      posts,
      portfolioContent,
      layoutData
    }
  }
}

const Blog = ({ posts, portfolioContent }) => {
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

Blog.withLayout = (page, layoutData) => <Layout {...layoutData}>{page}</Layout>

export default Blog
