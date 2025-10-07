import { Instagram, Phone, ShoppingBag } from "lucide-react";
import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[hsl(var(--footer-bg))] text-white py-12">
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center gap-4">
            <img src="https://i.imgur.com/UDVnptF.png" alt="Lagarttus" className="h-12 w-auto" />
            <h3 className="text-2xl font-bold">Lagarttus</h3>
            </div>
            <p className="text-sm text-gray-300 mb-4" style={{ marginTop: "0.5rem" }}>
              Há mais de 6 anos servindo comida caseira e petiscos em Lagarto - SE
            </p>
            <div className="footer-sponsor">
              <p className="footer-sponsor-label">Patrocínio:</p>
               <img
                src="https://logodownload.org/wp-content/uploads/2022/01/amstel-logo.png"
                alt="Logo Amstel"
                className="footer-sponsor-logo"
              />
              <p className="footer-sponsor-text">
                Orgulhosamente patrocinado pela Amstel
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#menu" className="hover:text-primary transition-colors">
                  Cardápio
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-primary transition-colors">
                  Localização
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-primary transition-colors">
                  Avaliações
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contato</h4>
            <div className="space-y-3">
              <a
                href="https://wa.me/5579988165260"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span className="text-sm">(79) 98816-5260</span>
              </a>
              <a
                href="https://instagram.com/lagarttus"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Instagram className="h-4 w-4" />
                <span className="text-sm">@lagarttus</span>
              </a>
              <a
                href="https://qro.go.link/ecoBc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <ShoppingBag className="h-4 w-4" />
                <span className="text-sm">Faça seu pedido</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
  <p className="flex items-center justify-center gap-1">
    © 2019 Lagarttus. Feito com{" "}
    <Heart className="w-4 h-4 text-primary" strokeWidth={2.5} />{" "}
    para nossos clientes.
  </p>
</div>
      </div>
    </footer>
  );
};
