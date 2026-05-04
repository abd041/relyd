"use client";

import { cn } from "@/lib/cn";
import { useCallback, useId, useRef, useState } from "react";

export type TabItem = {
  id: string;
  label: string;
};

type Props = {
  tabs: TabItem[];
  children: (activeId: string) => React.ReactNode;
  className?: string;
};

export function Tabs({ tabs, children, className }: Props) {
  const baseId = useId();
  const [active, setActive] = useState(tabs[0]?.id ?? "");
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const focusTab = useCallback((index: number) => {
    const len = tabs.length;
    const next = (index + len) % len;
    tabRefs.current[next]?.focus();
  }, [tabs.length]);

  const onKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      focusTab(index + 1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      focusTab(index - 1);
    } else if (e.key === "Home") {
      e.preventDefault();
      focusTab(0);
    } else if (e.key === "End") {
      e.preventDefault();
      focusTab(tabs.length - 1);
    }
  };

  return (
    <div className={className}>
      <div
        role="tablist"
        aria-label="Product areas"
        className="flex flex-wrap justify-center gap-2 border-b border-black/10 pb-4 md:gap-8"
      >
        {tabs.map((tab, index) => {
          const selected = tab.id === active;
          return (
            <button
              key={tab.id}
              ref={(el) => {
                tabRefs.current[index] = el;
              }}
              type="button"
              role="tab"
              id={`${baseId}-tab-${tab.id}`}
              aria-selected={selected}
              aria-controls={`${baseId}-panel`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(tab.id)}
              onKeyDown={(e) => onKeyDown(e, index)}
              className={cn(
                "relative px-2 py-2 text-sm font-medium text-muted transition md:text-base",
                selected ? "text-[#111]" : "hover:text-[#111]",
              )}
            >
              {tab.label}
              {selected ? (
                <span className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-[#111]" />
              ) : null}
            </button>
          );
        })}
      </div>
      <div
        role="tabpanel"
        id={`${baseId}-panel`}
        aria-labelledby={`${baseId}-tab-${active}`}
        className="pt-10"
      >
        {children(active)}
      </div>
    </div>
  );
}
