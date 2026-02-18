"use client";
import { useProgress } from "@react-three/drei";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useEffect, useState } from "react";

const loaderVars: Variants = {
  exit: {
    y: "-100%",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }
  }
};

export default function Loader({ children }: { children: React.ReactNode }) {
  const { progress } = useProgress();
  const [active, setActive] = useState(true);

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => setActive(false), 500);
    }
  }, [progress]);

  return (
    <>
      <AnimatePresence mode="wait">
        {active && (
          <motion.div
            variants={loaderVars}
            initial={{ y: 0 }}
            exit="exit"
            className="fixed inset-0 z-[9999] bg-[#050505] flex flex-col items-center justify-center text-white"
          >
            <div className="flex flex-col items-center">
              <motion.span 
                animate={{ opacity: [0.2, 1, 0.2] }} 
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-[10px] tracking-[0.5em] mb-4 font-mono opacity-50"
              >
                LOADING CORE ASSETS
              </motion.span>
              <h1 className="text-7xl md:text-9xl font-black italic tracking-tighter">
                {Math.round(progress)}%
              </h1>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: active ? 0 : 1 }}
        transition={{ duration: 1 }}
      >
        {children}
      </motion.div>
    </>
  );
}