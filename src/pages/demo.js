import React from 'react';
import Layout from '@theme/Layout';
import styles from './demo.module.css';
import Translate, { translate } from '@docusaurus/Translate';

function Form() {
  return (
    <Layout title="Get a demo">
      <main>
        <div className={styles.content}>
          <h1>
            <Translate>Take Wings for a spin</Translate>
          </h1>
          <p>
            <Translate>
              Let's create a demo project that you can try out for free, no
              obligations.
            </Translate>
          </p>
        </div>
        <div className={styles.formwrapper}>
          <div className={styles.formbox}>
            <form
              data-netlify="true"
              name="demo-request"
              method="POST"
              action="/thank-you"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="demo-request" />
              <p>
                <label>
                  <Translate>Name</Translate>{' '}
                  <input
                    type="text"
                    name="name"
                    placeholder="your name"
                    required
                  />
                </label>
              </p>
              <p>
                <label>
                  <Translate>Email</Translate>{' '}
                  <input
                    reqpuired
                    type="email"
                    name="email"
                    placeholder="name@something.cool"
                  />
                </label>
              </p>
              <p>
                <label>
                  <Translate>Phone Number</Translate>{' '}
                  <input type="tel" name="phone" placeholder="+123 456 789" />
                </label>
              </p>

              <p>
                <label>
                  <Translate>Organization</Translate>{' '}
                  <input
                    required
                    name="organization"
                    placeholder="ACME"
                  ></input>
                </label>
              </p>
              <p>
                <label>
                  <Translate>Comments</Translate>{' '}
                  <textarea
                    name="comments"
                    placeholder="Any comments or requests you might have"
                    rows="3"
                  ></textarea>
                </label>
              </p>
              <p>
                <button className="button button--primary" type="submit">
                  <Translate>Get a Wings account</Translate>
                </button>
              </p>
            </form>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Form;
