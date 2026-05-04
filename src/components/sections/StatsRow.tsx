import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { stats } from "@/content/landing";
import { BarChart3, Building2, Wallet } from "lucide-react";

const icons = [BarChart3, Building2, Wallet];

export function StatsRow() {
  return (
    <Section className="border-y border-gray-200/40 bg-linear-to-b from-white to-gray-50/70">
      <Container>
        <div className="grid gap-8 md:grid-cols-3 md:gap-10">
          {stats.map((s, i) => {
            const Icon = icons[i] ?? BarChart3;
            return (
              <div key={s.label} className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gray-200/40 bg-[#dbeafe] text-brand-blue shadow-[0_8px_16px_rgba(26,86,240,0.08),0_16px_32px_rgba(26,86,240,0.1)]">
                  <Icon className="h-[22px] w-[22px]" aria-hidden />
                </div>
                <p className="mt-6 text-4xl font-semibold tracking-[-0.02em] text-gray-900 sm:text-5xl">{s.value}</p>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-gray-500">{s.label}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
