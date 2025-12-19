import { Lightbulb, ArrowRight, CheckCircle, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

const recommendations = [
  {
    title: "Redimensionar VMs subutilizadas",
    savings: 2400,
    status: "pending",
    impact: "high",
  },
  {
    title: "Reservar instâncias de banco",
    savings: 1800,
    status: "pending",
    impact: "medium",
  },
  {
    title: "Excluir discos órfãos",
    savings: 450,
    status: "done",
    impact: "low",
  },
];

const OptimizationCard = () => {
  const totalSavings = recommendations.reduce((acc, r) => acc + r.savings, 0);
  const pendingSavings = recommendations
    .filter((r) => r.status === "pending")
    .reduce((acc, r) => acc + r.savings, 0);

  return (
    <div
      className="glass-card-hover rounded-2xl p-6 opacity-0 animate-fade-in-up"
      style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-odonto-primary to-odonto-secondary flex items-center justify-center">
            <Lightbulb className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">Otimização</h3>
            <p className="text-sm text-muted-foreground">Recomendações ativas</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold gradient-text">
            R$ {pendingSavings.toLocaleString("pt-BR")}
          </p>
          <p className="text-xs text-muted-foreground">economia potencial</p>
        </div>
      </div>

      <div className="space-y-3">
        {recommendations.map((rec, index) => (
          <div
            key={rec.title}
            className={cn(
              "flex items-center justify-between p-3 rounded-xl transition-all duration-300",
              rec.status === "done"
                ? "bg-green-50 border border-green-200"
                : "bg-muted/50 hover:bg-muted border border-transparent"
            )}
          >
            <div className="flex items-center gap-3">
              {rec.status === "done" ? (
                <CheckCircle className="w-5 h-5 text-green-500" />
              ) : (
                <Clock className="w-5 h-5 text-odonto-primary" />
              )}
              <div>
                <p className={cn(
                  "text-sm font-medium",
                  rec.status === "done" ? "text-green-700" : "text-foreground"
                )}>
                  {rec.title}
                </p>
                <p className="text-xs text-muted-foreground">
                  Economia: R$ {rec.savings.toLocaleString("pt-BR")}/mês
                </p>
              </div>
            </div>
            {rec.status === "pending" && (
              <button className="p-2 rounded-lg bg-odonto-light hover:bg-odonto-primary hover:text-primary-foreground transition-all duration-300 group">
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OptimizationCard;
