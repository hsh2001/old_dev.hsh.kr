import React from 'react';
import IntroducePage from './IntroducePage';
import BlinkView from './BlinkView';
import ReversChangePage from './ReversChangePage';
import AIOmokPage from './AIOmokPage';
import CRIPage from './CRIPage';
import TypoChangePage from './TypoChangePage';
import ContactPage from './ContactPage';

const App: React.FC = () => {
  return (
    <>
      <IntroducePage />
      <BlinkView title="I am a Game Developer." />
      <ReversChangePage />
      <AIOmokPage />
      <BlinkView title="I am a Web Developer." />
      <CRIPage />
      <TypoChangePage />
      <hr />
      <ContactPage />
    </>
  );
};

export default App;
