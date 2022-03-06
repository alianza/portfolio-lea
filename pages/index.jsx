import React from "react"
import utils from "../styles/utils.module.scss"
import Layout from "../components/layout/layout/layout"
import layoutData from "../content/config.json"
import { getArticles } from "../lib/services/mediumService"
import PostHomePreview from "../components/previews/home/postPreview/postsHomePreview"
import ArticleHomePreview from "../components/previews/home/articlesPreview/articlesHomePreview"
import { useNetlifyIdentityRedirectHook } from "../lib/eventListeners"
import HomePreviewCollection from "../components/previews/home/previewCollections/homePreviewCollection"
import path from "path"
import fs from "fs"
import matter from "gray-matter"
import yaml from "js-yaml"
import marked from "marked"

export const getStaticProps = async () => {

  const contentDirectory = path.join(process.cwd(), "content/posts")
  const fileNames = fs.readdirSync(contentDirectory)

  const posts = fileNames
    .map((fileName) => {
      const fileContents = fs.readFileSync(path.join(contentDirectory, fileName), "utf8")
      const post = matter(fileContents, {
        engines: { yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) }
      })
      post.content = marked(post.content)

      return {
        id: fileName.replace(".md", ""),
        ...post,
      }
    }).reverse().slice(0, 3)

  const articles = await getArticles(layoutData.username_medium)

  // const homeContent = getPage("home")

  return {
    props: {
      // homeContent,
      posts,
      articles: articles.dataMedium.slice(0, 3),
      layoutData
    },
    revalidate: 60,
  }
}

const Home = ({ homeContent, posts, articles }) => {
  useNetlifyIdentityRedirectHook()

  return (
    <div className={`${utils.page} flex flex-col gap-12`}>
      <HomePreviewCollection
        title={"Articles"}
        label={"Articles"}
        link="/articles"
        content={articles.map((article) => <ArticleHomePreview key={article.title} article={article}/>)}
      />
      <hr className="-mb-4 -mt-10 myblock mobile:hidden"/>
      <HomePreviewCollection
        title={"Posts"}
        label={"Posts"}
        link="/portfolio"
        content={posts.map((post) => <PostHomePreview key={post.id} post={post}/>)}
      />
    </div>
  )
}

Home.withLayout = (page, layoutData) => <Layout {...layoutData}>{page}</Layout>

export default Home
