import utils from '../../styles/utils.module.scss';
import styles from '../../components/previews/preview.module.scss';
import Layout from '../../components/layout/layout/layout';
import config from '../../content/config.json';
import { getPage } from '../../lib/services/pageService';
import MdContent from '../../components/mdContent/mdContent';
import ArticlePreview from '../../components/previews/articlesPreview/articlePreview';
import React, { useState } from 'react';
import Hr from '../../components/layout/util/hr/hr';
import { getAllArticles } from '../../lib/services/portfolioService';
import TransitionScroll from 'react-transition-scroll';
import { baseStyle, hiddenStyle, initialItemNum, revealNextItems } from '../../lib/utils';
import SeeMoreButton from '../../components/previews/seeMoreButton/seeMoreButton';

export const getStaticProps = async () => {
  const articles = await getAllArticles(config.usernameMedium);

  const articlesContent = await getPage('portfolio');

  return {
    props: {
      articles,
      articlesContent,
    },
    revalidate: 60,
  };
};

const Articles = ({ articles, articlesContent }) => {
  const [numVisibleItems, setNumVisibleItems] = useState(initialItemNum);
  const allItemsVisible = articles.length <= numVisibleItems;

  return (
    <div className={utils.page}>
      <MdContent content={articlesContent} />
      <Hr />
      <div className={styles.previewList}>
        {articles.slice(0, numVisibleItems).map((article) => (
          <ArticlePreview key={article.title} article={article} />
        ))}

        <TransitionScroll
          baseStyle={baseStyle}
          hiddenStyle={hiddenStyle}
          as="a"
          href={articlesContent.readMoreLink.link}
          target="_blank"
          rel="noreferrer"
          className={`${utils.arrowLink} group mt-4 inline-flex self-end mobile:mt-8`}
        >
          <span className={utils.label}>{articlesContent.readMoreLink.label}</span>
          <span className={`${utils.arrow} group-hover:translate-x-2`}>→</span>
        </TransitionScroll>

        {!allItemsVisible && <SeeMoreButton onClick={() => revealNextItems(allItemsVisible, setNumVisibleItems)} />}
      </div>
    </div>
  );
};

Articles.withLayout = (page) => <Layout>{page}</Layout>;

export default Articles;
