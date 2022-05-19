import React from "react"
import utils from "../styles/utils.module.scss"
import Layout from "../components/layout/layout/layout"
import layoutData from "../content/config.json"
import { getArticles } from "../lib/services/mediumService"
import ExperienceHomePreview from "../components/previews/home/experiencePreview/experienceHomePreview"
import ArticleHomePreview from "../components/previews/home/articlesPreview/articlesHomePreview"
import { useNetlifyIdentityRedirectHook } from "../lib/eventListeners"
import { getPage } from "../lib/services/pageService"
import HomePreviewCollection from "../components/previews/home/previewCollections/homePreviewCollection"
import { getExperiences } from "../lib/services/experiencesService"
import PostHomePreview from "../components/previews/home/postPreview/postsHomePreview"
import { getPosts } from "../lib/services/postsService"
import TypeWriter from "../components/typeWriter/typeWriter"

export const getStaticProps = async () => {

  const experiences = (await Promise.all(await getExperiences())).slice(0, 3)

  const posts = (await Promise.all(await getPosts())).slice(0, 3)

  const { dataMedium } = await getArticles(layoutData.username_medium)

  const homeContent = await getPage("home")

  return {
    props: {
      homeContent,
      experiences,
      posts,
      articles: dataMedium.slice(0, 3),
      layoutData
    },
    revalidate: 60,
  }
}

const Home = ({ homeContent, experiences, posts, articles }) => {
  useNetlifyIdentityRedirectHook()

  return (
    <>
      <TypeWriter quotes={homeContent.quotes}/>

      <div className={`${utils.page} flex flex-col gap-12`}>
        <HomePreviewCollection
          title={homeContent.articlesTitle}
          label={homeContent.articlesLabel}
          link="/articles"
          content={articles.map((article) => <ArticleHomePreview key={article.title} article={article}/>)}
        />
        <hr className="-mb-4 -mt-10 mobile:hidden"/>
        <HomePreviewCollection
          title={homeContent.portfolioTitle}
          label={homeContent.portfolioLabel}
          link="/portfolio"
          content={experiences.map((experience) => <ExperienceHomePreview key={experience.id}
                                                                          experience={experience}/>)}
        />
        <hr className="-mb-4 -mt-10 mobile:hidden"/>
        <HomePreviewCollection
          title={homeContent.blogTitle}
          label={homeContent.blogLabel}
          link="/blog"
          content={posts.map((post) => <PostHomePreview key={post.id} post={post}/>)}
        />
      </div>
    </>
  )
}

Home.withLayout = (page, layoutData) => <Layout {...layoutData}>{page}</Layout>

export default Home
