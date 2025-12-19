import { Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative z-10 text-center py-8 animate-fade-in-up">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-odonto-light/50 border border-odonto-secondary/20 mb-6">
        <Sparkles className="w-4 h-4 text-odonto-primary" />
        <span className="text-sm font-medium text-odonto-dark">Azcorp Tech</span>
      </div>
      
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
        <span className="gradient-text">FinOps Azure</span>
        <br />
        <span className="text-foreground">Odontoprev</span>
      </h1>
      
      <div className="flex items-center justify-center gap-3 text-sm font-medium text-muted-foreground tracking-widest uppercase mb-4">
        <span>Custos</span>
        <span className="w-1.5 h-1.5 rounded-full bg-odonto-primary" />
        <span>Otimização</span>
        <span className="w-1.5 h-1.5 rounded-full bg-odonto-primary" />
        <span>Sustentabilidade em Nuvem</span>
      </div>
      
      <p className="text-muted-foreground max-w-xl mx-auto">
        Painel desenvolvido pela Azcorp Tech • visão consolidada das assinaturas Azure
      </p>
    </div>
  );
};

export default HeroSection;
