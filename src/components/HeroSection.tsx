import React from 'react';
import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden border-b border-gray-800">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a] z-0" />

      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="mb-4 flex justify-center items-center gap-4 text-gray-500 font-mono text-xs tracking-[0.2em]">
            <span className="h-[1px] w-12 bg-crimson-600"></span>
            <span>BSIT // SYSTEM INNOVATOR</span>
            <span className="h-[1px] w-12 bg-crimson-600"></span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-gothic text-gray-100 mb-6 tracking-tight leading-none">
            Ace Philip <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-red-500 to-red-900">
              S. Denulan
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-gray-400 font-mono text-sm md:text-base leading-relaxed border-l-2 border-red-900/50 pl-6 text-left md:text-center md:border-l-0 md:pl-0">
            I design intelligent protocols, solving complex problems with competent precision.
          </p>
        </motion.div>

        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <div className="animate-bounce text-gray-600">
            <div className="h-12 w-[1px] bg-gradient-to-b from-transparent to-red-600 mx-auto" />
            <span className="block mt-2 font-mono text-[10px] uppercase tracking-widest">
              Scroll to Initialize
            </span>
          </div>
        </motion.div>
      </div>

      {/* Decorative Technical Elements */}
      <div className="absolute bottom-8 left-8 hidden md:block font-mono text-[10px] text-gray-700">
        <div>LOC: MALASIQUI, PH</div>
        <div>GRID: ACTIVE</div>
      </div>
      <div className="absolute bottom-8 right-8 hidden md:block font-mono text-[10px] text-gray-700 text-right">
        <div>STATUS: ONLINE</div>
        <div>PHINMA UPang</div>
      </div>
    </section>
  );
}