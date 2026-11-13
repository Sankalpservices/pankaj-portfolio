import { Reveal } from '../components/Reveal';

interface SkillCategory {
  number: string;
  title: string;
  skills: string[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    number: '01',
    title: 'Business Analysis & Documentation',
    skills: [
      'Requirements Gathering',
      'BRD / FRD / FRS / SRS',
      'As-Is / To-Be Process Mapping',
      'Gap & Dependency Analysis',
      'Visio Workflows & Wireframes',
    ],
  },
  {
    number: '02',
    title: 'BFSI & Banking Systems',
    skills: [
      'Banking & Lending Workflows',
      'Depository Operations (NSDL)',
      'Commercial Banking (DCB, Bandhan)',
      'NBFC Systems (Aditya Birla)',
      'Credit & Risk Process Support',
    ],
  },
  {
    number: '03',
    title: 'Accounting & Financial Platforms',
    skills: [
      'Accounting Software Workflows',
      'Tally ERP & API Integration',
      'Interest Calculation Engines',
      'Automated Reconciliation',
      'Housing Society Accounting',
      'Power BI Financial Reporting',
    ],
  },
  {
    number: '04',
    title: 'Government Treasury & e-Governance',
    skills: [
      'Sevaarth / eVetanSeva',
      'Payroll & Pension Systems',
      'Treasury & IFMS Workflows',
      'BEAMS',
      'NPS / DCPS Processes',
    ],
  },
  {
    number: '05',
    title: 'Product Ownership & Agile Delivery',
    skills: [
      'User Stories & Acceptance Criteria',
      'Backlog Prioritization',
      'Agile / Scrum Governance',
      'JIRA, Confluence & Bitbucket',
      'Six Sigma Black Belt Discipline',
    ],
  },
  {
    number: '06',
    title: 'AI, Automation & UAT Governance',
    skills: [
      'Voice AI (Sarvam AI, STT/TTS)',
      'Conversational Helpdesk Agents',
      'Accounting RPA & Agentic BI',
      'UAT Coordination & Sign-Off',
      'Change & Scope Management',
    ],
  },
];

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative w-full bg-[#0F172A] py-20 text-white lg:py-32"
    >
      <div className="editorial-container">
        {/* Section Header */}
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.22em] text-[#14B8A6] uppercase">
            05 — Core Competencies
          </p>
          <div className="mt-4 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Skills &amp; Capabilities.
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-slate-400">
              Grouped capability domains across enterprise business analysis, financial and
              regulatory platforms, product delivery, and AI-enabled workflow design.
            </p>
          </div>
        </Reveal>

        {/* Grouped Skill Categories — Clean Editorial Grid */}
        <div className="mt-16 grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {SKILL_CATEGORIES.map((category, index) => (
            <Reveal key={category.number} delayMs={60 + index * 80}>
              <div className="border-t border-white/15 pt-7">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-[#D4AF37]">
                    {category.number}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[#14B8A6]" />
                </div>

                <h3 className="mt-3 font-display text-lg font-bold tracking-tight text-white sm:text-xl">
                  {category.title}
                </h3>

                <ul className="mt-5 space-y-2.5">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-3 text-sm text-slate-300"
                    >
                      <span className="h-[1px] w-3 bg-[#14B8A6]/70" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
