'use client'
import { useFrame, useLoader, useThree } from '@react-three/fiber'
import { Vector2, TextureLoader, MathUtils } from 'three'
import { useMemo, useRef } from 'react'
import vertexShader from "../liquid-art-wave/shaders/vertex.glsl"
import fragmentShader from "../liquid-art-wave/shaders/fragment.glsl"

export default function ShaderMesh() {
  const { viewport, size } = useThree()
  const mouse = useRef(new Vector2(0.5, 0.5))
  const target = useRef(new Vector2(0.5, 0.5))
  const texture = useLoader(TextureLoader, '/shader-img/liquid-art-wave.jpeg')

  const isMobile = size.width < 768
  const scale = isMobile ? viewport.width * 0.8 : viewport.height * 0.5

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uTexture: { value: texture },
    uMouse: { value: new Vector2() },
  }), [texture])

  useFrame((state) => {
    uniforms.uTime.value = state.clock.elapsedTime
    mouse.current.lerp(target.current, 0.05)
    uniforms.uMouse.value.copy(mouse.current)

    state.scene.rotation.y = MathUtils.lerp(state.scene.rotation.y, (mouse.current.x - 0.5) * 0.3, 0.1)
    state.scene.rotation.x = MathUtils.lerp(state.scene.rotation.x, -(mouse.current.y - 0.5) * 0.3, 0.1)
  })

  return (
    <mesh
      onPointerMove={(e) => {
        if (e.uv) target.current.set(e.uv.x, e.uv.y)
      }}
    >
      <planeGeometry args={[scale * 1.4, scale * 1.9, isMobile ? 64 : 128, isMobile ? 64 : 128]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent={true}
      />
    </mesh>
  )
}