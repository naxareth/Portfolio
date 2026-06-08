'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import type { Project, ProjectGalleryImage } from '@/lib/projects'

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
      <div className="group relative aspect-[4/3] rounded-xl border border-border bg-surface flex flex-col items-center justify-center p-6 text-center">
        <span className="text-sm font-mono text-muted mb-4 uppercase">{project.title}</span>
        <p className="font-serif text-2xl text-muted">{project.brief}</p>
      </div>
    )
  }

  return (
    <Link 
      href={`/work/${project.slug}`}
      className={`group block relative rounded-xl border border-border bg-surface overflow-hidden transition-colors hover:border-muted/50 ${project.featured ? 'md:col-span-2 aspect-[2/1]' : 'aspect-[4/3]'}`}
    >
      <div className="absolute inset-0 bg-black/5 p-8 flex flex-col justify-end z-20">
        <div className="mt-auto">
          <div className="flex items-center gap-4 mb-4">
            {project.thumbnail && (
              <div className="relative w-12 h-12 shrink-0 bg-black/50 backdrop-blur-sm rounded-xl border border-white/20 p-1 flex items-center justify-center overflow-hidden">
                <Image 
                  src={project.thumbnail} 
                  alt={`${project.title} logo`} 
                  fill 
                  sizes="48px"
                  className="object-contain p-1.5 drop-shadow-[0_0_8px_rgba(0,0,0,0.3)] dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" 
                />
              </div>
            )}
            <h3 className="text-3xl font-serif text-white drop-shadow-lg">{project.title}</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span key={tag} className="text-xs font-mono text-gray-300 border border-white/20 px-2 py-1 rounded-full bg-black/50 backdrop-blur-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      {/* Project Gallery Slideshow */}
      <div className="absolute inset-0 z-0 opacity-80 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden bg-black">
        <AnimatePresence initial={false}>
          {images.length > 0 && (
              <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0 blur-[8px] group-hover:blur-0 transition-all duration-700 ease-in-out scale-105 group-hover:scale-100"
            >
              <Image 
                src={images[currentImageIndex].src} 
                alt={`${project.title} - ${images[currentImageIndex].alt}`} 
                fill 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                priority={currentImageIndex === 0}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/50 to-transparent z-10 pointer-events-none"></div>
    </Link>
  )
}
