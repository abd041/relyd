import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { steps } from "@/content/landing";

export function StepsCTA() {
  return (
    <Section className="border-t border-gray-200/40 bg-linear-to-b from-white to-gray-50/50">
      <Container className="grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center">
        <div>
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-gray-900 md:text-4xl">
            Get started in three easy steps
          </h2>
          <ol className="mt-10 space-y-8">
            {steps.map((s, i) => (
              <li key={s.title} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-900 text-sm font-bold text-white shadow-[0_4px_12px_rgba(0,0,0,0.12)]">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-xl font-medium tracking-[-0.015em] text-gray-900 md:text-2xl">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{s.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="relative overflow-hidden rounded-3xl border border-gray-200/40 bg-white p-6 shadow-[0_10px_20px_rgba(0,0,0,0.04),0_24px_48px_rgba(0,0,0,0.07)] ring-1 ring-gray-900/3 transition-all duration-300 ease-out hover:translate-y-[-4px] hover:shadow-[0_14px_28px_rgba(0,0,0,0.05),0_32px_56px_rgba(0,0,0,0.1)]">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm font-semibold text-gray-900">Your team</span>
            <span className="rounded-full bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-800">Synced</span>
          </div>
          <div className="grid grid-cols-4 gap-3 sm:grid-cols-5">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={String(i)}
                className="flex aspect-square flex-col items-center justify-center rounded-2xl bg-linear-to-br from-[#eef4ff] to-white text-[10px] font-semibold text-gray-500 shadow-[0_2px_6px_rgba(0,0,0,0.04)] ring-1 ring-gray-200/50"
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
