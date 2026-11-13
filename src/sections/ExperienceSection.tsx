import { useEffect, useRef, useState } from 'react';
import { Reveal } from '../components/Reveal';

interface ExperienceRecord {
  id: string;
  company: string;
  environmentNote: string;
  role: string;
  period: string;
  domain: string;
  overview: string;
  responsibilities: string[];
  keyContributions: string[];
  systemsAndAccountsLabel: string;
  systemsAndAccounts: string[];
}

const EXPERIENCE_RECORDS: ExperienceRecord[] = [
  {
    id: 'government-of-maharashtra',
    company: 'GOVERNMENT OF MAHARASHTRA',
    environmentNote: 'Department of Accounts & Treasury environment',
    role: 'Sr. Business Analyst — Consultant',
    period: 'Dec 2025 – Present',
    domain: 'Government Digital Transformation / Financial Systems',
    overview:
      'Supporting requirement discovery, regulatory workflow alignment, stakeholder coordination, and change control across public-sector payroll, pension, and treasury systems.',
    responsibilities: [
      'Supported requirement discovery and documentation across Sevaarth / eVetanSeva, IFMS, NPS / DCPS pension platforms, and BEAMS.',
      'Aligned finance, HR, payroll, pension, and treasury workflows with government policy and compliance requirements.',
      'Coordinated with technology teams, government stakeholders, and domain SMEs to resolve open items and secure UAT sign-off.',
      'Managed scope, system dependencies, and change control in a regulated, audit-driven environment.',
    ],
    keyContributions: [
      'Business requirement analysis',
      'Stakeholder coordination',
      'Requirement documentation',
      'Change & dependency analysis',
      'UAT support',
      'Financial system workflow analysis',
    ],
    systemsAndAccountsLabel: 'Relevant Systems & Workflows',
    systemsAndAccounts: [
      'Sevaarth / eVetanSeva',
      'Payroll',
      'Pension',
      'Treasury',
      'IFMS-related workflows',
      'BEAMS',
      'NPS / DCPS-related processes',
    ],
  },
  {
    id: 'indusnet-technologies',
    company: 'INDUSNET TECHNOLOGIES',
    environmentNote: 'IndusNet Technologies Pvt Ltd',
    role: 'Senior Business Analyst',
    period: 'Dec 2023 – Dec 2025',
    domain: 'BFSI & Financial Services',
    overview:
      'Led end-to-end requirement discovery, BRD/FRD documentation, workflow modeling, and multi-stakeholder transformation delivery across major banking, depository, and financial services client engagements.',
    responsibilities: [
      'Led end-to-end requirement discovery, BRDs, FRDs, user stories, and workflow diagrams across banking and fintech client engagements.',
      'Conducted data and workflow analysis to shape enhancements for financial and lending processes.',
      'Built process-mapping models in Visio and collaborated with engineering teams via JIRA, Confluence, and Bitbucket.',
      'Owned gap analysis, dependency mapping, change-request management, and UAT support across multi-stakeholder releases.',
    ],
    keyContributions: [
      'Requirement gathering',
      'BRD & FRD documentation',
      'User stories',
      'Process & workflow analysis',
      'Gap analysis',
      'Dependency analysis',
      'Change requests',
      'UAT support',
    ],
    systemsAndAccountsLabel: 'Relevant Client / Account Exposure',
    systemsAndAccounts: ['NSDL', 'DCB Bank', 'Bandhan Bank', 'Aditya Birla'],
  },
  {
    id: 'valueadd-softech',
    company: 'VALUEADD SOFTECH',
    environmentNote: 'Valueadd Softtech & Systems Pvt Ltd',
    role: 'Business Analyst',
    period: 'Apr 2020 – Mar 2023',
    domain: 'Accounting & Financial Systems',
    overview:
      'Hands-on business analysis connecting business requirements directly with accounting software functionality, Tally integration, banking interest calculations, and financial reconciliation workflows.',
    responsibilities: [
      'Translated client accounting and financial process needs into structured functional designs, user stories, BRDs, and FRDs.',
      'Analyzed accounting software workflows, ledger postings, and automated financial reporting rules.',
      'Partnered with engineering teams using JIRA and Visio to streamline workflow design and guide UAT cycles.',
      'Served as primary client-facing Business Analyst for escalated accounts and solution delivery.',
    ],
    keyContributions: [
      'Accounting software workflows',
      'Tally integration & API synchronization',
      'Financial process analysis',
      'Banking interest calculation improvements',
      'Reconciliation workflows',
      'API-based integration',
    ],
    systemsAndAccountsLabel: 'Core Systems & Focus',
    systemsAndAccounts: [
      'Accounting Software',
      'Tally API Integration',
      'Interest Calculation Engine',
      'Reconciliation Workflows',
      'JIRA & Visio',
    ],
  },
  {
    id: 'society123',
    company: 'SOCIETY123',
    environmentNote: 'Society123 Support Services Pvt Ltd',
    role: 'Business Analyst',
    period: 'Apr 2017 – Mar 2020',
    domain: 'Housing Society Technology / PropTech',
    overview:
      'Led requirement analysis and functional enhancement of cooperative housing society accounting, billing, and CRM modules alongside structured end-user training.',
    responsibilities: [
      'Gathered and analyzed functional requirements for housing society accounting, maintenance billing, and CRM workflows.',
      'Guided module enhancements across client portfolios to improve day-to-day operational efficiency and usability.',
      'Conducted structured training sessions for end users on billing, accounting, and financial workflows.',
      'Streamlined automated society workflows to improve process consistency and turnaround time.',
    ],
    keyContributions: [
      'Housing society accounting workflows',
      'CRM functionality',
      'Billing & financial processes',
      'Requirement analysis',
      'Process improvement',
      'End-user training',
    ],
    systemsAndAccountsLabel: 'Platform Modules',
    systemsAndAccounts: [
      'Society Accounting',
      'CRM Module',
      'Maintenance Billing',
      'Financial Workflows',
      'End-User Enablement',
    ],
  },
];

