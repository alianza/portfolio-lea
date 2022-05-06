import utils from "../../../styles/utils.module.scss"
import styles from "../../../components/previews/preview.module.scss"
import { getCategories } from "../../../lib/services/postsService"
import Layout from "../../../components/layout/layout/layout"
import layoutData from "../../../content/config.json"
import React from "react"
import MdContent from "../../../components/mdContent/mdContent"
import CategoryLabel from "../../../components/categoryLabel/categoryLabel"

export const getStaticProps = async () => {

  const categories = await Promise.all(await getCategories())

  return {
    props: {
      categories,
      layoutData
    }
  }
}

const Categories = ({ categories }) => {
  return (
    <div className={utils.page}>
      <MdContent content={{title: 'Categories', content: ''}}/>
      <hr className="my-4"/>
      <div className={styles.previewList}>
        {categories.map((category) => <CategoryLabel key={category.name} category={category}/>)}
      </div>
    </div>
  )
}

Categories.withLayout = (page, layoutData) => <Layout {...layoutData}>{page}</Layout>

export default Categories
