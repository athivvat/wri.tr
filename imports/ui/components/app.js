import React from 'react';

import Header from './header.js';

export default (props) => {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
}
