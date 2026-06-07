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
      <div className="absolute inset-0 bg-background/5 p-8 flex flex-col justify-end z-20">
        <div className="mt-auto">
          <h3 className="text-3xl font-serif mb-3">{project.title}</h3>
          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span key={tag} className="text-xs font-mono text-muted border border-border px-2 py-1 rounded-full bg-background/50 backdrop-blur-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      {/* Project Gallery Slideshow */}
      <div className="absolute inset-0 z-0 opacity-80 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden bg-surface">
        <AnimatePresence initial={false}>
          {images.length > 0 && (
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image 
                src={images[currentImageIndex].src} 
                alt={`${project.title} - ${images[currentImageIndex].alt}`} 
                fill 
                className="object-cover"
                priority={currentImageIndex === 0}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-background/90 via-background/20 to-transparent z-10"></div>
    </Link>
  )
}
