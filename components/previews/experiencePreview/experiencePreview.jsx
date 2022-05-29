import Link from "next/link"
import Image from "next/image"
import styles from '../preview.module.scss'
import * as PropTypes from "prop-types"
import StartEndDateLabel from "../../startEndDateLabel/startEndDateLabel"
import { AnimationOnScroll } from "react-animation-on-scroll"

ExperiencePreview.propTypes = { experience: PropTypes.object.isRequired }

function ExperiencePreview({ experience }) {
  return (
    <AnimationOnScroll animateIn="animate__fadeInUp" duration=".5" animateOnce>
      <div className={styles.previewContainer}>
        <Link href={`/portfolio/${experience.id}`}>
          <a className={`${styles.linkStyle} transition-transform hover:scale-[1.02] active:scale-[.98]`}>
            <Image
              layout="fill"
              alt={`${experience.data.title} thumbnail`}
              className={styles.imageStyle}
              objectFit={"cover"}
              src={experience.data.thumbnail}
              placeholder="blur"
              blurDataURL={`/_next/image?url=${experience.data.thumbnail}&w=16&q=1`}/>/>
          </a>
        </Link>
        <div className={styles.contentStyle}>
          <Link href={`/portfolio/${experience.id}`}>
            <a className="text-2xl">{experience.data.title}</a>
          </Link>
          <StartEndDateLabel startDate={experience.data.startDate} endDate={experience.data.endDate}/>
          <p className={styles.description}>{experience.data.description}</p>
        </div>
      </div>
    </AnimationOnScroll>
  )
}

export default ExperiencePreview
