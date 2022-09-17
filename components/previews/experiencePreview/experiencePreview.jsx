import Link from "next/link";
import Image from "next/future/image";
import styles from "../preview.module.scss";
import utils from "../../../styles/utils.module.scss";
import * as PropTypes from "prop-types";
import AnimateOnScroll from "../../animateOnScroll/animateOnScroll";
import StartEndDateLabel from "../../layout/util/startEndDateLabel/startEndDateLabel";

ExperiencePreview.propTypes = { experience: PropTypes.object.isRequired };

function ExperiencePreview({ experience }) {
  return (
    <AnimateOnScroll className={styles.previewContainer}>
      <Link href={`/portfolio/${experience.id}`}>
        <a className={`${styles.linkStyle} ${utils.hoverEffectSlight}`}>
          <Image
            fill
            sizes="100vw"
            alt={`${experience.data.title} thumbnail`}
            className={styles.imageStyle}
            src={experience.data.thumbnail}
            placeholder="blur"
            blurDataURL={`/_next/image?url=${experience.data.thumbnail}&w=16&q=1`} />
        </a>
      </Link>
      <div className={styles.contentStyle}>
        <Link href={`/portfolio/${experience.id}`}>
          <a className="text-2xl">{experience.data.title}</a>
        </Link>
        <StartEndDateLabel startDate={experience.data.startDate} endDate={experience.data.endDate} />
        <p className={styles.description}>{experience.data.description}</p>
      </div>
    </AnimateOnScroll>
  );
}

export default ExperiencePreview;
