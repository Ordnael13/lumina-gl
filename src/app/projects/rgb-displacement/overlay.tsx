"use client";
import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";

const containerVars: Variants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1, 
    transition: { staggerChildren: 0.1, delayChildren: 0.5 } 
  }
};

const fadeUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } 
  }
};

export default function Overlay() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => setTime(new Date().toLocaleTimeString());
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div 
      variants={containerVars} 
      initial="initial" 
      animate="animate"
      className="fixed inset-0 z-50 pointer-events-none text-white select-none overflow-hidden"
    >
      {/* 🌸 Background Typography - Viewport based responsive scaling */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.h1 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.07 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="text-[25vw] md:text-[18vw] font-black italic uppercase leading-none tracking-tighter"
        >
          Floral
        </motion.h1>
      </div>

      {/* 🌿 Top Micro Copy - Responsive width and visibility */}
      <motion.div 
        variants={fadeUp}
        className="absolute top-16 md:top-10 left-1/2 -translate-x-1/2 text-center w-[80%] md:w-auto"
      >
        <p className="font-mono text-[8px] md:text-[10px] tracking-[0.3em] md:tracking-[0.4em] uppercase opacity-50 whitespace-nowrap">
          Interactive WebGL Experiment
        </p>
        <div className="h-[1px] w-6 md:w-8 bg-white/20 mx-auto mt-2" />
      </motion.div>

      {/* 🧭 Top Left - Studio Name */}
      <motion.div variants={fadeUp} className="absolute top-6 md:top-10 left-5 md:left-10">
        <p className="text-[9px] md:text-[11px] font-black tracking-[0.2em] md:tracking-[0.3em]">FLORAL.STUDIO</p>
      </motion.div>

      {/* 🧭 Top Right - Local Time - Hidden on very small devices if needed, or scaled down */}
      <motion.div variants={fadeUp} className="absolute top-6 md:top-10 right-5 md:right-10 text-right">
        <p className="font-mono text-[8px] md:text-[10px] tracking-widest opacity-60">
          {time || "00:00:00"}
        </p>
      </motion.div>

      {/* 🌺 Bottom Left Content - Safe padding for mobile gestures */}
      <motion.div 
        variants={fadeUp}
        className="absolute bottom-8 md:bottom-10 left-5 md:left-10 mix-blend-difference max-w-[70%]"
      >
        <p className="text-[9px] md:text-xs font-light tracking-[0.2em] md:tracking-[0.25em] uppercase opacity-50">
          Procedural RGB Shader
        </p>
        <h2 className="mt-1 text-xl sm:text-3xl lg:text-4xl font-extrabold italic tracking-tight uppercase leading-tight">
          Floral Distortion
        </h2>
      </motion.div>

      {/* 🌐 Bottom Right Meta */}
      <motion.div 
        variants={fadeUp}
        className="absolute bottom-8 md:bottom-10 right-5 md:right-10 flex flex-col items-end gap-1 md:gap-2"
      >
        <p className="font-mono text-[8px] md:text-[10px] tracking-widest uppercase opacity-40">
          Hover / Touch
        </p>
        <div className="flex gap-2 md:gap-4 text-[9px] md:text-[10px] font-bold italic opacity-80">
          <span>VOL. 26</span>
          <span className="opacity-20">|</span>
          <span>SHDR-04</span>
        </div>
      </motion.div>

      {/* Responsive UI Brackets - Hidden on very small screens to avoid clutter */}
      <div className="hidden xs:block">
        <div className="absolute top-4 left-4 w-2 h-2 border-t border-l border-white/20" />
        <div className="absolute top-4 right-4 w-2 h-2 border-t border-r border-white/20" />
        <div className="absolute bottom-4 left-4 w-2 h-2 border-b border-l border-white/20" />
        <div className="absolute bottom-4 right-4 w-2 h-2 border-b border-r border-white/20" />
      </div>

    </motion.div>
  );
}