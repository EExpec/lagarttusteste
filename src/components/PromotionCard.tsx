import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { Clock, Sparkles } from "lucide-react";

interface PromotionCardProps {
  day: "tuesday" | "wednesday" | "chopp";
  title: string;
  description?: string;
  originalPrice?: number;
  discountedPrice?: number;
  badge?: string;
  isToday?: boolean;
}

export const PromotionCard = ({
  day,
  title,
  description,
  originalPrice,
  discountedPrice,
  badge,
  isToday,
}: PromotionCardProps) => {
  const getBadgeText = () => {
    if (day === "chopp") return "NOVIDADE";
    if (isToday) return "SÓ HOJE";
    return day === "tuesday" ? "TERÇA" : "QUARTA";
  };

  const getBadgeColor = () => {
    if (day === "chopp") return "bg-primary text-primary-foreground";
    if (isToday) return "bg-destructive text-destructive-foreground";
    return "bg-primary text-primary-foreground";
  };

  const getImage = () => {
    switch (day) {
      case "tuesday":
        return "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=600&h=400&fit=crop";
      case "wednesday":
        return "https://images.unsplash.com/photo-1550507992-eb63ffee0847?w=600&h=400&fit=crop";
      case "chopp":
        return "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=600&h=400&fit=crop";
    }
  };

  const getIcon = () => {
    if (day === "chopp") return Sparkles;
    return Clock;
  };

  const Icon = getIcon();

  return (
    <Card
      className={`relative overflow-hidden group hover-lift transition-smooth cursor-pointer active:scale-[0.98] ${
        isToday ? "shadow-glow ring-2 ring-primary/50" : "shadow-card"
      }`}
    >
      {/* Imagem */}
      <div className="aspect-[4/3] overflow-hidden relative">
        <img
          src={getImage()}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

        {/* Badge */}
        <div className="absolute top-3 right-3">
          <Badge
            className={`${getBadgeColor()} ${isToday ? "animate-pulse" : ""} shadow-lg`}
          >
            {getBadgeText()}
          </Badge>
        </div>

        {/* Ícone */}
        <div className="absolute top-3 left-3">
          <div
            className={`p-2 rounded-full ${
              isToday ? "bg-destructive/90" : "bg-primary/90"
            } backdrop-blur-sm`}
          >
            <Icon className="h-5 w-5 text-white" />
          </div>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>

        {/* Preço riscado + promocional + "Válido hoje" */}
        <div className="flex items-baseline gap-2 mb-4">
          {originalPrice && discountedPrice ? (
            <>
              <span className="text-gray-400 line-through text-lg">
                R$ {originalPrice.toFixed(2).replace(".", ",")}
              </span>
              <span className="text-2xl font-bold gradient-text">
                R$ {discountedPrice.toFixed(2).replace(".", ",")}
              </span>
              {isToday && (
                <span className="text-xs text-destructive font-semibold uppercase animate-pulse ml-1">
                  Válido hoje!
                </span>
              )}
            </>
          ) : description?.toLowerCase().includes("por apenas") ? (
            <p className="text-2xl font-bold">
             <span className="text-gray-400">Por apenas </span>
              <span className="gradient-text">
               {description.replace(/por apenas\s*/i, "")}
              </span>
            </p>
          ) : (
            <div className="flex items-baseline gap-2">
    <p className="text-3xl font-bold gradient-text">{description}</p>
    {isToday && (
      <span className="text-xs text-destructive font-semibold uppercase animate-pulse">
        Válido hoje!
      </span>
    )}
  </div>
          )}
        </div>

        {/* Linha inferior */}
        <div className="flex items-center justify-between pt-4 border-t border-border/50">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>
              {day === "tuesday"
                ? "Todas as terças"
                : day === "wednesday"
                ? "Todas as quartas"
                : "Todos os dias"}
            </span>
          </div>
          {isToday && (
            <div className="flex items-center gap-1 text-destructive font-semibold text-sm animate-pulse">
              <Sparkles className="h-4 w-4" />
              <span>Aproveite!</span>
            </div>
          )}
        </div>
      </div>

      {/* Efeito de brilho para o dia atual */}
      {isToday && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-destructive to-transparent animate-pulse" />
      )}
    </Card>
  );
};
