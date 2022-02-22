import { Html, Head, Main, NextScript } from 'next/document'
import Script from "next/script"

export default function Document() {
  return (
    <Html>
      <Head lang="en" >
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"/>
      </Head>
      <body>
      <Main />
      <NextScript />
      </body>
    </Html>
  )
}
