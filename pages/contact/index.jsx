import utils from "../../styles/utils.module.scss"
import Layout from "../../components/layout/layout/layout"
import layoutData from "../../content/config.json"
import styles from "./contact.module.scss"
import { getPage } from "../../lib/services/pageService"
import MdContent from "../../components/mdContent/mdContent"

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
        <MdContent content={aboutContent} withSpacing />
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          className={styles.form}>
          <input type="hidden" name="form-name" value="contact"/>
          <p>
            <label>
              <span>Your Name:</span>
              <input type="text" name="name" required />
            </label>
          </p>
          <p>
            <label>
              <span>Your Email:</span>
              <input type="email" name="email" required />
            </label>
          </p>
          <p>
            <label className="items-start">
              <span>Your Message to me:</span>
              <textarea name="message" />
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
    </div>
  )
}

Contact.withLayout = (page, layoutData) => <Layout {...layoutData}>{page}</Layout>

export default Contact;
