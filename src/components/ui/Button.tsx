"use client";

import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary";

const base =
  "inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-medium transition-all duration-300 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "bg-linear-to-b from-[#111] to-[#000] text-white shadow-[0_10px_20px_rgba(0,0,0,0.18)] hover:scale-[1.03] hover:brightness-110 hover:shadow-md focus-visible:outline-black",
  secondary:
    "border border-gray-300 bg-white text-[#111] shadow-[0_1px_0_rgba(0,0,0,0.02)] hover:scale-[1.02] hover:bg-gray-50 focus-visible:outline-black",
};

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

export function Button({ className, variant = "primary", type = "button", ...props }: ButtonProps) {
  return <button type={type} className={cn(base, variants[variant], className)} {...props} />;
}
