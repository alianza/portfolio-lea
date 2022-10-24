import React from "react"
import { getBaseUrl } from "../../../lib/utils";
import { default as NextHead } from "next/head"

const Head = ({ item: { title, description, thumbnail } }) => {
  const thumbnailUrl = getBaseUrl() + thumbnail;
  return(
    <NextHead>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:image" content={thumbnailUrl} />
      <meta property="og:description" content={description} />
      <meta property="og:title" content={title} />
      <meta name="twitter:image" content={thumbnailUrl} />
    </NextHead>
  )
};

export default Head;
