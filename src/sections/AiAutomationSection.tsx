import { Reveal } from '../components/Reveal';

interface AiProject {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  classification: 'Hands-on Prototype' | 'Proof of Concept';
  description: string;
  capabilities: string[];
  techExplored: string[];
  flowSteps: [string, string, string, string];
}

const AI_PROJECTS: AiProject[] = [
  {
    id: 'mahafinance-ai',
    number: '01',
    title: 'MahaFinance AI',
    subtitle: 'Voice-enabled government financial services assistant using Sarvam AI',
    classification: 'Proof of Concept',
    description:
      'AI-enabled government financial services concept designed to assist public-sector users across employee, pension, and treasury queries through natural Marathi voice and chat interaction.',
    capabilities: [
      'Employee support workflows',
      'Pension support guidance',
      'Treasury support query resolution',
      'Marathi language interaction',
      'Voice-enabled conversational assistance',
    ],
    techExplored: [
      'Sarvam AI',
      'Saaras speech-to-text',
      'AI chat capabilities',
      'Bulbul text-to-speech',
      'Marathi voice interaction',
    ],
    flowSteps: ['Marathi Voice', 'Saaras STT', 'Sarvam AI Chat', 'Bulbul TTS'],
  },
  {
    id: 'voice-helpdesk',
    number: '02',
    title: 'AI Voice Helpdesk & Calling Agent',
    subtitle: 'Conversational voice pipeline and automated helpdesk calling workflows',
    classification: 'Hands-on Prototype',
    description:
      'A hands-on AI integration project exploring automated inbound and outbound voice chatbot workflows, combining real-time speech transcription, conversational AI routing, and synthesized voice responses.',
    capabilities: [
      'Voice chatbot workflows',
      'Speech-to-text transcription',
      'Conversational AI intent handling',
      'Text-to-speech synthesis',
      'Automated calling workflows & helpdesk support',
    ],
    techExplored: [
      'Speech-to-Text (STT)',
      'Conversational AI',
      'Text-to-Speech (TTS)',
      'Automated Calling Workflows',
      'Helpdesk Support Logic',
    ],
    flowSteps: ['Audio Stream', 'Speech-to-Text', 'Conversational AI', 'TTS & Triage'],
  },
  {
    id: 'ai-rpa-accounting',
    number: '03',
    title: 'AI & RPA for Accounting',
    subtitle: 'Workflow automation for repetitive accounting and financial reconciliation',
    classification: 'Proof of Concept',
    description:
      'Focused exploration of combining structured Robotic Process Automation (RPA) with AI validation rules to streamline repetitive financial operations, ledger entries, and reconciliation support.',
    capabilities: [
      'Accounting workflow automation',
      'Repetitive process automation',
      'Reconciliation support',
      'Financial operations streamlining',
    ],
    techExplored: [
      'Accounting Workflow Automation',
      'RPA Task Orchestration',
      'Reconciliation Matching',
      'Financial Operations',
    ],
    flowSteps: ['Source Vouchers', 'RPA Extraction', 'Rule Matching', 'Reconciled Ledger'],
  },
  {
    id: 'agentic-reporting',
    number: '04',
    title: 'Agentic AI Reporting & Dashboards',
    subtitle: 'Automated reporting and accounting insights with Tally API integration',
    classification: 'Hands-on Prototype',
    description:
      'Hands-on prototype exploring agentic workflows connected via Tally API integration to automate financial reporting, surface accounting insights, and power executive dashboard concepts.',
    capabilities: [
      'Agentic workflows for financial data',
      'Automated reporting pipelines',
      'Actionable accounting insights',
      'Executive dashboard concepts',
      'Tally API integration',
    ],
    techExplored: [
      'Agentic Workflows',
      'Tally API Integration',
      'Automated Reporting',
      'Accounting Insights & Dashboards',
    ],
    flowSteps: ['Tally ERP Data', 'Tally API Sync', 'Agentic Analysis', 'BI Dashboard'],
  },
];

