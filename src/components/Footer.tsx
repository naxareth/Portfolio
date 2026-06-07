import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-border pt-16 pb-8 px-6 mt-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        <div>
          <h3 className="text-3xl font-serif mb-4">Ace.</h3>
          <p className="text-muted text-sm max-w-xs">
            System Development & Applied Analytics. Structurally sound, meticulously planned.
          </p>
        </div>
        
        <div>
          <h4 className="font-serif text-xl mb-4">Pages</h4>
          <ul className="space-y-2 text-muted text-sm flex flex-col">
            <li><Link href="/" className="hover:text-foreground transition-colors">Home</Link></li>
            <li><Link href="/work" className="hover:text-foreground transition-colors">Work</Link></li>
            <li><Link href="/about" className="hover:text-foreground transition-colors">About</Link></li>
            <li><Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-xl mb-4">Connect</h4>
          <ul className="space-y-2 text-muted text-sm flex flex-col">
            <li><a href="https://github.com/naxareth" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">GitHub</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a></li>
            <li><a href="mailto:contact@example.com" className="hover:text-foreground transition-colors">Email</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto border-t border-border pt-8 flex justify-center text-muted text-xs">
        <p>© 2026 Ace Philip S. Denulan</p>
      </div>
    </footer>
  )
}
