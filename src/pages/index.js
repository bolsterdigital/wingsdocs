import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import HomepageProposition from '../components/HomepageProposition';
import productImage from '../../static/img/wings-petition.png';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Wings: go win a campaign.</h1>
        <img
          src={productImage}
          className={styles.productImage}
          alt="Wings Petition"
        />

        <p className="hero__subtitle">{siteConfig.tagline}</p>

        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Set up your Wings website 🚀
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Wings documentation`}
      description="Go create a movement and build a campaign."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <HomepageProposition />
      </main>
    </Layout>
  );
}
