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
                  <input type="text" name="name" placeholder="your name" />
                </label>
              </p>
              <p>
                <label>
                  <Translate> Your Email</Translate>{' '}
                  <input
                    type="email"
                    name="email"
                    placeholder="name@something.cool"
                  />
                </label>
              </p>

              <p>
                <label>
                  <Translate>Organization</Translate>{' '}
                  <input name="organization" placeholder="ACME"></input>
                </label>
              </p>
              <p>
                <button className="button button--primary" type="submit">
                  <Translate>Send</Translate>
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
