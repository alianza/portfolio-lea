import contentStyles from "../mdContent/mdContent.module.scss"
import React from "react"
import * as PropTypes from "prop-types"
import Link from "next/link"
import utils from "../../styles/utils.module.scss"

CategoryLabel.propTypes = {
  category: PropTypes.object.isRequired,
}

function CategoryLabel({ category, className = '', style = {} }) {
  if (!category) return null

  let textColor = 'var(--text-primary)'

  if (category.textColor !== 'auto') {
    textColor = `var(--text-${category.textColor})`
  }

  return (
    <Link href={`/blog/categories/${category.name}`}>
      <a style={{ backgroundColor: `${category.color}`, color: textColor, ...style }}
         className={`${contentStyles.categoryLabel} ${utils.hoverEffectSlight} no-underline ${className}`}>
        {category.name}
      </a>
    </Link>
  )
}

export default CategoryLabel
