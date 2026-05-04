import { cn } from "@/lib/cn";
import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "inline-flex items-center justify-center rounded-xl bg-linear-to-b from-[#111] to-[#000] px-6 py-3 text-sm font-medium text-white shadow-[0_10px_20px_rgba(0,0,0,0.18)] transition-all duration-300 ease-out hover:scale-[1.03] hover:brightness-110 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",
  secondary:
    "inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-[#111] shadow-[0_1px_0_rgba(0,0,0,0.02)] transition-all duration-300 ease-out hover:scale-[1.02] hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",
  ghost:
    "inline-flex items-center justify-center rounded-xl px-3 py-2 text-sm font-medium text-[#111] underline-offset-4 transition-all duration-300 ease-out hover:bg-black/5 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",
};

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
};

export function LinkButton({ href, children, variant = "primary", className, external }: Props) {
  const classes = cn(variants[variant], className);
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
