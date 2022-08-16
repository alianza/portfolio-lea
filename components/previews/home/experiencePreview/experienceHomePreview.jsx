import Link from "next/link"
import * as PropTypes from "prop-types"
import React from "react"
import styles from "../../preview.module.scss"
import utils from "../../../../styles/utils.module.scss"
import Image from "next/future/image"
import StartEndDateLabel from "../../../startEndDateLabel/startEndDateLabel"
import { AnimationOnScroll } from "react-animation-on-scroll"

ExperienceHomePreview.propTypes = { experience: PropTypes.object.isRequired }

function ExperienceHomePreview({ experience }) {
  return (
    <AnimationOnScroll initiallyVisible animateIn="animate__fadeInUp" duration=".5" offset="0" animateOnce className={styles.previewHomeContainer}>
      <Link href={`/portfolio/${experience.id}`}>
        <a className={`${styles.imageLinkStyle} ${utils.hoverEffectSlight}`}>
          <Image
            fill
            sizes="100vw"
            alt={`${experience.data.title} thumbnail`}
            className={styles.imageStyle}
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
    </AnimationOnScroll>
  )
}

export default ExperienceHomePreview
