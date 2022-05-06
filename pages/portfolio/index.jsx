import utils from "../../styles/utils.module.scss"
import styles from "../../components/previews/preview.module.scss"
import { getExperiences } from "../../lib/services/experiencesService"
import Layout from "../../components/layout/layout/layout"
import layoutData from "../../content/config.json"
import { getPage } from "../../lib/services/pageService"
import MdContent from "../../components/mdContent/mdContent"
import ExperiencePreview from "../../components/previews/experiencePreview/experiencePreview"
import React from "react"

export const getStaticProps = async () => {

  const experiences = await Promise.all(await getExperiences())

  const portfolioContent = await getPage("portfolio")

  return {
    props: {
      experiences,
      portfolioContent,
      layoutData
    }
  }
}

const Portfolio = ({ experiences, portfolioContent }) => {
  return (
    <div className={utils.page}>
      <MdContent content={portfolioContent}/>
      <hr className="my-4"/>
      <div className={styles.previewList}>
        {experiences.map((experience) => <ExperiencePreview key={experience.id} experience={experience}/>)}
      </div>
    </div>
  )
}

Portfolio.withLayout = (page, layoutData) => <Layout {...layoutData}>{page}</Layout>

export default Portfolio
