import { useState, useEffect } from 'react';
const SCREEN_MD = 768;

export const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);


  useEffect(() => {
    const handleResize = (event: any) => {
      setWidth(event.target.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    width,
    isScreenDesc: width >= SCREEN_MD,
  };
};