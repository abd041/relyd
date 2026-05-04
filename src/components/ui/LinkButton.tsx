import { cn } from "@/lib/cn";
import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex min-h-11 shrink-0 items-center justify-center rounded-xl px-6 py-2.5 text-sm font-medium leading-none transition-all duration-300 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900";

const variants: Record<Variant, string> = {
  primary:
    "bg-linear-to-b from-gray-900 to-black text-white shadow-[0_8px_16px_rgba(0,0,0,0.06),0_2px_4px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.1),0_4px_8px_rgba(0,0,0,0.06)] hover:brightness-[1.06]",
  secondary:
    "border border-gray-200/50 bg-white text-gray-900 shadow-[0_1px_2px_rgba(0,0,0,0.04)] hover:border-gray-200 hover:bg-gray-50/80 hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)]",
  ghost:
    "text-gray-900 underline-offset-4 hover:bg-gray-100/80 hover:underline",
};

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
};

export function LinkButton({ href, children, variant = "primary", className, external }: Props) {
  const classes = cn(base, variants[variant], className);
  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
