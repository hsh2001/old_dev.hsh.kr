import React from 'react';
import IntroducePage from './IntroducePage';
import BlinkView from './BlinkView';
import ReversChangePage from './ReversChangePage';
import AIOmokPage from './AIOmokPage';
import CRIPage from './CRIPage';
import TypoChangePage from './TypoChangePage';

const App: React.FC = () => {
  return (
    <>
      <IntroducePage />
      <BlinkView title="Game Developer" />
      <ReversChangePage />
      <AIOmokPage />
      <BlinkView title="Web Developer" />
      <CRIPage />
      <TypoChangePage />
    </>
  );
};

export default App;
