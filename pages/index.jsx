import Head from 'next/head'
import { useEffect } from "react"
import utils from "../styles/utils.module.scss"
import Layout from "../components/layout/layout/layout"
import layoutData from "../content/config.json"

export const getStaticProps = async () => {
  return {
    props: {
      layoutData
    },
  }
}

const Home = () => {
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
    <div className={`${utils.page} flex items-center justify-center flex-col min-h-full`}>
        <h1 className="text-6xl font-bold text-center">
         Homepage{" "}
          <span className="text-blue-600">
            Content!
          </span>
        </h1>
    </div>
  )
}

Home.withLayout = (page, layoutData) => <Layout {...layoutData}>{page}</Layout>

export default Home
