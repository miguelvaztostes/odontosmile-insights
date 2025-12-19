import { Leaf, Droplets, Zap } from "lucide-react";

const SustainabilityCard = () => {
  return (
    <div
      className="glass-card-hover rounded-2xl p-6 opacity-0 animate-fade-in-up lg:col-span-2"
      style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center">
          <Leaf className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground">Sustentabilidade</h3>
          <p className="text-sm text-muted-foreground">Impacto ambiental Azure</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100">
          <div className="flex items-center gap-2 mb-2">
            <Leaf className="w-4 h-4 text-green-600" />
            <span className="text-sm font-medium text-green-700">CO₂ Equivalente</span>
          </div>
          <p className="text-2xl font-bold text-green-700">42 kg</p>
          <p className="text-xs text-green-600">este mês</p>
        </div>

        <div className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100">
          <div className="flex items-center gap-2 mb-2">
            <Droplets className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">Água Economizada</span>
          </div>
          <p className="text-2xl font-bold text-blue-700">1.2k L</p>
          <p className="text-xs text-blue-600">vs on-premises</p>
        </div>

        <div className="p-4 rounded-xl bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-100">
          <div className="flex items-center gap-2 mb-2">
            <Zap className="w-4 h-4 text-amber-600" />
            <span className="text-sm font-medium text-amber-700">Energia Renovável</span>
          </div>
          <p className="text-2xl font-bold text-amber-700">87%</p>
          <p className="text-xs text-amber-600">datacenter Brasil</p>
        </div>
      </div>
    </div>
  );
};

export default SustainabilityCard;
