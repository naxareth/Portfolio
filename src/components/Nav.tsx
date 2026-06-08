'use client'

import { useState, useEffect } from 'react'
import { flushSync } from 'react-dom'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

export default function Nav() {
  const pathname = usePathname()
  const [isDark, setIsDark] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    // Check initial theme from document class
    setIsDark(document.documentElement.classList.contains('dark'))
  }, [])

  const toggleTheme = (e: React.MouseEvent) => {
    const isDarkNew = !isDark;
    
    // Fallback for browsers that don't support View Transitions
    if (!document.startViewTransition) {
      if (isDarkNew) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
      setIsDark(isDarkNew)
      return;
    }

    const x = e.clientX;
    const y = e.clientY;

    const endRadius = Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y)
    );

    const transition = document.startViewTransition(() => {
      flushSync(() => {
        if (isDarkNew) {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }
        setIsDark(isDarkNew)
      })
    });

    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`
      ];

      document.documentElement.animate(
        {
          clipPath: isDarkNew ? [...clipPath].reverse() : clipPath,
        },
        {
          duration: 400,
          easing: 'ease-in',
          pseudoElement: isDarkNew ? '::view-transition-old(root)' : '::view-transition-new(root)',
        }
      );
    });
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-serif">
          acePhilip
        </Link>

        {/* Desktop Nav */}
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

        <div className="flex items-center gap-2 sm:gap-4">
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted hover:text-foreground hover:bg-surface transition-colors shrink-0"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
            )}
          </button>

          <Link
            href="/contact"
            className="hidden sm:flex px-6 py-2 bg-foreground text-background rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Let's talk
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-muted hover:text-foreground shrink-0"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-background border-b border-border px-6 py-4 flex flex-col gap-4 shadow-xl">
          <Link href="/#skills" onClick={() => setIsMenuOpen(false)} className={`${pathname === '/' ? 'text-foreground' : 'text-muted'} text-lg font-medium`}>Skills</Link>
          <Link href="/work" onClick={() => setIsMenuOpen(false)} className={`${pathname.startsWith('/work') ? 'text-foreground' : 'text-muted'} text-lg font-medium`}>Work</Link>
          <Link href="/about" onClick={() => setIsMenuOpen(false)} className={`${pathname === '/about' ? 'text-foreground' : 'text-muted'} text-lg font-medium`}>About</Link>
          <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-foreground mt-2 border-t border-border pt-4">Let's talk</Link>
        </div>
      )}
    </header>
  )
}
