import { Button } from "@/components/ui/button";
import { ShoppingBag, Sparkles } from "lucide-react";
import restauranteInterior from "@/assets/restaurante-interior.jpg";

export const HeroSection = () => {
  const handleDeliveryClick = () => {
    window.open("https://qro.go.link/ecoBc", "_blank");
  };

  const scrollToMenu = () => {
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={restauranteInterior} 
          alt="Restaurante Lagarttus" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-2xl animate-fade-in">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="h-5 w-5 text-primary animate-pulse" />
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Bem-vindo ao Lagarttus
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Sabor e Tradição em{" "}
            <span className="gradient-text">Cada Prato</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            Há mais de 6 anos servindo comida caseira e petiscos para amigos e família. 
            Do sushi ao espetinho, do caldinho aos drinks, temos opções para todos os gostos.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button 
              onClick={handleDeliveryClick}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow hover-lift text-lg px-8"
            >
              <ShoppingBag className="mr-2 h-5 w-5" />
              Pedir Delivery
            </Button>
            <Button 
              onClick={scrollToMenu}
              size="lg"
              variant="outline"
              className="hover-lift text-lg px-8"
            >
              Ver Cardápio
            </Button>
          </div>

          <div className="flex items-center gap-6 mt-8 pt-8 border-t border-border/50">
            <div>
              <div className="text-3xl font-bold gradient-text">6+</div>
              <div className="text-sm text-muted-foreground">Anos de Tradição</div>
            </div>
            <div className="h-12 w-px bg-border" />
            <div>
              <div className="text-3xl font-bold gradient-text">100+</div>
              <div className="text-sm text-muted-foreground">Itens no Cardápio</div>
            </div>
            <div className="h-12 w-px bg-border" />
            <div>
              <div className="text-3xl font-bold gradient-text">Amstel</div>
              <div className="text-sm text-muted-foreground">Parceiro Oficial</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
