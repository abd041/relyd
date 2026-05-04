"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { storyFilters } from "@/content/landing";
import { cn } from "@/lib/cn";
import { LinkButton } from "@/components/ui/LinkButton";
import Image from "next/image";
import { useState } from "react";

export function CustomerStories() {
  const [active, setActive] = useState<(typeof storyFilters)[number]>(storyFilters[0]);

  return (
    <Section className="bg-linear-to-b from-gray-50/60 via-white to-blue-50/20">
      <Container>
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">Customer Stories</p>
        <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-[-0.02em] text-gray-900 md:text-4xl">
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
                    ? "border-gray-900 bg-gray-900 text-white"
                    : "border-gray-200/50 bg-white text-gray-900 hover:border-gray-200 hover:bg-gray-50/80",
                )}
              >
                {f}
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
          <div className="relative overflow-hidden rounded-3xl border border-gray-200/40 bg-linear-to-br from-[#e5edf9] via-white to-[#eef6ff] shadow-[0_10px_20px_rgba(0,0,0,0.04),0_24px_48px_rgba(0,0,0,0.06)] ring-1 ring-gray-900/3">
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-blue/12 blur-3xl" aria-hidden />
            <div className="pointer-events-none absolute bottom-6 left-6 z-10 w-[42%] max-w-[220px] rounded-2xl border border-gray-200/50 bg-white/80 p-3 shadow-[0_8px_16px_rgba(0,0,0,0.05),0_16px_32px_rgba(0,0,0,0.07)] backdrop-blur-sm">
              <div className="mb-2 flex items-center justify-between text-[9px] font-semibold uppercase tracking-wide text-gray-500">
                <span>Live</span>
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </div>
              <div className="space-y-1.5">
                <div className="h-1.5 w-full rounded-full bg-black/10" />
                <div className="h-1.5 w-[88%] rounded-full bg-black/10" />
                <div className="h-1.5 w-[72%] rounded-full bg-black/10" />
              </div>
              <div className="mt-3 grid grid-cols-3 gap-1.5">
                <div className="h-10 rounded-lg bg-linear-to-b from-[#eef4ff] to-white ring-1 ring-black/5" />
                <div className="h-10 rounded-lg bg-linear-to-b from-[#eef4ff] to-white ring-1 ring-black/5" />
                <div className="h-10 rounded-lg bg-linear-to-b from-[#eef4ff] to-white ring-1 ring-black/5" />
              </div>
            </div>
            <div className="relative aspect-16/11 w-full">
              <Image
                src="/assets/customer-collab.jpg"
                alt="Team collaborating in a modern office"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 55vw"
                priority={false}
              />
            </div>
          </div>
          <div>
            <p className="text-6xl font-bold tracking-[-0.03em] text-gray-900 sm:text-7xl">5,000+</p>
            <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-gray-500">contracts created</p>
            <p className="mt-8 max-w-[640px] text-base leading-relaxed text-gray-600">
              Eliminate manual bottlenecks through AI-driven workflows, drastically reduce system risks, and empower your
              leadership to focus on long-term growth instead of day-to-day troubleshooting.
            </p>
            <div className="mt-10">
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
