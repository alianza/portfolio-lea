import React from "react"
import utils from "../styles/utils.module.scss"
import Layout from "../components/layout/layout/layout"
import layoutData from "../content/config.json"
import ExperienceHomePreview from "../components/previews/home/experiencePreview/experienceHomePreview"
import ArticleHomePreview from "../components/previews/home/articlesPreview/articleHomePreview"
import { useNetlifyIdentityRedirectHook } from "../lib/eventListeners"
import { getPage } from "../lib/services/pageService"
import HomePreviewCollection from "../components/previews/home/previewCollections/homePreviewCollection"
import { getExperiences } from "../lib/services/experienceService"
import PostHomePreview from "../components/previews/home/postPreview/postHomePreview"
import { getPosts } from "../lib/services/postService"
import dynamic from "next/dynamic"
import { getAllArticles } from "../lib/services/articleService";
const TypeWriter = dynamic(() => import('../components/typeWriter/typeWriter'), { loading: () => <div /> })

export const getStaticProps = async () => {

  const experiences = (await getExperiences({ preview: true })).slice(0, 3)

  const posts = (await getPosts({ preview: true })).slice(0, 3)

  const articles = (await getAllArticles(layoutData.usernameMedium)).slice(0, 3)

  const homeContent = await getPage("home")

  return {
    props: {
      homeContent,
      experiences,
      posts,
      articles,
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
          title={homeContent.blogTitle}
          label={homeContent.blogLabel}
          link="/blog"
          content={posts.map((post) => <PostHomePreview key={post.id} post={post}/>)}
        />
        <hr className="-mb-4 -mt-10 mobile:hidden"/>
        <HomePreviewCollection
          title={homeContent.portfolioTitle}
          label={homeContent.portfolioLabel}
          link="/portfolio"
          content={experiences.map((experience) => <ExperienceHomePreview key={experience.id} experience={experience}/>)}
        />
      </div>
    </>
  )
}

Home.withLayout = (page, layoutData) => <Layout {...layoutData}>{page}</Layout>

export default Home
