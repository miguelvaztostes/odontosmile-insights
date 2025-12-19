import { Cloud, DollarSign, TrendingUp, Server, Database, Zap, Heart, Shield, Activity, Cpu, HardDrive, Globe } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface FloatingIcon {
  Icon: LucideIcon;
  className: string;
  animation: string;
  size: string;
  opacity: string;
}

const floatingIcons: FloatingIcon[] = [
  { Icon: Cloud, className: "top-32 left-[8%]", animation: "animate-float", size: "w-8 h-8", opacity: "opacity-30" },
  { Icon: DollarSign, className: "top-40 right-[15%]", animation: "animate-float-delayed", size: "w-6 h-6", opacity: "opacity-25" },
  { Icon: TrendingUp, className: "top-60 left-[5%]", animation: "animate-float-slow", size: "w-7 h-7", opacity: "opacity-35" },
  { Icon: Server, className: "bottom-[60%] left-[20%]", animation: "animate-float", size: "w-5 h-5", opacity: "opacity-20" },
  { Icon: Database, className: "top-48 right-[8%]", animation: "animate-float-slow", size: "w-6 h-6", opacity: "opacity-30" },
  { Icon: Zap, className: "bottom-[70%] right-[25%]", animation: "animate-float-delayed", size: "w-5 h-5", opacity: "opacity-25" },
  { Icon: Heart, className: "top-[20%] left-[30%]", animation: "animate-float", size: "w-5 h-5", opacity: "opacity-20" },
  { Icon: Shield, className: "bottom-[50%] right-[12%]", animation: "animate-float-slow", size: "w-6 h-6", opacity: "opacity-25" },
  { Icon: Activity, className: "top-[35%] right-[30%]", animation: "animate-float-delayed", size: "w-5 h-5", opacity: "opacity-20" },
  { Icon: Cpu, className: "bottom-[40%] left-[10%]", animation: "animate-float", size: "w-6 h-6", opacity: "opacity-30" },
  { Icon: HardDrive, className: "top-[45%] left-[25%]", animation: "animate-float-slow", size: "w-5 h-5", opacity: "opacity-20" },
  { Icon: Globe, className: "bottom-[55%] right-[5%]", animation: "animate-float-delayed", size: "w-7 h-7", opacity: "opacity-25" },
];

const FloatingElements = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Gradient orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-odonto-secondary/15 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-40 right-20 w-[500px] h-[500px] bg-odonto-primary/10 rounded-full blur-3xl animate-pulse-slow animation-delay-200" />
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-odonto-glow/8 rounded-full blur-3xl animate-pulse-slow animation-delay-400" />
      <div className="absolute top-[30%] right-[10%] w-64 h-64 bg-odonto-secondary/10 rounded-full blur-3xl animate-pulse-slow" />
      
      {/* Floating icons */}
      {floatingIcons.map(({ Icon, className, animation, size, opacity }, index) => (
        <div key={index} className={`absolute ${className} ${animation} ${opacity}`}>
          <Icon className={`${size} text-odonto-primary`} />
        </div>
      ))}

      {/* Decorative grid */}
      <svg className="absolute top-0 left-0 w-full h-full opacity-[0.02]">
        <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" className="text-odonto-dark"/>
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Animated lines */}
      <svg className="absolute top-0 left-0 w-full h-full opacity-[0.04]">
        <path
          d="M0,100 Q400,50 800,150 T1600,100"
          fill="none"
          stroke="hsl(var(--odonto-primary))"
          strokeWidth="2"
          className="animate-pulse-slow"
        />
        <path
          d="M0,200 Q500,150 1000,250 T2000,200"
          fill="none"
          stroke="hsl(var(--odonto-secondary))"
          strokeWidth="1.5"
          className="animate-pulse-slow animation-delay-200"
        />
      </svg>
    </div>
  );
};

export default FloatingElements;
