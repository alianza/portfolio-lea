import utils from "../../styles/utils.module.scss"
import Layout from "../../components/layout/layout/layout"
import layoutData from "../../content/config.json"
import MdContent from "../../components/mdContent/mdContent"
import Head from "next/head"
import { getPost, getPostIds } from "../../lib/services/postService"
import { getCategory } from "../../lib/services/configService"
import { useEffect, useState } from "react";
import { useRouter } from 'next/router'

export const getStaticPaths = async () => {

  const postIds = await getPostIds()

  return {
    paths: postIds.map(({ postId }) => ({ params: { postId } })),
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {

  const post = await getPost(params.postId)

  post.category = await getCategory(post.category);

  return {
    props: {
      post,
      layoutData
    },
  }
}

const Post = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.description} />
        {/*<meta property="og:image" content={post.thumbnail} />*/}
        {/*  <meta name="twitter:image" content={post.thumbnail} />*/}
      </Head>
      <div className={`${utils.page} max-w-screen-desktop`}>
        <MdContent content={post}/>
      </div>
    </>
  )
}

Post.withLayout = (page, layoutData) => <Layout {...layoutData}>{page}</Layout>

export default Post
