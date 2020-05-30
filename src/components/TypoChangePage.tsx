import React, { useState, useEffect } from 'react';
import BlinkView from './BlinkView';

const typos = [
  'HTML',
  'CSS',
  'JavaScript',
  'PHP',
  'C',
  'Git',
  'Perl',
  'SCSS',
  'NodeJS',
  'TypeScript',
  'React',
  'React Native',
  'React with Typescript',
];

const TypoChangePage: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setInterval((): void => {
      setIndex((index): number => {
        index++;
        if (index >= typos.length) {
          return 0;
        } else {
          return index;
        }
      });
    }, 500);
  }, []);

  return <BlinkView title={`I can use ${typos[index]}.`} />;
};

export default TypoChangePage;
