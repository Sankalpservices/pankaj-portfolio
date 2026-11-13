import { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { NAV_ITEMS } from './data/chapters';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { DomainExpertiseSection } from './sections/DomainExpertiseSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { AiAutomationSection } from './sections/AiAutomationSection';
import { SkillsSection } from './sections/SkillsSection';
import { EducationCertificationsSection } from './sections/EducationCertificationsSection';
import { ContactSection } from './sections/ContactSection';

export function App() {
  const [activeSection, setActiveSection] = useState<string>('home');

  // Observe sections during natural browser scroll to update active Navbar underline
  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((item) => item.id);
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '-25% 0px -55% 0px',
        threshold: 0,
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#060B19]">
      <Navbar activeSection={activeSection} />
      <main>
        <HeroSection />
        <AboutSection />
        <DomainExpertiseSection />
        <ExperienceSection />
        <AiAutomationSection />
        <SkillsSection />
        <EducationCertificationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
