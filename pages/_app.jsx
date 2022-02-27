import '../styles/globals.scss'

// Todo: online accounts icons
// Todo: Homepage content
// Todo: Manifest & favicons
// Todo: Categories colors
// Todo: Contact form button
// Todo: PostPreviews images widescreen

function MyApp({Component, pageProps}) {
  const withLayout = Component.withLayout ?? ((page) => page)

  const { layoutData, ...rest } = pageProps;

  return withLayout(<Component {...pageProps} />, layoutData)
}

export default MyApp
