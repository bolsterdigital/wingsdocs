import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import HomepageProposition from '../components/HomepageProposition';
import productImage from '../../static/img/wings-petition.png';
import Translate, { translate } from '@docusaurus/Translate';
import { motion } from 'framer-motion';
import ImageComponent from '../components/ImageComponent';
import { FeaturedList } from '../components/CasesList';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.5, 1],
            y: 0,
            scale: [0.7, 1],
          }}
          transition={{ ease: 'easeOut', duration: 1 }}
        >
          <h1 className={clsx('hero__title', styles.heroTitle)}>
            <Translate>
              A better platform for your progressive digital campaign.
            </Translate>
          </h1>
        </motion.div>

        <ImageComponent className={styles.productImage} image={productImage} />
        <div className={styles.proposition}>
          <p className={clsx('hero__subtitle', styles.heroSubtitle)}>
            {' '}
            <Translate>
              Wings is a better, faster and more user-friendly campaign website
              service. Customizable, integrations-ready and privacy-friendly.
            </Translate>
          </p>

          <Link to="/features">
            <button
              className={clsx(
                'button button--outline button--primary button--lg ',
                styles.primarybutton
              )}
            >
              <Translate>Features</Translate>
            </button>
          </Link>
          <Link to="/cases">
            <button
              className={clsx(
                'button button--outline button--lg button--secondary',
                styles.secondarybutton
              )}
            >
              <Translate>Cases</Translate>
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`A website-as-a-service for progressive organizations`}
      description="Go create a movement and win a campaign."
    >
      <main>
        <HomepageHeader />

        <HomepageFeatures />
        <FeaturedList />
        <HomepageProposition />
      </main>
    </Layout>
  );
}
