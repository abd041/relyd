import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { advantageFeatures } from "@/content/landing";
import {
  Headphones,
  Link2,
  Lock,
  Puzzle,
  Scaling,
  ShieldCheck,
} from "lucide-react";

const icons = [Puzzle, Scaling, Headphones, ShieldCheck, Link2, Lock];

export function AdvantageGrid() {
  return (
    <Section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,#111_0%,#000_100%)] text-white">
      <div className="pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-brand-blue/10 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -right-24 top-24 h-96 w-96 rounded-full bg-violet-500/8 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-56 w-56 rounded-full bg-cyan-400/5 blur-3xl" aria-hidden />

      <Container className="relative">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/50">relyd Pulse</p>
        <h2 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.02em] md:text-4xl">
          Eliminate technical friction and scale with confidence
        </h2>
        <p className="mt-8 max-w-[640px] text-base leading-relaxed text-white/90">
          Our enterprise-grade Cloud Ops and Managed Services provide the robust backbone your business needs, bridging the gap
          between sophisticated engineering and your core strategic mission.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
          {advantageFeatures.map((f, i) => {
            const Icon = icons[i] ?? Puzzle;
            return (
              <article
                key={f.title}
                className="rounded-2xl border border-white/12 bg-white/8 p-6 shadow-[0_10px_24px_rgba(0,0,0,0.18),0_24px_48px_rgba(0,0,0,0.26)] backdrop-blur transition-all duration-300 ease-out hover:translate-y-[-4px] hover:border-white/18 hover:bg-white/10 hover:shadow-[0_14px_32px_rgba(0,0,0,0.2),0_32px_56px_rgba(0,0,0,0.3)]"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="mt-4 text-xl font-medium tracking-[-0.015em] md:text-2xl">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75">{f.description}</p>
              </article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
