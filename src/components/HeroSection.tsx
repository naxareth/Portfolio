'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import VideoIntro from './VideoIntro'

export default function HeroSection() {
  return (
    <section className="pt-40 pb-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        <div className="lg:col-span-8 flex flex-col items-start">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="text-xs uppercase tracking-widest text-muted border border-border px-3 py-1 rounded-full">
              BSIT · System Development · Applied Analytics
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[clamp(3rem,6vw,5.5rem)] leading-[1.1] font-serif mb-8"
          >
            IT Student <br />
            <span className="italic text-muted">& Developer</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted max-w-xl mb-12"
          >
            I'm a 4th-year BSIT student specializing in System Development. I believe every system worth building starts with structure: a clear plan, a defensible architecture, and code that communicates intent.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-6"
          >
            <Link 
              href="/work" 
              className="px-8 py-4 bg-foreground text-background rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
            >
              View My Work
            </Link>
            <Link 
              href="/about" 
              className="text-sm font-medium text-muted hover:text-foreground transition-colors"
            >
              About me →
            </Link>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="lg:col-span-4 relative flex flex-col items-center lg:items-end"
        >
          <div className="relative w-full max-w-[16rem] aspect-[4/5] bg-surface rounded-2xl border border-border flex items-center justify-center overflow-hidden">
            <Image src="/assets/Ace/PORTRAIT-02-NO_BG-v2.png" alt="Ace Philip Denulan" fill className="object-contain object-bottom" priority />
            
            <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-md border border-border px-3 py-2 rounded-full flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-xs font-medium whitespace-nowrap">Available for OJT — Jan 2026</span>
            </div>
          </div>

          <div className="w-full flex justify-center lg:justify-end lg:pr-4 mt-4">
            <VideoIntro />
          </div>
        </motion.div>

      </div>
    </section>
  )
}
