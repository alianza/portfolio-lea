import utils from "../../styles/utils.module.scss"
import Layout from "../../components/layout/layout/layout"
import layoutData from "../../public/content/config.json"

import { getPage } from "../../lib/services/pageService"
import MdContent from "../../components/mdContent/mdContent"
import ContactFormNetlify from "../../components/contactForm/contactFormNetlify"

export const getStaticProps = async () => {

  const contactContent = await getPage("contact")

  return {
    props: {
      contactContent,
      layoutData
    }
  }
}

const Contact = ({ contactContent }) => {
  return (
    <div className={utils.page}>
      <MdContent content={contactContent} withSpacing/>
      <ContactFormNetlify/>
    </div>
  )
}

Contact.withLayout = (page, layoutData) => <Layout {...layoutData}>{page}</Layout>

export default Contact;
