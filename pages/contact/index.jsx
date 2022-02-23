import utils from "../../styles/utils.module.scss"
import Layout from "../../components/layout/layout/layout"

// export const getStaticProps = async () => {
//   const articles = getArticles()
//
//   return {
//     props: {
//       articles
//     }
//   }
// }

const Contact = () => {
  return (
    <div className={utils.page}>
      <div className={utils.container}>
        <h1 className={utils.title}>Contact</h1>
        <form
          name="contact form"
          method="post"
          data-netlify="true">
          <input type="hidden" name="form-name" value="contact"/>
          <p className="mb-4">
            <label>
              Your Name: <input type="text" name="name" required />
            </label>
          </p>
          <p className="mb-4">
            <label>
              Your Email: <input type="email" name="email" required />
            </label>
          </p>
          <p className="mb-4">
            <label>
              Your Email: <textarea name="email" />
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </div>
    </div>
  )
}

Contact.withLayout = (page, layoutData) => <Layout {...layoutData}>{page}</Layout>

export default Contact;
