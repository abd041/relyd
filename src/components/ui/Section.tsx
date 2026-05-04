import { cn } from "@/lib/cn";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function Section({ children, className }: Props) {
  return <section className={cn("py-20 md:py-28", className)}>{children}</section>;
}

