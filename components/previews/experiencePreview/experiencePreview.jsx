import Link from 'next/link';
import Image from 'next/image';
import styles from '../preview.module.scss';
import utils from '../../../styles/utils.module.scss';
import * as PropTypes from 'prop-types';
import StartEndDateLabel from '../../layout/util/startEndDateLabel/startEndDateLabel';
import { TransitionScroll } from 'react-transition-scroll';
import { hiddenStyle, transitionBaseStyle } from '../../../lib/utils';

ExperiencePreview.propTypes = { experience: PropTypes.object.isRequired };

function ExperiencePreview({ experience }) {
  return (
    <TransitionScroll className={styles.previewContainer} baseStyle={transitionBaseStyle} hiddenStyle={hiddenStyle}>
      <Link href={`/experiences/${experience.id}`} className={`${styles.linkStyle} ${utils.hoverEffectSlight}`}>
        <Image
          fill
          sizes="(max-width: 900px) 90vw, 30vw"
          alt={`${experience.data.title} thumbnail`}
          className={styles.imageStyle}
          src={experience.data.thumbnail}
          placeholder="blur"
          blurDataURL={`/_next/image?url=${experience.data.thumbnail}&w=16&q=1`}
        />
      </Link>
      <div className={styles.contentStyle}>
        <Link href={`/experiences/${experience.id}`} className="text-2xl">
          {experience.data.title}
        </Link>
        <StartEndDateLabel startDate={experience.data.startDate} endDate={experience.data.endDate} />
        <p className={styles.description}>{experience.data.description}</p>
      </div>
    </TransitionScroll>
  );
}

export default ExperiencePreview;
