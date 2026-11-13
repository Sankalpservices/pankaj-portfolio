import { Reveal } from '../components/Reveal';

const HIGHLIGHT_FACTS = [
  {
    label: 'Experience',
    value: '10+ Years',
    detail: 'Enterprise Business Analysis & Product Ownership across regulated industries.',
  },
  {
    label: 'Industry Scope',
    value: '5 Core Sectors',
    detail: 'BFSI, Accounting, Financial Systems, PropTech & Government Digital Transformation.',
  },
  {
    label: 'Delivery Focus',
    value: 'End-to-End BA',
    detail: 'From stakeholder discovery and BRD/FRD specs through API integration & UAT sign-off.',
  },
];

const CORE_CAPABILITIES = [
  'Requirements gathering & analysis',
  'BRD / FRD / FRS / SRS documentation',
  'Process mapping & As-Is / To-Be analysis',
  'Gap & dependency analysis',
  'User stories & acceptance criteria',
  'Stakeholder management',
  'UAT coordination & governance',
  'Change management',
  'BFSI & financial workflow analysis',
];

const TARGET_ROLES = [
  'Senior Business Analyst',
  'Business Analyst',
  'Product Owner',
  'AI-enabled Business Analyst',
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full bg-white py-20 text-[#0F172A] lg:py-32"
    >
      <div className="editorial-container">
        {/* Stagger 1: Eyebrow & Editorial Headline */}
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.22em] text-[#0D9488] uppercase">
            01 — Executive Profile
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
            Bridging Business Strategy &amp; Enterprise Engineering.
          </h2>
        </Reveal>

        {/* Stagger 2: Professional Introduction & Core Capabilities Typography */}
        <div className="mt-12 grid grid-cols-1 gap-12 border-t border-slate-200 pt-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal delayMs={100}>
              <p className="font-display text-xl font-medium leading-relaxed text-[#0F172A] sm:text-2xl">
                Pankaj Ganesh Kamble is a Senior Business Analyst with 10+ years of experience
                working across BFSI, Banking, Accounting &amp; Financial Systems, Housing
                Society / Real Estate Technology and Government Digital Transformation.
              </p>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-[17px]">
                His core strength is bridging business stakeholders and technology teams to
                convert complex business needs into structured requirements, functional
                specifications, user stories, process flows and UAT-ready solutions.
              </p>
            </Reveal>

            {/* Open Leadership & Consulting Mandate */}
            <Reveal delayMs={200}>
              <div className="mt-10 border-t border-slate-200 pt-8">
                <p className="text-xs font-semibold tracking-[0.18em] text-slate-400 uppercase">
                  Actively Exploring Opportunities &amp; Consulting Engagements
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2.5">
                  {TARGET_ROLES.map((role) => (
                    <span
                      key={role}
                      className="inline-flex items-center gap-2 font-display text-sm font-semibold text-[#0F172A] sm:text-base"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#14B8A6]" />
                      <span>{role}</span>
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Clean Typographic Capability Index (No Boxes/Cards) */}
          <div className="lg:col-span-5">
            <Reveal delayMs={180}>
              <p className="text-xs font-semibold tracking-[0.18em] text-[#0D9488] uppercase">
                Core Capabilities
              </p>
              <ul className="mt-5 divide-y divide-slate-200/80 border-t border-b border-slate-200/80">
                {CORE_CAPABILITIES.map((capability) => (
                  <li
                    key={capability}
                    className="flex items-center justify-between py-3 text-sm font-medium text-slate-700"
                  >
                    <span>{capability}</span>
                    <span className="h-1 w-1 rounded-full bg-slate-400" />
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>

        {/* Stagger 3: Highlighted Facts Row */}
        <div className="mt-16 grid grid-cols-1 gap-10 border-t border-slate-200 pt-12 md:grid-cols-3 lg:gap-12">
          {HIGHLIGHT_FACTS.map((fact, idx) => (
            <Reveal key={fact.label} delayMs={120 + idx * 100}>
              <div>
                <p className="text-xs font-semibold tracking-[0.18em] text-slate-400 uppercase">
                  {fact.label}
                </p>
                <p className="mt-2 font-display text-2xl font-bold tracking-tight text-[#0F172A] sm:text-3xl">
                  {fact.value}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {fact.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
