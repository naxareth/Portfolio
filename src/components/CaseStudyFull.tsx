import Link from 'next/link'
import type { Project } from '@/lib/projects'

export default function CaseStudyFull({ project }: { project: Project }) {
  if (!project.caseStudy) return null;

  return (
    <article className="max-w-4xl mx-auto">
      <header className="mb-16">
        <div className="mb-8">
          <Link href="/work" className="text-sm font-medium text-muted hover:text-foreground transition-colors">
            ← Back to Work
          </Link>
        </div>
        <h1 className="text-5xl md:text-7xl font-serif mb-6">{project.title}</h1>
        <div className="flex flex-wrap items-center gap-4 mb-8">
          {project.tags.map(tag => (
            <span key={tag} className="text-sm font-mono text-muted border border-border px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-4">
          {project.repo && (
            <a 
              href={project.repo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-2 bg-foreground text-background rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
            >
              View Repository
            </a>
          )}
        </div>
      </header>

      {/* Main Image Placeholder */}
      <div className="aspect-video w-full bg-surface rounded-2xl border border-border mb-16 flex items-center justify-center">
        <span className="text-muted text-sm font-mono uppercase tracking-widest">Project Thumbnail / Screenshot</span>
      </div>

      <div className="space-y-16">
        {project.caseStudy.problem && (
          <section>
            <h2 className="text-3xl font-serif mb-6">The Problem</h2>
            <p className="text-lg text-muted leading-relaxed">{project.caseStudy.problem}</p>
          </section>
        )}

        {(project.caseStudy.what || project.brief) && (
          <section>
            <h2 className="text-3xl font-serif mb-6">What was built</h2>
            <p className="text-lg text-muted leading-relaxed">{project.caseStudy.what || project.brief}</p>
          </section>
        )}

        {project.caseStudy.architecture && project.caseStudy.architecture.length > 0 && (
          <section>
            <h2 className="text-3xl font-serif mb-6">Architecture</h2>
            <ul className="list-disc list-inside text-lg text-muted leading-relaxed space-y-2">
              {project.caseStudy.architecture.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        {project.caseStudy.stack && project.caseStudy.stack.length > 0 && (
          <section>
            <h2 className="text-3xl font-serif mb-6">Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.caseStudy.stack.map(item => (
                <span key={item} className="text-sm border border-border px-3 py-1 rounded bg-surface text-muted">
                  {item}
                </span>
              ))}
            </div>
          </section>
        )}

        {project.caseStudy.outcome && (
          <section>
            <h2 className="text-3xl font-serif mb-6">Outcome</h2>
            <p className="text-lg text-muted leading-relaxed">{project.caseStudy.outcome}</p>
          </section>
        )}

        {project.caseStudy.reflection && (
          <section>
            <h2 className="text-3xl font-serif mb-6">Reflection</h2>
            <p className="text-lg text-muted leading-relaxed italic border-l-2 border-border pl-6">
              "{project.caseStudy.reflection}"
            </p>
          </section>
        )}
      </div>
    </article>
  )
}
