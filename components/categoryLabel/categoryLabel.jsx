import contentStyles from "../mdContent/mdContent.module.scss"
import React from "react"
import * as PropTypes from "prop-types"
import Link from "next/link"
import utils from "../../styles/utils.module.scss"

CategoryLabel.propTypes = {
  category: PropTypes.object.isRequired,
}

function CategoryLabel({ category }) {
  const textColor = category.textColor === "light" ? "var(--text-light)" : "var(--text-dark)"

  return (
    <Link href={`/blog/categories/${category.name}`}><a style={{
      ...category.color ? { backgroundColor: `${category.color}`,
      ...category.textColor !== "auto" ? { color: textColor } : {} } : {} }}
      className={`${contentStyles.categoryLabel} ${utils.hoverEffectSlight} no-underline`}>
      {category.name}
    </a>
    </Link>
  )
}

export default CategoryLabel
