'use client';

import { useState, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import * as THREE from 'three';

// Global variable to store scroll position for 3D scene
let globalScrollY = 0;

export const updateScrollPosition = (scrollY: number) => {
  globalScrollY = scrollY;
};

// Floating geometric shapes component
const FloatingShapes = () => {
  const groupRef = useRef<THREE.Group>(null);
  const shapesRef = useRef<THREE.Mesh[]>([]);
  
  // Create multiple shapes with enhanced properties for better visual appeal
  const shapes = [
    { type: 'torus', position: [0, 0, 0], scale: 1.8, speed: 0.25, rotationAxis: [0.5, 1, 0.3], color: '#7C7CFF' },
    { type: 'sphere', position: [4, 3, -3], scale: 1.0, speed: 0.45, rotationAxis: [1, 0.5, 0.2], color: '#00FFD1' },
    { type: 'box', position: [-3, -2, 4], scale: 1.4, speed: 0.35, rotationAxis: [0.2, 0.8, 1], color: '#7C7CFF' },
    { type: 'torusKnot', position: [3, -4, 2], scale: 1.1, speed: 0.55, rotationAxis: [0.7, 0.3, 0.9], color: '#00FFD1' },
    { type: 'icosahedron', position: [-4, 4, -2], scale: 0.9, speed: 0.65, rotationAxis: [0.9, 0.6, 0.4], color: '#7C7CFF' },
    { type: 'octahedron', position: [0, 5, -1], scale: 0.7, speed: 0.4, rotationAxis: [0.3, 0.9, 0.7], color: '#00FFD1' },
  ];

  useFrame((state) => {
    if (groupRef.current) {
      // Use the global scroll position
      const scrollFactor = globalScrollY * 0.0005; // Adjust this value to control scroll sensitivity
      
      // Rotate the entire group with both time and scroll
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1 + scrollFactor;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.1 + Math.sin(scrollFactor) * 0.05;
      
      // Zoom effect based on scroll
      const zoomFactor = 1 + Math.sin(scrollFactor * 2) * 0.1;
      groupRef.current.scale.setScalar(zoomFactor);
      
      // Individual shape rotations and movements
      shapesRef.current.forEach((shape, index) => {
        if (shape) {
          const shapeConfig = shapes[index];
          // Rotate each shape around its own axis
          shape.rotation.x += shapeConfig.speed * 0.01 * shapeConfig.rotationAxis[0];
          shape.rotation.y += shapeConfig.speed * 0.01 * shapeConfig.rotationAxis[1];
          shape.rotation.z += shapeConfig.speed * 0.01 * shapeConfig.rotationAxis[2];
          
          // Gentle floating motion
          shape.position.y += Math.sin(state.clock.elapsedTime * shapeConfig.speed + index) * 0.002;
          
          // Position shift based on scroll for parallax effect
          shape.position.x += Math.sin(scrollFactor * (index + 1)) * 0.005;
          shape.position.z += Math.cos(scrollFactor * (index + 1)) * 0.005;
        }
      });
    }
  });

  return (
    <group ref={groupRef}>
      {shapes.map((shape, index) => {
        let geometry;
        switch (shape.type) {
          case 'torus':
            geometry = new THREE.TorusGeometry(1, 0.4, 16, 32);
            break;
          case 'sphere':
            geometry = new THREE.SphereGeometry(1, 32, 32);
            break;
          case 'box':
            geometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);
            break;
          case 'torusKnot':
            geometry = new THREE.TorusKnotGeometry(0.8, 0.3, 128, 32);
            break;
          case 'icosahedron':
            geometry = new THREE.IcosahedronGeometry(1, 0);
            break;
          default:
            geometry = new THREE.OctahedronGeometry(1);
        }

        return (
          <mesh
            key={index}
            ref={(ref) => (shapesRef.current[index] = ref as THREE.Mesh)}
            geometry={geometry}
            position={shape.position as [number, number, number]}
            scale={shape.scale}
          >
            <meshStandardMaterial
              color={shape.color}
              roughness={0.15}
              metalness={0.9}
              emissive={shape.color}
              emissiveIntensity={0.15}
              transparent
              opacity={0.8}
              wireframe={index % 3 === 0} // Every third shape is wireframe for visual variety
            />
          </mesh>
        );
      })}
    </group>
  );
};

// Main background component
const PersistentBackground = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-br from-background via-background/95 to-background" />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance",
          stencil: false,
          depth: true
        }}
        dpr={Math.min(typeof window !== 'undefined' ? window.devicePixelRatio : 1, 2)}
      >
        <ambientLight intensity={0.4} />
        <spotLight 
          position={[15, 15, 15]} 
          angle={0.25} 
          penumbra={1} 
          intensity={1.2} 
          castShadow 
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <pointLight 
          position={[-15, -15, -15]} 
          intensity={0.6} 
          color="#7C7CFF"
        />
        <pointLight 
          position={[15, -15, 15]} 
          intensity={0.4} 
          color="#00FFD1"
        />
        
        <FloatingShapes />
        
        <Environment preset="city" />
      </Canvas>
      
      {/* Gradient overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/70 to-background/85 pointer-events-none" />
    </div>
  );
};

export default PersistentBackground;