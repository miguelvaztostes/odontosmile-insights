import { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronUp, ChevronDown, ExternalLink } from "lucide-react";

interface ResourceGroup {
  id: number;
  name: string;
  subscription: string;
  cost: number;
  variation: number;
}

const resourceGroups: ResourceGroup[] = [
  { id: 1, name: "rg_odonto_portal_prd", subscription: "Prod", cost: 4526, variation: 12.5 },
  { id: 2, name: "rg_odonto_api_prd", subscription: "Prod", cost: 3855, variation: -8.2 },
  { id: 3, name: "rg_odonto_database_prd", subscription: "Prod", cost: 3247, variation: 5.1 },
  { id: 4, name: "rg_odonto_analytics_prd", subscription: "Prod", cost: 2927, variation: -15.7 },
  { id: 5, name: "rg_odonto_storage_prd", subscription: "Prod", cost: 2127, variation: 3.0 },
  { id: 6, name: "rg_odonto_network_prd", subscription: "Prod", cost: 1923, variation: 0.5 },
  { id: 7, name: "rg_odonto_security_prd", subscription: "Prod", cost: 1721, variation: -2.8 },
  { id: 8, name: "rg_odonto_backup_prd", subscription: "Prod", cost: 1518, variation: 8.9 },
  { id: 9, name: "rg_odonto_monitoring_prd", subscription: "Prod", cost: 1317, variation: 1.2 },
  { id: 10, name: "rg_odonto_devops_prd", subscription: "Prod", cost: 1215, variation: -4.6 },
];

type SortField = "name" | "cost" | "variation";
type SortDirection = "asc" | "desc";

const ResourceGroupTable = () => {
  const [sortField, setSortField] = useState<SortField>("cost");
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc");
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("desc");
    }
  };

  const sortedData = [...resourceGroups].sort((a, b) => {
    const multiplier = sortDirection === "asc" ? 1 : -1;
    if (sortField === "name") {
      return multiplier * a.name.localeCompare(b.name);
    }
    return multiplier * (a[sortField] - b[sortField]);
  });

  const SortIcon = ({ field }: { field: SortField }) => {
    if (sortField !== field) return null;
    return sortDirection === "asc" ? (
      <ChevronUp className="w-4 h-4" />
    ) : (
      <ChevronDown className="w-4 h-4" />
    );
  };

  return (
    <div className="glass-card-hover rounded-2xl p-6 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
      <div className="flex items-start justify-between mb-6">
        <h2 className="text-2xl md:text-3xl font-bold italic gradient-text">
          Resource Group Name
        </h2>
        <div className="text-right text-xs text-muted-foreground">
          <p>Baseado em Azure Cost: Resource group (mês atual 2025.12)</p>
          <p>% Δ vs mês anterior 2025.11</p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border/50">
              <th className="text-left py-3 px-2 text-sm font-semibold text-muted-foreground w-12">#</th>
              <th 
                className="text-left py-3 px-2 text-sm font-semibold text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
                onClick={() => handleSort("name")}
              >
                <div className="flex items-center gap-1">
                  NOME
                  <SortIcon field="name" />
                </div>
              </th>
              <th className="text-center py-3 px-2 text-sm font-semibold text-muted-foreground">SUBSCRIPTION</th>
              <th 
                className="text-right py-3 px-2 text-sm font-semibold text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
                onClick={() => handleSort("cost")}
              >
                <div className="flex items-center justify-end gap-1">
                  R$
                  <SortIcon field="cost" />
                </div>
              </th>
              <th 
                className="text-right py-3 px-2 text-sm font-semibold text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
                onClick={() => handleSort("variation")}
              >
                <div className="flex items-center justify-end gap-1">
                  % Δ
                  <SortIcon field="variation" />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((rg, index) => (
              <tr 
                key={rg.id}
                className={cn(
                  "border-b border-border/30 transition-all duration-300 cursor-pointer",
                  hoveredRow === rg.id && "bg-odonto-light/50",
                  index % 2 === 0 ? "bg-transparent" : "bg-muted/20"
                )}
                onMouseEnter={() => setHoveredRow(rg.id)}
                onMouseLeave={() => setHoveredRow(null)}
              >
                <td className="py-3 px-2 text-sm font-medium text-muted-foreground">{index + 1}.</td>
                <td className="py-3 px-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-odonto-primary">{rg.name}</span>
                    {hoveredRow === rg.id && (
                      <ExternalLink className="w-3 h-3 text-muted-foreground animate-fade-in" />
                    )}
                  </div>
                </td>
                <td className="py-3 px-2 text-center">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-odonto-light text-odonto-dark">
                    {rg.subscription}
                  </span>
                </td>
                <td className="py-3 px-2 text-right text-sm font-semibold text-foreground">
                  R$ {rg.cost.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                </td>
                <td className={cn(
                  "py-3 px-2 text-right text-sm font-semibold",
                  rg.variation > 0 ? "text-destructive" : rg.variation < 0 ? "text-green-600" : "text-muted-foreground"
                )}>
                  {rg.variation > 0 ? "+" : ""}{rg.variation.toFixed(1)}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResourceGroupTable;
