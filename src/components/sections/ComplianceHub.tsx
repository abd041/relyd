import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { complianceBullets } from "@/content/landing";
import Image from "next/image";

export function ComplianceHub() {
  return (
    <Section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,#111_0%,#000_100%)] text-white">
      <div className="pointer-events-none absolute inset-x-0 top-[-92px] h-[120px]" aria-hidden>
        <svg className="h-full w-full" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path fill="#0a0a0a" d="M0,120 C360,18 1080,18 1440,120 L1440,120 L0,120 Z" />
        </svg>
      </div>

      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand-blue/25 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -right-24 top-24 h-80 w-80 rounded-full bg-violet-500/15 blur-3xl" aria-hidden />

      <Container className="relative">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60">Global Compliance</p>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
          Unlock Confidence with the relyd Pulse dashboard
        </h2>
        <p className="mt-6 max-w-[650px] text-base leading-relaxed text-white/90">
          Monitor system performance, track resource allocation, and forecast scaling needs with precision - all in one place.
        </p>

        <div className="mt-12 grid gap-6 md:gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-start">
          <ul className="space-y-6">
            {complianceBullets.map((b) => (
              <li
                key={b.title}
                className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition-all duration-300 ease-out hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
              >
                <span className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <Image src="/assets/icons/white-check-circle.svg" alt="" width={18} height={18} />
                </span>
                <div>
                  <h3 className="text-xl font-medium md:text-2xl">{b.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/80">{b.description}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-[#1f2937] to-black p-6 shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.35),transparent_55%)]" />
            <div className="relative space-y-4">
              <div className="flex items-center justify-between text-xs text-white/60">
                <span>Compliance Hub</span>
                <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-semibold text-emerald-200">
                  Live
                </span>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
                <div className="flex items-center gap-2 text-xs text-white/70">
                  <span className="h-2 w-2 rounded-full bg-amber-400" />
                  Risk alert: contractor classification in Spain
                </div>
                <div className="mt-3 space-y-2">
                  <div className="h-2 rounded bg-white/10" />
                  <div className="h-2 rounded bg-white/10" />
                  <div className="h-2 w-2/3 rounded bg-white/10" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-[11px] text-white/70">
                  Latest legal updates
                  <div className="mt-2 h-16 rounded-lg bg-linear-to-br from-blue-500/30 to-transparent" />
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-[11px] text-white/70">
                  Workforce insights
                  <div className="mt-2 h-16 rounded-lg bg-linear-to-br from-violet-500/30 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
