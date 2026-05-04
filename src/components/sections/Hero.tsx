"use client";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionCurve } from "@/components/ui/SectionCurve";
import { LinkButton } from "@/components/ui/LinkButton";
import { Play } from "lucide-react";

function HeroDashboard() {
  return (
    <div className="relative mx-auto w-full max-w-[560px]">
      <div className="absolute -left-6 -top-6 h-40 w-40 rounded-full bg-white/40 blur-2xl" aria-hidden />
      <div className="absolute -bottom-10 -right-8 h-48 w-48 rounded-full bg-brand-blue/20 blur-2xl" aria-hidden />
      <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_24px_80px_rgba(17,24,39,0.12)]">
        <div className="flex items-center justify-between border-b border-black/5 bg-[#f8fafc] px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          </div>
          <span className="text-xs font-medium text-muted">app.relyd.co</span>
          <span className="w-10" />
        </div>
        <div className="grid gap-4 p-4 sm:grid-cols-[1.1fr_0.9fr] sm:p-6">
          <div className="space-y-3">
            <div className="h-2 w-24 rounded-full bg-black/10" />
            <div className="h-2 w-40 rounded-full bg-black/10" />
            <div className="grid grid-cols-3 gap-2 pt-2">
              {["Payroll", "People", "Compliance"].map((label) => (
                <div key={label} className="rounded-xl bg-[#eef4ff] px-2 py-3 text-center text-[10px] font-semibold text-[#111]">
                  {label}
                </div>
              ))}
            </div>
            <div className="rounded-xl border border-black/5 bg-[#f9fafb] p-3">
              <div className="mb-2 flex items-center justify-between text-[10px] font-medium text-muted">
                <span>Run payroll</span>
                <span>May cycle</span>
              </div>
              <div className="space-y-2">
                <div className="h-2 rounded bg-black/5" />
                <div className="h-2 rounded bg-black/5" />
                <div className="h-2 w-2/3 rounded bg-black/5" />
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-xl bg-linear-to-br from-[#111] to-[#374151] p-4 text-white">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_55%)]" />
            <div className="relative flex h-full flex-col justify-between">
              <div>
                <p className="text-xs font-medium text-white/70">Product tour</p>
                <p className="mt-1 text-sm font-semibold">See relyd in 90 seconds</p>
              </div>
              <button
                type="button"
                className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#111] shadow-lg ring-4 ring-white/30 transition hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                aria-label="Play product tour video"
              >
                <Play className="ml-0.5 h-6 w-6 fill-current" />
              </button>
              <p className="text-[10px] text-white/60">Trusted by 35,000+ companies worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-[color-mix(in_oklab,var(--hero-deep)_92%,white)] to-[color-mix(in_oklab,var(--hero)_88%,white)] pb-24 pt-14 md:pb-28 md:pt-20">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.55),transparent_55%)]"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.04))]" aria-hidden />

      <Container className="relative grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-center lg:gap-10">
        <Reveal>
          <div>
            <h1 className="text-balance text-4xl font-semibold leading-[1.06] tracking-tight text-[#111] md:text-5xl lg:text-6xl">
              STRATEGIC
              <br />
              CLOUD
              <br />
              OPS
            </h1>
            <p className="mt-6 max-w-[600px] text-base leading-relaxed text-gray-600 sm:text-lg">
              Eliminate technical friction and scale with confidence. Our enterprise-grade Cloud Ops and Managed Services provide
              the robust backbone your business needs, bridging the gap between sophisticated engineering and your core strategic
              mission.
            </p>
            <p className="mt-4 max-w-[600px] text-base leading-relaxed text-gray-600 sm:text-lg">
              Eliminate manual bottlenecks through <strong>AI-driven workflows</strong>, drastically reduce system risks, and
              empower your leadership to focus on long-term growth instead of day-to-day troubleshooting.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <LinkButton href="https://app.relyd.co" external variant="primary">
                Register for FREE
              </LinkButton>
              <LinkButton href="/pricing" variant="secondary">
                Pricing
              </LinkButton>
            </div>
          </div>
        </Reveal>
        <Reveal delayMs={80}>
          <HeroDashboard />
        </Reveal>
      </Container>

      <SectionCurve className="h-[120px]" />
    </section>
  );
}
