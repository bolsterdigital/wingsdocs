import React from 'react';
import Translate, { translate } from '@docusaurus/Translate';
import Link from '@docusaurus/Link';

export default function CallToAction() {
  return (
    <div className="cta-card">
      <div className="card shadow--lw">
        <div className="card__header">
          <h2>
            <Translate>Want to know more?</Translate>
          </h2>
        </div>
        <div className="card__body">
          <p>
            <Translate>
              Just take Wings for a spin. Send us a message and we will set you
              up with a demo account in no time, free of charge.
            </Translate>
          </p>
        </div>
        <div className="card__footer">
          <Link to="/demo">
            <button className="button button--primary button--block">
              <Translate>Get Wings</Translate>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
