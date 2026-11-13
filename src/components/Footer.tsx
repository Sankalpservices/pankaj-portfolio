import { ArrowUp } from 'lucide-react';
import { NAV_ITEMS } from '../data/chapters';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#040812] text-slate-400">
      <div className="editorial-container py-12">
        <div className="flex flex-col justify-between gap-8 border-b border-white/10 pb-10 lg:flex-row lg:items-center">
          <div>
            <p className="font-display text-base font-bold tracking-[0.14em] text-white uppercase">
              PANKAJ GANESH KAMBLE
            </p>
            <p className="mt-1 text-xs font-medium tracking-[0.16em] text-[#14B8A6] uppercase">
              Senior Business Analyst &amp; Product Owner
            </p>
            <p className="mt-2 text-xs text-slate-500">
              BFSI | Financial Systems | Government Digital Transformation | PropTech | AI &amp; Automation
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="text-xs font-medium tracking-[0.12em] text-slate-400 uppercase transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-xs sm:flex-row">
          <p className="text-slate-500">
            &copy; {new Date().getFullYear()} Pankaj Ganesh Kamble. Turning Complex Business Challenges into Scalable Digital Solutions.
          </p>

          <a
            href="#home"
            className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.14em] text-slate-400 uppercase transition-colors hover:text-white"
          >
            <span>Back to Top</span>
            <ArrowUp className="h-3.5 w-3.5 text-[#14B8A6]" />
          </a>
        </div>
      </div>
    </footer>
  );
}
