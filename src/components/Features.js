import React from 'react';
import clsx from 'clsx';
import styles from './Features.module.css';
import Translate, { translate } from '@docusaurus/Translate';
import { motion } from 'framer-motion';
import ImageComponent from '../components/ImageComponent';

const FeatureList = [
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
    title: <Translate>Donations</Translate>,
    image: '/img/fundraisers.png',
    description: (
      <Translate>
        Launch powerful fundraiser campaigns and process donations with Stripe
        or Mollie.
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
    title: <Translate>Signups</Translate>,
    image: '/img/signup-2.png',
    description: (
      <Translate>
        Publish email signup forms on standalone landing pages or insert signup
        campaigns into any article or page.
      </Translate>
    ),
  },
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
    title: <Translate>Advanced Editor</Translate>,
    image: '/img/article.png',
    description: (
      <Translate>
        Use our user-friendly card-based editor to create beautiful content.
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
    title: <Translate>Themes</Translate>,
    image: '/img/theming.png',
    description: (
      <Translate>
        Easily configure colors, typography, link styles and more with the Theme
        editor, and even create multiple themes.
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
  {
    title: <Translate>Custom scripts</Translate>,
    image: '/img/scripts.png',
    description: (
      <Translate>
        Insert any script you want into the header or body of your website and
        easily add an analytics script, tag manager or cookie wall to your
        website.
      </Translate>
    ),
  },
  {
    title: <Translate>Custom domains</Translate>,
    image: '/img/customdomains.png',
    description: (
      <Translate>
        You are in control: add any domain you want, and we handle the rest.
        Your domain is automatically routed, configured and equipped with a
        Let's Encrypt SSL certificate.
      </Translate>
    ),
  },
  {
    title: <Translate>Webhooks</Translate>,
    image: '/img/webhooks.png',
    description: (
      <Translate>
        Use our webhooks service to send updates and form submissions to any
        third party-service, including Mailchimp, Nationbuilder, The Action
        Network and many others.
      </Translate>
    ),
  },
  {
    title: <Translate>Media Uploader</Translate>,
    image: '/img/media-upload.png',
    description: (
      <Translate>
        Upload images to your Wings media library, add alt tags and captions,
        and insert them in various layout types into your pages.
      </Translate>
    ),
  },
  {
    title: <Translate>CSV Downloads</Translate>,
    image: '/img/csvdownloads.png',
    description: (
      <Translate>
        Wings campaigns let you download a CSV file with your user data,
        allowing you to decide how to use that data with your preferred CRM or
        email application.
      </Translate>
    ),
  },
];

function Feature({ image, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <ImageComponent className={styles.featuredImage} image={image} />
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
            transition={{ ease: 'easeOut', duration: 0.5 }}
          >
            <h1>
              <Translate>
                All the features you need. None of the ones you don't.
              </Translate>
            </h1>

            <p>
              <Translate>
                Wings is designed from the ground up to build a non-profit
                website and run progressive campaigns. Here is an overview of
                features.
              </Translate>{' '}
            </p>
          </motion.div>
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
