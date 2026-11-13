import { ArrowRight, Download } from 'lucide-react';
import { Reveal } from '../components/Reveal';

function LinkedInIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const HERO_DOMAINS = [
  'BFSI',
  'Financial Systems',
  'Government Digital Transformation',
  'PropTech',
  'AI & Automation',
];

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-[#060B19] pt-28 pb-20 lg:pt-32 lg:pb-24"
    >
      {/* Subtle Ambient Illumination */}
      <div className="pointer-events-none absolute -top-24 left-1/4 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-[#14B8A6]/[0.06] blur-[140px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-[#D4AF37]/[0.05] blur-[140px]" />

      <div className="editorial-container">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Staggered Executive Typography */}
          <div className="lg:col-span-7">
            {/* Step 1: Eyebrow & Full Name */}
            <Reveal delayMs={40}>
              <p className="text-xs font-semibold tracking-[0.22em] text-[#D4AF37] uppercase">
                10+ Years of Enterprise Experience
              </p>
              <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08]">
                PANKAJ GANESH KAMBLE
              </h1>
            </Reveal>

            {/* Step 2: Professional Title */}
            <Reveal delayMs={140}>
              <p className="mt-4 font-display text-xl font-medium tracking-wide text-[#14B8A6] sm:text-2xl lg:text-[1.75rem]">
                Senior Business Analyst &amp; Product Owner
              </p>
            </Reveal>

            {/* Step 3: Tagline & Concise Domain Positioning Line */}
            <Reveal delayMs={240}>
              <p className="mt-6 max-w-xl font-serif-editorial text-xl font-normal italic leading-relaxed text-slate-200 sm:text-2xl">
                “Turning Complex Business Challenges into Scalable Digital Solutions.”
              </p>

              <div className="mt-8 border-t border-white/10 pt-5">
                <p className="flex flex-wrap items-center gap-y-2 text-xs font-medium tracking-[0.08em] text-slate-300 uppercase sm:text-[13px]">
                  {HERO_DOMAINS.map((domain, index) => (
                    <span key={domain} className="inline-flex items-center">
                      <span>{domain}</span>
                      {index < HERO_DOMAINS.length - 1 && (
                        <span className="mx-3 text-[#D4AF37]/80">|</span>
                      )}
                    </span>
                  ))}
                </p>
              </div>
            </Reveal>

            {/* Step 4: Staggered CTA Buttons */}
            <Reveal delayMs={340}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href="#experience"
                  className="group inline-flex items-center gap-2 bg-[#14B8A6] px-5 py-3.5 text-[11px] font-semibold tracking-[0.13em] whitespace-nowrap text-[#060B19] uppercase transition-all duration-200 hover:bg-[#2DD4BF]"
                >
                  <span>Explore Experience</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </a>

                <a
                  href="/resume/Pankaj-Kamble-Resume.pdf"
                  download="Pankaj-Kamble-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="hero-download-resume"
                  className="inline-flex items-center gap-2 border border-[#D4AF37]/70 px-5 py-3.5 text-[11px] font-semibold tracking-[0.13em] whitespace-nowrap text-[#D4AF37] uppercase transition-all duration-200 hover:bg-[#D4AF37] hover:text-[#060B19]"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Download Resume</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/pankajkamble14/"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="hero-linkedin-cta"
                  className="inline-flex items-center gap-2 border border-white/15 px-4 py-3.5 text-[11px] font-medium tracking-[0.13em] whitespace-nowrap text-slate-200 uppercase transition-all duration-200 hover:border-white/40 hover:text-white"
                >
                  <LinkedInIcon className="h-3.5 w-3.5 text-[#14B8A6]" />
                  <span>Connect on LinkedIn</span>
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Step 5 — Portrait with Subtle Scale Transition */}
          <div className="lg:col-span-5">
            <Reveal variant="fade-scale" delayMs={220} durationMs={850}>
              <div className="group relative mx-auto max-w-[340px] sm:max-w-[380px] lg:ml-auto lg:mr-0">
                {/* Clean Editorial Portrait Frame */}
                <div className="relative aspect-[4/5] w-full overflow-hidden border border-white/12 bg-[#0A1124]">
                  <img
                    src="/pankaj-kamble.jpg"
                    alt="Pankaj Ganesh Kamble — Senior Business Analyst & Product Owner"
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    data-testid="hero-portrait-img"
                    className="h-full w-full origin-top scale-[1.12] object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.15]"
                  />
                  {/* Subtle Bottom Vignette */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#060B19]/90 via-[#060B19]/30 to-transparent" />
                </div>

                {/* Understated Editorial Caption */}
                <div className="mt-3 flex items-center justify-between text-[11px] tracking-[0.14em] text-slate-400 uppercase">
                  <span>Mumbai, India</span>
                  <span className="text-[#14B8A6]">Advisory &amp; Leadership</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
