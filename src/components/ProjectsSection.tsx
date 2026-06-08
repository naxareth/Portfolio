'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import CaseStudyCard from './CaseStudyCard'
import { projects } from '@/lib/projects'

export default function ProjectsSection() {
  const featured = projects.filter(p => p.featured)
  const rest = projects.filter(p => !p.featured)

  return (
    <section className="py-24 px-6 border-t border-border overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-12"
        >
          <h2 className="text-4xl font-serif">Selected Work</h2>
          <Link href="/work" className="text-sm font-medium text-muted hover:text-foreground transition-colors">
            See all →
          </Link>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {featured.map(project => (
            <CaseStudyCard key={project.slug} project={project} />
          ))}
          {rest.map(project => (
            <CaseStudyCard key={project.slug} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
