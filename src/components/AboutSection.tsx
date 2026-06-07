import Image from 'next/image'
import Link from 'next/link'
import MarqueeStrip from './MarqueeStrip'

export default function AboutSection() {
  return (
    <>
      <MarqueeStrip items="Ace Philip Denulan +++ System Developer +++ Applied Analytics +++ BSIT Student +++ Problem Solver +++ " />
      
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative aspect-square w-full max-w-md mx-auto rounded-3xl bg-surface border border-border flex items-end justify-center overflow-hidden">
            <Image src="/assets/Ace/temporary-pic.jpg" alt="Ace Philip Denulan" fill className="object-contain object-bottom" />
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
