import { cn } from "@/lib/cn";

type Props = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: "section" | "div" | "footer" | "header";
};

export function Section({ children, className, id, as: Tag = "section" }: Props) {
  return (
    <Tag id={id} className={cn("w-full", className)}>
      {children}
    </Tag>
  );
}
