import '../styles/globals.scss'

// Todo: Manifest & favicons
// Todo: Homepage quotes

function MyApp({Component, pageProps}) {
  const withLayout = Component.withLayout ?? ((page) => page)

  const { layoutData, ...rest } = pageProps;

  return withLayout(<Component {...pageProps} />, layoutData)
}

export default MyApp