export function ExperienceSection() {
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const [lineActive, setLineActive] = useState<boolean>(false);

  useEffect(() => {
    const el = timelineRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setLineActive(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setLineActive(true);
          } else {
            const rect = entry.boundingClientRect;
            const vh = window.innerHeight || document.documentElement.clientHeight;
            if (rect.top > vh + 48 || rect.bottom < -48) {
              setLineActive(false);
            }
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      className="relative w-full bg-[#060B19] py-20 text-white lg:py-32"
    >
      <div className="editorial-container">
        {/* Section Header */}
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.22em] text-[#D4AF37] uppercase">
            03 — Career Trajectory
          </p>
          <div className="mt-4 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Professional Experience.
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-slate-400">
              Progressive leadership across government treasury systems, enterprise BFSI accounts,
              financial accounting software, and PropTech platforms.
            </p>
          </div>
        </Reveal>

        {/* Vertical Editorial Timeline */}
        <div ref={timelineRef} className="relative mt-16 border-t border-white/10 pt-12">
          {/* Continuous Vertical Timeline Track (Desktop & Mobile) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-12 bottom-12 left-2.5 w-[1px] bg-white/10 lg:left-[31%]"
          >
            <div
              className={`timeline-rail-fill h-full w-full bg-gradient-to-b from-[#14B8A6] via-[#D4AF37] to-[#14B8A6]/40 ${
                lineActive ? 'is-active' : ''
              }`}
            />
          </div>

          <div className="space-y-16 lg:space-y-24">
            {EXPERIENCE_RECORDS.map((exp, index) => (
              <Reveal key={exp.id} delayMs={80 + index * 90}>
                <article
                  id={`exp-card-${exp.id}`}
                  className="relative grid grid-cols-1 gap-8 pl-9 lg:grid-cols-12 lg:gap-12 lg:pl-0"
                >
                  {/* Timeline Node Marker */}
                  <span
                    aria-hidden="true"
                    className={`absolute top-1.5 left-[5px] h-3 w-3 rounded-full border-2 lg:left-[calc(31%-5.5px)] ${
                      index === 0
                        ? 'border-[#D4AF37] bg-[#060B19] shadow-[0_0_12px_rgba(212,175,55,0.6)]'
                        : 'border-[#14B8A6] bg-[#060B19]'
                    }`}
                  />

                  {/* Left Column (4 Cols on Desktop): Period, Company, Role, Domain */}
                  <div className="lg:col-span-4 lg:pr-10">
                    <p className="font-mono text-xs font-semibold tracking-[0.14em] text-[#D4AF37] uppercase">
                      {exp.period}
                    </p>
                    <h3 className="mt-2 font-display text-xl font-bold tracking-tight text-white sm:text-2xl">
                      {exp.company}
                    </h3>
                    <p className="mt-1 text-xs text-slate-400">
                      {exp.environmentNote}
                    </p>
                    <p className="mt-3 font-display text-base font-semibold text-[#14B8A6]">
                      {exp.role}
                    </p>
                    <p className="mt-1 text-xs font-medium tracking-wide text-slate-400">
                      {exp.domain}
                    </p>
                  </div>

                  {/* Right Column (8 Cols on Desktop): Overview, Responsibilities, Contributions & Systems */}
                  <div className="lg:col-span-8 lg:pl-6">
                    <p className="text-base font-medium leading-relaxed text-slate-200 sm:text-[17px]">
                      {exp.overview}
                    </p>

                    {/* Responsibilities List */}
                    <ul className="mt-6 space-y-3">
                      {exp.responsibilities.map((resp) => (
                        <li
                          key={resp}
                          className="flex items-start gap-3.5 text-sm leading-relaxed text-slate-300 sm:text-[15px]"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#14B8A6]" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Key Contributions & Relevant Exposure (Clean Editorial Rows, No Mini-Card Boxes) */}
                    <div className="mt-7 grid grid-cols-1 gap-6 border-t border-white/10 pt-5 sm:grid-cols-2">
                      <div>
                        <p className="text-[11px] font-semibold tracking-[0.16em] text-slate-400 uppercase">
                          Key Contributions
                        </p>
                        <p className="mt-2 text-xs leading-relaxed text-slate-300 sm:text-[13px]">
                          {exp.keyContributions.join(' • ')}
                        </p>
                      </div>

                      <div>
                        <p className="text-[11px] font-semibold tracking-[0.16em] text-[#D4AF37] uppercase">
                          {exp.systemsAndAccountsLabel}
                        </p>
                        <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1.5 text-xs font-semibold text-white sm:text-[13px]">
                          {exp.systemsAndAccounts.map((item) => (
                            <span key={item} className="inline-flex items-center gap-1.5">
                              <span className="h-1 w-1 rounded-full bg-[#D4AF37]" />
                              <span>{item}</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
