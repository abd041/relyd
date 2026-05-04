"use client";

import { cn } from "@/lib/cn";
import * as React from "react";

type Props = {
  className?: string;
};

export function SectionCurve({ className }: Props) {
  const uid = React.useId().replace(/:/g, "");
  const shadowId = `section-curve-shadow-${uid}`;

  return (
    <div className={cn("pointer-events-none absolute inset-x-0 bottom-0", className)} aria-hidden>
      <svg className="block h-full w-full" viewBox="0 0 1440 140" preserveAspectRatio="none">
        <defs>
          <linearGradient id={shadowId} x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="rgba(0,0,0,0.12)" />
            <stop offset="40%" stopColor="rgba(0,0,0,0.05)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0)" />
          </linearGradient>
          <filter id={`section-curve-drop-${uid}`} x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="rgba(0,0,0,0.08)" floodOpacity="1" />
          </filter>
        </defs>

        <path
          fill="var(--cream)"
          filter={`url(#section-curve-drop-${uid})`}
          d="M0,78 C420,6 1020,6 1440,78 L1440,140 L0,140 Z"
        />
        <path fill={`url(#${shadowId})`} d="M0,78 C420,6 1020,6 1440,78 L1440,102 L0,102 Z" />
      </svg>
    </div>
  );
}
