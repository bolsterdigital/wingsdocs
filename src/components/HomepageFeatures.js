import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Publish pages & articles',
    Svg: require('../../static/img/Article.svg').default,
    description: (
      <>
        Get started{' '}
        <a href="/docs/pages-articles/publish-articles-and-pages">publishing</a>{' '}
        beautiful pages and compelling stories with Wings.
      </>
    ),
  },
  {
    title: 'Run winning campaings',
    Svg: require('../../static/img/Flag.svg').default,
    description: (
      <>
        Start a movement with{' '}
        <a href="/docs/creating-campaigns/creating-campaigns">
          Wings campaigns
        </a>
        : learn how to use signups, petitions, events and fundraisers.
      </>
    ),
  },
  {
    title: 'Build a powerhouse',
    Svg: require('../../static/img/Outlet.svg').default,
    description: (
      <>
        Dive into the <a href="/docs/setting-up/webhooks">webhooks docs</a> and
        find out how to integrate Wings with Mailchimp, The Action Network and
        many more.
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
