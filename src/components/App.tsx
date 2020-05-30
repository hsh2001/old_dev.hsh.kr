import React from 'react';
import IntroducePage from './IntroducePage';
import BlinkView from './BlinkView';
import ReversChangePage from './ReversChangePage';
import AIOmokPage from './AIOmokPage';
import CRIPage from './CRIPage';

const App: React.FC = () => {
  return (
    <>
      <IntroducePage />
      <BlinkView title="Game Developer" />
      <ReversChangePage />
      <AIOmokPage />
      <BlinkView title="Web Developer" />
      <CRIPage />
      <BlinkView title="Web Developer" />
    </>
  );
};

export default App;
