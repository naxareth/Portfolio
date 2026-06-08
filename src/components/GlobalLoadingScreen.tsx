'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '@/lib/projects'

export default function GlobalLoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
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

    // Guarantee the loading bar animation finishes (2 seconds)
    const minLoadTime = new Promise(resolve => setTimeout(resolve, 2000))

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
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background overflow-hidden"
        >
          {/* Subtle Plus Pattern Background (moving diagonally) */}
          <div 
            className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] dark:invert animate-drift pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M29 29v-4h2v4h4v2h-4v4h-2v-4h-4v-2h4z' fill='%23000' fill-rule='evenodd'/%3E%3C/svg%3E")`,
              backgroundSize: '60px'
            }}
          />

          {/* Top Loading Bar Extending Across Screen */}
          <motion.div
            className="absolute top-0 left-0 h-[4px] bg-foreground z-20"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "linear" }}
          />

          {/* Name Animating From Above to Center, then Exiting Below */}
          <motion.h1
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100vh", opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="text-4xl font-serif tracking-widest text-foreground z-10 drop-shadow-sm"
          >
            acePhilip
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
