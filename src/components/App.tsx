import React from 'react';
import IntroducePage from './IntroducePage';
import BlinkView from './BlinkView';
import ReversChangePage from './ReversChangePage';

const App: React.FC = () => {
  return (
    <>
      <IntroducePage />
      <BlinkView title="Game Developer" />
      <ReversChangePage />
    </>
  );
};

export default App;
