'use client';

import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

// Chakra sphere component
const Chakra = ({ position, color, size, intensity, glowIntensity }: any) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.scale.x = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.2;
      meshRef.current.scale.y = meshRef.current.scale.x;
      meshRef.current.scale.z = meshRef.current.scale.x;
    }
    if (glowRef.current) {
      glowRef.current.scale.x = 1.5 + Math.sin(state.clock.elapsedTime * 1.5) * 0.3;
      glowRef.current.scale.y = glowRef.current.scale.x;
      glowRef.current.scale.z = glowRef.current.scale.x;
    }
  });

  return (
    <group position={position}>
      {/* Core sphere */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={intensity}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Glow effect */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.3}
        />
      </mesh>

      {/* Point light */}
      <pointLight color={color} intensity={glowIntensity} distance={10} />
    </group>
  );
};

// Floating chakras (without meditation figure body)
const FloatingChakras = () => {
  return (
    <>
      {/* Crown - Violet */}
      <Chakra position={[0, 2.2, 0]} color="#9D4EDD" size={0.25} intensity={2} glowIntensity={3} />

      {/* Third Eye - Indigo */}
      <Chakra position={[0, 1.9, 0.1]} color="#7B2FFF" size={0.22} intensity={1.8} glowIntensity={2.8} />

      {/* Throat - Cyan/Blue */}
      <Chakra position={[0, 1.4, 0.15]} color="#00D9FF" size={0.2} intensity={1.8} glowIntensity={2.8} />

      {/* Heart - Green */}
      <Chakra position={[0, 0.7, 0.15]} color="#00C9A7" size={0.22} intensity={2} glowIntensity={3} />

      {/* Solar Plexus - Yellow */}
      <Chakra position={[0, 0.2, 0.15]} color="#FFD700" size={0.2} intensity={2} glowIntensity={3} />

      {/* Sacral - Orange */}
      <Chakra position={[0, -0.4, 0.15]} color="#FF6B00" size={0.2} intensity={1.8} glowIntensity={2.8} />

      {/* Root - Red */}
      <Chakra position={[0, -1, 0.15]} color="#FF3CAC" size={0.18} intensity={1.8} glowIntensity={2.8} />
    </>
  );
};

// Cosmic particle field
const CosmicParticles = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const particleCount = 2000;

  useEffect(() => {
    if (pointsRef.current) {
      const geometry = pointsRef.current.geometry;
      const positions = geometry.attributes.position.array as Float32Array;

      for (let i = 0; i < particleCount * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * 80;
        positions[i + 1] = (Math.random() - 0.5) * 80;
        positions[i + 2] = (Math.random() - 0.5) * 80;
      }
      geometry.attributes.position.needsUpdate = true;
    }
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x += 0.00005;
      pointsRef.current.rotation.y += 0.0001;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[new Float32Array(particleCount * 3), 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.15}
        color="#6A5ACD"
        transparent={true}
        opacity={0.6}
        sizeAttenuation={true}
      />
    </points>
  );
};

// Aura rings around figure
const AuraRings = () => {
  const group1Ref = useRef<THREE.Group>(null);
  const group2Ref = useRef<THREE.Group>(null);
  const group3Ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (group1Ref.current) {
      group1Ref.current.rotation.z = state.clock.elapsedTime * 0.5;
    }
    if (group2Ref.current) {
      group2Ref.current.rotation.z = -state.clock.elapsedTime * 0.3;
    }
    if (group3Ref.current) {
      group3Ref.current.rotation.x = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <>
      {/* Inner aura ring 1 */}
      <group ref={group1Ref}>
        <mesh>
          <torusGeometry args={[1.5, 0.05, 16, 100]} />
          <meshBasicMaterial
            color="#7B2FFF"
            transparent
            opacity={0.5}
          />
        </mesh>
      </group>

      {/* Inner aura ring 2 */}
      <group ref={group2Ref}>
        <mesh>
          <torusGeometry args={[2, 0.08, 16, 100]} />
          <meshBasicMaterial
            color="#00D9FF"
            transparent
            opacity={0.4}
          />
        </mesh>
      </group>

      {/* Outer aura ring */}
      <group ref={group3Ref}>
        <mesh>
          <torusGeometry args={[2.5, 0.1, 16, 100]} />
          <meshBasicMaterial
            color="#FF6B00"
            transparent
            opacity={0.3}
          />
        </mesh>
      </group>
    </>
  );
};

// Main meditation scene
export const MeditationScene = () => {
  return (
    <Canvas
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      }}
      camera={{ position: [0, 0, 8], fov: 60 }}
      gl={{ antialias: true, alpha: true }}
    >
      {/* Lighting setup */}
      <ambientLight intensity={0.4} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={0.6}
        color="#ffffff"
      />
      
      {/* Chakra point lights */}
      <pointLight position={[0, 2.2, 0]} color="#9D4EDD" intensity={2} distance={15} />
      <pointLight position={[0, 0.7, 0]} color="#00C9A7" intensity={2} distance={15} />
      <pointLight position={[0, -0.4, 0]} color="#FF6B00" intensity={2} distance={15} />

      {/* Environment */}
      <CosmicParticles />
      <AuraRings />
      <FloatingChakras />

      {/* Camera controls */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={true}
        autoRotateSpeed={0.3}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.5}
      />
    </Canvas>
  );
};
