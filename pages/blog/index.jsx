import utils from "../../styles/utils.module.scss"
import styles from "../../components/previews/preview.module.scss"
import Layout from "../../components/layout/layout/layout"
import { getPage } from "../../lib/services/pageService"
import MdContent from "../../components/mdContent/mdContent"
import React from "react"
import PostPreview from "../../components/previews/postPreview/postPreview"
import { getPosts } from "../../lib/services/postService"
import Hr from "../../components/layout/util/hr/hr";

export const getStaticProps = async () => {

  const posts = await getPosts({ preview: true })

  const portfolioContent = await getPage("blog")

  return {
    props: {
      posts,
      portfolioContent
    }
  }
}

const Blog = ({ posts, portfolioContent }) => {
  return (
    <div className={utils.page}>
      <MdContent content={portfolioContent} categoriesLink/>
      <Hr/>
      <div className={styles.previewList}>
        {posts.map((post) => <PostPreview key={post.id} post={post}/>)}
      </div>
    </div>
  )
}

Blog.withLayout = (page) => <Layout>{page}</Layout>

export default Blog
