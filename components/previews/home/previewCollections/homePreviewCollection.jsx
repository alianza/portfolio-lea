import Link from "next/link"
import * as PropTypes from "prop-types"
import React from "react"
import styles from "./homePreviewCollection.module.scss"

function HomePreviewCollection({ title, label, link, content }) {
  return(
  <div className={styles.container}>
    <div className={styles.heading}>
      <h1 className={styles.headingTitle}>{title}</h1>
      <Link href={link}>
        <a className={`${styles.link} group hidden mobile:flex`}>
          <span className={styles.label}>{label}</span>
          <span className={`${styles.arrow} group-hover:translate-x-2`}>→</span>
        </a>
      </Link>
    </div>
    <div className={styles.contentWrapper}>{content}</div>
    <Link href={link}>
      <a className={`${styles.link} mt-8 self-end group inline-flex mobile:hidden`}>
        <span className={styles.label}>{label}</span>
        <span className={`${styles.arrow} group-hover:translate-x-2`}>→</span>
      </a>
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
