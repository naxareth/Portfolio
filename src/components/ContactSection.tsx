import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

export function ContactSection() {
  return (
    <footer className="relative py-24 border-t border-gray-800 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-gothic text-gray-100 mb-8">
            Initialize Protocol
          </h2>

          <p className="text-gray-400 font-mono mb-12 max-w-lg mx-auto">
            Ready to construct something enduring? Transmit your signal.
            Open for collaboration and innovative system planning.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 max-w-2xl mx-auto">
            
            {/* Email Card */}
            <a href="mailto:acso.denulan.up@phinmaed.com" className="group relative p-6 border border-gray-800 hover:border-red-900/50 transition-colors flex flex-col items-center gap-3">
              <div className="absolute inset-0 bg-red-900/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <Mail className="w-8 h-8 text-gray-400 group-hover:text-red-500 transition-colors" />
              <span className="font-mono text-sm text-gray-300">acso.denulan.up@phinmaed.com</span>
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-1 h-1 bg-gray-600 group-hover:bg-red-500 transition-colors" />
              <div className="absolute bottom-0 right-0 w-1 h-1 bg-gray-600 group-hover:bg-red-500 transition-colors" />
            </a>

            {/* Phone Card */}
            <a href="tel:+639494123473" className="group relative p-6 border border-gray-800 hover:border-red-900/50 transition-colors flex flex-col items-center gap-3">
              <div className="absolute inset-0 bg-red-900/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <Phone className="w-8 h-8 text-gray-400 group-hover:text-red-500 transition-colors" />
              <span className="font-mono text-sm text-gray-300">+63 949 4123 473</span>
              {/* Corner accents */}
              <div className="absolute top-0 right-0 w-1 h-1 bg-gray-600 group-hover:bg-red-500 transition-colors" />
              <div className="absolute bottom-0 left-0 w-1 h-1 bg-gray-600 group-hover:bg-red-500 transition-colors" />
            </a>

          </div>

          <div className="text-xs font-mono text-gray-600 border-t border-gray-900 pt-8">
            <p>© {new Date().getFullYear()} ACE PHILIP S. DENULAN. ALL RIGHTS RESERVED.</p>
            <p className="mt-2">MALASIQUI, PANGASINAN // SYSTEM ONLINE</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}