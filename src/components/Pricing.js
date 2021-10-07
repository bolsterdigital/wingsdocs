import styles from './Pricing.module.css';
import React from 'react';
import clsx from 'clsx';
import Translate, { translate } from '@docusaurus/Translate';

const PricingList = [
  {
    label: <Translate>grassroots</Translate>,
    price: <Translate>€ 39</Translate>,
    feature1: <Translate>For non-profits with no paid staff</Translate>,
    feature2: <Translate>3 user accounts</Translate>,
    setupFee: <Translate>€ 495</Translate>,
    buttonclass: 'button button--primary',
  },
  {
    label: <Translate>Basic</Translate>,
    price: <Translate>€ 79</Translate>,
    feature1: (
      <Translate>
        For small non-profits with fewer than 10 staff members
      </Translate>
    ),
    feature2: <Translate>6 user accounts</Translate>,
    setupFee: <Translate>€ 1295</Translate>,
    buttonclass: 'button button--secondary',
  },
  {
    label: <Translate>Premium</Translate>,
    price: <Translate>€ 195</Translate>,
    feature1: <Translate>For large non-profits</Translate>,
    feature2: <Translate>20 user accounts</Translate>,
    setupFee: <Translate>€ 295</Translate>,
    buttonclass: 'button button--secondary',
  },
];

function Pricing({ label, price, feature1, feature2, setupFee, buttonclass }) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.pricingcolumn}>
        <div className="text--center">
          <p className={styles.label}>{label}</p>
        </div>
        <div className="text--center padding-horiz--md">
          <h2 className={styles.pricetitle}>
            {price} <span className={styles.project}>/ mo</span>
          </h2>
          <p className={styles.perProject}>per project</p>
          <p>{feature1}</p>
          <p>{feature2}</p>
          <p>Setup fee: {setupFee}</p>
          <button class={buttonclass}>Primary</button>
        </div>
      </div>
    </div>
  );
}

export default function Pricings() {
  return (
    <section className={styles.pricing}>
      <div className="container">
        <div className="row">
          {PricingList.map((props, idx) => (
            <Pricing key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
