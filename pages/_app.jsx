import '../styles/globals.scss'

// Todo: mobile menu
// Todo: online accounts icons
// Todo: Homepage content
// Todo: Manifest & favicons
// Todo: Categories colors

function MyApp({Component, pageProps}) {
  const withLayout = Component.withLayout ?? ((page) => page)

  const { layoutData, ...rest } = pageProps;

  return withLayout(<Component {...pageProps} />, layoutData)
}

export default MyApp
