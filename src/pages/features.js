import React from 'react';
import Layout from '@theme/Layout';
import Features from '../components/Features';
import CallToAction from '../components/CallToAction';

function FeaturePage() {
  return (
    <Layout title="Wings Features">
      <Features />
      <CallToAction />
    </Layout>
  );
}

export default FeaturePage;
