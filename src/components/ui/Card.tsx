import { cn } from "@/lib/cn";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className }: Props) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-gray-200/50 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all duration-300 ease-out hover:-translate-y-1",
        className,
      )}
    >
      {children}
    </div>
  );
}
