import { useState } from "react";
import { cn } from "@/lib/utils";
import { TrendingUp, TrendingDown, Minus, Info, ChevronDown, ChevronUp } from "lucide-react";

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
  details?: { label: string; value: string }[];
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
  details,
}: CostCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  
  const TrendIcon = trend === "up" ? TrendingUp : trend === "down" ? TrendingDown : Minus;
  const trendColor = trend === "up" ? "text-destructive" : trend === "down" ? "text-green-500" : "text-muted-foreground";

  return (
    <div
      className={cn(
        "glass-card rounded-2xl p-6 opacity-0 animate-fade-in-up transition-all duration-500",
        "hover:shadow-hover hover:-translate-y-1",
        isPrimary && "md:col-span-2 lg:col-span-1 ring-2 ring-odonto-primary/20",
        isExpanded && "ring-2 ring-odonto-secondary/30",
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
        <div className="flex items-center gap-2">
          {trendValue && (
            <div className={cn("flex items-center gap-1 text-sm font-medium", trendColor)}>
              <TrendIcon className="w-4 h-4" />
              <span>{trendValue}</span>
            </div>
          )}
          <div className="relative">
            <button
              className="p-1.5 rounded-full hover:bg-muted/50 transition-colors"
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              <Info className="w-4 h-4 text-muted-foreground" />
            </button>
            {showTooltip && (
              <div className="absolute right-0 top-full mt-2 w-48 p-3 glass-card rounded-lg shadow-lg z-10 animate-fade-in">
                <p className="text-xs text-muted-foreground">
                  Dados baseados em Azure Cost Management API
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mb-3">
        <span className={cn(
          "text-3xl md:text-4xl font-bold transition-all duration-300",
          isPrimary ? "gradient-text" : "text-foreground"
        )}>
          {value}
        </span>
      </div>

      {description && (
        <p className="text-xs text-muted-foreground line-clamp-2 mb-3">
          {description}
        </p>
      )}

      {details && details.length > 0 && (
        <>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-1 text-xs font-medium text-odonto-primary hover:text-odonto-secondary transition-colors"
          >
            {isExpanded ? (
              <>
                <ChevronUp className="w-3 h-3" />
                Menos detalhes
              </>
            ) : (
              <>
                <ChevronDown className="w-3 h-3" />
                Mais detalhes
              </>
            )}
          </button>
          
          {isExpanded && (
            <div className="mt-3 pt-3 border-t border-border/50 space-y-2 animate-fade-in">
              {details.map((detail, index) => (
                <div key={index} className="flex justify-between text-xs">
                  <span className="text-muted-foreground">{detail.label}</span>
                  <span className="font-medium text-foreground">{detail.value}</span>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CostCard;
