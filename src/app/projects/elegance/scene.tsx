"use client"
import * as THREE from "three"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import ShaderMesh from "./shaderMesh"

export default function Scene() {
  return (
    <div className="fixed inset-0 z-[1]">
      <Canvas
        camera={{ position: [0, 0, 2.5], fov: 35 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          powerPreference: "high-performance",
          alpha: true,
          stencil: false,
        }}
        onCreated={({ gl }) => {
          gl.outputColorSpace = THREE.SRGBColorSpace;
        }}
      >
        <Suspense fallback={null}>
          <ShaderMesh />
        </Suspense>
      </Canvas>
    </div>
  )
}
