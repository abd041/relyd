"use client";

import { cn } from "@/lib/cn";

type Props = {
  className?: string;
};

export function SectionCurve({ className }: Props) {
  return (
    <div className={cn("pointer-events-none absolute inset-x-0 bottom-0", className)} aria-hidden>
      <svg className="block h-full w-full" viewBox="0 0 1440 120" preserveAspectRatio="none">
        <defs>
          <linearGradient id="section-curve-shadow" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="rgba(0,0,0,0.16)" />
            <stop offset="55%" stopColor="rgba(0,0,0,0.06)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0.00)" />
          </linearGradient>
        </defs>

        {/* Main wave */}
        <path fill="var(--cream)" d="M0,56 C360,10 1080,10 1440,56 L1440,120 L0,120 Z" />

        {/* Soft boundary shadow */}
        <path fill="url(#section-curve-shadow)" d="M0,56 C360,10 1080,10 1440,56 L1440,78 L0,78 Z" />
      </svg>
    </div>
  );
}

