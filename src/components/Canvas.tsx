import React from "react";
import Box from "./Box";
import { Canvas } from "@react-three/fiber";

function CanvasComponent() {
  return (
    <Canvas
      style={{
        backgroundColor: "#111a21",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Box />
    </Canvas>
  );
}

export default CanvasComponent;
