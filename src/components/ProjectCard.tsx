import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Image as ImageIcon } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  index: number;
  measurements?: string;
  image?: string; // New Prop for the image URL
}

export function ProjectCard({
  title,
  description,
  tech,
  index,
  measurements = 'SYS-01',
  image
}: ProjectCardProps) {
  return (
    <motion.div
      className="relative group bg-gray-900/30 border border-gray-800/50 p-6 md:p-8 hover:bg-gray-900/50 transition-colors duration-500 flex flex-col h-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Corner Brackets */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-gray-600 group-hover:border-red-500/70 transition-colors duration-300" />
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-gray-600 group-hover:border-red-500/70 transition-colors duration-300" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-gray-600 group-hover:border-red-500/70 transition-colors duration-300" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-gray-600 group-hover:border-red-500/70 transition-colors duration-300" />

      {/* Measurement Lines (Decorative) */}
      <div className="absolute -left-3 top-1/2 -translate-y-1/2 h-8 w-[1px] bg-gray-700 hidden md:block">
        <span className="absolute top-1/2 -left-6 -translate-y-1/2 text-[10px] text-gray-600 -rotate-90 font-mono">
          {measurements}
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col flex-grow">
        
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-3xl font-ancient text-gray-100 tracking-wide group-hover:text-red-100 transition-colors">
            {title}
          </h3>
          <ArrowUpRight className="w-5 h-5 text-gray-600 group-hover:text-red-400 transition-colors" />
        </div>

        <div className="h-[1px] w-full bg-gradient-to-r from-gray-700 to-transparent mb-6" />

        {/* --- IMAGE "VIEWPORT" TEMPLATE --- */}
        <div className="relative w-full h-48 mb-6 overflow-hidden border border-gray-800 bg-black group-hover:border-red-900/50 transition-colors">
          {image ? (
            <>
              {/* Scanline Overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] z-20 pointer-events-none opacity-20" />
              {/* Red Tint Overlay (Fades out on hover) */}
              <div className="absolute inset-0 bg-red-900/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500" />
              
              <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0"
              />
            </>
          ) : (
            /* Fallback if no image is provided */
            <div className="w-full h-full flex items-center justify-center bg-gray-900 text-gray-700 font-mono text-xs uppercase tracking-widest">
              <div className="flex flex-col items-center gap-2">
                <ImageIcon className="w-8 h-8 opacity-50" />
                <span>No Visual Signal</span>
              </div>
            </div>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-400 font-mono text-sm leading-relaxed mb-6 flex-grow">
          {description}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {tech.map((t) => (
            <span
              key={t}
              className="text-xs font-mono text-red-400/80 bg-red-900/10 px-2 py-1 border border-red-900/30"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}