import utils from "../../../styles/utils.module.scss"
import Layout from "../../../components/layout/layout/layout"
import layoutData from "../../../content/config.json"
import { getPostsByCategory } from "../../../lib/services/postsService"
import { getCategory } from "../../../lib/services/configService"
import { getCategories } from "../../../lib/services/postsService"
import styles from "../../../components/previews/preview.module.scss"
import React from "react"
import PostPreview from "../../../components/previews/postPreview/postPreview"
import MdContent from "../../../components/mdContent/mdContent"

export const getStaticPaths = async () => {

  const categories = await getCategories()

  return {
    paths: categories.map(category => ({ params: { name: category.name } })),
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {

  const posts = await getPostsByCategory(params.name)

  posts.map(async (post) => post.data.category = await getCategory(post.category) || null)

  return {
    props: {
      posts,
      category: params.name,
      layoutData
    },
  }
}

const Category = ({ posts, category }) => {
  return (
    <div className={utils.page}>
      <MdContent content={{ title: `Category: ${category}`, content: '' }} categoriesLink/>
      <hr className="my-4"/>
      <div className={styles.previewList}>
        {posts.map((post) => <PostPreview key={post.id} post={post}/>)}
        {posts.length === 0 && <div className="text-center">{'No posts yet... <3'}</div>}
      </div>
    </div>
  )
}

Category.withLayout = (page, layoutData) => <Layout {...layoutData}>{page}</Layout>

export default Category
