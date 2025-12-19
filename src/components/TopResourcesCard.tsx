import { Server, Database, HardDrive, Globe, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

const resources = [
  { name: "Virtual Machines", cost: 8540, icon: Server, percentage: 35 },
  { name: "SQL Database", cost: 5230, icon: Database, percentage: 22 },
  { name: "Storage Account", cost: 3890, icon: HardDrive, percentage: 16 },
  { name: "App Services", cost: 3200, icon: Globe, percentage: 13 },
  { name: "Key Vault", cost: 1540, icon: Shield, percentage: 6 },
];

const TopResourcesCard = () => {
  return (
    <div
      className="glass-card-hover rounded-2xl p-6 opacity-0 animate-fade-in-up"
      style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Top Recursos</h3>
          <p className="text-sm text-muted-foreground">Por custo semanal</p>
        </div>
      </div>

      <div className="space-y-4">
        {resources.map((resource, index) => (
          <div key={resource.name} className="group">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <div className={cn(
                  "w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300",
                  "bg-odonto-light group-hover:bg-gradient-to-r group-hover:from-odonto-primary group-hover:to-odonto-secondary"
                )}>
                  <resource.icon className={cn(
                    "w-4 h-4 transition-colors duration-300",
                    "text-odonto-primary group-hover:text-primary-foreground"
                  )} />
                </div>
                <span className="text-sm font-medium text-foreground">{resource.name}</span>
              </div>
              <span className="text-sm font-semibold text-foreground">
                R$ {resource.cost.toLocaleString("pt-BR")}
              </span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-odonto-primary to-odonto-secondary rounded-full transition-all duration-500 ease-out"
                style={{
                  width: `${resource.percentage}%`,
                  transitionDelay: `${index * 100}ms`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopResourcesCard;
