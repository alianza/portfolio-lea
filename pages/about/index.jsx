import utils from "../../styles/utils.module.scss"
import Layout from "../../components/layout/layout/layout"
import layoutData from "../../content/config.json"
import { getPage } from "../../lib/services/pageService"
import MdContent from "../../components/mdContent/mdContent"

export const getStaticProps = async () => {
  const aboutPage = getPage("about")

  return {
    props: {
      aboutPage,
      layoutData
    }
  }
}

const About = ({ aboutPage }) => {
  return (
    <div className={utils.page}>
      <MdContent content={aboutPage} noDate/>
    </div>
  )
}

About.withLayout = (page, layoutData) => <Layout {...layoutData}>{page}</Layout>

export default About;
