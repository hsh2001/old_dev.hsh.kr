import React, { useEffect, useState } from 'react';
import shortID from 'shortid';
import style from '../scss/components/BlinkView.module.scss';

export interface BlinkViewProps {
  title: string;
}

const BlinkView: React.FC<BlinkViewProps> = ({ title }: BlinkViewProps) => {
  const [id] = useState(shortID.generate() + Date.now());
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    function eventHandler(): void {
      const wrapper = document.getElementById(id) as HTMLElement;
      const rect = wrapper.getBoundingClientRect();
      const { innerHeight } = window;
      const { top } = rect;

      if (top / innerHeight >= -0.5) {
        setOpacity(+Math.min(1, (1 - top / innerHeight) ** 10).toFixed(5));
      }
    }

    eventHandler();
    window.addEventListener('scroll', eventHandler);
    window.addEventListener('resize', eventHandler);
    return (): void => {
      window.removeEventListener('scroll', eventHandler);
      window.removeEventListener('resize', eventHandler);
    };

    // id not require as dependecy since it will not change.
    // eslint-disable-next-line
  }, []);

  return (
    <div className={style.wrapper} style={{ opacity }} id={id}>
      <h2>{title}</h2>
    </div>
  );
};

export default BlinkView;
