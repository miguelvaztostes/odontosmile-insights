import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { useState } from "react";

const data = [
  { name: "Jan/25", custo: 82000 },
  { name: "Fev/25", custo: 78500 },
  { name: "Mar/25", custo: 91200 },
  { name: "Abr/25", custo: 95800 },
  { name: "Mai/25", custo: 88400 },
  { name: "Jun/25", custo: 84200 },
  { name: "Jul/25", custo: 86900 },
  { name: "Ago/25", custo: 79300 },
  { name: "Set/25", custo: 72100 },
  { name: "Out/25", custo: 68500 },
  { name: "Nov/25", custo: 64200 },
  { name: "Dez/25", custo: 58900 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-card rounded-xl p-4 border border-border/50 shadow-lg">
        <p className="text-sm font-semibold text-foreground mb-1">{label}</p>
        <p className="text-xl font-bold gradient-text">
          R$ {payload[0].value.toLocaleString("pt-BR")}
        </p>
      </div>
    );
  }
  return null;
};

const MonthlyBarChart = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="glass-card-hover rounded-2xl p-6 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold italic gradient-text mb-2">
          R$ Acumulado Mensal / Subscrição (Últimos 12 meses)
        </h2>
        <div className="flex items-center justify-center gap-4 mt-4">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-gradient-to-r from-odonto-primary to-odonto-secondary" />
            <span className="text-sm text-muted-foreground">Prod</span>
          </div>
        </div>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(210, 40%, 90%)" vertical={false} />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false}
              tick={{ fill: "hsl(214, 30%, 45%)", fontSize: 11 }}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false}
              tick={{ fill: "hsl(214, 30%, 45%)", fontSize: 11 }}
              tickFormatter={(value) => `${value / 1000} mil`}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'hsl(211, 100%, 50%, 0.1)' }} />
            <Bar 
              dataKey="custo" 
              radius={[8, 8, 0, 0]}
              onMouseEnter={(_, index) => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {data.map((_, index) => (
                <Cell 
                  key={`cell-${index}`}
                  fill={activeIndex === index ? "hsl(211, 100%, 45%)" : "hsl(211, 100%, 50%)"}
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

export default MonthlyBarChart;
