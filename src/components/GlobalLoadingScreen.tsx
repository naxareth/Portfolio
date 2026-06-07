'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function GlobalLoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // List of critical images to preload
    const criticalImages = [
      '/assets/Ace/PORTRAIT-02-NO_BG-v2.png'
    ]
    
    let loadedCount = 0;
    
    const checkAllLoaded = () => {
      loadedCount++;
      if (loadedCount === criticalImages.length) {
        // Add a tiny delay to ensure the loading screen feels deliberate and stylish
        setTimeout(() => setIsLoading(false), 800)
      }
    }

    criticalImages.forEach(src => {
      const img = new window.Image()
      img.src = src
      img.onload = checkAllLoaded
      img.onerror = checkAllLoaded // Don't hang forever if image fails
    })

    // Fallback if images take way too long
    const timeout = setTimeout(() => setIsLoading(false), 5000)
    
    return () => clearTimeout(timeout)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div 
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
        >
          <motion.h1 
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-4xl font-serif tracking-widest text-foreground"
          >
            Ace.
          </motion.h1>
          <div className="mt-8 w-48 h-[1px] bg-border overflow-hidden relative">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-foreground"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
