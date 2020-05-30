import React, { useState, useEffect, useMemo } from 'react';
import style from '../scss/components/ReversChangePage.module.scss';
import FadeInView from './FadeInView';

const animationWrapperID = 'reverse-change-wrapper';
const animationSectionID = 'reverse-change-animatin-section';
const blockSize = 5;
const ReversChangePage: React.FC = () => {
  const [scrollSize, setScrollSize] = useState(0);
  const blocks = useMemo(() => {
    const blackBlockAmount = blockSize ** 2 * scrollSize;
    return Object.keys(Array(blockSize ** 2).fill(null)).map((index) => {
      return (
        <div
          key={index + '-reverse-change-animation-block'}
          style={{
            height: window.innerHeight / blockSize + 'px',
          }}
          className={
            blackBlockAmount > +index ? style.blackBlock : style.whiteBlock
          }
        />
      );
    });
  }, [scrollSize]);

  useEffect(() => {
    function eventHandler(): void {
      const animationSection = document.getElementById(
        animationSectionID,
      ) as HTMLElement;

      const wrapper = document.getElementById(
        animationWrapperID,
      ) as HTMLElement;

      const { top } = animationSection.getBoundingClientRect();

      if (Math.abs(top) < 100) {
        const { height, y } = wrapper.getBoundingClientRect();
        const { innerHeight } = window;
        const remainingScrollSize =
          (height + y - innerHeight) / (innerHeight * 2);
        const scrollSize = 1 - Math.max(0, Math.min(1, remainingScrollSize));

        setScrollSize(scrollSize);
      }
    }

    eventHandler();
    window.addEventListener('scroll', eventHandler);
    window.addEventListener('resize', eventHandler);
  }, []);

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
