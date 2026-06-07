import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CaseStudyCard from '@/components/CaseStudyCard'
import { projects } from '@/lib/projects'

export const metadata = {
  title: 'Work | Ace Philip Denulan',
  description: 'Projects and case studies by Ace Philip Denulan.',
}

export default function WorkPage() {
  return (
    <>
      <Nav />
      <main className="pt-40 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif mb-16">
            Selected <span className="italic text-muted">Work.</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map(project => (
              <CaseStudyCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
