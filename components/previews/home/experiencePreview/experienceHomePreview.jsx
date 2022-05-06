import Link from "next/link"
import * as PropTypes from "prop-types"
import React from "react"
import styles from "../../preview.module.scss"
import Image from "next/image"
import StartEndDateLabel from "../../../startEndDateLabel/startEndDateLabel"

ExperienceHomePreview.propTypes = { experience: PropTypes.object.isRequired }

function ExperienceHomePreview({ experience }) {
  return (
    <div className={styles.previewHomeContainer}>
      <Link href={`/portfolio/${experience.id}`}>
        <a className={`${styles.imageLinkStyle} transition-transform hover:scale-[1.02] active:scale-[.98]`}>
          <Image
            layout="fill"
            alt={`${experience.data.title} thumbnail`}
            className={styles.imageStyle}
            objectFit={"cover"}
            src={experience.data.thumbnail}
            placeholder="blur"
            blurDataURL={`/_next/image?url=${experience.data.thumbnail}&w=16&q=1`}/>
        </a>
      </Link>
      <div className={styles.contentStyle}>
        <Link href={`/portfolio/${experience.id}`}>
          <a className={styles.title}>{experience.data.title}</a>
        </Link>
        <StartEndDateLabel startDate={experience.data.startDate} endDate={experience.data.endDate} centered/>
      </div>
    </div>
  )
}

export default ExperienceHomePreview
