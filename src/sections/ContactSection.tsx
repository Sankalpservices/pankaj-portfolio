import { Download, ArrowUpRight } from 'lucide-react';
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

const ENGAGEMENT_AREAS = [
  'Senior Business Analyst Leadership',
  'Product Owner Roles',
  'Business Analysis Consulting',
  'Financial Systems Transformation',
  'AI & Automation Advisory',
];

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative w-full bg-[#060B19] py-24 text-white lg:py-36"
    >
      <div className="editorial-container">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Left Column (7 Cols): Headline, Invitation & Primary Actions */}
          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-xs font-semibold tracking-[0.22em] text-[#D4AF37] uppercase">
                07 — Initiate a Conversation
              </p>
              <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[3rem] lg:leading-[1.12]">
                Let&apos;s Build Better Business Solutions Together.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-[17px]">
                Connect with <strong className="font-semibold text-white">Pankaj Ganesh Kamble</strong> to
                discuss Senior Business Analyst and Product Owner leadership opportunities,
                enterprise financial systems transformation, or AI-enabled business analysis consulting.
              </p>
            </Reveal>

            <Reveal delayMs={120}>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2.5 border-t border-white/10 pt-6 text-xs font-medium text-slate-300 sm:text-[13px]">
                {ENGAGEMENT_AREAS.map((area) => (
                  <span key={area} className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#14B8A6]" />
                    <span>{area}</span>
                  </span>
                ))}
              </div>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href="/resume/Pankaj-Kamble-Resume.pdf"
                  download="Pankaj-Kamble-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="contact-download-resume"
                  className="inline-flex items-center gap-2.5 bg-[#14B8A6] px-6 py-3.5 text-xs font-semibold tracking-[0.14em] text-[#060B19] uppercase transition-all duration-200 hover:bg-[#2DD4BF]"
                >
                  <Download className="h-4 w-4" />
                  <span>Download Resume</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/pankajkamble14/"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="contact-linkedin-cta"
                  className="inline-flex items-center gap-2.5 border border-[#D4AF37]/70 px-6 py-3.5 text-xs font-semibold tracking-[0.14em] text-[#D4AF37] uppercase transition-all duration-200 hover:bg-[#D4AF37] hover:text-[#060B19]"
                >
                  <LinkedInIcon className="h-4 w-4" />
                  <span>Connect on LinkedIn</span>
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right Column (5 Cols): Clean Editorial Contact Directory */}
          <div className="lg:col-span-5 lg:pl-8">
            <Reveal delayMs={180}>
              <div className="divide-y divide-white/10 border-t border-b border-white/10">
                <div className="py-6">
                  <p className="text-xs font-semibold tracking-[0.18em] text-slate-400 uppercase">
                    Email
                  </p>
                  <a
                    href="mailto:pankajk1491@gmail.com"
                    className="group mt-2 inline-flex items-center gap-2 font-display text-lg font-semibold text-white transition-colors hover:text-[#14B8A6] sm:text-xl"
                  >
                    <span>pankajk1491@gmail.com</span>
                    <ArrowUpRight className="h-4 w-4 text-slate-500 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#14B8A6]" />
                  </a>
                </div>

                <div className="py-6">
                  <p className="text-xs font-semibold tracking-[0.18em] text-slate-400 uppercase">
                    Phone
                  </p>
                  <a
                    href="tel:+918169594059"
                    className="group mt-2 inline-flex items-center gap-2 font-display text-lg font-semibold text-white transition-colors hover:text-[#D4AF37] sm:text-xl"
                  >
                    <span>+91-8169594059</span>
                    <ArrowUpRight className="h-4 w-4 text-slate-500 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#D4AF37]" />
                  </a>
                </div>

                <div className="py-6">
                  <p className="text-xs font-semibold tracking-[0.18em] text-slate-400 uppercase">
                    Location
                  </p>
                  <p className="mt-2 font-display text-lg font-semibold text-white sm:text-xl">
                    Mumbai, Maharashtra, India
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
