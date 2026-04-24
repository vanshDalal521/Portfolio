'use client';

import { useState, useRef, useEffect, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, useGLTF, Center, Detailed } from '@react-three/drei';
import * as THREE from 'three';

interface FloatingModelProps {
  modelPath?: string;
  scale?: number;
  speed?: number;
  rotationSpeed?: number;
  floatIntensity?: number;
  position?: [number, number, number];
}

const FloatingModel: React.FC<FloatingModelProps> = ({
  modelPath = '/models/default.glb', // This will be a fallback
  scale = 1,
  speed = 1,
  rotationSpeed = 0.5,
  floatIntensity = 0.5,
  position = [0, 0, 0],
}) => {
  const [hovered, setHovered] = useState(false);
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);

  // For now, we'll create a simple geometric shape as placeholder
  // In a real implementation, we'd load the actual GLTF model
  const geometry = useMemo(() => new THREE.TorusKnotGeometry(1, 0.4, 128, 32), []);
  const material = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#7C7CFF', // Royal violet
    roughness: 0.2,
    metalness: 0.8,
    emissive: '#7C7CFF',
    emissiveIntensity: 0.2,
  }), []);

  // Update material color on hover
  useEffect(() => {
    material.color.set(hovered ? '#00FFD1' : '#7C7CFF');
    material.emissive.set(hovered ? '#00FFD1' : '#7C7CFF');
  }, [hovered, material]);

  // Animation using useFrame
  useFrame((state) => {
    if (groupRef.current) {
      // Rotation animation
      groupRef.current.rotation.y = state.clock.elapsedTime * rotationSpeed * 0.5;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      
      // Pulsing scale effect
      const pulse = Math.sin(state.clock.elapsedTime * speed) * 0.05 + 1;
      groupRef.current.scale.setScalar(scale * pulse);
    }
  });

  return (
    <group ref={groupRef} position={position}>
      <Float speed={speed} rotationIntensity={floatIntensity} floatIntensity={floatIntensity}>
        <mesh
          ref={meshRef}
          geometry={geometry}
          material={material}
          onPointerEnter={() => setHovered(true)}
          onPointerLeave={() => setHovered(false)}
          castShadow
          receiveShadow
        >
          <meshStandardMaterial
            color={hovered ? '#00FFD1' : '#7C7CFF'}
            roughness={0.2}
            metalness={0.8}
            emissive={hovered ? '#00FFD1' : '#7C7CFF'}
            emissiveIntensity={0.2}
          />
        </mesh>
      </Float>
    </group>
  );
};

export default FloatingModel;