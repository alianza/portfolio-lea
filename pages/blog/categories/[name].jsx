import utils from "../../../styles/utils.module.scss"
import Layout from "../../../components/layout/layout/layout"
import layoutData from "../../../content/config.json"
import { getCategories, getPostsByCategory } from "../../../lib/services/postService"
import { getCategory } from "../../../lib/services/configService"
import styles from "../../../components/previews/preview.module.scss"
import React from "react"
import PostPreview from "../../../components/previews/postPreview/postPreview"
import contentStyles from "../../../components/mdContent/mdContent.module.scss"
import Link from "next/link"
import Hr from "../../../components/layout/util/hr/hr";

export const getStaticPaths = async () => {

  const categories = await getCategories()

  return {
    paths: categories.map(category => ({ params: { name: category.name } })),
    fallback: 'blocking', // https://answers.netlify.com/t/nextjs-routes-404-on-successful-build/89630
  }
}

export const getStaticProps = async ({ params }) => {

  const posts = await getPostsByCategory(params.name)

  posts.map(async (post) => post.data.category = await getCategory(post.data.category.name))

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
          <h1 className={contentStyles.mainTitle}>Category:{' '}
            <span style={{ color: category.color, textShadow: `var(--secondary) 0 0 1px` }}>{category.name}</span>
          </h1>
          <Link href="/blog/categories" className="text-text-primary h-100">All Categories</Link>
        </div>
      </div>
      <Hr/>
      <div className={styles.previewList}>
        {posts.map((post) => <PostPreview key={post.id} post={post} hideCategoryLabel/>)}
        {posts.length === 0 && <div className="text-center">{'No blog posts yet... <3'}</div>}
      </div>
    </div>
  )
}

Category.withLayout = (page, layoutData) => <Layout {...layoutData}>{page}</Layout>

export default Category
