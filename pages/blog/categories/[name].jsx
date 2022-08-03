import utils from "../../../styles/utils.module.scss"
import Layout from "../../../components/layout/layout/layout"
import layoutData from "../../../content/config.json"
import { getPostsByCategory } from "../../../lib/services/postsService"
import { getCategory } from "../../../lib/services/configService"
import { getCategories } from "../../../lib/services/postsService"
import styles from "../../../components/previews/preview.module.scss"
import React from "react"
import PostPreview from "../../../components/previews/postPreview/postPreview"
import contentStyles from "../../../components/mdContent/mdContent.module.scss"
import Link from "next/link"

export const getStaticPaths = async () => {

  const categories = await getCategories()

  return {
    paths: categories.map(category => ({ params: { name: category.name } })),
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {

  const posts = await getPostsByCategory(params.name)

  posts.map(async (post) => post.data.category = await getCategory(post.category))

  const category = await getCategory(params.name)

  return {
    props: {
      posts,
      category,
      layoutData
    },
  }
}

const Category = ({ posts, category }) => {
  return (
    <div className={utils.page}>
      <div className={contentStyles.content}>
        <div className="flex justify-between items-center flex-wrap gap-2">
          <h1 className={contentStyles.mainTitle} style={{}}>Category:
            <span style={{color: category.color, textShadow: `var(--secondary) 0 0 1px`}}>{category.name}</span>
          </h1>
          <Link href="/blog/categories"><a className="text-text-primary h-100">All Categories</a></Link>
        </div>
      </div>

      <hr className="my-4"/>
      <div className={styles.previewList}>
        {posts.map((post) => <PostPreview key={post.id} post={post}/>)}
        {posts.length === 0 && <div className="text-center">{'No blog posts yet... <3'}</div>}
      </div>
    </div>
  )
}

Category.withLayout = (page, layoutData) => <Layout {...layoutData}>{page}</Layout>

export default Category
