import React from 'react';
import clsx from 'clsx';
import styles from './Cases.module.css';
import Translate, { translate } from '@docusaurus/Translate';

const Caseslist = [
  {
    title: <Translate>Pages & Articles</Translate>,
    image: '/img/content-editor.png',
    description: (
      <>
        <Translate>
          beautiful pages and compelling stories with Wings.
        </Translate>
      </>
    ),
  },
];

function Case({ image, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={image} className={styles.featuredImage} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function Cases() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.intro}>
          <h1>Here's a few examples.</h1>

          <p>
            Wings is designed from the ground up to build a non-profit website
            and run progressive campaigns. Here is an overview of features.{' '}
          </p>
        </div>

        <div className="row">
          {Caseslist.map((props, idx) => (
            <Case key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
