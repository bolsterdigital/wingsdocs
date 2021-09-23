import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Built for campaigners',
    Svg: require('../../static/img/Flag.svg').default,
    description: (
      <>
        Wings is built to help digital campaigners and organizers run successful
        campaigns, with all the features you need.
      </>
    ),
  },
  {
    title: 'Multilingual',
    Svg: require('../../static/img/Group-chat.svg').default,
    description: (
      <>
        Wings can support every language, has a built-in language switcher, and
        translateable strings for all website copy. .
      </>
    ),
  },
  {
    title: 'Integrations-ready',
    Svg: require('../../static/img/Settings-4.svg').default,
    description: (
      <>
        Use Wings as a public-facing website, integrate it with Mailchimp, The
        Action Network, Trello and the rest of your digital organizing toolkit.
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
