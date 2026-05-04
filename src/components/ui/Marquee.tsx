import { cn } from "@/lib/cn";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function Marquee({ children, className }: Props) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div className="flex w-max min-w-full shrink-0 animate-marquee gap-12 md:gap-16">
        {children}
        {children}
      </div>
    </div>
  );
}
