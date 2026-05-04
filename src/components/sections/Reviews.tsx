"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { reviews } from "@/content/landing";
import { Plus } from "lucide-react";
import { useState } from "react";

export function Reviews() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section className="bg-linear-to-b from-gray-50/80 to-white">
      <Container>
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">faq</p>
        <h2 className="mt-5 text-3xl font-semibold tracking-[-0.02em] text-gray-900 md:text-4xl">faq</h2>
        <p className="mt-6 max-w-[640px] text-sm leading-relaxed text-gray-600 sm:text-base">
          Explore the answers to common queries, and if you don’t find what you’re looking for, our support team is always
          ready to assist you.
        </p>

        <div className="mt-10 grid gap-3">
          {reviews.map((r, i) => {
            const expanded = open === i;
            return (
              <div
                key={r.name}
                className="rounded-2xl border border-gray-200/40 bg-white shadow-[0_10px_20px_rgba(0,0,0,0.04),0_20px_40px_rgba(0,0,0,0.05)] transition-all duration-300 ease-out hover:translate-y-[-3px] hover:shadow-[0_14px_28px_rgba(0,0,0,0.05),0_28px_52px_rgba(0,0,0,0.08)]"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-gray-50"
                  aria-expanded={expanded}
                  onClick={() => setOpen((v) => (v === i ? null : i))}
                >
                  <span className="text-sm font-semibold text-gray-900 sm:text-base">{r.name}</span>
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-900">
                    <Plus className={expanded ? "h-4 w-4 rotate-45 transition" : "h-4 w-4 transition"} aria-hidden />
                  </span>
                </button>
                {expanded ? <p className="px-5 pb-5 text-sm leading-relaxed text-gray-600">{r.text}</p> : null}
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
