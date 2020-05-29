import React from 'react';
import IntroducePage from './IntroducePage';
import BlinkView from './BlinkView';

const App: React.FC = () => {
  return (
    <>
      <IntroducePage />
      <BlinkView title="Game Developer" />
    </>
  );
};

export default App;
