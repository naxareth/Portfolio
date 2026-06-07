import Link from 'next/link'
import type { Project } from '@/lib/projects'

export default function CaseStudyCard({ project }: { project: Project }) {
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
      <div className="absolute inset-0 bg-background/5 p-8 flex flex-col justify-end z-10">
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
      
      {/* Placeholder for project thumbnail */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent z-0"></div>
      <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity">
        <svg className="w-32 h-32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
    </Link>
  )
}
