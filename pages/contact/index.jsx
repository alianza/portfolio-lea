import utils from "../../styles/utils.module.scss"
import Layout from "../../components/layout/layout/layout"
import layoutData from "../../content/config.json"

export const getStaticProps = async () => {
  return {
    props: {
      layoutData
    }
  }
}

const Contact = () => {
  return (
    <div className={utils.page}>
        <h1 className={utils.title}>Contact</h1>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          className="form">
          <input type="hidden" name="form-name" value="contact"/>
          <p>
            <label>
              <span>Your Name:</span> <input type="text" name="name" required />
            </label>
          </p>
          <p>
            <label>
              <span>Your Email:</span> <input type="email" name="email" required />
            </label>
          </p>
          <p>
            <label className="items-start">
              <span>Your Message to me:</span> <textarea name="email" />
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      <style jsx >{`
        .form {
            @apply w-[36em];
            
            p {
              @apply mb-4 w-full;
              
              label {
                @apply block flex justify-between items-center;
                
                span {
                @apply mr-2;
                }
              }
              
              input, textarea {
                @apply border rounded w-[24em];
              }
              
              textarea {
                @apply h-24;
              }
            }
        }
      `}</style>
    </div>
  )
}

Contact.withLayout = (page, layoutData) => <Layout {...layoutData}>{page}</Layout>

export default Contact;
