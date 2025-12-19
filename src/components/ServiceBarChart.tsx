import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { useState } from "react";

const data = [
  { name: "Azure App Service", value: 8420 },
  { name: "Azure Cosmos DB", value: 6890 },
  { name: "API Management", value: 5340 },
  { name: "Bandwidth", value: 4720 },
  { name: "Azure Kubernetes Service", value: 4180 },
  { name: "SQL Database", value: 3650 },
  { name: "Virtual Machines", value: 3120 },
  { name: "Container Registry", value: 2580 },
  { name: "Azure DevOps", value: 2140 },
  { name: "Azure Front Door Service", value: 1890 },
].reverse();

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-card rounded-xl p-4 border border-border/50 shadow-lg">
        <p className="text-xs font-medium text-muted-foreground mb-1">{payload[0].payload.name}</p>
        <p className="text-lg font-bold gradient-text">
          R$ {payload[0].value.toLocaleString("pt-BR")}
        </p>
      </div>
    );
  }
  return null;
};

const ServiceBarChart = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="glass-card-hover rounded-2xl p-6 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}>
      <div className="text-center mb-6">
        <h2 className="text-xl md:text-2xl font-bold italic gradient-text mb-2">
          R$ Acumulado Mensal / Top 10 maiores custos por Serviço
        </h2>
        <p className="text-xs text-muted-foreground">
          Mês 2025.12 - Comparando assinaturas <span className="text-odonto-primary font-medium">Prod</span> (odontoprev.aks.prd.azure_digital.finops)
        </p>
        <div className="flex items-center justify-center gap-4 mt-3">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-gradient-to-r from-odonto-primary to-odonto-secondary" />
            <span className="text-sm text-muted-foreground">Prod</span>
          </div>
        </div>
      </div>

      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart 
            data={data} 
            layout="vertical"
            margin={{ top: 5, right: 60, left: 10, bottom: 5 }}
          >
            <XAxis 
              type="number" 
              axisLine={false} 
              tickLine={false}
              tick={{ fill: "hsl(214, 30%, 45%)", fontSize: 10 }}
              domain={[0, 'dataMax']}
            />
            <YAxis 
              type="category" 
              dataKey="name" 
              axisLine={false} 
              tickLine={false}
              tick={{ fill: "hsl(214, 30%, 45%)", fontSize: 10 }}
              width={160}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'hsl(211, 100%, 50%, 0.08)' }} />
            <Bar 
              dataKey="value" 
              radius={[0, 6, 6, 0]}
              onMouseEnter={(_, index) => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {data.map((_, index) => (
                <Cell 
                  key={`cell-${index}`}
                  fill={activeIndex === index ? "hsl(212, 100%, 60%)" : "hsl(212, 100%, 66%)"}
                  style={{ transition: 'all 0.3s ease', cursor: 'pointer' }}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ServiceBarChart;
