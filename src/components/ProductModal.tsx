import { useState, useEffect } from "react";
import { Heart, X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "./ui/dialog";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Product } from "@/data/products";
import { useLikes } from "@/hooks/useLikes";
import { ProductVariations } from "./ProductVariations";
import { Clock, Sparkles } from "lucide-react";

interface ProductModalProps {
  product: Product | null;
  open: boolean;
  onClose: () => void;
}

export const ProductModal = ({ product, open, onClose }: ProductModalProps) => {
  const { likes, isLiked, toggleLike } = useLikes(product?.id || '', product?.initialLikes);
  const [currentPrice, setCurrentPrice] = useState(product?.price || 0);
  const [selectedVariations, setSelectedVariations] = useState<Record<string, string>>({});

  //  estados para controlar o dia
  const [isTuesday, setIsTuesday] = useState(false);
  const [isWednesday, setIsWednesday] = useState(false);
  const isPromotionalToday = 
    (product?.promotionDay === 'tuesday' && isTuesday) || 
    (product?.promotionDay === 'wednesday' && isWednesday);

  //  define o dia da semana ao abrir o modal
  useEffect(() => {
    const today = new Date().getDay();
    setIsTuesday(today === 2);     // terça-feira 2
    setIsWednesday(today === 3);   // quarta-feira 3
  }, []);

  //  aplica os descontos automaticamente conforme o dia
  useEffect(() => {
  if (!product) return;

  let newPrice = product.price;
  let hasDiscount = false;

  if (product.id === "sus-001" && isTuesday) {
    newPrice = 0.99;
    hasDiscount = true;
  }
  else if ((product.id === "past-001" || product.id === "past-002" || product.id === "past-003") && isWednesday) {
    newPrice = 3.0;
    hasDiscount = true;
  }
  else if ((product.id === "past-004" || product.id === "past-005") && isWednesday) {
    newPrice = 4.0;
    hasDiscount = true;
  } else if ((product.id === "past-006" || product.id === "past-007" || product.id === "past-009") && isWednesday) {
    newPrice = 5.0;
    hasDiscount = true;
  }
   else if ((product.id === "past-008" || product.id === "past-010") && isWednesday) {
    newPrice = 6.0;
    hasDiscount = true;
  }

  // adiciona o campo temporário de desconto
  (product as any).discountPrice = hasDiscount ? newPrice : null;

  setCurrentPrice(newPrice);
  setSelectedVariations({});
}, [product, isTuesday, isWednesday, open]);

  if (!product) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogTitle className="text-2xl font-bold pr-10">{product.name}</DialogTitle>
        <DialogDescription className="sr-only">
          Detalhes do produto {product.name}
        </DialogDescription>

        <div className="relative">
          <div className="aspect-video w-full overflow-hidden rounded-lg mb-4">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>

          <div className="flex items-center justify-between mb-4">
  <div>
    {product.discountPrice ? (
      <div className="flex items-center gap-3">
        <span className="text-2xl text-muted-foreground line-through">
          R$ {product.price.toFixed(2).replace('.', ',')}
        </span>
        <span className="text-3xl font-bold">
          R$ {product.discountPrice.toFixed(2).replace('.', ',')}
        </span>
        <div className="flex items-center gap-1 text-destructive font-semibold text-sm animate-pulse">
              <Sparkles className="h-4 w-4" />
              <span>Aproveite!</span>
            </div>
      </div>
    ) : (
      <span className="text-3xl font-bold">
        R$ {currentPrice.toFixed(2).replace('.', ',')}
      </span>
    )}

    {!product.variations && product.priceWithMilk && (
      <p className="text-sm text-muted-foreground">
        Com leite: R$ {product.priceWithMilk.toFixed(2).replace('.', ',')}
      </p>
    )}
    {!product.variations && product.priceVariants && (
      <div className="mt-2 space-y-1">
        {product.priceVariants.map((variant) => (
          <p key={variant.label} className="text-sm">
            <span className="font-medium">{variant.label}:</span> R${' '}
            {variant.price.toFixed(2).replace('.', ',')}
          </p>
        ))}
      </div>
    )}
  </div>

  <Button
    onClick={toggleLike}
    variant="ghost"
    size="lg"
    className="gap-2"
  >
    <Heart
      className={`h-6 w-6 ${isLiked ? 'fill-destructive text-destructive' : ''}`}
    />
    <span className="font-bold">{likes}</span>
  </Button>
</div>

{isPromotionalToday ? (
    <Badge className="mb-4 bg-red-600 text-white animate-pulse">
      SÓ HOJE
    </Badge>
  ) : product.badge ? (
    <Badge className="mb-4 bg-primary text-primary-foreground">
      {product.badge}
    </Badge>
  ) : null}

          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-lg mb-2">Descrição</h3>
              <p className="text-muted-foreground">{product.description}</p>
            </div>

            {product.flavor && (
              Array.isArray(product.flavor) && product.flavor.length > 0 ? (
                <div>
                  <h3 className="text-lg font-semibold mb-2">Sabor</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.flavor.map((flavor: string, index: number) => (
                      <Badge key={index} variant="secondary" className="text-sm bg-secondary1">
                        {flavor}
                      </Badge>
                    ))}
                  </div>
                </div>
              ) : typeof product.flavor === 'string' && product.flavor.length > 0 ? (
                <div>
                  <h3 className="text-lg font-semibold mb-2">Sabor</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-sm bg-secondary1">
                      {product.flavor}
                    </Badge>
                  </div>
                </div>
              ) : null
            )}

            {product.variations && product.variations.length > 0 && (
              <ProductVariations
                variations={product.variations}
                basePrice={product.price}
                onPriceChange={setCurrentPrice}
                onSelectionChange={setSelectedVariations}
              />
            )}

            {product.ingredients && product.ingredients.length > 0 && (
              <div>
                <h3 className="font-bold text-lg mb-2">Ingredientes</h3>
                <ul className="list-disc list-inside space-y-1">
                  {product.ingredients.map((ingredient, index) => (
                    <li key={index} className="text-muted-foreground">
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="mt-6 flex gap-3">
            <Button onClick={toggleLike} variant="outline" className="flex-1">
              <Heart className={`h-4 w-4 mr-2 ${isLiked ? 'fill-destructive text-destructive' : ''}`} />
              {isLiked ? 'Descurtir' : 'Curtir'}
            </Button>
            <Button onClick={onClose} className="flex-1">
              Fechar
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