const METHODOLOGY_STEPS = [
  'Business Problem',
  'Process Analysis',
  'AI / Automation Opportunity',
  'Functional Design',
  'Prototype / Solution',
];

export function AiAutomationSection() {
  return (
    <section
      id="ai-projects"
      className="relative w-full bg-white py-20 text-[#0F172A] lg:py-32"
    >
      <div className="editorial-container">
        {/* Section Header */}
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.22em] text-[#0D9488] uppercase">
            04 — Applied Technology &amp; Innovation
          </p>
          <div className="mt-4 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <h2 className="font-display text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              AI &amp; Automation Projects.
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-slate-600">
              Hands-on prototypes and proof-of-concept workflows translating structured
              business analysis into Voice AI, RPA, and Tally API-connected reporting solutions.
            </p>
          </div>
        </Reveal>

        {/* Restrained BA-to-AI Methodology Strip */}
        <Reveal delayMs={80}>
          <div className="mt-12 border-t border-b border-slate-200 py-6">
            <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
              <span className="text-xs font-semibold tracking-[0.18em] text-slate-400 uppercase">
                BA-to-AI Workflow
              </span>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-semibold text-[#0F172A] sm:text-sm">
                {METHODOLOGY_STEPS.map((step, index) => (
                  <span key={step} className="inline-flex items-center gap-3">
                    <span className="font-mono text-[11px] text-[#0D9488]">
                      0{index + 1}
                    </span>
                    <span>{step}</span>
                    {index < METHODOLOGY_STEPS.length - 1 && (
                      <span className="text-slate-300">→</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Clean 2x2 Editorial Project Showcase */}
        <div className="mt-14 grid grid-cols-1 gap-x-12 gap-y-16 lg:grid-cols-2">
          {AI_PROJECTS.map((project, index) => (
            <Reveal key={project.id} delayMs={100 + index * 90}>
              <article className="group flex h-full flex-col justify-between border-t-2 border-[#0F172A] pt-8 transition-colors duration-300 hover:border-[#0D9488]">
                <div>
                  {/* Top Meta Row: Number & Transparent Classification */}
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-mono text-xs font-semibold tracking-[0.18em] text-[#0D9488]">
                      PROJECT {project.number}
                    </span>
                    <span className="border border-amber-600/35 bg-amber-50 px-2.5 py-1 font-mono text-[10px] font-semibold tracking-[0.14em] text-amber-900 uppercase">
                      {project.classification}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="mt-4 font-display text-2xl font-bold tracking-tight text-[#0F172A] sm:text-[1.65rem]">
                    {project.title}
                  </h3>
                  <p className="mt-1.5 text-sm font-medium text-[#0D9488]">
                    {project.subtitle}
                  </p>

                  {/* Description */}
                  <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
                    {project.description}
                  </p>

                  {/* Functional Capabilities */}
                  <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {project.capabilities.map((cap) => (
                      <li
                        key={cap}
                        className="flex items-start gap-2.5 text-xs font-medium text-slate-700 sm:text-[13px]"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0D9488]" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Architecture Flow & Technologies Explored */}
                <div className="mt-8 border-t border-slate-200 pt-5">
                  {/* Minimal 4-Node Linear Flow */}
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 font-mono text-[11px] font-medium text-slate-600">
                    {project.flowSteps.map((step, i) => (
                      <span key={step} className="inline-flex items-center gap-2">
                        <span className="bg-slate-100 px-2 py-0.5 text-[#0F172A]">
                          {step}
                        </span>
                        {i < project.flowSteps.length - 1 && (
                          <span className="text-[#0D9488]">→</span>
                        )}
                      </span>
                    ))}
                  </div>

                  {/* Tech Explored */}
                  <p className="mt-3 text-xs text-slate-500">
                    <strong className="font-semibold text-slate-700">
                      Technologies Explored:{' '}
                    </strong>
                    {project.techExplored.join(' • ')}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
