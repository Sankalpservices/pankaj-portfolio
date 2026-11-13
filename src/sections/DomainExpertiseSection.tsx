import { Reveal } from '../components/Reveal';

interface PrimaryDomain {
  number: string;
  subtitle: string;
  title: string;
  description: string;
  highlights?: string[];
  capabilities: string[];
  deliverables: string;
  schematic: {
    label: string;
    nodes: [string, string, string];
    caption: string;
  };
}

const PRIMARY_DOMAINS: PrimaryDomain[] = [
  {
    number: '01',
    subtitle: 'Banking, Depository & NBFC Systems',
    title: 'BFSI & Financial Services',
    description:
      'Leading requirement discovery, regulatory workflow analysis, and functional specification delivery across banking, depository, credit-rating, and lending environments.',
    highlights: ['NSDL', 'DCB Bank', 'Bandhan Bank', 'Aditya Birla'],
    capabilities: [
      'Banking & lending workflow analysis',
      'Credit & risk-adjacent process support',
      'Gap analysis & cross-system dependency mapping',
      'Change-request governance & UAT coordination',
    ],
    deliverables:
      'BRDs, FRDs, User Stories, Visio Process Models, Dependency Matrices & UAT Sign-Off',
    schematic: {
      label: 'BFSI Systems Flow',
      nodes: ['Client Channels', 'BA Governance', 'Core Banking'],
      caption: 'Compliance, Interest Calculation & Multi-Stakeholder UAT Assurance',
    },
  },
  {
    number: '02',
    subtitle: 'Enterprise Ledger & API Synchronization',
    title: 'Accounting & Financial Systems',
    description:
      'Translating accounting principles, interest-calculation rules, and statutory reporting workflows into reliable financial software with Tally API integration and automated reconciliation.',
    capabilities: [
      'Accounting software workflows & ledger logic',
      'Tally API integration & data synchronization',
      'Banking interest calculation improvements',
      'Automated reconciliation & financial reporting',
    ],
    deliverables:
      'Functional Requirement Specs (FRS), Tally API Specs, Interest Rule Models & Power BI Dashboards',
    schematic: {
      label: 'Accounting & Ledger Architecture',
      nodes: ['Financial Ops', 'Tally API Bridge', 'Reconciliation'],
      caption: 'Connecting Accounting Rules with Automated ERP Synchronization',
    },
  },
  {
    number: '03',
    subtitle: 'PropTech & Cooperative Society Platforms',
    title: 'Real Estate & Housing Society Technology',
    description:
      'Product and business analysis across cooperative housing society accounting platforms, maintenance billing engines, CRM workflows, and structured end-user onboarding.',
    capabilities: [
      'Housing society accounting workflows',
      'Maintenance billing & financial processes',
      'CRM functionality & member servicing',
      'Process improvement & end-user training',
    ],
    deliverables:
      'Module Enhancement Specs, Billing & Accounting Flows, CRM Requirements & Training Programs',
    schematic: {
      label: 'Society Platform Architecture',
      nodes: ['Society Billing', 'Ledger Accounting', 'Member CRM'],
      caption: 'End-to-End Operational Workflows for Cooperative Housing Portfolios',
    },
  },
];

