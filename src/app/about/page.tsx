import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CtaSection from '@/components/CtaSection'
import PhilosophySection from '@/components/PhilosophySection'

export const metadata = {
  title: 'About | Ace Philip Denulan',
  description: 'About Ace Philip Denulan, a 4th-year BSIT student specializing in System Development.',
}

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="pt-32">
        
        {/* 1. Hero */}
        <section className="px-6 py-12 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif mb-12 text-center">
            Structure before <br className="hidden md:block" />
            <span className="italic text-muted">speed.</span>
          </h1>
          
          <div className="mx-auto aspect-video w-full max-w-4xl bg-surface rounded-2xl overflow-hidden border border-border mb-24 flex flex-col items-center justify-center">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/IUfA_J4eES0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        {/* 2. Bio */}
        <section className="px-6 py-12 max-w-4xl mx-auto mb-24">
          <p className="text-xl md:text-2xl font-serif leading-relaxed text-foreground mb-12">
            I'm Ace Philip S. Denulan — a 4th-year BSIT student at PHINMA University of Pangasinan, specializing in System Development with an eye toward Applied Analytics.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
            <div>
              <h4 className="text-muted font-mono uppercase tracking-wider mb-2">Education</h4>
              <p>PHINMA University of Pangasinan<br />Bachelor of Science in Information Technology<br />4th Year</p>
            </div>
            <div>
              <h4 className="text-muted font-mono uppercase tracking-wider mb-2">Focus</h4>
              <p>System Development Specialization<br />Applied Analytics in Business (Elective)</p>
            </div>
          </div>
        </section>

        {/* 3. Philosophies */}
        <PhilosophySection />

        {/* 4. Tech Stack */}
        <section className="py-24 px-6 border-t border-border">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-serif mb-12">Tech Stack</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              <div>
                <h4 className="text-muted font-mono uppercase tracking-wider mb-4 border-b border-border pb-2">Languages</h4>
                <ul className="space-y-2">
                  <li>Python</li>
                  <li>TypeScript</li>
                  <li>JavaScript</li>
                  <li>SQL</li>
                  <li>Dart</li>
                  <li>Solidity</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-muted font-mono uppercase tracking-wider mb-4 border-b border-border pb-2">Frameworks</h4>
                <ul className="space-y-2">
                  <li>Next.js</li>
                  <li>Django</li>
                  <li>React</li>
                  <li>TailwindCSS</li>
                  <li>Prisma</li>
                  <li>Ethers.js</li>
                </ul>
              </div>

              <div>
                <h4 className="text-muted font-mono uppercase tracking-wider mb-4 border-b border-border pb-2">AI & Data</h4>
                <ul className="space-y-2">
                  <li>Ollama</li>
                  <li>Gemini API</li>
                  <li>Pandas</li>
                  <li>Linear Regression</li>
                  <li>RAG</li>
                  <li>Collaborative Filtering</li>
                </ul>
              </div>

              <div>
                <h4 className="text-muted font-mono uppercase tracking-wider mb-4 border-b border-border pb-2">Infrastructure</h4>
                <ul className="space-y-2">
                  <li>Docker</li>
                  <li>FastAPI</li>
                  <li>Supabase (PostgreSQL)</li>
                  <li>GitHub Actions</li>
                  <li>Vercel</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 5. CTA */}
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
