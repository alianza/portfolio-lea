import React from "react"
import utils from "../styles/utils.module.scss"
import Layout from "../components/layout/layout/layout"
import layoutData from "../content/config.json"
import { getPosts } from "../lib/services/postsService"
import { getArticles } from "../lib/services/mediumService"
import PostHomePreview from "../components/previews/home/postPreview/postsHomePreview"
import ArticleHomePreview from "../components/previews/home/articlesPreview/articlesHomePreview"
import { useNetlifyIdentityRedirectHook } from "../lib/eventListeners"
import { getPage } from "../lib/services/pageService"
import HomePreviewCollection from "../components/previews/home/previewCollections/homePreviewCollection"

export const getStaticProps = async () => {

  const posts = getPosts()

  const articles = await getArticles(layoutData.username_medium)

  const homeContent = getPage("home")

  return {
    props: {
      homeContent,
      posts,
      articles: articles.dataMedium,
      layoutData
    },
  }
}

const Home = ({ homeContent, posts, articles }) => {
  useNetlifyIdentityRedirectHook()

  return (
    <div className={`${utils.page} flex flex-col gap-12`}>
      <HomePreviewCollection
        title={homeContent.postsTitle}
        label={homeContent.postsLabel}
        link="/portfolio"
        content={posts.map((post) => <PostHomePreview key={post.id} post={post}/>)}
      />
      <HomePreviewCollection
        title={homeContent.articlesTitle}
        label={homeContent.articlesLabel}
        link="/articles"
        content={articles.map((article) => <ArticleHomePreview key={article.title} article={article}/>)}
      />
    </div>
  )
}

Home.withLayout = (page, layoutData) => <Layout {...layoutData}>{page}</Layout>

export default Home
