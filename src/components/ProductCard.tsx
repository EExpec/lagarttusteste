import { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { Product } from "@/data/products";
import { useLikes } from "@/hooks/useLikes";
import { Clock, Sparkles } from "lucide-react";

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export const ProductCard = ({ product, onClick }: ProductCardProps) => {
  const { likes, isLiked, toggleLike } = useLikes(product.id, product.initialLikes);
  const [isTuesday, setIsTuesday] = useState(false);
  const [isWednesday, setIsWednesday] = useState(false);
  const [displayPrice, setDisplayPrice] = useState(product.price);
  const isPromotionalToday = 
    (product.promotionDay === 'tuesday' && isTuesday) || 
    (product.promotionDay === 'wednesday' && isWednesday);

  useEffect(() => {
    const today = new Date().getDay();
    setIsTuesday(today === 2);     // terça-feira 2
    setIsWednesday(today === 3);   // quarta-feira 3
  }, []);

  useEffect(() => {
    let price = product.price;

    if (product.id === "sus-001" && isTuesday) {
      price = 0.99;
    } 
    else if ((product.id === "past-001" || product.id === "past-002" || product.id === "past-003") && isWednesday) {
      price = 3.0;
    }
    else if ((product.id === "past-004" || product.id === "past-005") && isWednesday) {
      price = 4.0;
    } else if ((product.id === "past-006" || product.id === "past-007" || product.id === "past-009") && isWednesday) {
      price = 5.0;
    }
    else if ((product.id === "past-008" || product.id === "past-010") && isWednesday) {
      price = 6.0;
    }

    setDisplayPrice(price);
  }, [isTuesday, isWednesday, product]);

  const handleLikeClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleLike();
  };

  return (
    <Card
      className="overflow-hidden hover-lift shadow-card transition-smooth cursor-pointer group active:scale-95"
      onClick={onClick}
    >
      <div className="aspect-video overflow-hidden relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-bold text-lg leading-tight">{product.name}</h3>
          
  {isPromotionalToday ? (
    // Mostra o badge de promoção se estiver no dia certo
    <Badge className="bg-red-600 text-white animate-pulse">
      SÓ HOJE
    </Badge>
  ) : product.badge ? (
    // Caso contrário, mostra o badge normal do produto (se ele existir)
    <Badge className="bg-primary text-primary-foreground">
      {product.badge}
    </Badge>
  ) : null}
</div>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between">
  <div>
    {(product.id === "sus-001" && isTuesday) ||
    ((product.id === "past-001" || product.id === "past-002" || product.id === "past-003" || product.id === "past-004" || product.id === "past-005" || product.id === "past-006" || product.id === "past-007" || product.id === "past-008" || product.id === "past-009" || product.id === "past-010") && isWednesday) ? (
      <div className="flex items-center gap-2">
        {/* Preço original riscado */}
        <span className="text-gray-400 line-through text-lg">
          R$ {product.price.toFixed(2).replace(".", ",")}
        </span>
        {/* Preço promocional */}
        <span className="text-2xl font-bold">
          R$ {displayPrice.toFixed(2).replace(".", ",")}
        </span>
        {/* Badge "válido hoje" */}
        <div className="flex items-center gap-1 text-destructive font-semibold text-sm animate-pulse">
              <Sparkles className="h-4 w-4" />
              <span>Aproveite!</span>
            </div>
      </div>
    ) : (
      // Preço normal quando não tem promoção
      <span className="text-2xl font-bold">
        R$ {displayPrice.toFixed(2).replace(".", ",")}
      </span>
    )}
  </div>
          <button
            onClick={handleLikeClick}
            className="flex items-center gap-1 text-muted-foreground hover:text-destructive transition-all hover:scale-110 active:scale-95"
          >
            <Heart className={`h-5 w-5 ${isLiked ? "fill-destructive text-destructive" : ""}`} />
            <span className="text-sm font-medium">{likes}</span>
          </button>
        </div>
      </div>
    </Card>
  );
};
