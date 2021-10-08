import React from 'react';
import clsx from 'clsx';
import styles from './Features.module.css';
import Translate, { translate } from '@docusaurus/Translate';
import { motion } from 'framer-motion';

const FeatureList = [
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
  {
    title: <Translate>Donations</Translate>,
    image: '/img/fundraisers.png',
    description: (
      <Translate>
        learn how to use signups, petitions, events and fundraisers.
      </Translate>
    ),
  },
  {
    title: <Translate>Advanced Editor</Translate>,
    image: '/img/article.png',
    description: (
      <Translate>
        Launch powerful fundraiser campaigns and process donations with Stripe
        or Mollie.
      </Translate>
    ),
  },
  {
    title: <Translate>Confirmation emails</Translate>,
    image: '/img/confirmation-emails.png',
    description: (
      <Translate>
        Configure personalized confirmation emails with a user-friendly
        drag-and-drop editor.
      </Translate>
    ),
  },
  {
    title: <Translate>Theming support</Translate>,
    image: '/img/theming.png',
    description: (
      <Translate>
        Easily configure colors, typography, link styles and more with the
        Theming editor, and even create multiple themes.
      </Translate>
    ),
  },
  {
    title: <Translate>Signups</Translate>,
    image: '/img/signup-2.png',
    description: (
      <Translate>
        Publish email signup forms on standalone landing pages or insert signup
        campagins into any article or page.
      </Translate>
    ),
  },
  {
    title: <Translate>Event campaigns</Translate>,
    image: '/img/event.png',
    description: (
      <Translate>
        Launch event campaigns and save user data of people who sign up to
        attend.
      </Translate>
    ),
  },
  {
    title: <Translate>Petitions</Translate>,
    image: '/img/petition.png',
    description: (
      <Translate>
        Create petition campaigns with custom fields, a configurable counter and
        email confirmations.
      </Translate>
    ),
  },
  {
    title: <Translate>Internationalization</Translate>,
    image: '/img/multilingual.png',
    description: (
      <Translate>
        Wings supports multiple languages, including a language switcher for
        pages that have mulitple locales.
      </Translate>
    ),
  },
  {
    title: <Translate>Custom fields</Translate>,
    image: '/img/customfields.png',
    description: (
      <Translate>
        Add custom text or checkbox fields to your campaign forms to collect
        valuable user info and build a movement.
      </Translate>
    ),
  },
];

function Feature({ image, title, description }) {
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

export default function Features() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.intro}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.5, 1],
              y: 0,
              scale: [0.7, 1],
            }}
            transition={{ ease: 'easeOut', duration: 1 }}
          >
            <h1>
              <Translate>
                All the features you need. None of the ones you don't.
              </Translate>
            </h1>
          </motion.div>

          <p>
            <Translate>
              Wings is designed from the ground up to build a non-profit website
              and run progressive campaigns. Here is an overview of features.
            </Translate>{' '}
          </p>
        </div>

        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
