import utils from "../../styles/utils.module.scss"
import styles from "../../components/previews/preview.module.scss"
import { getExperiences } from "../../lib/services/experienceService"
import Layout from "../../components/layout/layout/layout"
import { getPage } from "../../lib/services/pageService"
import MdContent from "../../components/mdContent/mdContent"
import ExperiencePreview from "../../components/previews/experiencePreview/experiencePreview"
import React from "react"
import Hr from "../../components/layout/util/hr/hr";

export const getStaticProps = async () => {

  const experiences = await getExperiences({ preview: true })

  const portfolioContent = await getPage("portfolio")

  return {
    props: {
      experiences,
      portfolioContent
    }
  }
}

const Portfolio = ({ experiences, portfolioContent }) => {
  return (
    <div className={utils.page}>
      <MdContent content={portfolioContent}/>
      <Hr/>
      <div className={styles.previewList}>
        {experiences.map((experience) => <ExperiencePreview key={experience.id} experience={experience}/>)}
      </div>
    </div>
  )
}

Portfolio.withLayout = (page) => <Layout>{page}</Layout>

export default Portfolio
