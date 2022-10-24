import utils from "../../styles/utils.module.scss"
import Layout from "../../components/layout/layout/layout"
import layoutData from "../../content/config.json"
import MdContent from "../../components/mdContent/mdContent"
import Head from "next/head"
import { getExperience, getExperiencesIds } from "../../lib/services/experienceService"

export const getStaticPaths = async () => {

  const experienceIds = await getExperiencesIds()

  return {
    paths: experienceIds.map(({ experienceId }) => ({ params: { experienceId } })),
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {

  const experience = await getExperience(params.experienceId)

  return {
    props: {
      experience,
      layoutData
    },
  }
}

const Experience = ({ experience }) => {
  return (
    <>
      <Head>
        <title>{experience.title}</title>
        <meta name="description" content={experience.description} />
        <meta property="og:image" content={experience.thumbnail} />
        <meta property="og:description" content={experience.description} />
        <meta property="og:title" content={experience.title} />
        <meta name="twitter:image" content={experience.thumbnail} />
      </Head>
      <div className={`${utils.page} max-w-screen-desktop`}>
        <MdContent content={experience}/>
      </div>
    </>
  )
}

Experience.withLayout = (page, layoutData) => <Layout {...layoutData}>{page}</Layout>

export default Experience
