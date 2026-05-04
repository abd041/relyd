"use client";

import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { Tabs } from "@/components/ui/Tabs";
import { platformCards, platformTabs, type PlatformTabId } from "@/content/landing";
import Link from "next/link";

const tabsForUi = platformTabs.map((t) => ({ id: t.id, label: t.label }));

function MiniGraphic({ seed }: { seed: string }) {
  return (
    <div className="mt-6 aspect-4/3 w-full overflow-hidden rounded-xl border border-gray-200/40 bg-linear-to-br from-white to-[#eef4ff] p-3">
      <div className="flex h-full flex-col gap-2">
        <div className="h-2 w-1/3 rounded-full bg-black/10" />
        <div className="grid flex-1 grid-cols-2 gap-2">
          <div className="rounded-lg bg-white/80 p-2 shadow-sm">
            <div className="h-1.5 w-1/2 rounded bg-black/10" />
            <div className="mt-2 space-y-1">
              <div className="h-1 rounded bg-black/5" />
              <div className="h-1 rounded bg-black/5" />
            </div>
          </div>
          <div className="rounded-lg bg-[#111]/90 p-2 text-[8px] text-white/80">{seed}</div>
        </div>
      </div>
    </div>
  );
}

function CardGrid({ tabId }: { tabId: PlatformTabId }) {
  const cards = platformCards[tabId];
  return (
    <div className="grid gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-8">
      {cards.map((card) => (
        <Card key={card.title} className="flex flex-col p-6">
          {card.badge ? (
            <span className="mb-2 inline-flex w-fit rounded-full bg-[#111] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
              {card.badge}
            </span>
          ) : null}
          <h3 className="text-xl font-medium tracking-[-0.015em] text-gray-900 md:text-2xl">{card.title}</h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{card.description}</p>
          <MiniGraphic seed={tabId} />
          <Link
            href="https://app.relyd.co"
            className="mt-4 inline-flex text-sm font-semibold text-gray-900 underline-offset-4 transition-colors duration-300 hover:underline"
          >
            Get started
          </Link>
        </Card>
      ))}
    </div>
  );
}

export function PlatformTabs() {
  return (
    <Section className="bg-linear-to-b from-blue-50/40 to-white">
      <Container>
        <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">Pricing</p>
        <h2 className="mx-auto mt-5 max-w-3xl text-balance text-center text-3xl font-semibold tracking-[-0.02em] text-gray-900 md:text-4xl">
          Pricing
        </h2>
        <Tabs tabs={tabsForUi} className="mt-10">
          {(active) => <CardGrid tabId={active as PlatformTabId} />}
        </Tabs>
      </Container>
    </Section>
  );
}
