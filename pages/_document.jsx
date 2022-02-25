import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head lang="en" >
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"/>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Special+Elite&display=swap" />
      </Head>
      <body>
      <Main />
      <NextScript />
      </body>
    </Html>
  )
}
