'use client';

import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

// Floating Geometric Shape Component
const FloatingShape = ({ position, color, speed, rotationSpeed, scale }: any) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const floatYRef = useRef(0);

  useFrame((state) => {
    if (meshRef.current) {
      // Floating animation
      floatYRef.current += 0.01;
      meshRef.current.position.y += Math.sin(floatYRef.current) * 0.001;
      
      // Rotation
      meshRef.current.rotation.x += rotationSpeed * 0.5;
      meshRef.current.rotation.y += rotationSpeed;
      meshRef.current.rotation.z += rotationSpeed * 0.3;

      // Parallax-like movement based on mouse
      meshRef.current.position.x = position[0] + Math.sin(state.clock.elapsedTime * speed) * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <icosahedronGeometry args={[1, 4]} />
      <meshPhongMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.3}
        wireframe={false}
      />
    </mesh>
  );
};

// Floating Card Component
const FloatingCard = ({ position, index }: any) => {
  const groupRef = useRef<THREE.Group>(null);
  const floatYRef = useRef(0);

  useFrame((state) => {
    if (groupRef.current) {
      floatYRef.current += 0.01;
      groupRef.current.position.y = position[1] + Math.sin(floatYRef.current + index) * 0.3;
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      <mesh>
        <boxGeometry args={[1.5, 2, 0.1]} />
        <meshStandardMaterial
          color={'#7B2FFF'}
          emissive={'#7B2FFF'}
          emissiveIntensity={0.2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
      {/* Glow around card */}
      <mesh scale={1.1}>
        <boxGeometry args={[1.5, 2, 0.1]} />
        <meshBasicMaterial color="#7B2FFF" transparent opacity={0.2} />
      </mesh>
    </group>
  );
};

// Particle Field Background
const ParticleField = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const particleCount = 1000;

  useEffect(() => {
    if (pointsRef.current) {
      const geometry = pointsRef.current.geometry;
      const positions = geometry.attributes.position.array as Float32Array;
      
      for (let i = 0; i < particleCount * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * 100;
        positions[i + 1] = (Math.random() - 0.5) * 100;
        positions[i + 2] = (Math.random() - 0.5) * 100;
      }
      geometry.attributes.position.needsUpdate = true;
    }
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x += 0.0001;
      pointsRef.current.rotation.y += 0.0002;
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
        size={0.1}
        color="#7B2FFF"
        transparent={true}
        opacity={0.4}
        sizeAttenuation={true}
      />
    </points>
  );
};

// Main 3D Scene Component
export const Scene3D = () => {
  return (
    <Canvas
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      }}
      camera={{ position: [0, 0, 8], fov: 75 }}
      gl={{ antialias: true, alpha: true }}
    >
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={0.8}
        color="#ffffff"
      />
      <pointLight position={[-10, -10, 10]} intensity={0.4} color="#7B2FFF" />

      {/* Particle background */}
      <ParticleField />

      {/* Floating shapes */}
      <FloatingShape
        position={[-3, 2, 0]}
        color="#FF6B00"
        speed={0.5}
        rotationSpeed={0.01}
        scale={1}
      />
      <FloatingShape
        position={[3, -1, -2]}
        color="#00C9A7"
        speed={0.3}
        rotationSpeed={0.015}
        scale={0.8}
      />
      <FloatingShape
        position={[0, 1, -1]}
        color="#FFD700"
        speed={0.4}
        rotationSpeed={0.008}
        scale={0.6}
      />

      {/* Floating cards */}
      <FloatingCard position={[-4, 0, -3]} index={0} />
      <FloatingCard position={[4, -2, -2]} index={1} />
      <FloatingCard position={[0, 3, -4]} index={2} />

      {/* Controls for interactivity */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={true}
        autoRotateSpeed={0.5}
      />
    </Canvas>
  );
};
