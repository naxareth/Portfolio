import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Contact | Ace Philip Denulan',
  description: 'Get in touch with Ace Philip Denulan.',
}

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="pt-40 pb-24 px-6 flex-grow flex flex-col items-center justify-center min-h-[70vh]">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif mb-8">
            Let's <span className="italic text-muted">talk.</span>
          </h1>
          <p className="text-lg text-muted mb-12">
            I'm currently looking for OJT opportunities starting January 2026. If you have a role that requires structured thinking and solid system development, I'd love to hear from you.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="mailto:contact@example.com" 
              className="w-full sm:w-auto px-8 py-4 bg-foreground text-background rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Send an Email
            </a>
            <a 
              href="https://github.com/naxareth" 
              target="_blank" rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 border border-border rounded-full text-sm font-medium hover:bg-surface transition-colors"
            >
              GitHub Profile
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
