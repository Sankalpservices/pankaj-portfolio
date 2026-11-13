import { useEffect, useRef, useState, type ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  durationMs?: number;
  variant?: 'fade-up' | 'fade-scale';
}

export function Reveal({
  children,
  className = '',
  delayMs = 0,
  durationMs = 720,
  variant = 'fade-up',
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === 'undefined') {
      setIsVisible(true);
      return;
    }

    const prefersReducedMotion =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion || typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    let rafId: number | null = null;
    let mounted = true;

    const triggerReveal = (nextState: boolean) => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
      // Ensure initial hidden style is painted before transitioning to visible
      rafId = requestAnimationFrame(() => {
        if (mounted) {
          setIsVisible(nextState);
        }
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            triggerReveal(true);
          } else {
            // Reset only when element is well outside the viewport so scrolling back replays smoothly without edge flicker
            const rect = entry.boundingClientRect;
            const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
            if (rect.top > viewportHeight + 48 || rect.bottom < -48) {
              triggerReveal(false);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -48px 0px',
        threshold: 0.08,
      }
    );

    observer.observe(el);

    return () => {
      mounted = false;
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
      observer.disconnect();
    };
  }, []);

  const hiddenClass =
    variant === 'fade-scale' ? 'reveal-hidden-scale' : 'reveal-hidden-up';

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: isVisible && delayMs > 0 ? `${delayMs}ms` : '0ms',
        transitionDuration: `${durationMs}ms`,
      }}
      className={`reveal-base ${isVisible ? 'reveal-visible' : hiddenClass} ${className}`}
    >
      {children}
    </div>
  );
}
