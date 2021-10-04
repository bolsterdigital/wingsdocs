import React from 'react';
import clsx from 'clsx';
import styles from './HomepageProposition.module.css';

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
        <p className={styles.superHeading}>Try it out</p>
        <h2 className={styles.propTitle}>Supercharge your campaign.</h2>
        <p className={styles.propText}>
          Use Wings as your content management system and public-facing website.
          Tell stories, launch petitions, build a following, raise funds, and
          win a campaign.{' '}
          <a href="https://wings.dev/#demo">Get a demo account</a>!
        </p>
      </div>
    </section>
  );
}
