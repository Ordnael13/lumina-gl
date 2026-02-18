"use client"
import { useFrame } from "@react-three/fiber"
import { useTexture } from "@react-three/drei"
import * as THREE from "three"
import { useRef, useMemo } from "react"
import vertexShader from "../elegance/shaders/vertex.glsl"
import fragmentShader from  "../elegance/shaders/fragments.glsl"
  

export default function ShaderMesh() {
  const texture = useTexture(
    "/shader-img/elegance.jpeg"
  )

  const mouse = useRef(new THREE.Vector2(0.5, 0.5))
  const lerpedMouse = useRef(new THREE.Vector2(0.5, 0.5))

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uTexture: { value: texture },
    uMouse: { value: new THREE.Vector2(0.5, 0.5) },
  }), [texture])

  useFrame((state) => {
    const { clock, pointer } = state

    // 1. Update Time
    uniforms.uTime.value = clock.elapsedTime

    mouse.current.set(pointer.x * 0.5 + 0.5, pointer.y * 0.5 + 0.5)

    lerpedMouse.current.lerp(mouse.current, 0.1)

    uniforms.uMouse.value.copy(lerpedMouse.current)
  })

  return (
    <mesh>
      <planeGeometry args={[1.2, 1.6, 64, 64]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent={true}
      />
    </mesh>
  )
}