import React from 'react';
import Layout from '@theme/Layout';
import Pricings from '../components/Pricing';
import styles from './pricing.module.css';
import Translate, { translate } from '@docusaurus/Translate';
import { motion } from 'framer-motion';

function Pricing() {
  return (
    <Layout title="Pricing">
      <main>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.5, 1],
            y: 0,
            scale: [0.7, 1],
          }}
          transition={{ ease: 'easeOut', duration: 1 }}
        >
          <div className={styles.pricingcontainer}>
            <h1>
              <Translate>We've got great plans for you.</Translate>
            </h1>

            <p>
              <Translate>
                From the smallest grassroots neighbourhood initiative to global,
                multilingual federated website infrastructure: Wings can
                accomodate any progressive campaign.
              </Translate>
            </p>
          </div>
        </motion.div>

        <Pricings />
      </main>
    </Layout>
  );
}

export default Pricing;
