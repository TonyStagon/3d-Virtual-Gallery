import React from "react";
import { OrbitControls, useTexture } from "@react-three/drei";
import * as THREE from "three";

// Wall component with an image
function Wall({ position, rotation, size, image }) {
  const texture = useTexture(image);
  return (
    <mesh position={position} rotation={rotation}>
      <planeGeometry args={size} />
      <meshStandardMaterial map={texture} side={THREE.DoubleSide} />
    </mesh>
  );
}

// Floor
function Floor() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
      <planeGeometry args={[30, 30]} />
      <meshStandardMaterial color="#999" />
    </mesh>
  );
}

export default function GalleryRoom() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 10, 7]} intensity={0.8} />
      <Floor />

      {/* Grid layout with clear tiling effect */}
      {[0, 1, 2, 3, 4].map((col) => (
        <group key={`col-${col}`}>
          {/* Front row */}
          <Wall
            position={[-8 + col * 4, 1.2, -8]}
            rotation={[0, 0, 0]}
            size={[3.5, 3.5]}
            image={`/art${(col + 1) % 3 + 1}.png`}
          />
          {/* Middle row */}
          <Wall
            position={[-8 + col * 4, 1.2, -4]}
            rotation={[0, 0, 0]}
            size={[3.5, 3.5]}
            image={`/art${(col + 2) % 3 + 1}.png`}
          />
          {/* Top row */}
          <Wall
            position={[-8 + col * 4, 4.5, -4]}
            rotation={[0, 0, 0]}
            size={[3.5, 3.5]}
            image={`/art${col % 3 + 1}.png`}
          />
        </group>
      ))}

      {/* Camera Controls */}
      <OrbitControls />
    </>
  );
}
