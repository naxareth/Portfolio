export default function PhilosophySection() {
  return (
    <section className="py-24 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        <div className="lg:col-span-4">
          <h2 className="text-5xl font-serif leading-tight sticky top-24">
            On Building <br />
            <span className="italic text-muted">Good Systems</span>
          </h2>
        </div>

        <div className="lg:col-span-8">
          <p className="text-xl md:text-2xl font-serif leading-relaxed mb-16">
            "I don't chase trends. I chase understanding. Every tool I pick up, every system I touch, I want to know how it works — not just that it works."
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
            <div className="relative p-8 border border-border rounded-xl bg-surface [text-shadow:none] overflow-hidden group">
              <div 
                className="absolute inset-0 opacity-[0.03] dark:opacity-[0.08] dark:invert transition-opacity duration-500 group-hover:opacity-[0.06] dark:group-hover:opacity-[0.15] pointer-events-none"
                style={{ backgroundImage: "url('/assets/Background/PHILOSOPHY-BG.svg')", backgroundSize: "cover", backgroundPosition: "center" }}
              />
              <p className="relative z-10 font-serif text-lg">"Structure before speed."</p>
            </div>
            
            <div className="relative p-8 border border-border rounded-xl bg-surface [text-shadow:none] overflow-hidden group">
              <div 
                className="absolute inset-0 opacity-[0.03] dark:opacity-[0.08] dark:invert transition-opacity duration-500 group-hover:opacity-[0.06] dark:group-hover:opacity-[0.15] pointer-events-none"
                style={{ backgroundImage: "url('/assets/Background/PHILOSOPHY-BG.svg')", backgroundSize: "cover", backgroundPosition: "center" }}
              />
              <p className="relative z-10 font-serif text-lg">"A system you don't understand is a system you don't own."</p>
            </div>
            
            <div className="relative p-8 border border-border rounded-xl bg-surface [text-shadow:none] overflow-hidden group">
              <div 
                className="absolute inset-0 opacity-[0.03] dark:opacity-[0.08] dark:invert transition-opacity duration-500 group-hover:opacity-[0.06] dark:group-hover:opacity-[0.15] pointer-events-none"
                style={{ backgroundImage: "url('/assets/Background/PHILOSOPHY-BG.svg')", backgroundSize: "cover", backgroundPosition: "center" }}
              />
              <p className="relative z-10 font-serif text-lg">"Meticulous planning isn't overthinking — it's respect for the problem."</p>
            </div>
            
            <div className="relative p-8 border border-border rounded-xl bg-surface [text-shadow:none] overflow-hidden group">
              <div 
                className="absolute inset-0 opacity-[0.03] dark:opacity-[0.08] dark:invert transition-opacity duration-500 group-hover:opacity-[0.06] dark:group-hover:opacity-[0.15] pointer-events-none"
                style={{ backgroundImage: "url('/assets/Background/PHILOSOPHY-BG.svg')", backgroundSize: "cover", backgroundPosition: "center" }}
              />
              <p className="relative z-10 font-serif text-lg">"Competence is built, not claimed."</p>
            </div>
          </div>

          <p className="text-muted leading-relaxed max-w-3xl text-sm md:text-base">
            That philosophy is why I built Intellegode: because code that runs without comprehension is borrowed time. Whether I'm designing a database schema, architecting an AI pipeline, or planning a project's sprint structure, the process matters as much as the output. Systems must be structurally sound. Plans must be meticulous. And the work must speak for itself.
          </p>
        </div>

      </div>
    </section>
  )
}
