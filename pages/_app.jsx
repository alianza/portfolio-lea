import '../styles/globals.scss'
import Layout from "../components/layout/layout/layout"

function MyApp({Component, pageProps}) {
  const withLayout = Component.withLayout ?? ((page) => page)

  const { layoutData, ...rest } = pageProps;

  return withLayout(<Component {...pageProps} />, layoutData)
}

export default MyApp
