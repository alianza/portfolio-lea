import '../styles/globals.scss'

// Todo: Homepage content
// Todo: Manifest & favicons
// Todo: Categories colors
// Todo: Contact form button

function MyApp({Component, pageProps}) {
  const withLayout = Component.withLayout ?? ((page) => page)

  const { layoutData, ...rest } = pageProps;

  return withLayout(<Component {...pageProps} />, layoutData)
}

export default MyApp
