"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

function Box() {
  const mesh = useRef(null);

  useFrame((state, delta) => {
    mesh.current.rotation.x += delta * 0.1;
    mesh.current.rotation.y += delta * 0.1;
    mesh.current.rotation.z += delta * 0.1;
  });

  return (
    <>
      <ambientLight intensity={2} />
      <boxGeometry args={[2.5, 2.5, 2.5]} />
      <mesh ref={mesh}>
        <meshStandardMaterial color="orange" />
      </mesh>
    </>
  );
}

export default Box;
