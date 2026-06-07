import Link from 'next/link'
import CaseStudyCard from './CaseStudyCard'
import { projects } from '@/lib/projects'

export default function ProjectsSection() {
  const featured = projects.filter(p => p.featured)
  const rest = projects.filter(p => !p.featured)

  return (
    <section className="py-24 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <h2 className="text-4xl font-serif">Selected Work</h2>
          <Link href="/work" className="text-sm font-medium text-muted hover:text-foreground transition-colors">
            See all →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featured.map(project => (
            <CaseStudyCard key={project.slug} project={project} />
          ))}
          {rest.map(project => (
            <CaseStudyCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
