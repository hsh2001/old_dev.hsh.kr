import React, { useEffect, useState } from 'react';
import getCoverSize from '@agilie/canvas-image-cover-position';
import style from '../scss/components/CRIPage.module.scss';
import useScrollSize from '../hooks/uesScrollSize';

const animationWrapperID = 'cri-wrapper';
const animationSectionID = 'cri-animatin-section';

export const frames = Array(101)
  .fill(null)
  .map((e, i) => {
    const image = new Image();
    image.src =
      '/image/cri-frames/' +
      ((i + 1) / 10000).toFixed(4).split('.')[1] +
      '.jpg';

    return {
      image,
      promise: new Promise((resolve) => {
        image.onload = (): void => resolve(image);
      }),
    };
  });

const CRIPage: React.FC = () => {
  const scrollSize = useScrollSize(animationSectionID, animationWrapperID);
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    });
  }, []);

  useEffect(() => {
    const canvas = document.getElementById(
      animationSectionID,
    ) as HTMLCanvasElement;

    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    const { width, height } = canvas;
    const { image } = frames[
      Math.floor((frames.length - 1) * Math.min(1, scrollSize * 1.3))
    ];

    const imageCoverSize = getCoverSize(
      image.naturalWidth,
      image.naturalHeight,
      canvas.width,
      canvas.height,
    );

    ctx.globalAlpha = scrollSize * 5;
    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(
      image,
      imageCoverSize.offsetLeft,
      imageCoverSize.offsetTop,
      imageCoverSize.width,
      imageCoverSize.height,
    );

    if (scrollSize > 0.5) {
      setOpacity(1);
    } else {
      setOpacity(0);
    }
  }, [scrollSize]);

  return (
    <>
      <div className={style.wrapper} id={animationWrapperID}>
        <canvas id={animationSectionID} width={width} height={height} />
        <div style={{ opacity }}>
          <div>
            <h1>
              Web developer and DB engineer
              <br />
              for Cultural Resources
            </h1>
            <p>2019.07 ~</p>
            <p>with NodeJS, NextJS, Perl, React, TypeScript</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CRIPage;
