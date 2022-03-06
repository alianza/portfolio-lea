import contentStyles from "../mdContent/mdContent.module.scss"
import React from "react"
import * as PropTypes from "prop-types"

CategoryLabel.propTypes = {
  category: PropTypes.object.isRequired,
}

function CategoryLabel({ category }) {
  const textColor = category.textColor === "light" ? "var(--text-light)" : "var(--text-dark)"

  return <span style={{
    ...category.color ? { backgroundColor: `${category.color}`,
    ...category.textColor !== "auto" ? { color: textColor } : {} } : {} }}
    className={contentStyles.categoryLabel}>{category.name}</span>
}

export default CategoryLabel