export function DomainExpertiseSection() {
  return (
    <section
      id="expertise"
      className="relative w-full border-t border-slate-200/80 bg-[#F8FAFC] py-20 text-[#0F172A] lg:py-32"
    >
      <div className="editorial-container">
        {/* Section Header */}
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.22em] text-[#0D9488] uppercase">
            02 — Industry Verticals
          </p>
          <div className="mt-4 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <h2 className="font-display text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Domain Expertise.
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-slate-600">
              Specialized functional analysis across regulated financial services,
              enterprise accounting platforms, housing society technology, and public-sector digital transformation.
            </p>
          </div>
        </Reveal>

        {/* Horizontal Editorial Domain Panels */}
        <div className="mt-14 divide-y divide-slate-200 border-t border-b border-slate-200">
          {PRIMARY_DOMAINS.map((domain, index) => (
            <Reveal key={domain.number} delayMs={60 + index * 60}>
              <div className="grid grid-cols-1 items-start gap-10 py-12 lg:grid-cols-12 lg:gap-14 lg:py-16">
                {/* Left 7 Columns: Heading, Narrative & Capabilities */}
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-semibold text-[#B48A1E]">
                      {domain.number}
                    </span>
                    <span className="h-[1px] w-6 bg-slate-300" />
                    <span className="text-xs font-semibold tracking-[0.16em] text-[#0D9488] uppercase">
                      {domain.subtitle}
                    </span>
                  </div>

                  <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-[#0F172A] sm:text-3xl">
                    {domain.title}
                  </h3>

                  <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
                    {domain.description}
                  </p>

                  {domain.highlights && (
                    <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-semibold tracking-wider text-[#0F172A] uppercase">
                      <span className="text-slate-400">Account Exposure:</span>
                      {domain.highlights.map((item) => (
                        <span key={item} className="inline-flex items-center gap-1.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
                          <span>{item}</span>
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {domain.capabilities.map((cap) => (
                      <div
                        key={cap}
                        className="flex items-start gap-2.5 text-sm font-medium text-slate-700"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0D9488]" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>

                  <p className="mt-6 text-xs leading-relaxed text-slate-500">
                    <strong className="font-semibold tracking-wider text-slate-700 uppercase">
                      Key Deliverables:{' '}
                    </strong>
                    {domain.deliverables}
                  </p>
                </div>

                {/* Right 5 Columns: Restrained Architectural Schematic with SVG Line Reveal */}
                <div className="lg:col-span-5">
                  <div className="border border-slate-200/90 bg-white p-6 sm:p-8">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                      <span className="font-mono text-[11px] font-semibold tracking-[0.16em] text-slate-500 uppercase">
                        {domain.schematic.label}
                      </span>
                      <span className="font-mono text-[11px] text-[#0D9488]">
                        {domain.number}
                      </span>
                    </div>

                    <div className="my-6">
                      <svg
                        viewBox="0 0 360 116"
                        className="h-auto w-full"
                        role="img"
                        aria-label={`${domain.title} schematic flow`}
                      >
                        {/* Animated Connector Lines */}
                        <line
                          x1="108"
                          y1="42"
                          x2="130"
                          y2="42"
                          stroke="#0D9488"
                          strokeWidth="1.5"
                          className="svg-connector"
                        />
                        <line
                          x1="230"
                          y1="42"
                          x2="252"
                          y2="42"
                          stroke="#D4AF37"
                          strokeWidth="1.5"
                          className="svg-connector"
                        />
                        <line
                          x1="58"
                          y1="68"
                          x2="302"
                          y2="68"
                          stroke="#CBD5E1"
                          strokeWidth="1"
                          strokeDasharray="3 3"
                          className="svg-connector"
                        />

                        {/* Node 1 */}
                        <rect
                          x="8"
                          y="18"
                          width="100"
                          height="48"
                          rx="2"
                          fill="#F8FAFC"
                          stroke="#CBD5E1"
                          strokeWidth="1.2"
                        />
                        <text
                          x="58"
                          y="45"
                          textAnchor="middle"
                          fill="#0F172A"
                          fontSize="8.5"
                          fontWeight="600"
                        >
                          {domain.schematic.nodes[0]}
                        </text>

                        {/* Node 2 (Central BA/Bridge Node) */}
                        <rect
                          x="130"
                          y="18"
                          width="100"
                          height="48"
                          rx="2"
                          fill="#060B19"
                          stroke="#14B8A6"
                          strokeWidth="1.2"
                        />
                        <text
                          x="180"
                          y="45"
                          textAnchor="middle"
                          fill="#FFFFFF"
                          fontSize="8.5"
                          fontWeight="600"
                        >
                          {domain.schematic.nodes[1]}
                        </text>

                        {/* Node 3 */}
                        <rect
                          x="252"
                          y="18"
                          width="100"
                          height="48"
                          rx="2"
                          fill="#F8FAFC"
                          stroke="#CBD5E1"
                          strokeWidth="1.2"
                        />
                        <text
                          x="302"
                          y="45"
                          textAnchor="middle"
                          fill="#0F172A"
                          fontSize="8.5"
                          fontWeight="600"
                        >
                          {domain.schematic.nodes[2]}
                        </text>

                        {/* Bottom Caption Line */}
                        <text
                          x="180"
                          y="98"
                          textAnchor="middle"
                          fill="#64748B"
                          fontSize="8"
                          fontWeight="500"
                        >
                          {domain.schematic.caption}
                        </text>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Complementary Practice Areas: Government Digital Transformation & AI/Automation */}
        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal delayMs={100}>
            <div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-semibold text-[#B48A1E]">04</span>
                <span className="h-[1px] w-6 bg-slate-300" />
                <span className="text-xs font-semibold tracking-[0.16em] text-[#0D9488] uppercase">
                  Public-Sector Financial Systems
                </span>
              </div>
              <h3 className="mt-3 font-display text-2xl font-bold text-[#0F172A]">
                Government Digital Transformation
              </h3>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                Requirement discovery, policy alignment, and change governance across state-scale
                public-sector treasury, payroll, and pension ecosystems—including{' '}
                <strong className="font-semibold text-[#0F172A]">Sevaarth / eVetanSeva</strong>,{' '}
                <strong className="font-semibold text-[#0F172A]">IFMS</strong>,{' '}
                <strong className="font-semibold text-[#0F172A]">BEAMS</strong>, and{' '}
                <strong className="font-semibold text-[#0F172A]">NPS / DCPS</strong> workflows.
              </p>
            </div>
          </Reveal>

          <Reveal delayMs={200}>
            <div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-semibold text-[#B48A1E]">05</span>
                <span className="h-[1px] w-6 bg-slate-300" />
                <span className="text-xs font-semibold tracking-[0.16em] text-[#0D9488] uppercase">
                  Intelligent Process Innovation
                </span>
              </div>
              <h3 className="mt-3 font-display text-2xl font-bold text-[#0F172A]">
                AI &amp; Automation
              </h3>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                Bridging functional business analysis with practical AI and automation
                workflows—spanning multilingual Voice AI assistants (<strong className="font-semibold text-[#0F172A]">Sarvam AI</strong>),
                conversational helpdesk agents, accounting RPA, and agentic reporting integrated with{' '}
                <strong className="font-semibold text-[#0F172A]">Tally APIs</strong>.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
