"use client"
import React from 'react'
import Canvas from "@/app/projects/rgb-displacement/scene"
import Overlay from "@/app/projects/rgb-displacement/overlay"
import Loader from "@/app/components/Loader" 

export default function LiquidArtWave() {
  return (
    <main className="bg-[#050505] h-screen w-full">
      <Loader>
        <Canvas/>
        <Overlay/>
      </Loader>
    </main>
  )
}