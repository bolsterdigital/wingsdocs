import React from 'react';
import clsx from 'clsx';
import styles from './HomepageProposition.module.css';
import Translate, { translate } from '@docusaurus/Translate';

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

export default function HomepageProposition() {
  return (
    <section className={styles.proposition}>
      <div className={styles.container}>
        <p className={styles.superHeading}>
          <Translate>Try it out</Translate>
        </p>
        <h2 className={styles.propTitle}>
          <Translate>Supercharge your campaign.</Translate>
        </h2>
        <p className={styles.propText}>
          <Translate>
            Use Wings as your content management system and public-facing
            website. Tell stories, launch petitions, build a following, raise
            funds, and win a campaign.
          </Translate>{' '}
          <a href="/demo">
            <Translate>Get a demo account</Translate>
          </a>
          !
        </p>
      </div>
    </section>
  );
}
