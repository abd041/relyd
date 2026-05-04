"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { storyFilters } from "@/content/landing";
import { cn } from "@/lib/cn";
import { LinkButton } from "@/components/ui/LinkButton";
import { useState } from "react";

export function CustomerStories() {
  const [active, setActive] = useState<(typeof storyFilters)[number]>(storyFilters[0]);

  return (
    <Section className="bg-linear-to-b from-gray-50 to-white">
      <Container>
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-600">Customer Stories</p>
        <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-[#111] md:text-4xl">
          Eliminate manual bottlenecks with AI-driven workflows
        </h2>

        <div
          className="mt-8 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Customer story categories"
        >
          {storyFilters.map((f) => {
            const selected = f === active;
            return (
              <button
                key={f}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActive(f)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",
                  selected
                    ? "border-[#111] bg-[#111] text-white"
                    : "border-gray-200 bg-white text-[#111] hover:-translate-y-0.5 hover:border-gray-300 hover:bg-gray-50",
                )}
              >
                {f}
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
          <div className="overflow-hidden rounded-3xl border border-gray-200/50 bg-linear-to-br from-[#e5edf9] to-white shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
            <div className="aspect-16/11 w-full bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22%3E%3Crect fill=%22%23dbeafe%22 width=%22100%22 height=%22100%22/%3E%3C/svg%3E')] bg-cover bg-center" />
          </div>
          <div>
            <p className="text-6xl font-bold tracking-tight text-[#111] sm:text-7xl">5,000+</p>
            <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-gray-600">contracts created</p>
            <p className="mt-6 max-w-[650px] text-base leading-relaxed text-gray-600">
              Eliminate manual bottlenecks through AI-driven workflows, drastically reduce system risks, and empower your
              leadership to focus on long-term growth instead of day-to-day troubleshooting.
            </p>
            <div className="mt-8">
              <LinkButton href="#" variant="secondary">
                Read case study
              </LinkButton>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
