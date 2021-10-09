import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Translate, { translate } from '@docusaurus/Translate';
import { motion } from 'framer-motion';

const FeatureList = [
  {
    title: <Translate>Publish pages and articles</Translate>,
    Svg: require('../../static/img/Article.svg').default,
    description: (
      <>
        <Translate>Get started</Translate>{' '}
        <a href="/docs/pages-articles/publish-articles-and-pages">
          <Translate>publishing</Translate>
        </a>{' '}
        <Translate>
          beautiful pages and compelling stories with Wings.
        </Translate>
      </>
    ),
  },

  {
    title: <Translate>Run winning campaigns</Translate>,
    Svg: require('../../static/img/Flag.svg').default,
    description: (
      <>
        <Translate>Start a movement with</Translate>{' '}
        <a href="/docs/creating-campaigns/creating-campaigns">
          <Translate>Wings campaigns</Translate>
        </a>
        :{' '}
        <Translate>
          learn how to use signups, petitions, events and fundraisers.
        </Translate>
      </>
    ),
  },
  {
    title: <Translate>Build a powerhouse</Translate>,
    Svg: require('../../static/img/Outlet.svg').default,
    description: (
      <>
        <Translate>Dive into the</Translate>{' '}
        <a href="/docs/setting-up/webhooks">
          <Translate>webhooks docs</Translate>
        </a>{' '}
        <Translate>
          and find out how to integrate Wings with Mailchimp, The Action Network
          and many more.
        </Translate>
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
