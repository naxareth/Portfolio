'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

export default function Nav() {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/50 border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-serif">
          Ace.
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <Link href="/#skills" className={`${pathname === '/' ? 'text-foreground' : 'text-muted'} hover:text-foreground transition-colors`}>
            Skills
          </Link>
          <Link href="/work" className={`${pathname.startsWith('/work') ? 'text-foreground' : 'text-muted'} hover:text-foreground transition-colors`}>
            Work
          </Link>
          <Link href="/about" className={`${pathname === '/about' ? 'text-foreground' : 'text-muted'} hover:text-foreground transition-colors`}>
            About
          </Link>
        </nav>

        <Link 
          href="/contact" 
          className="px-6 py-2 bg-foreground text-background rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Let's talk
        </Link>
      </div>
    </header>
  )
}
