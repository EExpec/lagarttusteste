import restauranteInterior from "@/assets/restaurante-interior.jpg";
import { Badge } from "@/components/ui/badge";
import { Award, Beer, UtensilsCrossed, Users } from "lucide-react";

export const AboutSection = () => {
  const highlights = [
    { icon: Award, label: "6+ Anos", description: "De tradição" },
    { icon: UtensilsCrossed, label: "Variedade", description: "Para todos os gostos" },
    { icon: Beer, label: "Parceiro Amstel", description: "Chopps gelados" },
    { icon: Users, label: "Ambiente", description: "Acolhedor" },
  ];

  return (
    <section id="about" className="bg-secondary py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
                Nossa História
              </Badge>
              <h2 className="text-4xl font-bold mb-4">Sobre o Lagarttus</h2>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              Há mais de <span className="font-semibold text-foreground">6 anos</span> servindo comida caseira e petiscos para amigos e família. 
              Nosso restaurante se tornou um ponto de encontro onde o sabor e a tradição 
              se unem para criar momentos inesquecíveis.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              Com um ambiente acolhedor e uma variedade incrível de pratos, do sushi ao 
              espetinho, do caldinho reconfortante aos drinks refrescantes, temos opções 
              para todos os gostos.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              Orgulhosamente em parceria com a <span className="font-semibold text-foreground">Amstel</span>, oferecemos as melhores cervejas 
              e chopps da região. Venha nos visitar e fazer parte da nossa história!
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={index} 
                    className="flex items-start gap-3 p-4 rounded-lg bg-background/50 hover:bg-background transition-colors"
                  >
                    <div className="p-2 rounded-full bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{item.label}</p>
                      <p className="text-xs text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <img 
              src={restauranteInterior} 
              alt="Interior do restaurante Lagarttus" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
