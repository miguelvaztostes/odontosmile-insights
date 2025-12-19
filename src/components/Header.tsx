import logo from "@/assets/logo-odontoprev.png";

const Header = () => {
  return (
    <header className="relative z-10 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Odontoprev" className="h-8 object-contain" />
        </div>
        
        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground">
            Ambiente: <span className="font-semibold text-foreground">Produção</span>
          </span>
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        </div>
      </div>
    </header>
  );
};

export default Header;
