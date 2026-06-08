'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import VideoIntro from './VideoIntro'

export default function HeroSection() {
  return (
    <section className="pt-40 pb-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-stretch">
        
        <div className="lg:col-span-8 flex flex-col items-start justify-between relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 flex flex-wrap gap-2"
          >
            <span className="text-xs uppercase tracking-widest text-muted border border-border px-3 py-1 rounded-full">
              BSIT
            </span>
            <span className="text-xs uppercase tracking-widest text-muted border border-border px-3 py-1 rounded-full">
              System Development
            </span>
            <span className="text-xs uppercase tracking-widest text-muted border border-border px-3 py-1 rounded-full">
              Applied Analytics
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[clamp(3rem,6vw,5.5rem)] leading-[1.1] font-serif mb-8"
          >
            IT Student <br />
            <span className="italic bg-gradient-to-b from-yellow-500 to-orange-600 bg-clip-text text-transparent pr-2">& Developer</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted max-w-xl mb-12"
          >
            I'm a 4th-year BSIT student specializing in <span className="text-orange-600 dark:text-orange-400 font-medium">System Development</span>. I believe every system worth building starts with <span className="text-amber-500 dark:text-amber-400 font-medium">structure</span>: a clear plan, a defensible architecture, and code that communicates intent.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-6 mt-auto"
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
          className="lg:col-span-4 relative flex flex-col items-center lg:items-end lg:justify-between h-full mt-12 lg:mt-0"
        >
          <div className="relative w-full max-w-sm aspect-square bg-surface rounded-3xl border border-border flex items-end justify-center overflow-hidden">
            <Image 
              src="/assets/Ace/temporary-pic.jpg" 
              alt="Ace Philip Denulan" 
              fill 
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-contain object-bottom" 
              priority 
            />
          </div>

          <div className="w-full flex justify-center lg:justify-end lg:pr-4 mt-4">
            <VideoIntro />
          </div>
        </motion.div>

      </div>
    </section>
  )
}
