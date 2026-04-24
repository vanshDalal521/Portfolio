'use client';

import { useEffect } from 'react';
import { useLenis } from 'lenis/react';

const useSmoothScroll = () => {
  const lenis = useLenis(({ scroll }) => {
    // Handle scroll updates
  });

  useEffect(() => {
    // Any additional smooth scroll setup can go here
  }, []);

  return { lenis };
};

export default useSmoothScroll;