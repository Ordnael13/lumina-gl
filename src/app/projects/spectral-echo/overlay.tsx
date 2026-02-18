'use client'

export default function Overlay() {
  return (
    <main className="fixed inset-0 h-screen w-full flex items-center justify-center overflow-hidden pointer-events-none">

      <div className="absolute inset-0 z-0 select-none flex items-center justify-center">
        <div className="text-[22vw] sm:text-[18vw] md:text-[14vw] font-extrabold tracking-tighter text-white/5 italic whitespace-nowrap leading-none">
          BLOOM
        </div>
      </div>

      <nav className="absolute top-6 sm:top-8 w-full px-6 sm:px-12 flex justify-between z-20 text-white font-mono text-[9px] sm:text-[10px] tracking-widest uppercase opacity-70 pointer-events-auto">
        <div>Floral Study / 2026</div>
        <div className="hidden sm:block">Move to interact</div>
      </nav>

      <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-12 z-20 text-white leading-none max-w-[90%] pointer-events-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black italic tracking-tight">
          PETAL FLOW
        </h2>

        <p className="mt-2 text-[10px] sm:text-xs font-mono uppercase tracking-widest opacity-50">
          Interactive Floral Image Distortion
        </p>
      </div>

    </main>
  )
}
