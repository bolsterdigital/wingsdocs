import React from 'react';
import Layout from '@theme/Layout';

function Hello() {
  return (
    <Layout title="Hello">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}
      >
        <div>
          <h1>Wings as an alternative to The Action Network</h1>
        </div>
        <p>
          This is a nice page. Quisque nec consectetur ex. Morbi egestas ornare
          elit, vitae tempus ante ullamcorper eu. Donec quis magna venenatis,
          elementum augue at, pellentesque nibh. Sed vehicula feugiat pharetra.
          Mauris nisl urna, laoreet eget consectetur nec, lobortis nec
          nisl.Phasellus tincidunt massa vitae risus elementum tincidunt quis
          elementum ligula. Curabitur ultricies nisi mauris, nec interdum neque
          volutpat quis. Pellentesque habitant morbi tristique. Ut ullamcorper
          orci id diam pellentesque sollicitudin. Sed euismod eros odio, non
          volutpat urna commodo non. Phasellus at lectus eros. Vestibulum
          gravida mollis felis, vitae feugiat nulla dignissim sit amet.{' '}
        </p>
      </div>
    </Layout>
  );
}

export default Hello;
