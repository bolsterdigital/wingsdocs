import React from 'react';
import Layout from '@theme/Layout';
import ShowCaseList from '../components/CasesList';
import CallToAction from '../components/CallToAction';

function CasesPage() {
  return (
    <Layout title="Wings Cases">
      <main>
        <ShowCaseList />
      </main>
      <CallToAction />
    </Layout>
  );
}

export default CasesPage;
