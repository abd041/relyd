"use client";

import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/LinkButton";
import { cn } from "@/lib/cn";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type DropdownItem = { label: string; href: string };

const dropdowns: { label: string; items: DropdownItem[] }[] = [
  {
    label: "Start",
    items: [
      { label: "Customer Management", href: "/customer-management" },
      { label: "PIM", href: "/pim" },
      { label: "Warehouse", href: "/warehouse" },
      { label: "Procurement", href: "/procurement" },
      { label: "Sales Channels", href: "/sales-channels" },
      { label: "Sales", href: "/sales" },
      { label: "Accounting", href: "/accounting" },
      { label: "Payments", href: "/payments" },
      { label: "Returns", href: "/returns" },
      { label: "Workflows", href: "/workflows" },
      { label: "Statistics", href: "/statistics" },
    ],
  },
  {
    label: "Branches",
    items: [
      { label: "E-Commerce", href: "/e-commerce" },
    ],
  },
  {
    label: "Ressources",
    items: [
      { label: "Changelog", href: "/changelog" },
      { label: "FAQ", href: "/faq" },
    ],
  },
];

const topLinks = [
  { label: "Pricing", href: "/pricing" },
  { label: "Help", href: "/help" },
] as const;

function Dropdown({
  label,
  items,
  onNavigate,
}: {
  label: string;
  items: DropdownItem[];
  onNavigate?: () => void;
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDocMouseDown = (e: MouseEvent) => {
      const root = rootRef.current;
      if (!root) return;
      if (e.target instanceof Node && !root.contains(e.target)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDocMouseDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocMouseDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        className={cn(
          "inline-flex items-center gap-1 text-sm font-medium transition",
          open ? "text-[#111]" : "text-[#111]/80 hover:text-[#111]",
        )}
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {label}
        <ChevronDown className={cn("h-4 w-4 transition", open && "rotate-180")} aria-hidden />
      </button>

      <div
        role="menu"
        aria-label={label}
        className={cn(
          "absolute left-0 top-full z-50 mt-3 w-56 origin-top-left rounded-2xl border border-black/10 bg-white p-2 shadow-[0_24px_80px_rgba(17,24,39,0.12)]",
          open ? "block" : "hidden",
        )}
      >
        {items.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            role="menuitem"
            className="flex items-center justify-between rounded-xl px-3 py-2 text-sm font-medium text-[#111]/85 transition hover:bg-black/5 hover:text-[#111] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111]"
            onClick={() => {
              setOpen(false);
              onNavigate?.();
            }}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    queueMicrotask(() => firstLinkRef.current?.focus());
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-colors",
        scrolled ? "border-black/10 bg-white/95 backdrop-blur-md" : "border-transparent bg-white/80 backdrop-blur-sm",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4 lg:h-[72px]">
        <Link href="/" className="flex items-center gap-2 text-xl font-semibold tracking-tight text-[#111]">
          <span aria-hidden className="inline-block h-7 w-7 rounded-full bg-[#111]" />
          relyd
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {dropdowns.map((d) => (
            <Dropdown key={d.label} label={d.label} items={d.items} />
          ))}
          {topLinks.map((l) => (
            <Link key={l.label} href={l.href} className="text-sm font-medium text-[#111]/80 transition hover:text-[#111]">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <LinkButton href="https://app.relyd.co" external variant="secondary" className="px-5 py-2.5 text-sm">
            Login
          </LinkButton>
          <LinkButton href="https://app.relyd.co" external variant="primary" className="px-5 py-2.5 text-sm">
            Start now
          </LinkButton>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-black/10 p-2 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      <div
        id="mobile-nav"
        ref={panelRef}
        hidden={!open}
        className={cn("border-t border-black/10 bg-white lg:hidden", !open && "hidden")}
      >
        <Container className="flex flex-col gap-4 py-4">
          <Link
            ref={firstLinkRef}
            href="/pricing"
            className="text-base font-medium text-[#111]"
            onClick={() => setOpen(false)}
          >
            Pricing
          </Link>
          <Link href="/help" className="text-base font-medium text-[#111]" onClick={() => setOpen(false)}>
            Help
          </Link>

          <div className="mt-2 space-y-4 border-t border-black/10 pt-4">
            {dropdowns.map((d) => (
              <div key={d.label}>
                <p className="text-sm font-semibold text-[#111]/70">{d.label}</p>
                <div className="mt-2 flex flex-col gap-2">
                  {d.items.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="text-base font-medium text-[#111]"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-2 grid gap-3">
            <LinkButton href="https://app.relyd.co" external variant="secondary" className="w-full">
              Login
            </LinkButton>
            <LinkButton href="https://app.relyd.co" external variant="primary" className="w-full">
              Start now
            </LinkButton>
          </div>
        </Container>
      </div>
    </header>
  );
}
