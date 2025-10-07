import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { PromotionCard } from "@/components/PromotionCard";
import { ProductCard } from "@/components/ProductCard";
import { ProductModal } from "@/components/ProductModal";
import { Footer } from "@/components/Footer";
import { LocationSection } from "@/components/LocationSection";
import { AboutSection } from "@/components/AboutSection";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star } from "lucide-react";
import { products, Product, foodCategories, drinkCategories } from "@/data/products";

const Index = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("Destaques da Casa");
  const [activeTab, setActiveTab] = useState<string>("comidas");
  const [isTuesday, setIsTuesday] = useState(false);
  const [isWednesday, setIsWednesday] = useState(false);

  useEffect(() => {
    const today = new Date().getDay();
    setIsTuesday(today === 2); // Tuesday = 2
    setIsWednesday(today === 3); // Wednesday = 3
  }, []);

  // Reset category to "Destaques da Casa" when switching between food and drinks
  useEffect(() => {
    setSelectedCategory("Destaques da Casa");
  }, [activeTab]);

  const featuredFoodIds = ['ham-002', 'tg-014', 'esg-006', 'esg-002', 'esg-006'];
  const featuredDrinkIds = ['cer-001', 'dri-001', 'dri-002', 'dri-003', 'dri-010'];
  
  const filteredProducts =
    selectedCategory === "all"
      ? products
      : selectedCategory === "Destaques da Casa"
      ? products.filter(p => 
          activeTab === "comidas" 
            ? featuredFoodIds.includes(p.id)
            : featuredDrinkIds.includes(p.id)
        )
      : products.filter((p) => p.category === selectedCategory);

  const scrollToCategory = (category: string) => {
    setSelectedCategory(category);
    setTimeout(() => {
      document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Promotions Section */}
      <section className="py-16 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">
              Promoções Especiais
            </h2>
            <p className="text-lg text-muted-foreground">
              Aproveite nossas ofertas imperdíveis!
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <PromotionCard
              day="tuesday"
              title="Terça do Sushi"
              originalPrice={1.99}      // preço antigo
              discountedPrice={0.99}    // preço de hoje
              isToday={isTuesday}
            />
            <PromotionCard
              day="wednesday"
              title="Quarta do Pastel"
              description="50% OFF"
              isToday={isWednesday}
            />
            <PromotionCard
              day="chopp"
              title="Chopp Amstel"
              description="Por apenas R$9,99"
            />
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Nosso Cardápio</h2>
            <p className="text-lg text-muted-foreground">
              Pratos preparados com carinho e ingredientes selecionados
            </p>
          </div>

          {/* Tabs for Food and Drinks */}
          <Tabs defaultValue="comidas" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="comidas" className="text-lg">
                Comidas
              </TabsTrigger>
              <TabsTrigger value="bebidas" className="text-lg">
                Bebidas
              </TabsTrigger>
            </TabsList>

            <TabsContent value="comidas" className="animate-fade-in">
              {/* Category Navigation - Food */}
              <div className="mb-8">
                <div className="flex flex-wrap gap-2 justify-center">
                  <Button
                    variant={selectedCategory === "Destaques da Casa" ? "default" : "outline"}
                    onClick={() => scrollToCategory("Destaques da Casa")}
                    className="shadow-sm"
                  >
                    Destaques da Casa
                  </Button>
                  {foodCategories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      onClick={() => scrollToCategory(category)}
                      className="shadow-sm"
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Products Grid */}
              <div id="products" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product, index) => (
                  <div 
                    key={product.id}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <ProductCard
                      product={product}
                      onClick={() => setSelectedProduct(product)}
                    />
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="bebidas" className="animate-fade-in">
              {/* Category Navigation - Drinks */}
              <div className="mb-8">
                <div className="flex flex-wrap gap-2 justify-center">
                  <Button
                    variant={selectedCategory === "Destaques da Casa" ? "default" : "outline"}
                    onClick={() => scrollToCategory("Destaques da Casa")}
                    className="shadow-sm"
                  >
                    Destaques da Casa
                  </Button>
                  {drinkCategories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      onClick={() => scrollToCategory(category)}
                      className="shadow-sm"
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product, index) => (
                  <div 
                    key={product.id}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <ProductCard
                      product={product}
                      onClick={() => setSelectedProduct(product)}
                    />
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Location & Contact Section */}
      <LocationSection />

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          {/* Header with Stats */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4 text-sm font-semibold">
              <Star className="h-4 w-4 fill-primary" />
              Avaliações Verificadas
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Depoimentos de Clientes
            </h2>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-8 w-8 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-3xl font-bold">4.6</span>
            </div>
            <p className="text-lg text-muted-foreground">
              Baseado em <span className="font-semibold text-foreground">650+ avaliações</span> do Google Maps
            </p>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-16">
            <Card className="p-6 hover-lift shadow-card transition-smooth border-2 hover:border-primary/20 bg-card/80 backdrop-blur-sm">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-4">
                  <Avatar className="h-14 w-14 bg-gradient-to-br from-primary/20 to-primary/10 border-2 border-primary/20">
                    <AvatarFallback className="text-primary font-bold text-lg">MS</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h4 className="font-bold text-base mb-1">Maria Silva</h4>
                    <div className="flex gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-xs flex-wrap">
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">Cliente Frequente</span>
                      <span className="text-muted-foreground">• 156 visitas</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Ambiente acolhedor e comida excelente! Os espetinhos são sensacionais e o atendimento é sempre atencioso. Recomendo!
              </p>
              <div className="flex items-center justify-between pt-3 border-t">
                <Button variant="ghost" size="sm" className="text-xs h-8 hover:bg-primary/10 gap-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lov-id="src/pages/Index.tsx:323:18" data-lov-name="ThumbsUp" data-component-path="src/pages/Index.tsx" data-component-line="323" data-component-file="Index.tsx" data-component-name="ThumbsUp" data-component-content="%7B%22className%22%3A%22h-3.5%20w-3.5%22%7D"><path d="M7 10v12"></path><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"></path></svg>
                   Útil (23)
                </Button>
                <span className="text-xs text-muted-foreground">há 2 semanas</span>
              </div>
            </Card>

            <Card className="p-6 hover-lift shadow-card transition-smooth border-2 hover:border-primary/20 bg-card/80 backdrop-blur-sm">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-4">
                  <Avatar className="h-14 w-14 bg-gradient-to-br from-blue-500/20 to-blue-500/10 border-2 border-blue-500/20">
                    <AvatarFallback className="text-blue-600 font-bold text-lg">CO</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h4 className="font-bold text-base mb-1">Carlos Oliveira</h4>
                    <div className="flex gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="text-muted-foreground">53 visitas</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Melhor restaurante da região! O atendimento é de primeira, ambiente aconchegante, pratos bem elaborados e preço justo.
              </p>
              <div className="flex items-center justify-between pt-3 border-t">
                <Button variant="ghost" size="sm" className="text-xs h-8 hover:bg-primary/10 gap-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lov-id="src/pages/Index.tsx:323:18" data-lov-name="ThumbsUp" data-component-path="src/pages/Index.tsx" data-component-line="323" data-component-file="Index.tsx" data-component-name="ThumbsUp" data-component-content="%7B%22className%22%3A%22h-3.5%20w-3.5%22%7D"><path d="M7 10v12"></path><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"></path></svg>
                   Útil (18)
                </Button>
                <span className="text-xs text-muted-foreground">há 2 semanas</span>
              </div>
            </Card>

            <Card className="p-6 hover-lift shadow-card transition-smooth border-2 hover:border-primary/20 bg-card/80 backdrop-blur-sm">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-4">
                  <Avatar className="h-14 w-14 bg-gradient-to-br from-pink-500/20 to-pink-500/10 border-2 border-pink-500/20">
                    <AvatarFallback className="text-pink-600 font-bold text-lg">PL</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h4 className="font-bold text-base mb-1">Patricia Lima</h4>
                    <div className="flex gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-xs flex-wrap">
                      <span className="text-muted-foreground">21 visitas</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Que achado! Descobri por acaso e me surpreendi positivamente. Os pratos são muito bem servidos e saborosos. Com certeza voltaremos mais vezes
              </p>
              <div className="flex items-center justify-between pt-3 border-t">
                <Button variant="ghost" size="sm" className="text-xs h-8 hover:bg-primary/10 gap-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lov-id="src/pages/Index.tsx:323:18" data-lov-name="ThumbsUp" data-component-path="src/pages/Index.tsx" data-component-line="323" data-component-file="Index.tsx" data-component-name="ThumbsUp" data-component-content="%7B%22className%22%3A%22h-3.5%20w-3.5%22%7D"><path d="M7 10v12"></path><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"></path></svg>
                   Útil (31)
                </Button>
                <span className="text-xs text-muted-foreground">há 1 semana</span>
              </div>
            </Card>

          </div>

          {/* CTA Box */}
          <div className="max-w-3xl mx-auto">
            <Card className="p-10 text-center bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-2 border-primary/20 shadow-xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <Star className="h-8 w-8 text-primary fill-primary" />
              </div>
              <h3 className="text-3xl font-bold mb-3">Gostou da sua experiência?</h3>
              <p className="text-lg text-muted-foreground mb-2">Sua opinião é muito importante para nós!</p>
              <p className="text-sm text-muted-foreground mb-8 max-w-xl mx-auto">
                Avaliações ajudam outros clientes a conhecer nosso trabalho e nos motivam a melhorar sempre nosso atendimento e qualidade.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=Restaurante+Lagarttus', '_blank')}
                  className="gap-2 text-base px-8 h-12 shadow-lg hover:shadow-xl transition-all"
                >
                  <Star className="h-5 w-5 fill-current" />
                  Avaliar no Google Maps
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

<div style={{ width: "100%", height: "0.3rem", background: "linear-gradient(90deg, #FFD700, #F7B008,  #ffd500ff )"}} />
     
      <Footer />

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        open={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
};

export default Index;
