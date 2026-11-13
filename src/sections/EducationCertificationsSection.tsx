import { Reveal } from '../components/Reveal';

const EDUCATION_CREDENTIALS = [
  {
    degree: 'Master of Management Studies (MMS)',
    specialization: 'Finance',
    year: '2015',
  },
  {
    degree: 'Bachelor of Management Studies (BMS)',
    specialization: 'Finance',
    year: '2012',
  },
];

const CERTIFICATIONS = [
  {
    name: 'Generative AI Overview for Project Managers',
    focus: 'AI Governance & Project Delivery',
  },
  {
    name: 'Becoming a Product Manager: A Complete Guide',
    focus: 'Product Strategy & Ownership',
  },
  {
    name: 'Six Sigma: Black Belt',
    focus: 'Process Transformation & Quality Control',
  },
  {
    name: 'Agile Scrum Master',
    focus: 'Agile Delivery & Sprint Governance',
  },
  {
    name: 'Business Analysis',
    focus: 'Requirements Engineering & Documentation',
  },
  {
    name: 'Tata Business Excellence',
    focus: 'Enterprise Excellence Framework',
  },
  {
    name: 'Dale Carnegie',
    focus: 'Professional Development & Stakeholder Communication',
  },
];

export function EducationCertificationsSection() {
  return (
    <section
      id="education"
      className="relative w-full bg-[#F8FAFC] py-20 text-[#0F172A] lg:py-32"
    >
      <div className="editorial-container">
        {/* Section Header */}
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.22em] text-[#0D9488] uppercase">
            06 — Academic &amp; Professional Credentials
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
            Education &amp; Certifications.
          </h2>
        </Reveal>

        {/* Clean Two-Column Editorial Layout */}
        <div className="mt-14 grid grid-cols-1 gap-14 border-t border-slate-200 pt-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column (5 Cols): University Education */}
          <div className="lg:col-span-5">
            <Reveal delayMs={80}>
              <p className="text-xs font-semibold tracking-[0.18em] text-[#B48A1E] uppercase">
                Academic Degrees
              </p>

              <div className="mt-6 divide-y divide-slate-200 border-t border-b border-slate-200">
                {EDUCATION_CREDENTIALS.map((edu) => (
                  <div key={edu.degree} className="py-7">
                    <span className="font-mono text-xs font-semibold tracking-[0.16em] text-[#0D9488]">
                      {edu.year}
                    </span>
                    <h3 className="mt-2 font-display text-xl font-bold text-[#0F172A]">
                      {edu.degree}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-slate-600">
                      Specialization: {edu.specialization}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right Column (7 Cols): Certifications & Professional Development List */}
          <div className="lg:col-span-7">
            <Reveal delayMs={160}>
              <p className="text-xs font-semibold tracking-[0.18em] text-[#0D9488] uppercase">
                Certifications &amp; Professional Development
              </p>

              <ul className="mt-6 divide-y divide-slate-200 border-t border-b border-slate-200">
                {CERTIFICATIONS.map((cert, index) => (
                  <li
                    key={cert.name}
                    className="flex flex-col justify-between gap-1 py-4 sm:flex-row sm:items-center sm:gap-6"
                  >
                    <div className="flex items-center gap-3.5">
                      <span className="font-mono text-xs font-semibold text-slate-400">
                        0{index + 1}
                      </span>
                      <span className="font-display text-base font-semibold text-[#0F172A]">
                        {cert.name}
                      </span>
                    </div>
                    <span className="pl-7 text-xs font-medium text-slate-500 sm:pl-0 sm:text-right">
                      {cert.focus}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
