import { Container } from "@/components/ui/Container";
import { footerColumns, promoLegal } from "@/content/landing";
import Link from "next/link";
import type { SVGProps } from "react";

function IconLinkedIn(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V23h-4V8zm7.5 0h3.8v2h.1c1.1-2 3.8-2.5 5.9-1.3 1.8 1 2.7 3.2 2.7 6.1V23h-4v-6.7c0-1.6 0-3.7-2.2-3.7-2.2 0-2.5 1.7-2.5 3.5V23h-4V8z" />
    </svg>
  );
}

function IconX(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M18.244 2H21l-7.5 8.66L22 22h-6.56l-4.85-6.36L5.5 22H2.8l8-9.15L2 2h6.56l4.4 5.78L18.244 2zm-2.2 18h2.05L8.97 4H6.75l9.05 16z" />
    </svg>
  );
}

function IconGitHub(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.43 7.86 10.96.58.1.79-.25.79-.56 0-.28-.01-1.02-.01-2-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.69 1.26 3.35.96.1-.75.41-1.26.74-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.29 1.2-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.75.8 1.19 1.83 1.19 3.09 0 4.42-2.69 5.38-5.25 5.66.42.36.8 1.08.8 2.18 0 1.57-.01 2.84-.01 3.23 0 .31.21.67.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-[radial-gradient(circle_at_top,#111_0%,#000_100%)] pt-12 text-white md:pt-16">
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-8 border-b border-white/10 pb-10 md:justify-between">
          <div className="text-center md:text-left">
            <p className="text-sm font-semibold">Strategic Cloud Ops, for visionary leaders.</p>
            <p className="mt-1 text-xs text-white/60">relyd Pulse • Cloud Ops • Managed Services</p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm font-semibold">Get started</p>
            <p className="mt-1 text-xs text-white/60">Register for FREE at app.relyd.co</p>
          </div>
        </div>

        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-5">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <p className="text-sm font-semibold">{col.title}</p>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <Link href="#" className="text-sm text-white/70 transition hover:text-white">
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {promoLegal ? (
          <div className="border-t border-white/10 py-8">
            <p className="text-xs leading-relaxed text-white/50">{promoLegal}</p>
          </div>
        ) : null}

        <div className="flex flex-col gap-6 border-t border-white/10 py-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2 text-lg font-semibold">
            <span aria-hidden className="inline-block h-7 w-7 rounded-full bg-white" />
            relyd.co
          </div>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-white/70 hover:text-white" aria-label="LinkedIn">
              <IconLinkedIn className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-white/70 hover:text-white" aria-label="X">
              <IconX className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-white/70 hover:text-white" aria-label="GitHub">
              <IconGitHub className="h-5 w-5" />
            </Link>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm text-white/60">
            <label className="flex items-center gap-2">
              <span className="sr-only">Language</span>
              <select className="rounded-lg border border-white/20 bg-transparent px-2 py-1 text-white">
                <option className="text-black">English (US)</option>
                <option className="text-black">English (UK)</option>
              </select>
            </label>
            <span>relyd.co Inc. HQ, 28-07 Jackson Ave, New York NY 11101, US</span>
            <span>© {new Date().getFullYear()} relyd.co Inc., All rights reserved.</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
