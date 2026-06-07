'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

export default function ProjectSlideshow({ images, altPrefix }: { images: string[], altPrefix: string }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [images.length])

  if (!images || images.length === 0) return null;

  return (
    <div className="relative aspect-video w-full bg-surface rounded-2xl overflow-hidden border border-border mb-16 flex items-center justify-center">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image 
            src={images[currentIndex]} 
            alt={`${altPrefix} preview`} 
            fill 
            className="object-cover"
            priority={currentIndex === 0}
          />
        </motion.div>
      </AnimatePresence>
      
      {images.length > 1 && (
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
          {images.map((_, idx) => (
            <div 
              key={idx} 
              className={`w-2 h-2 rounded-full transition-colors ${idx === currentIndex ? 'bg-foreground' : 'bg-foreground/20'}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
