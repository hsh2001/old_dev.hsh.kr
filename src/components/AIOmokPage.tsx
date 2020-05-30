import React, { useState, useEffect } from 'react';
import style from '../scss/components/AIOmokPage.module.scss';

const omokImage = new Image();
omokImage.src = '/image/omok.jpg';

function drawOmokBoard(
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D,
  scale: number,
): void {
  const { width, height } = canvas;

  ctx.strokeStyle = '#000';
  ctx.lineWidth = Math.max(7, width / 300);
  ctx.beginPath();
  ctx.moveTo(0, height / 2);
  ctx.lineTo(width * scale, height / 2);
  ctx.moveTo(width / 2, 0);
  ctx.lineTo(width / 2, height * scale);
  ctx.stroke();

  ctx.fillStyle = '#000';
  ctx.beginPath();
  ctx.arc(width / 2, height / 2, width / 30, 0, 2 * Math.PI * scale);
  ctx.fill();

  ctx.strokeStyle = '#ddd';
  ctx.beginPath();
  ctx.arc(width / 2, height / 2, width / 30, 0, 2 * Math.PI * scale);
  ctx.stroke();
}

const animationWrapperID = 'ai-omok-wrapper';
const animationSectionID = 'ai-omok-animatin-section';
const AIOmokPage: React.FC = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [top, setTop] = useState('0');
  const [scrollSize, setScrollSize] = useState(0);

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
    setInterval(eventHandler, 30);
  }, []);

  useEffect(() => {
    const canvas = document.getElementById(
      animationSectionID,
    ) as HTMLCanvasElement;

    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    const drawAnimationPoint = 0.5;

    if (scrollSize < drawAnimationPoint) {
      const { width, height } = canvas;
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = `rgba(240, 198, 143, ${scrollSize / drawAnimationPoint})`;
      ctx.fillRect(0, 0, width, height);
      drawOmokBoard(
        canvas,
        ctx,
        Math.min(1, (scrollSize / drawAnimationPoint) * 2),
      );

      const { innerWidth, innerHeight } = window;
      if (width !== innerWidth || height !== innerHeight) {
        setWidth(innerWidth);
        setHeight(innerHeight);
        setTop('0');
      }
    } else {
      const { width, height } = canvas;
      ctx.fillStyle = '#f0c68f';
      ctx.fillRect(0, 0, width, height);
      drawOmokBoard(canvas, ctx, 1);
      console.log({ scrollSize });
      ctx.globalAlpha =
        (scrollSize - drawAnimationPoint) / (1 - drawAnimationPoint);
      console.log(ctx.globalAlpha);

      ctx.drawImage(omokImage, 0, 0, width, height);
      ctx.globalAlpha = 1;

      const newWidth = Math.min(window.innerWidth * 0.9, 500);
      if (width !== newWidth || height !== newWidth) {
        setWidth(newWidth);
        setHeight(newWidth);
        setTop('1rem');
      }
    }
  }, [width, height, scrollSize]);

  return (
    <>
      <div className={style.animationWrapper} id={animationWrapperID}>
        <canvas
          id={animationSectionID}
          width={width * 2}
          height={height * 2}
          style={{
            width: width + 'px',
            height: height + 'px',
            top,
          }}
        />
      </div>

      <div className={style.mainContentWrapper}>
        <h2>AI Omok</h2>
        <h3>Play Omok With AI</h3>
        <a
          href="https://hsh-game.github.io/omok"
          target="_blank"
          rel="noopener noreferrer"
        >
          Play
        </a>
        {' / '}
        <a
          href="https://github.com/hsh-game/omok"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </div>
    </>
  );
};

export default AIOmokPage;
