import Link from 'next/link'
import MarqueeStrip from './MarqueeStrip'

export default function AboutSection() {
  return (
    <>
      <MarqueeStrip items="Ace Philip Denulan +++ " />
      
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden bg-surface border border-border">
            {/* Placeholder for about image */}
            <div className="absolute inset-0 flex items-center justify-center text-muted">
              <svg className="w-24 h-24 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-8">
              A website that leaves a <br className="hidden md:block" />
              <span className="italic text-muted">lasting impression.</span>
            </h2>

            <p className="text-muted leading-relaxed mb-12">
              I'm Ace Philip S. Denulan — a 4th-year BSIT student at PHINMA University of Pangasinan, specializing in System Development with an eye toward Applied Analytics. I believe every system worth building starts with structure.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-12">
              <div>
                <p className="text-2xl font-serif mb-1">4th Year</p>
                <p className="text-xs text-muted font-mono uppercase tracking-wider">B.S. Information Tech</p>
              </div>
              <div>
                <p className="text-2xl font-serif mb-1">3+</p>
                <p className="text-xs text-muted font-mono uppercase tracking-wider">AI & Systems Projects</p>
              </div>
              <div>
                <p className="text-2xl font-serif mb-1">Jan</p>
                <p className="text-xs text-muted font-mono uppercase tracking-wider">OJT Target</p>
              </div>
              <div>
                <p className="text-2xl font-serif mb-1">PH</p>
                <p className="text-xs text-muted font-mono uppercase tracking-wider">Pangasinan</p>
              </div>
            </div>

            <Link 
              href="/about" 
              className="inline-block px-8 py-4 bg-foreground text-background rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
            >
              More about me →
            </Link>
          </div>

        </div>
      </section>
    </>
  )
}
