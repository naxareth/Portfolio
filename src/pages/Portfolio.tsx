import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { ProjectCard } from '../components/ProjectCard';
import { SkillBar } from '../components/SkillBar';
import { ContactSection } from '../components/ContactSection';

// --- YOUR PROJECTS ---
const projects = [
  {
    title: 'Orbit',
    description: 'An automated smart building management system with AI analytics. Built to optimize energy efficiency and security monitoring using advanced data patterns.',
    tech: ['Kotlin', 'Django', 'Python', 'React.js'],
    measurements: 'SYS-AI-01',
    // Using a placeholder. Replace this string with: '/images/orbit.png'
    image: '/images/orbit.jpg'
  },
  {
    title: 'HKRoadmap Tracker',
    description: 'A comprehensive scholarship tracking system for PHINMA University of Pangasinan, designed to monitor Hawak Kamay scholar progress and requirements.',
    tech: ['Kotlin', 'PHP', 'JavaScript'],
    measurements: 'DB-HK-02',
    image: '/images/hkroadmap.png'
  },
  {
    title: 'Velocikey',
    description: 'A precision typing speed test system focused on muscle memory and accuracy metrics. Engineered for latency-free feedback.',
    tech: ['Python'],
    measurements: 'CLI-PY-03',
    image: '/images/velocikey.png'
  },
  {
    title: 'Home Energy Management System',
    description: "A website that tracks, manages, and optimizes the energy usage of the user's appliances in their homes. It utilizes Internet of Things (IoT) in order to receive the power, voltage of the appliance to the system itself.",
    tech: ['React'],
    measurements: 'WEB-IOT-04',
    image: '/images/hems.png'
  },
  {
    title: 'EVENTHORIZON',
    description: 'A local school event tracker web application ensuring students stay synchronized with campus activities.',
    tech: ['HTML', 'JavaScript', 'CSS'],
    measurements: 'WEB-EV-05',
    image: '/images/eventhorizon.png'
  }
];

// --- YOUR SKILLS ---
const skills = [
  { name: 'System Planning & Arch', level: 90 },
  { name: 'Backend Development', level: 85 },
  { name: 'Problem Solving', level: 88 },
  { name: 'Innovation & Logic', level: 92 },
  { name: 'Database Management', level: 80 },
];

export function Portfolio() {
  return (
    <div className="min-h-screen bg-blueprint-grid">
      <HeroSection />

      {/* About Section */}
      <section className="py-24 px-6 border-b border-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-baseline gap-4 mb-12">
            <span className="font-mono text-red-600 text-sm">01.</span>
            <h2 className="text-4xl md:text-5xl font-architect text-gray-100 uppercase">
              The Architect
            </h2>
            <div className="h-[1px] flex-grow bg-gray-800 ml-4"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <p className="text-gray-400 font-mono leading-relaxed text-sm md:text-base">
              I am Ace Philip S. Denulan, a 3rd Year BSIT student at PHINMA University of Pangasinan. 
              My work is grounded in the belief that systems must be structurally sound and meticulously planned.
            </p>
            <p className="text-gray-400 font-mono leading-relaxed text-sm md:text-base">
              I possess a competent nature with a passion for innovative ideas. I don't just write code; 
              I design and plan systems that solve real-world problems.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 px-6 border-b border-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-baseline gap-4 mb-16">
            <span className="font-mono text-red-600 text-sm">02.</span>
            <h2 className="text-4xl md:text-5xl font-architect text-gray-100 uppercase">
              System Archive
            </h2>
            <div className="h-[1px] flex-grow bg-gray-800 ml-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} index={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 px-6 border-b border-gray-800/50 bg-[#0a0a0a]/50">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-baseline gap-4 mb-16">
            <span className="font-mono text-red-600 text-sm">03.</span>
            <h2 className="text-4xl md:text-5xl font-architect text-gray-100 uppercase">
              Technical Proficiency
            </h2>
            <div className="h-[1px] flex-grow bg-gray-800 ml-4"></div>
          </div>

          <div className="space-y-8">
            {skills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill.name} percentage={skill.level} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}