import { useState, useEffect } from 'react';

const useScrollThreshold = (threshold = 100) => {
  const [reached, setReached] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setReached(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return reached;
};

export default useScrollThreshold;
