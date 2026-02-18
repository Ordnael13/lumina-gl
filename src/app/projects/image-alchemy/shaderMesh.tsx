"use client"
import { useFrame, useThree } from "@react-three/fiber"
import { useRef, useEffect } from "react"
import * as THREE from "three"
import { useTexture } from "@react-three/drei"
import  vertexShader from "../image-alchemy/shaders/vertex.glsl"
import fragmentShader from "../image-alchemy/shaders/fragment.glsl"

export default function ShaderMesh() {
    const meshRef = useRef<THREE.Mesh>(null!)
    const { size, viewport } = useThree()

    const texture = useTexture(
        "/shader-img/image-alchemy.jpeg"
    )

    const isMobile = size.width < 768
    const scale = isMobile ? viewport.width * 0.65 : viewport.height * 0.5

    const uniforms = useRef({
        uTime: { value: 0 },
        uTexture: { value: texture },
        uMouse: { value: new THREE.Vector2(0.5, 0.5) },
        uStrength: { value: 0 }
    })

    const mouse = new THREE.Vector2(0.5, 0.5)
    const targetMouse = new THREE.Vector2(0.5, 0.5)
    let strength = 0

    useEffect(() => {
        const handleMove = (e: MouseEvent) => {
            targetMouse.x = e.clientX / size.width
            targetMouse.y = 1 - e.clientY / size.height
        }

        window.addEventListener("mousemove", handleMove)
        return () => window.removeEventListener("mousemove", handleMove)
    })

    useFrame((state) => {
        const time = state.clock.elapsedTime
        uniforms.current.uTime.value = time

        const diffX = targetMouse.x - mouse.x
        const diffY = targetMouse.y - mouse.y
        const vel = Math.sqrt(diffX * diffX + diffY * diffY)

        mouse.x += diffX * 0.1
        mouse.y += diffY * 0.1
        strength += (vel * 15.0 - strength) * 0.1

        uniforms.current.uMouse.value = mouse
        uniforms.current.uStrength.value = strength

        if (meshRef.current) {
            meshRef.current.rotation.y = (mouse.x - 0.5) * 0.4
            meshRef.current.rotation.x = -(mouse.y - 0.5) * 0.3
        }
    })

    return (
        <mesh ref={meshRef}>
            <planeGeometry args={[scale * 1.4, scale * 1.9, isMobile ? 64 : 128, isMobile ? 64 : 128]} />      <shaderMaterial
                uniforms={uniforms.current}
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
            />
        </mesh>
    )
}

