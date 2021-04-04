import React, { useState, useEffect } from 'react';
import IntroducePage, { profileImageLoad } from './IntroducePage';

const App: React.FC = () => {
  const [message, setMessage] = useState('Loading... Please wait.');
  const [loadingSize, setLoadingSize] = useState(0);
  const [mainContent, setmainContent] = useState(<></>);

  useEffect(() => {
    profileImageLoad.then(async () => {
      let loadCount = 0;
      const moduleLoads = [
        import('./ArrowDown'),
        import('./BlinkView'),
        import('./ReversChangePage'),
        import('./AIOmokPage'),
        import('./CRIPage'),
        import('./SkillPage'),
        import('./ContactPage'),
      ] as const;

      setMessage(`Loading components... 0/${moduleLoads.length}`);

      moduleLoads.forEach((load) => {
        (async (): Promise<void> => {
          await load;
          loadCount++;
          setMessage(
            `Loading components... ${loadCount}/${moduleLoads.length}`,
          );
        })();
      });

      const [
        { default: ArrowDown },
        { default: BlinkView },
        { default: ReversChangePage },
        { default: AIOmokPage },
        { default: CRIPage, frames },
        { default: SkillPage },
        { default: ContactPage },
      ] = await Promise.all(moduleLoads);

      loadCount = 0;
      setMessage(`Loading images... ${loadCount}/${frames.length}`);
      await Promise.all(
        frames.map(async (frame) => {
          await frame.promise;
          loadCount++;
          setLoadingSize(loadCount / frames.length);
          setMessage(`Loading images... ${loadCount}/${frames.length}`);
        }),
      );

      setmainContent(
        <>
          <ArrowDown />
          <BlinkView title="I am a Game Developer." />
          <ReversChangePage />
          <AIOmokPage />
          <BlinkView title="I am a Web Developer." />
          <CRIPage />
          <SkillPage />
          <hr />
          <ContactPage />
        </>,
      );

      setMessage(`The loading is done! Scroll down for more information.`);
    });
  }, []);

  return (
    <>
      <IntroducePage message={message} loadingSize={loadingSize} />
      {mainContent}
    </>
  );
};

export default App;
