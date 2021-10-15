import styles from './Testimonial.module.css';
import React from 'react';
import clsx from 'clsx';
import Translate, { translate } from '@docusaurus/Translate';
import ImageComponent from '../components/ImageComponent';
import SanneWalvisch from '/img/sanne-walvisch.jpg';

export default function Testimonial() {
  return (
    <div className={clsx('container', styles.testimonial)}>
      <h2 className={styles.testimonialTitle}>What people are saying</h2>
      <div className={styles.profileImage}>
        <ImageComponent image={SanneWalvisch} />
        <small className={styles.quotePerson}>
          Sanne Walvisch, FrisseWind.nu
        </small>
      </div>
      <div className={styles.quoteWrapper}>
        <p className={styles.quote}>
          <Translate>
            Using Wings saved us a lot of time and effort getting a grassroots
            campaign off the ground. I love how easy it is to get started with
            great default settings, while it offers advanced options if you want
            to build more complex and customized supporter journeys.
          </Translate>
        </p>
      </div>
    </div>
  );
}
