import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { stats } from "@/content/landing";
import { BarChart3, Building2, Wallet } from "lucide-react";

const icons = [BarChart3, Building2, Wallet];

export function StatsRow() {
  return (
    <Section className="border-y border-black/5 bg-white">
      <Container>
        <div className="grid gap-8 md:grid-cols-3">
          {stats.map((s, i) => {
            const Icon = icons[i] ?? BarChart3;
            return (
              <div key={s.label} className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#dbeafe] text-brand-blue shadow-[0_10px_20px_rgba(26,86,240,0.12)]">
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <p className="mt-5 text-4xl font-semibold tracking-tight text-[#111] sm:text-5xl">{s.value}</p>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-gray-600">{s.label}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
