'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import type { ProjectGalleryImage } from '@/lib/projects'

export default function ProjectSlideshow({ images, altPrefix }: { images: ProjectGalleryImage[], altPrefix: string }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (images.length <= 1 || isModalOpen || isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [images.length, isModalOpen, isHovered])

  if (!images || images.length === 0) return null;

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <>
      <div 
        className="relative aspect-video w-full bg-black rounded-2xl overflow-hidden border border-white/10 mb-16 flex items-center justify-center group cursor-zoom-in"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={openModal}
      >
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <Image 
              src={images[currentIndex].src} 
              alt={`${altPrefix} - ${images[currentIndex].alt}`} 
              fill 
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
              priority={currentIndex === 0}
            />
          </motion.div>
        </AnimatePresence>

        {/* Overlay gradient for caption */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#1e1b18]/50 to-transparent z-10 pointer-events-none" />

        {/* Caption */}
        <div className="absolute bottom-6 left-6 z-20 pointer-events-none">
          <span className="text-sm font-mono bg-[#1e1b18]/50 backdrop-blur-md px-3 py-1.5 rounded-md border border-white/20 text-white">
            {images[currentIndex].alt}
          </span>
        </div>
        
        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-[#1e1b18]/50 backdrop-blur-md border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#1e1b18]/80 text-white"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-[#1e1b18]/50 backdrop-blur-md border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#1e1b18]/80 text-white"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            {/* Dots */}
            <div className="absolute bottom-6 right-6 flex justify-center gap-2 z-20 pointer-events-none">
              {images.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-white scale-110' : 'bg-white/30 scale-100'}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Fullscreen Modal Lightbox */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 md:p-12 cursor-zoom-out"
            onClick={closeModal}
          >
            <button 
              onClick={closeModal}
              className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-colors z-50 text-gray-400 hover:text-white"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="relative w-full h-full flex flex-col items-center justify-center">
              <div 
                className="relative w-full max-h-[85vh] aspect-video max-w-7xl rounded-xl overflow-hidden cursor-default shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <Image 
                  src={images[currentIndex].src} 
                  alt={`${altPrefix} - ${images[currentIndex].alt}`} 
                  fill 
                  sizes="100vw"
                  className="object-contain"
                />
              </div>

              {images.length > 1 && (
                <div className="mt-6 flex items-center justify-center gap-4 w-full max-w-3xl px-4" onClick={(e) => e.stopPropagation()}>
                  <button 
                    onClick={prevSlide}
                    className="p-3 shrink-0 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-colors text-gray-400 hover:text-white"
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  
                  <span className="text-xs sm:text-sm font-mono text-gray-300 tracking-widest uppercase text-center flex-1 min-w-0 break-words px-2">
                    {images[currentIndex].alt}
                  </span>
                  
                  <button 
                    onClick={nextSlide}
                    className="p-3 shrink-0 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-colors text-gray-400 hover:text-white"
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
