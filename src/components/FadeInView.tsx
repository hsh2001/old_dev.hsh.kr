import React, { useEffect, useState } from 'react';
import shortID from 'shortid';
import classNames from 'classnames';
import style from '../scss/components/FadeInView.module.scss';

export interface FadeInViewProps {
  children?: React.ReactNode;
  className?: string;
}

const FadeInView: React.FC<FadeInViewProps> = ({
  children,
  className,
}: FadeInViewProps) => {
  const [id] = useState(shortID.generate() + Date.now());
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    function eventHandler(): void {
      const wrapper = document.getElementById(id) as HTMLDivElement;
      if (wrapper.getBoundingClientRect().y < window.innerHeight / 2) {
        setOpacity(1);
        window.removeEventListener('scroll', eventHandler);
      }
    }

    window.addEventListener('scroll', eventHandler);
    // id not require as dependecy since it will not change.
    // eslint-disable-next-line
  }, []);

  return (
    <div className={classNames(style.wrapper, className)} id={id}>
      <div style={{ opacity }}>{children}</div>
    </div>
  );
};

export default FadeInView;
