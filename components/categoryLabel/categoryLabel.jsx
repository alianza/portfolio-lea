import contentStyles from "../mdContent/mdContent.module.scss"
import React from "react"
import * as PropTypes from "prop-types"
import Link from "next/link"
import utils from "../../styles/utils.module.scss"

CategoryLabel.propTypes = {
  category: PropTypes.object.isRequired,
}

function CategoryLabel({ category }) {
  let textColor = 'var(--text-primary)'

  if (category.textColor !== 'auto') {
    textColor = `var(--text-${category.textColor})`
  }

  return (
    <Link href={`/blog/categories/${category.name}`}>
      <a style={{ backgroundColor: `${category.color}`, color: textColor }}
         className={`${contentStyles.categoryLabel} ${utils.hoverEffectSlight} no-underline`}>
        {category.name}
      </a>
    </Link>
  )
}

export default CategoryLabel
