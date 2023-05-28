import utils from "../../styles/utils.module.scss"
import Layout from "../../components/layout/layout/layout"
import { getPage } from "../../lib/services/pageService"
import MdContent from "../../components/mdContent/mdContent"
import ContactFormNetlify from "../../components/contactForm/contactFormNetlify"
import React from "react"
import Hr from "../../components/layout/util/hr/hr";

export const getStaticProps = async () => {

  const contactContent = await getPage("contact")

  return {
    props: {
      contactContent
    }
  }
}

const Contact = ({ contactContent }) => {
  return (
    <div className={utils.page}>
      <MdContent content={contactContent}/>
      <Hr/>
      <ContactFormNetlify/>
    </div>
  )
}

Contact.withLayout = (page) => <Layout>{page}</Layout>

export default Contact;
