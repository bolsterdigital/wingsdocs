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
    title: <Translate>Extinction Rebellion</Translate>,
    image: '/img/xr-website.png',
    description: (
      <>
        <Translate>
          A coalition campaign led by Extinction Rebellion to launch a citizen
          council for climate & environmental issues.
        </Translate>
      </>
    ),
    link: 'https://burgerberaad.extinctionrebellion.nl',
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
    title: <Translate>Frisse Wind</Translate>,
    image: '/img/frissewind.png',
    description: (
      <Translate>
        Frisse Wind is a brave citizen action committee that uses Wings to raise
        close to € 60,000 euros to fund their lawsuit against Tata Steel
        corporation and its toxic emissions.
      </Translate>
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
  {
    title: <Translate>SP voor Rood</Translate>,
    image: '/img/spvoorrood.png',
    description: (
      <>
        <Translate>
          This is a fundraising campaign for the socialist youth organization
          ROOD.
        </Translate>
      </>
    ),
    link: 'https://www.spvoorrood.nl',
  },
  {
    title: <Translate>Open over Abortus</Translate>,
    image: '/img/openoverabortus.png',
    description: (
      <>
        <Translate>
          A campaign website by the Dutch Humanist Society which aims to break
          the silence around abortion.
        </Translate>
      </>
    ),
    link: 'https://openoverabortus.humanistischverbond.nl',
  },
  {
    title: <Translate>Stop Belastingparadijs NL</Translate>,
    image: '/img/stopbelastingparadijs.png',
    description: (
      <>
        <Translate>
          A coalition campaign that aims to stop The Netherlands from serving as
          a tax haven for multinationals.
        </Translate>
      </>
    ),
    link: 'https://www.stopbelastingparadijs.nl',
  },
  {
    title: <Translate>BIJ1</Translate>,
    image: '/img/bij1.png',
    description: (
      <>
        <Translate>
          The Dutch leftist party BIJ1 uses Wings to power its local chapter
          website.
        </Translate>
      </>
    ),
    link: 'https://amsterdam.bij1.org',
  },
  {
    title: <Translate>Probeer de Bond</Translate>,
    image: '/img/probeerdebond.png',
    description: (
      <>
        <Translate>
          A campaign website by labour union CNV to get more young people to
          join a union.
        </Translate>
      </>
    ),
    link: 'https://www.probeerdebond.nl',
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

function SimpleCase({ image, title, description }) {
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
      </div>
    </div>
  );
}

const Featured = [CaseList[3], CaseList[0], CaseList[5]];

export function FeaturedList() {
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
            <h2 className={styles.featureTitle}>
              <Translate>
                It's battle-tested and ready for your campaign.
              </Translate>
            </h2>

            <p className={styles.homeIntro}>
              <Translate>
                Wings is a proven platform that has been used by green,
                social-democratic and socialist parties, labour unions, citizen
                action groups and non-governmental organizations to process
                millions of signups, signatures and donations. Take a look at
                some examples.
              </Translate>{' '}
            </p>
          </motion.div>
        </div>
        <div className="row">
          {Featured.map((props, idx) => (
            <SimpleCase key={idx} {...props} />
          ))}
        </div>
        <div className={styles.center}>
          <Link to="/cases">
            <button className="button button--secondary button--lg">
              <Translate>More cases</Translate>
            </button>
          </Link>
        </div>
      </div>
    </section>
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
