import { MapPin, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const LocationSection = () => {
  const schedule = [
    { day: "Domingo", hours: "16:00–23:00" },
    { day: "Segunda-feira", hours: "Fechado", closed: true },
    { day: "Terça-feira", hours: "17:00–23:00" },
    { day: "Quarta-feira", hours: "17:00–23:00" },
    { day: "Quinta-feira", hours: "17:00–23:00" },
    { day: "Sexta-feira", hours: "17:00–01:00" },
    { day: "Sábado", hours: "17:00–01:00" },
  ];

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5579988165260", "_blank");
  };

  return (
    <section id="location" className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Localização, Horário e Contato</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-start gap-3 mb-4">
              <MapPin className="h-5 w-5 text-primary mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Endereço</h3>
                <p className="text-sm text-muted-foreground">
                  Ao Lado Do INSS - Av. Santo Antônio, Número 51<br />
                  Centro, Lagarto - SE, 49400-000
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 mb-4">
              <Phone className="h-5 w-5 text-primary mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Telefone</h3>
                <p className="text-sm text-muted-foreground">(79) 98816-5260</p>
              </div>
            </div>

            <Button onClick={handleWhatsAppClick} className="w-full bg-primary hover:bg-primary/90">
              Falar no WhatsApp
            </Button>

            <div className="mt-6 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.6257981757976!2d-37.673096799999996!3d-10.916017199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71023fb84babb3d%3A0x145aafa27ef57e57!2sLagarttus%20bar%20e%20espetaria!5e0!3m2!1spt-BR!2sbr!4v1759684344355!5m2!1spt-BR!2sbr"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do Lagarttus"
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-start gap-3 mb-4">
              <Clock className="h-5 w-5 text-primary mt-1" />
              <h3 className="font-semibold">Horário de Funcionamento</h3>
            </div>
            
            <div className="space-y-2">
              {schedule.map((item, index) => (
                <div
                  key={index}
                  className={`flex justify-between py-2 border-b last:border-b-0 ${
                    item.closed ? "text-muted-foreground" : ""
                  }`}
                >
                  <span className="font-medium">{item.day}</span>
                  <span>{item.hours}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
