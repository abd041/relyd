import { Container } from "@/components/ui/Container";
import { Marquee } from "@/components/ui/Marquee";
import { trustLogos } from "@/content/landing";

export function TrustStrip() {
  return (
    <section className="relative overflow-hidden bg-hero-deep/80 py-10 md:py-12 pb-[96px]">
      <Container className="relative z-10 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#111]/70">
          Eliminate manual bottlenecks through AI-driven workflows
        </p>
      </Container>
      <div className="relative z-10 mt-6">
        <Marquee className="opacity-80">
          <div className="flex items-center gap-12 md:gap-20">
            {trustLogos.map((name) => (
              <span
                key={name}
                className="whitespace-nowrap text-lg font-bold tracking-widest text-[#111]/40 grayscale sm:text-xl"
              >
                {name}
              </span>
            ))}
          </div>
        </Marquee>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[72px]" aria-hidden>
        <svg className="h-full w-full" viewBox="0 0 1440 72" preserveAspectRatio="none">
          <path
            fill="var(--cream)"
            d="M0,44 C280,66 520,4 720,4 C920,4 1160,66 1440,44 L1440,72 L0,72 Z"
          />
        </svg>
      </div>
    </section>
  );
}
