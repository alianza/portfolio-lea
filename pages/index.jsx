import Head from 'next/head'
import React, { useEffect } from "react"
import utils from "../styles/utils.module.scss"
import Layout from "../components/layout/layout/layout"
import layoutData from "../content/config.json"
import { getPosts } from "../lib/services/postsService"
import { getArticles } from "../lib/services/mediumService"
import PostHomePreview from "../components/previews/home/postPreview/postsHomePreview"
import ArticleHomePreview from "../components/previews/home/articlesPreview/articlesHomePreview"

export const getStaticProps = async () => {

  const posts = getPosts()

  const articles = await getArticles(layoutData.username_medium)

  return {
    props: {
      posts,
      articles,
      layoutData
    },
  }
}

const Home = ({ posts, articles: { dataMedium } }) => {
  useEffect(() => {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on("init", user => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      })
    }
  }, []);

  return (
    <div className={`${utils.page} flex flex-col gap-12`}>
      <div className="flex flex-col gap-2 items-center items-stretch tablet:flex-row">
        {posts.map((post) => <PostHomePreview key={post.id} post={post}/> )}
      </div>
      <div className="flex flex-col gap-2 items-center items-stretch tablet:flex-row">
        {dataMedium.map((article) => <ArticleHomePreview key={article.title} article={article}/> )}
      </div>
    </div>
  )
}

Home.withLayout = (page, layoutData) => <Layout {...layoutData}>{page}</Layout>

export default Home
