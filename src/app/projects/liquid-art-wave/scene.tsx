'use client'
import * as THREE from "three";
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import ShaderMesh from '../liquid-art-wave/shaderMesh'

export default function Scene() {
  return (
    <div className="fixed inset-0 w-full h-full touch-none">
      <Canvas
        camera={{ fov: 35, position: [0, 0, 3] }}
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