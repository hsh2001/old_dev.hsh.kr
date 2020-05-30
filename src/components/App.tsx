import React from 'react';
import IntroducePage from './IntroducePage';
import BlinkView from './BlinkView';
import ReversChangePage from './ReversChangePage';
import AIOmokPage from './AIOmokPage';

const App: React.FC = () => {
  return (
    <>
      <IntroducePage />
      <BlinkView title="Game Developer" />
      <ReversChangePage />
      <AIOmokPage />
    </>
  );
};

export default App;
