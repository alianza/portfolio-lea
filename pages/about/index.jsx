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

const About = () => {
  return (
    <div className={utils.page}>
      <div className={utils.container}>
      <h1 className={utils.title}>About</h1>
      <p className="text-lg">
        This is a simple blog built with Next.js and TailwindCSS for my beautiful girlfriend Lea Shamaa.
      </p>
      </div>
    </div>
  )
}

About.withLayout = (page, layoutData) => <Layout {...layoutData}>{page}</Layout>

export default About;
