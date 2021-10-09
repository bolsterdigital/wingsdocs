import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Translate, { translate } from '@docusaurus/Translate';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: <Translate>Publish pages and articles</Translate>,
    Svg: require('../../static/img/Article.svg').default,
    description: (
      <>
        <Translate>Get started</Translate>{' '}
        <Link to="/docs/pages-articles/publish-articles-and-pages">
          <Translate>publishing</Translate>
        </Link>{' '}
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
        <Translate>Build a movement with our</Translate>{' '}
        <Link to="/features">
          <Translate>powerful features</Translate>
        </Link>
        :{' '}
        <Translate>
          create signups, petitions, events and fundraisers to win your
          campaign.
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
        <Link to="/docs/setting-up/webhooks">
          <Translate>webhooks docs</Translate>
        </Link>{' '}
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
