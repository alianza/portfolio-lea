import Link from "next/link"
import * as PropTypes from "prop-types"
import React from "react"
import styles from "./homePreviewCollection.module.scss"
import utils from "../../../../styles/utils.module.scss"

function HomePreviewCollection({ title, label, link, content }) {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1 className={styles.headingTitle}>{title}</h1>
        <Link href={link} className={`${utils.arrowLink} group hidden mobile:flex`}>
          <span className={utils.label}>{label}</span>
          <span className={`${utils.arrow} group-hover:translate-x-2`}>→</span>
        </Link>
      </div>
      <div className={styles.contentWrapper}>
        {content}
      </div>
      <Link href={link} className={`${utils.arrowLink} mt-8 self-end group inline-flex mobile:hidden`}>
        <span className={utils.label}>{label}</span>
        <span className={`${utils.arrow} group-hover:translate-x-2`}>→</span>
      </Link>
    </div>
  )
}

HomePreviewCollection.propTypes = {
  title: PropTypes.string,
  label: PropTypes.string,
  link: PropTypes.string,
  content: PropTypes.array
}

export default HomePreviewCollection
