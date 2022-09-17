import utils from "../../../styles/utils.module.scss"
import * as PropTypes from "prop-types"
import React from "react"
import Link from 'next/link'
import SOrNot from "../../layout/util/sorNot/sOrNot";

function CategoryPreview({ category }) {
  const textColor = category.textColor === "light" ? "var(--text-light)" : "var(--text-dark)"
  const textStyle = category.textColor !== "auto" ? { color: textColor } : {}

  return (
    <Link href={`/blog/categories/${category.name}`}>
      <a className={`p-4 relative cursor-pointer no-underline ${utils.hoverEffectSlight}`}
         style={{ backgroundColor: category.color }}>
        <h1 style={{ ...textStyle }} className="text-2xl">{category.name}</h1>
        <span style={{ ...textStyle }}>{category.count} Post<SOrNot arrayLength={category.count}/></span>
        <span className="absolute block tablet:hidden right-1 bottom-0 text-sm" style={{ ...textStyle }}>Read more...</span>
      </a>
    </Link>
  )
}

CategoryPreview.propTypes = { category: PropTypes.object.isRequired }

export default CategoryPreview
