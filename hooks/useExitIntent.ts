import { useEffect, useRef } from 'react';

export const useExitIntent = (onExit: () => void) => {
  const hasTriggered = useRef(false);

  useEffect(() => {
    const handleMouseOut = (event: MouseEvent) => {
      if (hasTriggered.current) return;
      
      if (event.clientY <= 0) {
        hasTriggered.current = true;
        onExit();
      }
    };

    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [onExit]);
};