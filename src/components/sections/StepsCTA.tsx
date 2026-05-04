import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { steps } from "@/content/landing";

export function StepsCTA() {
  return (
    <Section className="border-t border-black/5 bg-white">
      <Container className="grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-[#111] md:text-4xl">Get started in three easy steps</h2>
          <ol className="mt-10 space-y-8">
            {steps.map((s, i) => (
              <li key={s.title} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#111] text-sm font-bold text-white">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-xl font-medium text-[#111] md:text-2xl">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{s.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="relative overflow-hidden rounded-3xl border border-black/5 bg-white p-6 shadow-[0_24px_80px_rgba(17,24,39,0.08)]">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm font-semibold text-[#111]">Your team</span>
            <span className="rounded-full bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-800">Synced</span>
          </div>
          <div className="grid grid-cols-4 gap-3 sm:grid-cols-5">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={String(i)}
                className="flex aspect-square flex-col items-center justify-center rounded-2xl bg-linear-to-br from-[#eef4ff] to-white text-[10px] font-semibold text-[#111]/70 shadow-sm ring-1 ring-black/5"
              >
                <span className="mb-1 h-8 w-8 rounded-full bg-[#111]/10" />
                Member
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
