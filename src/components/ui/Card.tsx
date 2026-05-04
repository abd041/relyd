import { cn } from "@/lib/cn";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const cardShadow =
  "shadow-[0_10px_20px_rgba(0,0,0,0.04),0_20px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_14px_28px_rgba(0,0,0,0.05),0_32px_56px_rgba(0,0,0,0.09)]";

export function Card({ children, className }: Props) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-gray-200/40 bg-white transition-all duration-300 ease-out hover:translate-y-[-4px]",
        cardShadow,
        className,
      )}
    >
      {children}
    </div>
  );
}
