import React, { useState, useEffect } from 'react';
import IntroducePage, { profileImageLoad } from './IntroducePage';

const App: React.FC = () => {
  const [message, setMessage] = useState('Loading... Please wait.');
  const [mainContent, setmainContent] = useState(<></>);

  useEffect(() => {
    profileImageLoad.then(async () => {
      let loadCount = 0;
      const moduleLoads = [
        import('./BlinkView'),
        import('./ReversChangePage'),
        import('./AIOmokPage'),
        import('./CRIPage'),
        import('./TypoChangePage'),
        import('./ContactPage'),
      ] as const;

      function displayLoadingCount(): void {
        setMessage(`Loading components... ${loadCount}/${moduleLoads.length}`);
      }

      displayLoadingCount();

      moduleLoads.forEach((load) => {
        Promise.all([load]).then(() => {
          loadCount++;
          displayLoadingCount();
        });
      });

      const [
        { default: BlinkView },
        { default: ReversChangePage },
        { default: AIOmokPage },
        { default: CRIPage, frames },
        { default: TypoChangePage },
        { default: ContactPage },
      ] = await Promise.all(moduleLoads);

      loadCount = 0;
      setMessage(`Loading images... ${loadCount}/${frames.length}`);
      await Promise.all(
        frames.map((frame) => {
          return frame.promise.then(() => {
            loadCount++;
            setMessage(`Loading images... ${loadCount}/${frames.length}`);
          });
        }),
      );

      setmainContent(
        <>
          <BlinkView title="I am a Game Developer." />
          <ReversChangePage />
          <AIOmokPage />
          <BlinkView title="I am a Web Developer." />
          <CRIPage />
          <TypoChangePage />
          <hr />
          <ContactPage />
        </>,
      );

      setMessage(`The loading is done! Scroll down for more information.`);
    });
  }, []);

  return (
    <>
      <IntroducePage message={message} />
      {mainContent}
    </>
  );
};

export default App;
