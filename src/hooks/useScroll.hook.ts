'use client';

import { useEffect, useState } from 'react';

type ScrollOptions = {
  trigger: number;
};

type ScrollReturn = {
  hasScrolled: boolean;
  triggered: boolean;
};

export default function useScroll(options: ScrollOptions): ScrollReturn {
  const { trigger } = options;
  const [hasScrolled, setHasScrolled] = useState<boolean>(false);
  const [triggered, setTriggered] = useState<boolean>(false);

  function scrollingCheck() {
    const currentScrollPosition = window.scrollY;
    if (currentScrollPosition <= 0) setHasScrolled(false);
    else setHasScrolled(true);

    if (currentScrollPosition > trigger) setTriggered(true);
    else setTriggered(false);
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollingCheck);
    return () => {
      window.removeEventListener('scroll', scrollingCheck);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    hasScrolled,
    triggered,
  };
}
