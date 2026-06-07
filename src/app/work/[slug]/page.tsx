import { notFound } from 'next/navigation'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CaseStudyFull from '@/components/CaseStudyFull'
import { projects } from '@/lib/projects'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projects.filter(p => p.depth !== 'placeholder').map(project => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const project = projects.find(p => p.slug === slug)
  if (!project) return { title: 'Project Not Found' }

  return {
    title: `${project.title} | Case Study`,
    description: project.brief,
  }
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params
  const project = projects.find(p => p.slug === slug)

  if (!project || project.depth === 'placeholder') {
    notFound()
  }

  return (
    <>
      <Nav />
      <main className="pt-40 pb-24 px-6">
        <CaseStudyFull project={project} />
      </main>
      <Footer />
    </>
  )
}
