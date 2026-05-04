import { cn } from "@/lib/cn";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function Badge({ children, className }: Props) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-black/10 bg-white/80 px-3 py-1 text-xs font-medium uppercase tracking-wide text-[#111]",
        className,
      )}
    >
      {children}
    </span>
  );
}
