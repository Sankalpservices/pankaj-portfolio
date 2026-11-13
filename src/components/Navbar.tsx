import { useEffect, useState } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { NAV_ITEMS } from '../data/chapters';

interface NavbarProps {
  activeSection: string;
}

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

export function Navbar({ activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 24);

      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (scrollY / docHeight) * 100)));
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? 'border-b border-white/[0.08] bg-[#060B19]/92 backdrop-blur-md'
          : 'border-b border-white/[0.05] bg-transparent'
      }`}
    >
      {/* Top Scroll Progress Indicator */}
      <div className="h-[2px] w-full bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-[#14B8A6] to-[#D4AF37] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="editorial-container flex items-center justify-between gap-4 py-4">
        {/* Left: Brand Identity */}
        <a
          href="#home"
          className="group flex shrink-0 flex-col focus:outline-none"
        >
          <span className="font-display text-sm font-bold tracking-[0.12em] whitespace-nowrap text-white transition-colors duration-200 group-hover:text-[#14B8A6] sm:text-[15px]">
            PANKAJ GANESH KAMBLE
          </span>
          <span className="mt-0.5 text-[10px] font-medium tracking-[0.14em] whitespace-nowrap text-slate-400 uppercase">
            Senior Business Analyst &amp; Product Owner
          </span>
        </a>

        {/* Center: Desktop Navigation Links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex lg:items-center lg:gap-5 xl:gap-7"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                aria-current={isActive ? 'page' : undefined}
                className={`group relative py-1.5 text-[11px] font-medium tracking-[0.12em] whitespace-nowrap uppercase transition-colors duration-200 ${
                  isActive
                    ? 'text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {item.label}
                <span
                  className={`absolute right-0 bottom-0 left-0 h-[1.5px] origin-left transition-transform duration-300 ease-out ${
                    isActive
                      ? 'scale-x-100 bg-[#14B8A6]'
                      : 'scale-x-0 bg-white/50 group-hover:scale-x-100'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Right: Actions + Mobile Toggle */}
        <div className="flex shrink-0 items-center gap-3">
          <a
            href="https://www.linkedin.com/in/pankajkamble14/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Connect with Pankaj Ganesh Kamble on LinkedIn"
            data-testid="nav-linkedin-link"
            className="hidden h-9 w-9 items-center justify-center border border-white/12 text-slate-300 transition-colors duration-200 hover:border-[#14B8A6] hover:text-[#14B8A6] sm:inline-flex"
          >
            <LinkedInIcon className="h-4 w-4" />
          </a>

          <a
            href="/resume/Pankaj-Kamble-Resume.pdf"
            download="Pankaj-Kamble-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="nav-download-resume"
            className="hidden items-center gap-2 border border-[#D4AF37]/50 px-4 py-2 text-[11px] font-semibold tracking-[0.12em] whitespace-nowrap text-[#D4AF37] uppercase transition-all duration-200 hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#060B19] sm:inline-flex"
          >
            <Download className="h-3.5 w-3.5 shrink-0" />
            <span>Resume</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Mobile Navigation Menu"
            aria-expanded={mobileMenuOpen}
            className="inline-flex items-center justify-center border border-white/15 p-2 text-slate-200 transition-colors hover:border-[#14B8A6] hover:text-[#14B8A6] lg:hidden"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-white/10 bg-[#060B19] px-5 pt-3 pb-6 lg:hidden">
          <nav aria-label="Mobile Navigation" className="flex flex-col space-y-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between border-l-2 px-3 py-2.5 text-sm font-medium transition-colors ${
                    isActive
                      ? 'border-[#14B8A6] bg-white/[0.04] text-white'
                      : 'border-transparent text-slate-400 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                </a>
              );
            })}
          </nav>

          <div className="mt-5 flex flex-col gap-2.5 border-t border-white/10 pt-4 sm:hidden">
            <a
              href="/resume/Pankaj-Kamble-Resume.pdf"
              download="Pankaj-Kamble-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#14B8A6] px-4 py-2.5 text-xs font-semibold uppercase tracking-widest text-[#060B19]"
            >
              <Download className="h-4 w-4" />
              <span>Download Resume</span>
            </a>

            <a
              href="https://www.linkedin.com/in/pankajkamble14/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border border-white/15 px-4 py-2.5 text-xs font-semibold uppercase tracking-widest text-white"
            >
              <LinkedInIcon className="h-4 w-4" />
              <span>Connect on LinkedIn</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
