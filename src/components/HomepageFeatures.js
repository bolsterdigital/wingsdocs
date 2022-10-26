import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Translate, { translate } from '@docusaurus/Translate';
import Link from '@docusaurus/Link';

const FeatureList = [
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
        <Link to="/docs/guides/webhooks">
          <Translate>webhooks docs</Translate>
        </Link>{' '}
        <Translate>
          and find out how to integrate Wings with Citipo, Mailchimp, The Action Network
          and many more.
        </Translate>
      </>
    ),
  },
  {
    title: <Translate>Try before you buy</Translate>,
    Svg: require('../../static/img/Time-schedule.svg').default,
    description: (
      <>
        <Translate>Wings is set up quickly and has affordable</Translate>{' '}
        <Link to="/pricing">
          <Translate>pricing</Translate>
        </Link>
        . <Translate>Try out a</Translate>{' '}
        <Link to="/demo">
          <Translate>free demo account</Translate>
        </Link>{' '}
        <Translate>and you will be up and running in no time.</Translate>
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
