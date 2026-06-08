'use client'

import { motion } from 'framer-motion'

const skills = [
  {
    num: "01",
    title: "System Development",
    desc: "Full-stack systems built to last — structured architecture, clean APIs, and backend logic designed for maintainability, not just shipping."
  },
  {
    num: "02",
    title: "Applied Analytics",
    desc: "Turning raw data into decisions. SQL, Python, pandas — end-to-end pipelines that make sense to stakeholders, not just data engineers."
  },
  {
    num: "03",
    title: "AI Engineering",
    desc: "Local LLM deployment, RAG pipelines, and Ollama integrations. I've shipped AI features on local hardware with real constraints."
  },
  {
    num: "04",
    title: "Project Management",
    desc: "Ran a six-person capstone team across web, ML, and Web3 tracks using Jira. Structure and planning are not optional."
  }
]

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 border-y border-border bg-surface/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-serif mb-16">What I Do</h2>
        
        <div className="flex flex-col">
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group border-b border-border last:border-b-0 py-8 grid grid-cols-1 md:grid-cols-[4rem_1fr_1fr_auto] gap-6 md:gap-12 items-start hover:bg-surface/50 transition-colors px-4 -mx-4 rounded-xl"
            >
              <div className="text-sm text-muted font-mono [text-shadow:none]">{skill.num}</div>
              <h3 className="text-2xl font-serif">{skill.title}</h3>
              <p className="text-base text-foreground/80 leading-relaxed font-medium [text-shadow:none]">{skill.desc}</p>
              <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-full border border-border opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:-translate-y-1 transition-all duration-300">
                ↗
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
