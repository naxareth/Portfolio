'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function CtaSection() {
  return (
    <section className="py-24 px-6 text-center max-w-4xl mx-auto overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">
          Let's build something <br className="hidden md:block" />
          <span className="italic bg-gradient-to-r from-purple-600 to-red-500 bg-clip-text text-transparent">structured.</span>
        </h2>
        <p className="text-muted mb-10 max-w-lg mx-auto">
          Open for OJT opportunities and collaborations starting January.
        </p>
        <Link 
          href="/contact" 
          className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-red-500 text-white rounded-full text-sm font-medium hover:opacity-90 transition-opacity shadow-[0_0_15px_rgba(168,85,247,0.2)] hover:shadow-[0_0_25px_rgba(168,85,247,0.4)]"
        >
          Get in touch →
        </Link>
      </motion.div>
    </section>
  )
}
