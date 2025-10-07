import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export interface VariationOption {
  id: string;
  label: string;
  priceModifier: number; // Valor que será adicionado ao preço base
}

export interface VariationGroup {
  id: string;
  name: string;
  required: boolean;
  options: VariationOption[];
}

interface ProductVariationsProps {
  variations: VariationGroup[];
  basePrice: number;
  onPriceChange: (newPrice: number) => void;
  onSelectionChange?: (selections: Record<string, string>) => void;
}

export const ProductVariations = ({ 
  variations, 
  basePrice, 
  onPriceChange,
  onSelectionChange 
}: ProductVariationsProps) => {
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});

  // Auto-select first option of each group on mount
  useEffect(() => {
    const initialSelections: Record<string, string> = {};
    let initialPrice = basePrice;

    variations.forEach(group => {
      if (group.options.length > 0) {
        const firstOption = group.options[0];
        initialSelections[group.id] = firstOption.id;
        initialPrice += firstOption.priceModifier;
      }
    });

    setSelectedOptions(initialSelections);
    onPriceChange(initialPrice);
    onSelectionChange?.(initialSelections);
  }, [variations, basePrice, onPriceChange, onSelectionChange]);

  const handleOptionSelect = (groupId: string, optionId: string, priceModifier: number) => {
    const newSelections = { ...selectedOptions, [groupId]: optionId };
    setSelectedOptions(newSelections);

    // Calcular novo preço baseado nas seleções
    let newPrice = basePrice;
    variations.forEach(group => {
      const selectedOptionId = newSelections[group.id];
      if (selectedOptionId) {
        const option = group.options.find(opt => opt.id === selectedOptionId);
        if (option) {
          newPrice += option.priceModifier;
        }
      }
    });

    onPriceChange(newPrice);
    onSelectionChange?.(newSelections);
  };

  return (
    <div className="space-y-6">
      {variations.map((group) => (
        <div key={group.id} className="space-y-3">
          <div className="flex items-center gap-2">
            <h3 className="font-bold text-lg">{group.name}</h3>
            {group.required && (
              <Badge variant="destructive" className="text-xs">Obrigatório</Badge>
            )}
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {group.options.map((option) => {
              const isSelected = selectedOptions[group.id] === option.id;
              const displayPrice = option.priceModifier > 0 
                ? `+R$ ${option.priceModifier.toFixed(2).replace('.', ',')}` 
                : option.priceModifier < 0
                ? `-R$ ${Math.abs(option.priceModifier).toFixed(2).replace('.', ',')}`
                : 'Sem custo';

              return (
                <Button
                  key={option.id}
                  onClick={() => handleOptionSelect(group.id, option.id, option.priceModifier)}
                  variant={isSelected ? "default" : "outline"}
                  className="h-auto py-3 flex flex-col items-start gap-1"
                >
                  <span className="font-medium">{option.label}</span>
                  <span className="text-xs opacity-80">{displayPrice}</span>
                </Button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};
