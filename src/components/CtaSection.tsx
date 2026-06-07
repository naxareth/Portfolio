import Link from 'next/link'

export default function CtaSection() {
  return (
    <section className="py-24 px-6 text-center max-w-4xl mx-auto">
      <h2 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">
        Let's build something <br className="hidden md:block" />
        <span className="italic text-muted">structured.</span>
      </h2>
      <p className="text-muted mb-10 max-w-lg mx-auto">
        Open for OJT opportunities and collaborations starting January.
      </p>
      <Link 
        href="/contact" 
        className="inline-block px-8 py-4 bg-foreground text-background rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
      >
        Get in touch →
      </Link>
    </section>
  )
}
