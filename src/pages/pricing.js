import React from 'react';
import Layout from '@theme/Layout';
import Pricings from '../components/Pricing';
import styles from './pricing.module.css';
import Translate, { translate } from '@docusaurus/Translate';

function Pricing() {
  return (
    <Layout title="Pricing">
      <div className={styles.pricingcontainer}>
        <h1>
          <Translate>We've got great plans for you.</Translate>
        </h1>
        <p>
          <Translate>
            {' '}
            From the smallest grassroots neighbourhood initiative to global,
            multilingual federated website infrastructure: Wings can accomodate
            any progressive campaign.
          </Translate>
        </p>
      </div>

      <Pricings />
    </Layout>
  );
}

export default Pricing;
