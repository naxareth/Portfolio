import Nav from '@/components/Nav'
import HeroSection from '@/components/HeroSection'
import SkillsSection from '@/components/SkillsSection'
import ProjectsSection from '@/components/ProjectsSection'
import PhilosophySection from '@/components/PhilosophySection'
import AboutSection from '@/components/AboutSection'
import CtaSection from '@/components/CtaSection'
import Footer from '@/components/Footer'
import MarqueeStrip from '@/components/MarqueeStrip'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <MarqueeStrip />
        <PhilosophySection />
        <AboutSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
