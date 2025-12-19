import logo from "@/assets/logo-odontoprev.png";
import { Cloud, Heart, Shield, Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative mt-12">
      {/* Wave SVG */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none transform -translate-y-full">
        <svg
          className="relative block w-full h-24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="hsl(var(--odonto-primary))"
            opacity=".15"
          />
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            fill="hsl(var(--odonto-primary))"
            opacity=".3"
          />
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            fill="hsl(var(--odonto-primary))"
          />
        </svg>
      </div>

      {/* Footer content */}
      <div className="bg-odonto-primary pt-8 pb-6">
        <div className="max-w-7xl mx-auto px-6">
          {/* Floating icons */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center animate-float">
                <Heart className="w-5 h-5 text-primary-foreground" />
              </div>
            </div>
            
            {/* Center logo area */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-primary-foreground/10 flex items-center justify-center mb-3 backdrop-blur-sm border border-primary-foreground/20">
                <span className="text-primary-foreground font-bold text-sm text-center leading-tight">
                  AZCORP<br/>TECH
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center animate-float-delayed">
                <Shield className="w-5 h-5 text-primary-foreground" />
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 text-sm text-primary-foreground/80 tracking-widest uppercase mb-2">
              <span>FinOps</span>
              <span className="w-1 h-1 rounded-full bg-primary-foreground/60" />
              <span>Governança</span>
              <span className="w-1 h-1 rounded-full bg-primary-foreground/60" />
              <span>Observabilidade em Nuvem</span>
            </div>
            <p className="text-xs text-primary-foreground/60">
              Painel desenvolvido em parceria Odontoprev - Azure - AZCorp
            </p>
          </div>

          {/* Bottom decorations */}
          <div className="flex justify-between items-center mt-6 pt-4 border-t border-primary-foreground/10">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Odontoprev" className="h-6 brightness-0 invert opacity-60" />
            </div>
            <div className="flex items-center gap-4">
              <Sparkles className="w-4 h-4 text-primary-foreground/40 animate-pulse" />
              <Cloud className="w-4 h-4 text-primary-foreground/40 animate-pulse animation-delay-200" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
