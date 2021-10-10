import React from 'react';
import clsx from 'clsx';
import styles from './CasesList.module.css';
import Translate, { translate } from '@docusaurus/Translate';
import { motion } from 'framer-motion';
import ImageComponent from '../components/ImageComponent';
import Link from '@docusaurus/Link';

const CaseList = [
  {
    title: <Translate>Republiek</Translate>,
    image: '/img/republiek-showcase.png',
    description: (
      <>
        <Translate>
          Republiek – formerly known as Republikeins Genootschap – is a Dutch
          advocacy group that wants The Netherlands to abolish the monarchy and
          to become a republic.
        </Translate>
      </>
    ),
    link: 'https://republiek.org',
  },
  {
    title: <Translate>Controle Alt Delete</Translate>,
    image: '/img/controlealtdel.png',
    description: (
      <>
        <Translate>
          Controle Alt Delete, a nonprofit that fights back against excessive
          police violence and ethnic profiling, uses Wings for their main
          website as well as for petition campaigns.
        </Translate>
      </>
    ),
    link: 'https://controlealtdelete.nl',
  },
  {
    title: <Translate>Jongsocialisten</Translate>,
    image: '/img/jongsocialisten.png',
    description: (
      <>
        <Translate>
          The Belgian Young Socialists use Wings to power their main website as
          well as local chapter websites.
        </Translate>
      </>
    ),
    link: 'https://www.jongsocialisten.nl',
  },
  {
    title: <Translate>SPD Niedersachsen</Translate>,
    image: '/img/spd-niedersachsen.png',
    description: (
      <>
        <Translate>
          This is a campaign website for the German social-democrats of
          Niedersachsen.
        </Translate>
      </>
    ),
    link: 'https://aktion.spdnds.de',
  },
  {
    title: <Translate>Frisse Wind</Translate>,
    image: '/img/frissewind.png',
    description: (
      <>
        <Translate>
          Frisse Wind is a citizen-led action committee that aims to improve air
          quality in the vicinity of Tata Steel.
        </Translate>
      </>
    ),
    link: 'https://www.frissewind.nu',
  },
  {
    title: <Translate>Next Blue</Translate>,
    image: '/img/nextblue.png',
    description: (
      <>
        <Translate>Next Blue is a storytelling platform about water.</Translate>
      </>
    ),
    link: 'https://next.blue',
  },
];

function Case({ image, title, description, link }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="card shadow--lw">
        <div className="card__image">
          <ImageComponent className={styles.featuredImage} image={image} />
        </div>
        <div className="card__body">
          <h2>{title}</h2>
          <small>{description}</small>
        </div>
        <div className="card__footer">
          <Link to={link}>
            <button className="button button--primary button--block">
              Visit
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Cases() {
  return (
    <section className={styles.cases}>
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
                Want to see Wings in action? Go ahead and take a look.
              </Translate>
            </h1>

            <p>
              <Translate>
                Wings is used by political parties, labour unions, advocacy
                groups and more.
              </Translate>{' '}
            </p>
          </motion.div>
        </div>

        <div className="row">
          {CaseList.map((props, idx) => (
            <Case key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
