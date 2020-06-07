import React, { useState, useCallback, useEffect } from 'react';
import style from '../scss/components/ArrowDown.module.scss';

const ArrowDown: React.FC = () => {
  const [left, setLeft] = useState((window.innerWidth - 24) / 2);
  const [bottom, setBottom] = useState(10);

  const updatePosition = useCallback(() => {
    setLeft((window.innerWidth - 24) / 2);
    setBottom(-window.scrollY + 10);
  }, []);

  useEffect(() => {
    updatePosition();
    window.addEventListener('resize', updatePosition);
    window.addEventListener('scroll', updatePosition);
  }, [updatePosition]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={style.arrow}
      style={{ left, bottom }}
    >
      <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
    </svg>
  );
};

export default ArrowDown;
