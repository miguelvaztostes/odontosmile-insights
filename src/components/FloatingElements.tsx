import { Cloud, DollarSign, TrendingUp, Server, Database, Zap } from "lucide-react";

const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-odonto-secondary/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-40 right-20 w-96 h-96 bg-odonto-primary/15 rounded-full blur-3xl animate-pulse-slow animation-delay-200" />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-odonto-glow/10 rounded-full blur-3xl animate-pulse-slow animation-delay-400" />
      
      {/* Floating icons */}
      <div className="absolute top-32 left-[15%] animate-float opacity-40">
        <Cloud className="w-8 h-8 text-odonto-primary" />
      </div>
      <div className="absolute top-40 right-[20%] animate-float-delayed opacity-30">
        <DollarSign className="w-6 h-6 text-odonto-secondary" />
      </div>
      <div className="absolute top-60 left-[8%] animate-float-slow opacity-35">
        <TrendingUp className="w-7 h-7 text-odonto-dark" />
      </div>
      <div className="absolute bottom-40 left-[25%] animate-float opacity-25">
        <Server className="w-6 h-6 text-odonto-primary" />
      </div>
      <div className="absolute top-48 right-[10%] animate-float-slow opacity-40">
        <Database className="w-5 h-5 text-odonto-secondary" />
      </div>
      <div className="absolute bottom-60 right-[30%] animate-float-delayed opacity-30">
        <Zap className="w-6 h-6 text-odonto-dark" />
      </div>

      {/* Decorative lines */}
      <svg className="absolute top-0 left-0 w-full h-full opacity-[0.03]">
        <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" className="text-odonto-dark"/>
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
};

export default FloatingElements;
