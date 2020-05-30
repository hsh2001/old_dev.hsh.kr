import { useState, useEffect } from 'react';

function useScrollSize(
  animationSectionID: string,
  animationWrapperID: string,
): number {
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

    // eslint-disable-next-line
  }, []);

  return scrollSize;
}

export default useScrollSize;
