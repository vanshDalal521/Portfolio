'use client';

import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';

interface CanvasWrapperProps {
  children: React.ReactNode;
  className?: string;
  camera?: any;
  isMobile?: boolean;
}

// Dynamically import 3D components to avoid SSR issues
const DynamicOrbitControls = dynamic(
  () => import('@react-three/drei').then((mod) => mod.OrbitControls),
  { ssr: false }
);

const CanvasWrapper: React.FC<CanvasWrapperProps> = ({ 
  children, 
  className = '', 
  camera = { position: [0, 0, 5], fov: 50 },
  isMobile = false
}) => {
  const canvasRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={canvasRef} className={`w-full h-full ${className}`.trim()}>
      <Canvas
        camera={camera}
        shadows
        gl={{ antialias: true, alpha: false }}
        dpr={typeof window !== 'undefined' ? window.devicePixelRatio : 1}
      >
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        {children}
        
        {!isMobile && <Environment preset="city" />}
        <DynamicOrbitControls 
          enableZoom={false} 
          enablePan={false} 
          enableRotate={!isMobile}
        />
      </Canvas>
    </div>
  );
};

export default CanvasWrapper;