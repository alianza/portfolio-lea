import utils from '../../styles/utils.module.scss';
import styles from '../../components/previews/preview.module.scss';
import { getExperiences } from '../../lib/services/experienceService';
import Layout from '../../components/layout/layout/layout';
import { getPage } from '../../lib/services/pageService';
import MdContent from '../../components/mdContent/mdContent';
import ExperiencePreview from '../../components/previews/experiencePreview/experiencePreview';
import React, { useState } from 'react';
import Hr from '../../components/layout/util/hr/hr';
import SeeMoreButton from '../../components/previews/seeMoreButton/seeMoreButton';
import { initialItemNum, revealNextItems } from '../../lib/utils';

export const getStaticProps = async () => {
  const experiences = await getExperiences({ preview: true });

  const portfolioContent = await getPage('experiences');

  return {
    props: {
      experiences,
      portfolioContent,
    },
  };
};

const Portfolio = ({ experiences, portfolioContent }) => {
  const [numVisibleItems, setNumVisibleItems] = useState(initialItemNum);
  const allItemsVisible = experiences.length <= numVisibleItems;

  return (
    <div className={utils.page}>
      <MdContent content={portfolioContent} />
      <Hr />
      <div className={styles.previewList}>
        {experiences.slice(0, numVisibleItems).map((experience) => (
          <ExperiencePreview key={experience.id} experience={experience} />
        ))}

        {!allItemsVisible && <SeeMoreButton onClick={() => revealNextItems(allItemsVisible, setNumVisibleItems)} />}
      </div>
    </div>
  );
};

Portfolio.withLayout = (page) => <Layout>{page}</Layout>;

export default Portfolio;
