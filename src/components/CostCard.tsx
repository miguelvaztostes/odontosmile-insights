import { cn } from "@/lib/utils";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

interface CostCardProps {
  title: string;
  subtitle: string;
  value: string;
  description?: string;
  trend?: "up" | "down" | "neutral";
  trendValue?: string;
  className?: string;
  delay?: string;
  isPrimary?: boolean;
}

const CostCard = ({
  title,
  subtitle,
  value,
  description,
  trend = "neutral",
  trendValue,
  className,
  delay = "0",
  isPrimary = false,
}: CostCardProps) => {
  const TrendIcon = trend === "up" ? TrendingUp : trend === "down" ? TrendingDown : Minus;
  const trendColor = trend === "up" ? "text-destructive" : trend === "down" ? "text-green-500" : "text-muted-foreground";

  return (
    <div
      className={cn(
        "glass-card-hover rounded-2xl p-6 opacity-0 animate-fade-in-up",
        isPrimary && "md:col-span-2 lg:col-span-1",
        className
      )}
      style={{ animationDelay: `${delay}s`, animationFillMode: "forwards" }}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <span className={cn(
            "inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2",
            isPrimary 
              ? "bg-gradient-to-r from-odonto-primary to-odonto-secondary text-primary-foreground"
              : "bg-odonto-light text-odonto-dark"
          )}>
            {title}
          </span>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        </div>
        {trendValue && (
          <div className={cn("flex items-center gap-1 text-sm font-medium", trendColor)}>
            <TrendIcon className="w-4 h-4" />
            <span>{trendValue}</span>
          </div>
        )}
      </div>

      <div className="mb-3">
        <span className={cn(
          "text-3xl md:text-4xl font-bold",
          isPrimary ? "gradient-text" : "text-foreground"
        )}>
          {value}
        </span>
      </div>

      {description && (
        <p className="text-xs text-muted-foreground line-clamp-2">
          {description}
        </p>
      )}
    </div>
  );
};

export default CostCard;
