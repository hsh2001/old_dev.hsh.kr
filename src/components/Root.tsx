import React from 'react';
import App from './App';

import ResetCSS from '../style/Reset';

const Root: React.FC = () => {
  return (
    <React.StrictMode>
      <ResetCSS />
      <App />
    </React.StrictMode>
  );
};

export default Root;
