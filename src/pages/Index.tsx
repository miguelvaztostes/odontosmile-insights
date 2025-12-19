import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CostCard from "@/components/CostCard";
import CostChart from "@/components/CostChart";
import TopResourcesCard from "@/components/TopResourcesCard";
import OptimizationCard from "@/components/OptimizationCard";
import SustainabilityCard from "@/components/SustainabilityCard";
import MonthlyBarChart from "@/components/MonthlyBarChart";
import ResourceGroupTable from "@/components/ResourceGroupTable";
import HorizontalBarChart from "@/components/HorizontalBarChart";
import ServiceBarChart from "@/components/ServiceBarChart";
import FloatingElements from "@/components/FloatingElements";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen gradient-bg relative">
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
              details={[
                { label: "Compute", value: "R$ 12.450,00" },
                { label: "Storage", value: "R$ 5.230,00" },
                { label: "Network", value: "R$ 4.120,00" },
                { label: "Outros", value: "R$ 2.600,00" },
              ]}
            />
            <CostCard
              title="Mês Atual"
              subtitle="Custo acumulado Dezembro"
              value="R$ 78.320,45"
              description="Baseado em Azure Cost: Get monthly costs"
              trend="neutral"
              trendValue="≈ previsão"
              delay="0.2"
              details={[
                { label: "Dias faturados", value: "19 dias" },
                { label: "Média diária", value: "R$ 4.122,13" },
                { label: "Pico diário", value: "R$ 5.890,00" },
              ]}
            />
            <CostCard
              title="Previsão"
              subtitle="Estimativa fim do mês"
              value="R$ 98.500,00"
              description="Projeção baseada no consumo atual"
              trend="up"
              trendValue="+3%"
              delay="0.3"
              details={[
                { label: "Budget definido", value: "R$ 100.000,00" },
                { label: "Utilizado", value: "78.3%" },
                { label: "Margem", value: "R$ 1.500,00" },
              ]}
            />
          </div>

          {/* Charts and Resources */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <CostChart />
            <TopResourcesCard />
          </div>

          {/* Monthly Bar Chart */}
          <div className="mb-8">
            <MonthlyBarChart />
          </div>

          {/* Resource Group Table */}
          <div className="mb-8">
            <ResourceGroupTable />
          </div>

          {/* Horizontal Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <HorizontalBarChart />
            <ServiceBarChart />
          </div>

          {/* Optimization and Sustainability */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <OptimizationCard />
            <SustainabilityCard />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
