import utils from "../../styles/utils.module.scss"
import { getPosts } from "../../lib/services/postsService"
import Layout from "../../components/layout/layout/layout"
import layoutData from "../../content/config.json"
import { getPage } from "../../lib/services/pageService"
import MdContent from "../../components/mdContent/mdContent"
import PostPreview from "../../components/previews/postPreview/postPreview"

export const getStaticProps = async () => {

  const posts = getPosts()

  const portfolioContent = getPage("portfolio")

  return {
    props: {
      posts,
      portfolioContent,
      layoutData
    }
  }
}

const Articles = ({ posts, portfolioContent }) => {
  return (
    <div className={utils.page}>
      <MdContent content={portfolioContent} withSpacing/>
      <div className="flex flex-col gap-8 mx-auto py-8 max-w-4xl">
        {posts.map(({ id, post }) => <PostPreview key={id} id={id} post={post}/>)}
      </div>
    </div>
  )
}

Articles.withLayout = (page, layoutData) => <Layout {...layoutData}>{page}</Layout>

export default Articles
