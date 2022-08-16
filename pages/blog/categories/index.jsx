import utils from "../../../styles/utils.module.scss"
import { getCategories } from "../../../lib/services/postsService"
import Layout from "../../../components/layout/layout/layout"
import layoutData from "../../../content/config.json"
import React from "react"
import MdContent from "../../../components/mdContent/mdContent"
import CategoryPreview from "../../../components/previews/categoryPreview/categoryPreview"
import { getPage } from "../../../lib/services/pageService"
import Hr from "../../../components/hr/hr"

export const getStaticProps = async () => {

  const categories = await getCategories()
  
  const categoriesContent = await getPage("categories")

  return {
    props: {
      categories,
      categoriesContent,
      layoutData
    }
  }
}


const Categories = ({ categories, categoriesContent }) => {
  return (
    <div className={utils.page}>
      <MdContent content={categoriesContent}/>
      <Hr/>
      <div className="flex flex-wrap gap-2 flex-col tablet:flex-row">
        {categories.map((category) => <CategoryPreview key={category.name} category={category}/>)}
      </div>
    </div>
  )
}

Categories.withLayout = (page, layoutData) => <Layout {...layoutData}>{page}</Layout>

export default Categories
