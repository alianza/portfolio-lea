import utils from "../../styles/utils.module.scss"
import Layout from "../../components/layout/layout/layout"
import layoutData from "../../content/config.json"
import { getPage } from "../../lib/services/pageService"
import MdContent from "../../components/mdContent/mdContent"
import ContactFormNetlify from "../../components/contactForm/contactFormNetlify"

export const getStaticProps = async () => {

  const contactContent = getPage("contact")

  return {
    props: {
      aboutContent: contactContent,
      layoutData
    }
  }
}

const Contact = ({ aboutContent }) => {
  return (
    <div className={utils.page}>
      <MdContent content={aboutContent} withSpacing/>
      <ContactFormNetlify/>
    </div>
  )
}

Contact.withLayout = (page, layoutData) => <Layout {...layoutData}>{page}</Layout>

export default Contact;
