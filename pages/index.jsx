import Head from 'next/head'
import fs from "fs"
import path from "path"
import yaml from "js-yaml";
import matter from "gray-matter"
import marked from "marked"
import { useEffect } from "react"
import utils from "../styles/utils.module.scss"
import Layout from "../components/layout/layout/layout"

export const getStaticProps = async () => {
  const contentDirectory = path.join(process.cwd(), "content/");
  const filePath = path.join(contentDirectory, "home.md");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const homeData = matter(fileContents, {
    engines: { yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) }
  });
  homeData.content = marked(homeData.content);

  const layoutData = {
    title: "Portfolio title",
    accounts: [
      {
        name: "Instagram",
        url: "https://www.instagram.com/",
      },
      {
        name: "Twitter",
        url: "https://www.twitter.com/",
      },
      {
        name: "Facebook",
        url: "https://www.facebook.com/",
      },
    ]
  }

  return {
    props: {
      homeData,
      layoutData
    },
  }
}

const Home = ({homeData}) => {

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
    <div className={`${utils.page} flex items-center justify-center flex-col`}>
      <Head>
        <title>Lea Shamaa - Portfolio</title>
      </Head>

        <h1 className="text-6xl font-bold text-center">
          I am{' '}
          <span className="text-blue-600">
            Lea Shamaa!
          </span>
        </h1>
      <h3 className="text-3xl underline">{homeData.data.subtitle}</h3>
    </div>
  )
}

Home.withLayout = (page, layoutData) => <Layout {...layoutData}>{page}</Layout>

export default Home
