import { cn } from "@/lib/cn";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function Container({ children, className }: Props) {
  return <div className={cn("mx-auto w-full max-w-7xl px-6 md:px-10", className)}>{children}</div>;
}

