'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the CanvasWrapper to avoid SSR issues
const CanvasWrapper = dynamic(
  () => import('./CanvasWrapper'),
  { 
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-secondary-500"></div>
      </div>
    )
  }
);

interface DynamicCanvasWrapperProps {
  children: React.ReactNode;
  className?: string;
  camera?: any;
  isMobile?: boolean;
}

const DynamicCanvasWrapper: React.FC<DynamicCanvasWrapperProps> = ({ 
  children, 
  className = '', 
  camera,
  isMobile = false
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render a placeholder during SSR and initial client render
    return (
      <div className={`w-full h-full flex items-center justify-center ${className}`}>
        <div className="animate-pulse">
          <div className="rounded-full bg-gradient-to-br from-secondary-500 to-accent-500 w-16 h-16 opacity-20"></div>
        </div>
      </div>
    );
  }

  return (
    <CanvasWrapper 
      className={className} 
      camera={camera} 
      isMobile={isMobile}
    >
      {children}
    </CanvasWrapper>
  );
};

export default DynamicCanvasWrapper;