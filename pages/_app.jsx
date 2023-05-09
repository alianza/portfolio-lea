import "../styles/globals.scss"
import "react-transition-scroll/dist/index.css";

function MyApp({Component, pageProps}) {
  const withLayout = Component.withLayout || ((page) => page);

  return withLayout(<Component {...pageProps} />);
}

export default MyApp
