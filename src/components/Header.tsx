import { Phone, Instagram, ShoppingBag } from "lucide-react";
import { Button } from "./ui/button";

export const Header = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5579988165260", "_blank");
  };

  const handleDeliveryClick = () => {
    window.open("https://qro.go.link/ecoBc", "_blank");
  };

  const handleInstagramClick = () => {
    window.open("https://instagram.com/lagarttus", "_blank");
  };

  const scrollToMenu = () => {
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 bg-background border-b shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src="https://i.imgur.com/XpSW1Po.png" alt="Lagarttus" className="h-12 w-auto" />
            <div>
              <h1 className="text-xl sm:text-2xl font-bold">Lagarttus</h1>
              <p className="text-xs text-muted-foreground hidden sm:block">Lagarto - SE</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2 text-sm">
            <span className="text-muted-foreground">Patrocínio:</span>
            <img src="https://logodownload.org/wp-content/uploads/2022/01/amstel-logo.png" alt="Amstel" className="h-8 w-auto" />
          </div>

          <div className="flex items-center gap-2">
            <Button onClick={scrollToMenu} variant="outline" size="sm" className="hidden md:inline-flex">
              Ver Cardápio
            </Button>
            <Button onClick={handleDeliveryClick} className="bg-primary hover:bg-primary/90 text-primary-foreground" size="sm">
              <ShoppingBag className="h-4 w-4 mr-2" />
              Delivery
            </Button>
            <Button onClick={handleWhatsAppClick} variant="outline" size="icon" className="md:hidden">
              <Phone className="h-4 w-4" />
            </Button>
            <Button onClick={handleInstagramClick} variant="outline" size="icon" className="md:hidden">
              <Instagram className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="md:hidden mt-3 flex items-center gap-2 justify-center text-sm">
          <span className="text-muted-foreground">Patrocínio:</span>
          <img src="https://logodownload.org/wp-content/uploads/2022/01/amstel-logo.png" alt="Amstel" className="h-6 w-auto" />
        </div>
      </div>
      <div style={{ width: "100%", height: "0.2rem", background: "linear-gradient(90deg, #FFD700, #F7B008,  #ffd500ff )"}} />
    </header>
  );
};
