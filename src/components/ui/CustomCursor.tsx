'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isBig, setIsBig] = useState(false);
  const [isHyper, setIsHyper] = useState(false);
  const [isClient, setIsClient] = useState(false);
  
  const pathname = usePathname();

  useEffect(() => {
    setIsClient(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    if (pathname.includes('/projects')) {
      setIsBig(true);
    } else {
      setIsBig(false);
    }
  }, [pathname]);

  const bigCursorVariants = {
    visible: { 
      opacity: 1, 
      scale: 1,
      mixBlendMode: "difference" 
    },
    hidden: { 
      opacity: 0, 
      scale: 0 
    }
  };

  const smallCursorVariants = {
    visible: { 
      opacity: 1 
    },
    hidden: { 
      opacity: 0 
    },
    hyper: {
      opacity: 1,
      scale: 2,
    }
  };

  // Don't render anything during SSR
  if (!isClient) {
    return null;
  }

  return (
    <>
      <motion.div
        variants={bigCursorVariants}
        animate={isVisible ? "visible" : "hidden"}
        transition={{ type: "spring", mass: 0.9, stiffness: 150, damping: 20 }}
        style={{ 
          x: mousePosition.x - 12, 
          y: mousePosition.y - 12,
          backgroundColor: isBig ? 'rgba(124, 124, 255, 0.3)' : 'rgba(0, 255, 209, 0.2)',
        }}
        className={`hidden md:block fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[9999] border ${isBig ? 'border-secondary-500' : 'border-accent-500'}`}
      />
      <motion.div
        variants={smallCursorVariants}
        animate={isHyper ? "hyper" : (isVisible ? "visible" : "hidden")}
        transition={{ type: "spring", mass: 0.1, stiffness: 150, damping: 15 }}
        style={{ 
          x: mousePosition.x - 2, 
          y: mousePosition.y - 2 
        }}
        className="hidden md:block fixed top-0 left-0 w-1 h-1 rounded-full pointer-events-none z-[9999] bg-secondary-500 mix-blend-difference"
      />
    </>
  );
};

export default CustomCursor;