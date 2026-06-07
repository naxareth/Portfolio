import Link from 'next/link'
import Image from 'next/image'
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
      
      {/* Project Thumbnail */}
      {project.thumbnail && (
        <Image src={project.thumbnail} alt={project.title} fill className="object-cover z-0 opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent z-0"></div>
    </Link>
  )
}
