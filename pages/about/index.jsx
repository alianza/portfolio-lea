import utils from "../../styles/utils.module.scss"
import Layout from "../../components/layout/layout/layout"
import { getPage } from "../../lib/services/pageService"
import MdContent from "../../components/mdContent/mdContent"

export const getStaticProps = async () => {
  const aboutPage = await getPage("about")

  return {
    props: {
      aboutPage
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

About.withLayout = (page) => <Layout>{page}</Layout>

export default About;
