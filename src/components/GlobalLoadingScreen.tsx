'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '@/lib/projects'

export default function GlobalLoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [subtitle, setSubtitle] = useState("")

  useEffect(() => {
    const subtitles = [
      "Structuring the chaos.",
      "System development & applied analytics.",
      "Structure before speed.",
      "Building systems that last.",
      "Code that communicates intent."
    ];
    setSubtitle(subtitles[Math.floor(Math.random() * subtitles.length)]);
    
    // Collect all critical images
    const projectThumbnails = projects.map(p => p.thumbnail).filter(Boolean) as string[]
    const projectFirstGalleryImages = projects
      .map(p => p.caseStudy?.gallery?.[0]?.src)
      .filter(Boolean) as string[]

    const criticalImages = Array.from(new Set([
      '/assets/Ace/temporary-pic.jpg',
      ...projectThumbnails,
      ...projectFirstGalleryImages
    ]))

    // Guarantee the loading bar animation finishes (3 seconds)
    const minLoadTime = new Promise(resolve => setTimeout(resolve, 3000))

    const imagePromises = criticalImages.map(src => {
      return new Promise(resolve => {
        const img = new window.Image()
        img.src = src
        img.onload = resolve
        img.onerror = resolve
      })
    })

    // Wait for all images AND the 2s minimum animation to complete
    Promise.all([...imagePromises, minLoadTime]).then(() => {
      // Add a tiny buffer to make sure the bar sits at 100% for a split second before sliding away
      setTimeout(() => setIsLoading(false), 200)
    })

    // Fallback if images take way too long
    const timeout = setTimeout(() => setIsLoading(false), 8000)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ backgroundColor: "#1e1b18", color: "#f0ece6", y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ 
            y: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Subtle Plus Pattern Background (moving diagonally) */}
          <motion.div 
            className="absolute inset-0 animate-drift pointer-events-none opacity-[0.05]"
            style={{
              filter: "invert(1)",
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M29 29v-4h2v4h4v2h-4v4h-2v-4h-4v-2h4z' fill='%23000' fill-rule='evenodd'/%3E%3C/svg%3E")`,
              backgroundSize: '60px'
            }}
          />

          {/* Top Loading Bar Extending Across Screen */}
          <motion.div
            className="absolute top-0 left-0 h-[4px] z-20 bg-[#f0ece6]"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ width: { duration: 3, ease: "linear" } }}
          />

          {/* Name and Subtitle Animating */}
          <motion.div
            exit={{ y: "100vh", opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="flex flex-col items-center justify-center z-10"
          >
            <motion.h1
              initial={{ y: "-100vh", opacity: 0 }}
              animate={{ y: -10, opacity: 1 }}
              transition={{ duration: 1.0, ease: [0.76, 0, 0.24, 1] }}
              className="text-4xl font-serif tracking-widest drop-shadow-sm mb-4"
              style={{ color: "inherit" }}
            >
              acePhilip
            </motion.h1>
            <motion.p
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
              className="text-sm font-mono tracking-wide"
              style={{ color: "#8c8279" }} // Taupe muted color works for both
            >
              {subtitle}
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
