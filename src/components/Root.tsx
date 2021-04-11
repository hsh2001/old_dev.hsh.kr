import React from 'react';
import App from './App';

import ResetCSS from '../style/Reset';
import FacebookCSS from '../style/Facebook';

const Root: React.FC = () => {
  return (
    <React.StrictMode>
      <ResetCSS />
      <FacebookCSS />

      <App />
    </React.StrictMode>
  );
};

export default Root;
