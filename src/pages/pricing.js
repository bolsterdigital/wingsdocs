import React from 'react';
import Layout from '@theme/Layout';
import Pricings from '../components/Pricing';
import styles from './pricing.module.css';

function Pricing() {
  return (
    <Layout title="Pricing">
      <div className={styles.pricingcontainer}>
        <h1>We've got great plans for you.</h1>
        <p>
          From the smallest grassroots neighbourhood initiative to global,
          multilingual federated website infrastructure: Wings can accomodate
          any progressive campaign.
        </p>
      </div>

      <Pricings />
    </Layout>
  );
}

export default Pricing;
