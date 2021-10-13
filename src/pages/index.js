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
              There's a better way to build a progressive digital campaign.
            </Translate>
          </h1>
        </motion.div>

        <ImageComponent className={styles.productImage} image={productImage} />

        <p className={clsx('hero__subtitle', styles.heroSubtitle)}>
          {' '}
          <Translate>
            Wings gives you a better, faster and more easy-to-use campaign
            website that can connect to any email service, CRM system or
            campaigning toolkit.
          </Translate>
        </p>
        <motion.button
          className="button button--secondary button--lg"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link to="/demo">
            <Translate>Take off with Wings 🛫</Translate>
          </Link>
        </motion.button>
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
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <HomepageProposition />
      </main>
    </Layout>
  );
}
