import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CostCard from "@/components/CostCard";
import CostChart from "@/components/CostChart";
import TopResourcesCard from "@/components/TopResourcesCard";
import OptimizationCard from "@/components/OptimizationCard";
import SustainabilityCard from "@/components/SustainabilityCard";
import FloatingElements from "@/components/FloatingElements";

const Index = () => {
  return (
    <div className="min-h-screen gradient-bg relative overflow-hidden">
      <FloatingElements />
      
      <Header />
      
      <main className="relative z-10 px-4 md:px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <HeroSection />
          
          {/* Cost Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <CostCard
              title="PROD"
              subtitle="Custo semanal (últimos 7 dias)"
              value="R$ 24.400,00"
              description="odontoprev.aks.prd.azure_digital.finops"
              trend="down"
              trendValue="-8%"
              delay="0.1"
              isPrimary
            />
            <CostCard
              title="Mês Atual"
              subtitle="Custo acumulado Dezembro"
              value="R$ 78.320,45"
              description="Baseado em Azure Cost: Get monthly costs"
              trend="neutral"
              trendValue="≈ previsão"
              delay="0.2"
            />
            <CostCard
              title="Previsão"
              subtitle="Estimativa fim do mês"
              value="R$ 98.500,00"
              description="Projeção baseada no consumo atual"
              trend="up"
              trendValue="+3%"
              delay="0.3"
            />
          </div>

          {/* Charts and Resources */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <CostChart />
            <TopResourcesCard />
          </div>

          {/* Optimization and Sustainability */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <OptimizationCard />
            <SustainabilityCard />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-6 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Azcorp Tech • Dashboard FinOps para Odontoprev
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
