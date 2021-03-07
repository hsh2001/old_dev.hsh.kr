import React, { useMemo } from 'react';
import style from '../scss/components/ReversChangePage.module.scss';
import FadeInView from './FadeInView';
import useScrollSize from '../hooks/uesScrollSize';

new Image().src = '/image/reverse-change-mac-book.png';

const animationWrapperID = 'reverse-change-wrapper';
const animationSectionID = 'reverse-change-animatin-section';
const blockSize = 10;
const indexList = Object.keys(Array(blockSize ** 2).fill(null));

const randomIndexList = [...indexList];

randomIndexList.sort(() => {
  return 0.5 - Math.random();
});

const ReversChangePage: React.FC = () => {
  const scrollSize = useScrollSize(animationSectionID, animationWrapperID);
  const blocks = useMemo(() => {
    const blackBlockAmount = blockSize ** 2 * scrollSize;
    const targets = randomIndexList.slice(0, Math.floor(blackBlockAmount));
    return indexList.map((index) => {
      return (
        <div
          key={index + '-reverse-change-animation-block'}
          style={{
            height: window.innerHeight / blockSize + 'px',
          }}
          className={
            targets.includes(index) ? style.blackBlock : style.whiteBlock
          }
        />
      );
    });
  }, [scrollSize]);

  return (
    <>
      <div className={style.animationWrapper} id={animationWrapperID}>
        <div
          id={animationSectionID}
          style={{
            gridTemplateColumns: '1fr '.repeat(blockSize),
          }}
        >
          {blocks}
        </div>
      </div>
      <FadeInView className={style.mainContentWrapper}>
        <h2>Reverse Change</h2>
        <h3>Simple play board game</h3>
        <img
          src="/image/reverse-change-mac-book.png"
          alt="Reverse change on laptop"
        />
        <a
          href="https://hsh-game.github.io/reverse-change"
          target="_blank"
          rel="noopener noreferrer"
        >
          Play
        </a>
        {' / '}
        <a
          href="https://github.com/hsh-game/reverse-change"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </FadeInView>
    </>
  );
};

export default ReversChangePage;
