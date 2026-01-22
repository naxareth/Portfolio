import React from 'react';
import { motion } from 'framer-motion';
interface SkillBarProps {
  skill: string;
  percentage: number;
  delay?: number;
}
export function SkillBar({
  skill,
  percentage,
  delay = 0
}: SkillBarProps) {
  return <div className="w-full mb-6 group">
      <div className="flex justify-between items-end mb-2 font-mono text-sm text-gray-400">
        <span className="uppercase tracking-wider">module: {skill}</span>
        <span className="text-blue-400/80">[{percentage}%]</span>
      </div>

      <div className="relative h-2 w-full bg-gray-900 border border-gray-800 overflow-hidden">
        {/* Background Grid Lines in Bar */}
        <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'linear-gradient(90deg, rgba(59, 130, 246, 0.2) 1px, transparent 1px)',
        backgroundSize: '10px 100%'
      }} />

        {/* Animated Fill */}
        <motion.div className="h-full bg-blue-900/60 relative" initial={{
        width: 0
      }} whileInView={{
        width: `${percentage}%`
      }} viewport={{
        once: true
      }} transition={{
        duration: 1.5,
        ease: 'easeOut',
        delay
      }}>
          {/* Glowing Leading Edge */}
          <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-blue-400 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
        </motion.div>
      </div>

      {/* Technical decorative lines under bar */}
      <div className="flex justify-between mt-1">
        <div className="h-1 w-1 border-l border-b border-gray-700" />
        <div className="h-1 w-full border-b border-gray-800/50 mx-1" />
        <div className="h-1 w-1 border-r border-b border-gray-700" />
      </div>
    </div>;
}