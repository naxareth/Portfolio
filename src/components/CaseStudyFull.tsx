import Link from 'next/link'
import Image from 'next/image'
import type { Project } from '@/lib/projects'
import ProjectSlideshow from './ProjectSlideshow'

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
        <div className="flex items-center gap-6 mb-6">
          {project.thumbnail && (
            <div className="relative w-16 h-16 md:w-20 md:h-20 shrink-0 bg-surface rounded-2xl border border-border p-2 overflow-hidden flex items-center justify-center">
              <Image 
                src={project.thumbnail} 
                alt={`${project.title} logo`} 
                fill 
                className="object-contain p-2 drop-shadow-[0_0_8px_rgba(0,0,0,0.3)] dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" 
              />
            </div>
          )}
          <h1 className="text-5xl md:text-7xl font-serif">{project.title}</h1>
        </div>
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
              className="px-6 py-2 bg-foreground text-background rounded-full text-sm font-medium hover:opacity-90 transition-opacity flex items-center"
            >
              <svg className="w-4 h-4 mr-2 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
              View Repository
            </a>
          )}
        </div>
      </header>

      {/* Main Image Slideshow */}
      {project.caseStudy.gallery && project.caseStudy.gallery.length > 0 ? (
        <ProjectSlideshow images={project.caseStudy.gallery} altPrefix={project.title} />
      ) : project.thumbnail ? (
        <div className="relative aspect-video w-full bg-surface rounded-2xl overflow-hidden border border-border mb-16 flex items-center justify-center">
          <Image src={project.thumbnail} alt={project.title} fill className="object-cover" />
        </div>
      ) : null}

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
