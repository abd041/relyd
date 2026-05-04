import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { LinkButton } from "@/components/ui/LinkButton";
import Image from "next/image";

export function GlobalCoverage() {
  return (
    <Section className="relative overflow-hidden bg-brand-yellow text-[#111]">
      <div className="pointer-events-none absolute inset-x-0 -top-px h-14" aria-hidden>
        <svg className="h-full w-full" viewBox="0 0 1440 56" preserveAspectRatio="none">
          <path fill="#0a0a0a" d="M0,40 C200,10 400,10 720,28 C1040,46 1240,50 1440,30 L1440,0 L0,0 Z" />
        </svg>
      </div>
      <Container className="relative grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#111]/70">Get started</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
            Strategic Cloud Ops, for visionary leaders.
          </h2>
          <p className="mt-6 max-w-[650px] text-base leading-relaxed text-gray-600">
            Eliminate technical friction and scale with confidence with enterprise-grade Cloud Ops and Managed Services.
          </p>
          <div className="mt-8">
            <LinkButton href="https://app.relyd.co" external variant="primary">
              Get started
            </LinkButton>
          </div>
        </div>
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-lg">
            <Image
              src="/assets/global-ops.jpg"
              alt="Data center server racks representing enterprise cloud operations"
              width={1800}
              height={1200}
              className="h-auto w-full rounded-3xl object-cover drop-shadow-2xl"
              priority={false}
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
