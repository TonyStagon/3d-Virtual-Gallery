import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import * as THREE from "three";

// Wall component
function Wall({ position, rotation, size, image }) {
  const texture = useTexture(image);
  return (
    <mesh position={position} rotation={rotation}>
      <planeGeometry args={size} />
      <meshStandardMaterial map={texture} side={THREE.DoubleSide} />
    </mesh>
  );
}

// Floor component
function Floor() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
      <planeGeometry args={[30, 30]} />
      <meshStandardMaterial color="#999" />
    </mesh>
  );
}

// Museum scene
function Museum() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Floor />

      {/* Left wall */}
      <Wall
        position={[-5, 2, 0]}
        rotation={[0, Math.PI / 2, 0]}
        size={[4, 4]}
        image="/fox art.png"
      />

      {/* Right wall */}
      <Wall
        position={[5, 2, 0]}
        rotation={[0, -Math.PI / 2, 0]}
        size={[4, 4]}
        image="/smile.png"
      />

      {/* Back wall */}
      <Wall
        position={[0, 2, -5]}
        rotation={[0, 0, 0]}
        size={[4, 4]}
        image="/art girl.png"
      />

      <OrbitControls />
    </>
  );
}

export default function App() {
  return (
    <Canvas camera={{ position: [0, 2, 10], fov: 50 }}>
      <Museum />
    </Canvas>
  );
}
