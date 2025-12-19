import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { useState } from "react";

const data = [
  { name: "rg_odonto_portal_prd", value: 4526 },
  { name: "rg_odonto_api_prd", value: 3855 },
  { name: "rg_odonto_database_prd", value: 3247 },
  { name: "rg_odonto_analytics_prd", value: 2927 },
  { name: "rg_odonto_storage_prd", value: 2127 },
  { name: "rg_odonto_network_prd", value: 1923 },
  { name: "rg_odonto_security_prd", value: 1721 },
  { name: "rg_odonto_backup_prd", value: 1518 },
  { name: "rg_odonto_monitoring_prd", value: 1317 },
  { name: "rg_odonto_devops_prd", value: 1215 },
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

const HorizontalBarChart = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="glass-card-hover rounded-2xl p-6 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}>
      <div className="text-center mb-6">
        <h2 className="text-xl md:text-2xl font-bold italic gradient-text mb-2">
          R$ Acumulado Mensal / Grupos de Recurso / Top 10
        </h2>
        <p className="text-xs text-muted-foreground">
          Considerando o último custo registrado para cada Resource Group
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
              width={150}
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
                  fill={activeIndex === index ? "hsl(211, 100%, 40%)" : "hsl(211, 100%, 50%)"}
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

export default HorizontalBarChart;
