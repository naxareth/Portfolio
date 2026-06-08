'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import type { Project, ProjectGalleryImage } from '@/lib/projects'
import TechIcon from './TechIcon'

export default function CaseStudyCard({ project }: { project: Project }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Use gallery if available and has items, otherwise fallback to thumbnail
  const images: ProjectGalleryImage[] = project.caseStudy?.gallery && project.caseStudy.gallery.length > 0 
    ? project.caseStudy.gallery 
    : (project.thumbnail ? [{ src: project.thumbnail, alt: project.title }] : [])

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }, 3000) // Change image every 3 seconds

    return () => clearInterval(interval)
  }, [images.length])

  if (project.depth === 'placeholder') {
    return (
      <div className="group relative aspect-[4/3] rounded-xl border border-border overflow-hidden bg-[#1e1b18] cursor-not-allowed">
        <div className="absolute inset-0 z-0 opacity-60 overflow-hidden">
          <Image 
            src="/assets/Ace/UPCOMING-WORK.jpg" 
            alt="Upcoming Work" 
            fill 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover blur-[2px] scale-105 grayscale sepia-[.3]" 
          />
        </div>
        
        {/* Bottom Frosted Bar */}
        <div className="absolute inset-x-0 bottom-0 p-6 z-20 bg-[#1e1b18]/40 backdrop-blur-md border-t border-white/10">
          <div>
            <h3 className="text-3xl font-serif text-white drop-shadow-lg mb-2">{project.title}</h3>
            <p className="text-gray-300 font-serif max-w-sm mb-4 drop-shadow-md">{project.brief}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span key={tag} className="flex items-center text-xs font-mono text-gray-300 border border-white/20 px-2 py-1 rounded-full bg-[#1e1b18]/50 backdrop-blur-sm">
                  <TechIcon tag={tag} />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <Link 
      href={`/work/${project.slug}`}
      className="group block relative rounded-xl border border-border bg-surface overflow-hidden transition-colors hover:border-muted/50 aspect-[4/3]"
    >
      {/* Centered View Details Popup */}
      <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <span className="bg-[#b08d57] text-[#1e1b18] px-6 py-2 rounded-full font-mono text-sm font-semibold tracking-wide shadow-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          View Project
        </span>
      </div>

      {/* Bottom Frosted Bar */}
      <div className="absolute inset-x-0 bottom-0 p-6 z-20 bg-[#1e1b18]/40 backdrop-blur-md border-t border-white/10 group-hover:bg-[#1e1b18]/60 transition-colors duration-500">
        <div>
          <div className="flex items-center gap-4 mb-4">
            {project.thumbnail && (
              <div className="relative w-12 h-12 shrink-0 bg-[#1e1b18]/50 backdrop-blur-sm rounded-xl border border-white/20 p-1 flex items-center justify-center overflow-hidden">
                <Image 
                  src={project.thumbnail} 
                  alt={`${project.title} logo`} 
                  fill 
                  sizes="48px"
                  className="object-contain p-1.5 drop-shadow-[0_0_8px_rgba(30,27,24,0.3)] dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] grayscale sepia-[.3] group-hover:grayscale-0 group-hover:sepia-0 transition-all duration-700" 
                />
              </div>
            )}
            <h3 className="text-3xl font-serif text-white drop-shadow-lg">{project.title}</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span key={tag} className="flex items-center text-xs font-mono text-gray-300 border border-white/20 px-2 py-1 rounded-full bg-[#1e1b18]/50 backdrop-blur-sm">
                <TechIcon tag={tag} />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      {/* Project Gallery Slideshow */}
      <div className="absolute inset-0 z-0 opacity-80 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden bg-[#1e1b18]">
        <AnimatePresence initial={false}>
          {images.length > 0 && (
              <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image 
                src={images[currentImageIndex].src} 
                alt={`${project.title} - ${images[currentImageIndex].alt}`} 
                fill 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover blur-[2px] grayscale sepia-[.3] group-hover:grayscale-0 group-hover:sepia-0 group-hover:blur-none group-hover:scale-100 scale-105 transition-all duration-700 ease-in-out"
                priority={currentImageIndex === 0}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </Link>
  )
}
