import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import HomepageProposition from '../components/HomepageProposition';
import productImage from '../../static/img/wings-petition.png';
import Translate, { translate } from '@docusaurus/Translate';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">
          <Translate>Wings: go win a campaign.</Translate>
        </h1>
        <img
          src={productImage}
          className={styles.productImage}
          alt="Wings Petition"
        />

        <p className="hero__subtitle">
          {' '}
          <Translate>
            Progressive campaign websites-as-a-service. Your domain, your visual
            identity, your content, your data.
          </Translate>
        </p>

        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            <Translate>Set up your Wings website</Translate>
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
