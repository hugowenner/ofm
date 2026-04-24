import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  kicker?: string;
  title: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  kicker,
  title,
  subtitle,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "section-header",
        align === "left" ? "text-left" : "text-center",
        className
      )}
    >
      {kicker && <p className="section-kicker">{kicker}</p>}
      <h2 className="section-title text-balance">{title}</h2>
      {subtitle && <p className="section-subtitle text-balance">{subtitle}</p>}
      {description && <p className="section-lead text-balance">{description}</p>}
    </div>
  );
}
