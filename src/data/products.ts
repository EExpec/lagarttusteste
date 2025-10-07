import { VariationGroup } from "@/components/ProductVariations";

export interface Product {
  id: string;
  name: string;
  description: string;
  flavor?: string | string[];
  price: number;
  priceWithMilk?: number;
  priceVariants?: { label: string; price: number }[];
  variations?: VariationGroup[];
  category: string;
  subcategory?: string;
  image: string;
  badge?: string;
  promotionDay?: string;
  ingredients?: string[];
  initialLikes?: number;
  discountPrice?: number;
}

export const products: Product[] = [
  // Espetinhos
  {
    id: "esp-001",
    name: "Asa de Frango",
    description: "Asa de frango assada na brasa, com sabor leve e textura suculenta.",
    price: 5.99,
    category: "Espetinhos",
    image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=800&auto=format&fit=crop",
    badge: "Grelhado"
  },
  {
    id: "esp-002",
    name: "Bovino",
    description: "Espetinho de carne bovina grelhado com tempero simples, ideal para quem gosta do sabor original da carne.",
    price: 6.99,
    category: "Espetinhos",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&auto=format&fit=crop",
    badge: "Grelhado"
  },
  {
    id: "esp-003",
    name: "Coração",
    description: "Espetinho de coração de frango, grelhado de forma tradicional, macio e com sabor marcante.",
    price: 6.99,
    category: "Espetinhos",
    image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=800&auto=format&fit=crop",
    badge: "Grelhado"
  },
  {
    id: "esp-004",
    name: "Frango",
    description: "Espetinho de frango grelhados, uma opção simples e bem servida para quem prefere carnes brancas.",
    price: 5.99,
    category: "Espetinhos",
    image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=800&auto=format&fit=crop",
    badge: "Grelhado"
  },
  {
    id: "esp-005",
    name: "Kafta com Queijo",
    description: "Kafta bovina com recheio de queijo derretido, combinando o sabor da carne com um toque cremoso.",
    price: 6.99,
    category: "Espetinhos",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop",
    badge: "Especial"
  },
  {
    id: "esp-006",
    name: "Kafta Bovina",
    description: "Kafta de carne bovina e grelhada na brasa, saborosa e bem servida.",
    price: 6.99,
    category: "Espetinhos",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop",
    badge: "Grelhado"
  },
  {
    id: "esp-007",
    name: "Linguiça de Bode",
    description: "Espetinho de linguiça artesanal de bode, com sabor característico e textura marcante.",
    price: 6.99,
    category: "Espetinhos",
    image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800&auto=format&fit=crop",
    badge: "Artesanal"
  },
  {
    id: "esp-008",
    name: "Linguiça de Bode com Queijo",
    description: "Linguiça de bode com queijo derretido",
    price: 6.99,
    category: "Espetinhos",
    image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800&auto=format&fit=crop",
    badge: "Especial"
  },
  {
    id: "esp-009",
    name: "Linguiça de Bode Apimentada",
    description: "Linguiça de bode com toque picante",
    price: 6.99,
    category: "Espetinhos",
    image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800&auto=format&fit=crop",
    badge: "Picante"
  },
  {
    id: "esp-010",
    name: "Pão de Alho",
    description: "Pão de alho crocante e aromático",
    price: 5.99,
    category: "Espetinhos",
    image: "https://images.unsplash.com/photo-1573140401552-388bd0b2c347?w=800&auto=format&fit=crop"
  },
  {
    id: "esp-011",
    name: "Pão de Charque",
    description: "Pão recheado com charque temperado",
    price: 7.99,
    category: "Espetinhos",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&auto=format&fit=crop",
    badge: "Especial"
  },
  {
    id: "esp-012",
    name: "Queijo",
    description: "Queijo grelhado - com ou sem melaço",
    price: 6.99,
    category: "Espetinhos",
    image: "https://images.unsplash.com/photo-1452251889946-8ff5ea7f27fc?w=800&auto=format&fit=crop"
  },

  // Espetos Gourmet
    {
    id: "esg-001",
    name: "Contra Filé",
    description: "Contra filé grelhado com pão de alho",
    price: 8.99,
    category: "Espetos Gourmet",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop",
    badge: "Gourmet"
  },
  {
    id: "esg-002",
    name: "Contra Filé com Alho",
    description: "Contra filé com alho e pão de alho",
    price: 8.99,
    category: "Espetos Gourmet",
    image: "https://images.unsplash.com/photo-1558030006-450675393462?w=800&auto=format&fit=crop",
    badge: "Gourmet",
    ingredients: ["Contra filé", "Alho", "Pão de alho"]
  },
  {
    id: "esg-003",
    name: "Medalhão de File",
    description: "Medalhão de File",
    price: 8.99,
    category: "Espetos Gourmet",
    image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800&auto=format&fit=crop",
    badge: "Gourmet"
  },
  {
    id: "esg-004",
    name: "Medalhão de Frango",
    description: "Medalhão de frango",
    price: 8.99,
    category: "Espetos Gourmet",
    image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800&auto=format&fit=crop",
    badge: "Gourmet"
  },
  {
    id: "esg-005",
    name: "Filé com Queijo",
    description: "Filé com queijo derretido e pão de alho",
    price: 8.99,
    category: "Espetos Gourmet",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&auto=format&fit=crop",
    badge: "Gourmet"
  },
  {
    id: "esg-006",
    name: "Filé de Frango com Queijo",
    description: "Filé de frango grelhado com queijo e pão de alho",
    price: 8.99,
    category: "Espetos Gourmet",
    image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800&auto=format&fit=crop",
    badge: "Gourmet",
    ingredients: ["Filé de frango", "Queijo", "Pão de alho"]
  },
  {
    id: "esg-007",
    name: "Mamilo",
    description: "Mamilo bovino grelhado com pão de alho",
    price: 8.99,
    category: "Espetos Gourmet",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&auto=format&fit=crop",
    badge: "Especial"
  },
  {
    id: "esg-008",
    name: "Pau Carnudo",
    description: "Espeto especial com carnes selecionadas e pão de alho",
    price: 12.99,
    category: "Espetos Gourmet",
    image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=800&auto=format&fit=crop",
    badge: "Premium"
  },
  {
    id: "esg-009",
    name: "Picanha",
    description: "Picanha nobre com pão de alho",
    price: 10.99,
    category: "Espetos Gourmet",
    image: "https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=800&auto=format&fit=crop",
    badge: "Premium"
  },
  {
    id: "esg-010",
    name: "Picanha Suína",
    description: "Picanha suína grelhada com pão de alho",
    price: 8.99,
    category: "Espetos Gourmet",
    image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800&auto=format&fit=crop",
    badge: "Gourmet"
  },
    {
    id: "esg-011",
    name: "Carne do Sol",
    description: "Carne do sol com pão de alho",
    price: 8.99,
    category: "Espetos Gourmet",
    image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800&auto=format&fit=crop",
    badge: "Regional"
  },
  {
    id: "esg-012",
    name: "Costela de Carneiro",
    description: "Costela de carneiro com pão de alho",
    price: 8.99,
    category: "Espetos Gourmet",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop",
    badge: "Premium"
  },

  // Tira Gosto
  {
    id: "tg-001",
    name: "Batata Frita",
    description: "Porção generosa de batatas fritas crocantes",
    price: 17.99,
    category: "Tira Gosto",
    image: "https://images.unsplash.com/photo-1573521193826-58c7dc2e13e3?w=800&auto=format&fit=crop"
  },
  {
    id: "tg-002",
    name: "Batata Frita com Cheddar e Bacon",
    description: "Batatas fritas cobertas com cheddar e bacon crocante",
    price: 24.99,
    category: "Tira Gosto",
    image: "https://images.unsplash.com/photo-1639024471283-03518883512d?w=800&auto=format&fit=crop",
    badge: "Especial"
  },
  {
    id: "tg-003",
    name: "Carne de Sol com Fritas",
    description: "Carne de sol desfiada com batatas fritas",
    price: 39.99,
    category: "Tira Gosto",
    image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800&auto=format&fit=crop",
    badge: "Regional"
  },
  {
    id: "tg-004",
    name: "Carne de Sol",
    description: "Porção de carne de sol desfiada",
    price: 29.99,
    category: "Tira Gosto",
    image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800&auto=format&fit=crop",
    badge: "Regional"
  },
  {
    id: "tg-005",
    name: "Frango a Passarinho",
    description: "Frango frito crocante temperado",
    price: 19.99,
    category: "Tira Gosto",
    image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800&auto=format&fit=crop"
  },
  {
    id: "tg-006",
    name: "Ovos de Codorna",
    description: "15 unidades de ovos de codorna temperados",
    price: 7.99,
    category: "Tira Gosto",
    image: "https://images.unsplash.com/photo-1587486937736-e7c6f580a6c4?w=800&auto=format&fit=crop"
  },
  {
    id: "tg-007",
    name: "Calabresa Acebolada",
    description: "Linguiça calabresa com cebola caramelizada",
    price: 19.99,
    category: "Tira Gosto",
    image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800&auto=format&fit=crop"
  },
  {
    id: "tg-008",
    name: "Coxinha",
    description: "10 unidades de coxinhas de frango",
    price: 14.99,
    category: "Tira Gosto",
    image: "https://images.unsplash.com/photo-1618164436241-4473940d1f5c?w=800&auto=format&fit=crop"
  },
  {
    id: "tg-009",
    name: "Bolinha de Charque c/ Queijo",
    description: "10 unidades de bolinhas de charque com queijo",
    price: 16.99,
    category: "Tira Gosto",
    image: "https://images.unsplash.com/photo-1619221882420-7cd31c74e1c8?w=800&auto=format&fit=crop",
    badge: "Artesanal"
  },
  {
    id: "tg-010",
    name: "Bolinha de Bacalhau",
    description: "10 unidades de bolinhas de bacalhau",
    price: 16.99,
    category: "Tira Gosto",
    image: "https://images.unsplash.com/photo-1619221882420-7cd31c74e1c8?w=800&auto=format&fit=crop",
    badge: "Premium"
  },
  {
    id: "tg-011",
    name: "Bolinha de Queijo",
    description: "10 unidades de bolinhas de queijo",
    price: 12.99,
    category: "Tira Gosto",
    image: "https://images.unsplash.com/photo-1619221882420-7cd31c74e1c8?w=800&auto=format&fit=crop"
  },
  {
    id: "tg-012",
    name: "Empanado de Camarão",
    description: "10 unidades de camarão empanado crocante",
    price: 16.99,
    category: "Tira Gosto",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=800&auto=format&fit=crop",
    badge: "Premium"
  },
  {
    id: "tg-013",
    name: "Camarão ao Alho e Óleo",
    description: "Camarões frescos salteados no alho e óleo",
    price: 39.99,
    category: "Tira Gosto",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=800&auto=format&fit=crop",
    badge: "Premium"
  },
  {
    id: "tg-014",
    name: "Isca de Frango",
    description: "Iscas de frango empanadas e fritas",
    price: 24.99,
    category: "Tira Gosto",
    image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800&auto=format&fit=crop"
  },
  {
    id: "tg-015",
    name: "Isca de Peixe",
    description: "Iscas de peixe empanadas",
    price: 29.90,
    category: "Tira Gosto",
    image: "https://images.unsplash.com/photo-1580959375944-064fb96ac9d8?w=800&auto=format&fit=crop"
  },
  {
    id: "tg-016",
    name: "Tripinha",
    description: "Porção de tripinha frita crocante",
    price: 14.90,
    category: "Tira Gosto",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&auto=format&fit=crop"
  },

  // Pastéis (keeping individual pastéis for detailed menu)
  {
    id: "past-000",
    name: "Porção de Mini Pastéis",
    description: "6 mini pastéis sortidos. Ideal para compartilhar, ou não...",
    price: 9.99,
    category: "Pastéis",
    flavor: ['Queijo', 'Misto', 'Frango', 'Carne', 'Charque', 'Variados'],
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&auto=format&fit=crop",
  },
  {
    id: "past-001",
    name: "Pastel de Queijo",
    description: "Pastel recheado com queijo derretido",
    price: 5.99,
    discountPrice: 3.00,
    category: "Pastéis",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&auto=format&fit=crop",
    promotionDay: "wednesday",
  },
  {
    id: "past-002",
    name: "Pastel de Misto",
    description: "Pastel recheado com presunto e queijo",
    price: 5.99,
    discountPrice: 3.00,
    category: "Pastéis",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&auto=format&fit=crop",
    promotionDay: "wednesday",
  },
  {
    id: "past-003",
    name: "Pastel de Frango",
    description: "Pastel recheado com frango temperado",
    price: 5.99,
    discountPrice: 3.00,
    category: "Pastéis",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&auto=format&fit=crop",
    promotionDay: "wednesday",
  },
  {
    id: "past-004",
    name: "Pastel de Frango com Queijo",
    description: "Pastel recheado com frango e queijo",
    price: 7.99,
    discountPrice: 4.00,
    category: "Pastéis",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&auto=format&fit=crop",
    promotionDay: "wednesday",
  },
  {
    id: "past-005",
    name: "Pastel de Carne",
    description: "Pastel recheado com carne moída",
    price: 7.99,
    discountPrice: 4.00,
    category: "Pastéis",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&auto=format&fit=crop",
    promotionDay: "wednesday",
  },
  {
    id: "past-006",
    name: "Pastel de Carne com Queijo",
    description: "Pastel recheado com carne e queijo",
    price: 9.99,
    discountPrice: 5.00,
    category: "Pastéis",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&auto=format&fit=crop",
    promotionDay: "wednesday",
  },
  {
    id: "past-007",
    name: "Pastel de Costela",
    description: "Pastel recheado com costela desfiada",
    price: 9.99,
    discountPrice: 5.00,
    category: "Pastéis",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&auto=format&fit=crop",
    promotionDay: "wednesday",
  },
  {
    id: "past-008",
    name: "Pastel de Costela com Queijo",
    description: "Pastel de costela com queijo derretido",
    price: 11.99,
    discountPrice: 6.00,
    category: "Pastéis",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&auto=format&fit=crop",
    promotionDay: "wednesday",
  },
  {
    id: "past-009",
    name: "Pastel de Carne de Sol",
    description: "Pastel recheado com carne de sol",
    price: 9.99,
    discountPrice: 5.00,
    category: "Pastéis",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&auto=format&fit=crop",
    promotionDay: "wednesday",
  },
  {
    id: "past-010",
    name: "Pastel de Carne de Sol com Queijo",
    description: "Pastel de carne de sol com queijo",
    price: 11.99,
    discountPrice: 6.00,
    category: "Pastéis",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&auto=format&fit=crop",
    promotionDay: "wednesday",
  },
  {
    id: "past-011",
    name: "Pastel de Caranguejo",
    description: "Pastel recheado com caranguejo",
    price: 13.99,
    category: "Pastéis",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&auto=format&fit=crop",
  },
  {
    id: "past-012",
    name: "Pastel de Camarão",
    description: "Pastel recheado com camarão",
    price: 13.99,
    category: "Pastéis",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&auto=format&fit=crop",
  },
  {
    id: "past-013",
    name: "Pastel de Aratu",
    description: "Pastel recheado com aratu",
    price: 13.99,
    category: "Pastéis",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&auto=format&fit=crop",
  },
  {
    id: "past-014",
    name: "Pastel de Bacalhau",
    description: "Pastel recheado com bacalhau",
    price: 12.99,
    category: "Pastéis",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&auto=format&fit=crop",
  },

  // Caldinhos
  {
    id: "cal-001",
    name: "Caldinho de Camarão",
    description: "Caldinho quentinho de camarão com tempero especial",
    price: 7.99,
    category: "Caldinhos",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&auto=format&fit=crop",
    badge: "Quentinho"
  },
  {
    id: "cal-002",
    name: "Caldinho de Sururu",
    description: "Caldinho tradicional de sururu",
    price: 7.99,
    category: "Caldinhos",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&auto=format&fit=crop",
    badge: "Regional"
  },
  {
    id: "cal-003",
    name: "Caldinho de Feijão",
    description: "Caldinho caseiro de feijão com bacon",
    price: 6.99,
    category: "Caldinhos",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&auto=format&fit=crop",
    badge: "Caseiro"
  },
  {
    id: "cal-004",
    name: "Caldinho de Mocotó",
    description: "Caldinho reconfortante de mocotó",
    price: 7.99,
    category: "Caldinhos",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&auto=format&fit=crop",
    badge: "Tradicional"
  },
  {
    id: "cal-005",
    name: "Mariscada",
    description: "Caldinho especial de mariscos variados",
    price: 12.99,
    category: "Caldinhos",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&auto=format&fit=crop",
    badge: "Premium"
  },

  // Hambúrgueres
  {
    id: "ham-001",
    name: "Burguer Gourmet",
    description: "Hambúrguer gourmet com porção de fritas incluída",
    price: 18.99,
    category: "Hambúrgueres",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop",
    badge: "Combo",
    ingredients: ["Hambúrguer 180g", "Queijo", "Alface", "Tomate", "Molho especial", "Batatas fritas"]
  },
  {
    id: "ham-002",
    name: "Burguer Gourmet Especial",
    description: "Hambúrguer gourmet especial com bacon e porção de fritas",
    price: 22.99,
    category: "Hambúrgueres",
    image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=800&auto=format&fit=crop",
    badge: "Premium",
    ingredients: ["Hambúrguer 180g", "Queijo", "Bacon", "Alface", "Tomate", "Molho especial", "Batatas fritas"]
  },

  // Cuscuz
  {
    id: "cus-001",
    name: "Cuscuz com Calabresa",
    description: "Cuscuz nordestino com calabresa acebolada",
    price: 9.99,
    category: "Cuscuz",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=800&auto=format&fit=crop",
    badge: "Regional"
  },
  {
    id: "cus-002",
    name: "Cuscuz com Carne de Sol",
    description: "Cuscuz com carne de sol desfiada",
    price: 9.99,
    category: "Cuscuz",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=800&auto=format&fit=crop",
    badge: "Regional"
  },
  {
    id: "cus-003",
    name: "Cuscuz com Charque",
    description: "Cuscuz com charque temperado",
    price: 9.99,
    category: "Cuscuz",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=800&auto=format&fit=crop",
    badge: "Regional"
  },
  {
    id: "cus-004",
    name: "Cuscuz com Frango",
    description: "Cuscuz com frango desfiado",
    price: 9.99,
    category: "Cuscuz",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=800&auto=format&fit=crop"
  },
  {
    id: "cus-005",
    name: "Cuscuz com Manteiga",
    description: "Cuscuz simples com manteiga",
    price: 6.99,
    category: "Cuscuz",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=800&auto=format&fit=crop"
  },
  {
    id: "cus-006",
    name: "Cuscuz com Queijo e Presunto",
    description: "Cuscuz com queijo e presunto",
    price: 9.99,
    category: "Cuscuz",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=800&auto=format&fit=crop"
  },

  // Doces
  {
    id: "doc-001",
    name: "Pudim",
    description: "Pudim caseiro de leite condensado",
    price: 5.00,
    category: "Doces",
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=800&auto=format&fit=crop",
    badge: "Caseiro"
  },
  {
    id: "doc-002",
    name: "Pirulito",
    description: "Pirulito sortido",
    price: 1.00,
    category: "Doces",
    image: "https://images.unsplash.com/photo-1581798459219-c8f585a8081e?w=800&auto=format&fit=crop"
  },
  {
    id: "doc-003",
    name: "Trident",
    description: "Goma de mascar Trident",
    price: 2.00,
    category: "Doces",
    image: "https://images.unsplash.com/photo-1581798459219-c8f585a8081e?w=800&auto=format&fit=crop"
  },
  {
    id: "doc-004",
    name: "Halls",
    description: "Bala refrescante Halls",
    price: 3.00,
    category: "Doces",
    image: "https://images.unsplash.com/photo-1581798459219-c8f585a8081e?w=800&auto=format&fit=crop"
  },

  // SUSHI
  {
    id: "sus-001",
    name: "Sushi Hot",
    description: "Sushi empanado e frito",
    price: 1.99,
    discountPrice: 0.99,
    category: "Sushi",
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&auto=format&fit=crop",
    badge: "Premium",
    promotionDay: "tuesday",
  },
  {
    id: "sus-002",
    name: "Sushi Especial",
    description: "Sushi especial com ingredientes premium",
    price: 3.50,
    category: "Sushi",
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&auto=format&fit=crop",
    badge: "Premium"
  },
  {
    id: "sus-003",
    name: "Temaki Philadelphia",
    description: "Temaki com cream cheese Philadelphia",
    price: 22.99,
    category: "Sushi",
    image: "https://images.unsplash.com/photo-1564489563601-c53cfc451e93?w=800&auto=format&fit=crop",
    variations: [
      {
        id: "preparation",
        name: "Preparo",
        required: true,
        options: [
          { id: "raw", label: "Cru", priceModifier: 0 },
          { id: "hot", label: "Hot", priceModifier: 2.00 }
        ]
      }
    ],
    badge: "Especial"
  },
  {
    id: "sus-004",
    name: "Temaki Philadelphia Ebi",
    description: "Temaki Philadelphia com camarão",
    price: 26.99,
    category: "Sushi",
    image: "https://images.unsplash.com/photo-1564489563601-c53cfc451e93?w=800&auto=format&fit=crop",
    variations: [
      {
        id: "preparation",
        name: "Preparo",
        required: true,
        options: [
          { id: "raw", label: "Cru", priceModifier: 0 },
          { id: "hot", label: "Hot", priceModifier: 2.00 }
        ]
      }
    ],
    badge: "Premium"
  },
  {
    id: "sus-005",
    name: "Temaki Ebiten",
    description: "Temaki com camarão empanado",
    price: 24.99,
    category: "Sushi",
    image: "https://images.unsplash.com/photo-1564489563601-c53cfc451e93?w=800&auto=format&fit=crop",
    variations: [
      {
        id: "preparation",
        name: "Preparo",
        required: true,
        options: [
          { id: "raw", label: "Cru", priceModifier: 0 },
          { id: "hot", label: "Hot", priceModifier: 2.00 }
        ]
      }
    ],
    badge: "Crocante"
  },
  {
    id: "sus-006",
    name: "Temaki Shake",
    description: "Temaki de salmão fresco",
    price: 22.99,
    category: "Sushi",
    image: "https://images.unsplash.com/photo-1564489563601-c53cfc451e93?w=800&auto=format&fit=crop",
    variations: [
      {
        id: "preparation",
        name: "Preparo",
        required: true,
        options: [
          { id: "raw", label: "Cru", priceModifier: 0 },
          { id: "hot", label: "Hot", priceModifier: 2.00 }
        ]
      }
    ]
  },
  {
    id: "sus-007",
    name: "Temaki Turbo",
    description: "Temaki gigante especial da casa",
    price: 69.99,
    category: "Sushi",
    image: "https://images.unsplash.com/photo-1564489563601-c53cfc451e93?w=800&auto=format&fit=crop",
    variations: [
      {
        id: "preparation",
        name: "Preparo",
        required: true,
        options: [
          { id: "raw", label: "Cru", priceModifier: 0 },
          { id: "hot", label: "Hot", priceModifier: 2.00 }
        ]
      }
    ],
    badge: "Gigante"
  },
  {
    id: "sus-008",
    name: "Temaki Shake Ebi",
    description: "Temaki de salmão com camarão",
    price: 24.99,
    category: "Sushi",
    image: "https://images.unsplash.com/photo-1564489563601-c53cfc451e93?w=800&auto=format&fit=crop",
    variations: [
      {
        id: "preparation",
        name: "Preparo",
        required: true,
        options: [
          { id: "raw", label: "Cru", priceModifier: 0 },
          { id: "hot", label: "Hot", priceModifier: 2.00 }
        ]
      }
    ],
    badge: "Especial"
  },
  {
    id: "sus-009",
    name: "Sashimi",
    description: "5 peças de sashimi fresco",
    price: 9.99,
    category: "Sushi",
    image: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=800&auto=format&fit=crop",
    ingredients: ["5 peças de sashimi"]
  },
  {
    id: "sus-010",
    name: "Camarão Cheese",
    description: "Camarão empanado com cream cheese",
    price: 19.99,
    category: "Sushi",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=800&auto=format&fit=crop",
    badge: "Especial"
  },
  {
    id: "sus-011",
    name: "Sashimi Maçaricado",
    description: "5 peças de sashimi levemente maçaricado",
    price: 24.99,
    category: "Sushi",
    image: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=800&auto=format&fit=crop",
    badge: "Premium",
    ingredients: ["5 peças de sashimi maçaricado"]
  },
  {
    id: "sus-012",
    name: "Pok Havaiano 01",
    description: "Bowl de poke havaiano tradicional",
    price: 24.99,
    category: "Sushi",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop",
    badge: "Bowl"
  },
  {
    id: "sus-013",
    name: "Pok Havaiano 02",
    description: "Bowl de poke havaiano especial",
    price: 24.99,
    category: "Sushi",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop",
    badge: "Bowl"
  },
  {
    id: "sus-014",
    name: "Seviche",
    description: "Peixe fresco marinado em limão com temperos",
    price: 24.99,
    category: "Sushi",
    image: "https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=800&auto=format&fit=crop",
    badge: "Refrescante"
  },
  {
    id: "sus-015",
    name: "Combo Hot 15 peças",
    description: "15 peças de sushi hot variado",
    price: 24.99,
    category: "Sushi",
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&auto=format&fit=crop",
    badge: "Combo"
  },
  {
    id: "sus-016",
    name: "Combo Hot 30 peças",
    description: "30 peças de sushi hot variado",
    price: 59.99,
    category: "Sushi",
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&auto=format&fit=crop",
    badge: "Combo"
  },
  {
    id: "sus-017",
    name: "Combo Cru 15 peças",
    description: "5 especiais + 10 normais",
    price: 37.50,
    category: "Sushi",
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&auto=format&fit=crop",
    badge: "Combo"
  },
  {
    id: "sus-018",
    name: "Combo Cru 30 peças",
    description: "10 especiais + 20 normais",
    price: 75.00,
    category: "Sushi",
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&auto=format&fit=crop",
    badge: "Combo"
  },

  // BEBIDAS - Sem Álcool
  {
    id: "beb-001",
    name: "Água de Coco (Copo 250ml)",
    description: "Água de coco natural gelada",
    price: 4.99,
    category: "Bebidas sem Álcool",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&auto=format&fit=crop"
  },
  {
    id: "beb-002",
    name: "Água de Coco (Jarra 600ml)",
    description: "Água de coco natural gelada - jarra",
    price: 9.99,
    category: "Bebidas sem Álcool",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&auto=format&fit=crop"
  },
  {
    id: "beb-003",
    name: "Água Mineral sem Gás",
    description: "Água mineral natural",
    price: 2.50,
    category: "Bebidas sem Álcool",
    image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=800&auto=format&fit=crop"
  },
  {
    id: "beb-004",
    name: "Água Mineral com Gás",
    description: "Água mineral gaseificada",
    price: 2.99,
    category: "Bebidas sem Álcool",
    image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=800&auto=format&fit=crop"
  },
  {
    id: "beb-005",
    name: "H2O",
    description: "H2O sabor limão ou limoneto",
    price: 6.99,
    category: "Bebidas sem Álcool",
    flavor: ['Limão', 'Limoneto'],
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&auto=format&fit=crop"
  },
  {
    id: "beb-006",
    name: "Suco Natural (Copo 250ml)",
    description: "Suco natural",
    price: 5.99,
    category: "Bebidas sem Álcool",
    flavor: ['Laranja', 'Limão', 'Maracujá', 'Cajá'],
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=800&auto=format&fit=crop",
    variations: [
      {
        id: "milk",
        name: "Adicional",
        required: false,
        options: [
          { id: "no-milk", label: "Sem Leite", priceModifier: 0 },
          { id: "with-milk", label: "Com Leite", priceModifier: 1.00 }
        ]
      }
    ],
    badge: "Natural"
  },
  {
    id: "beb-007",
    name: "Suco Natural (Jarra 600ml)",
    description: "Suco natural",
    price: 15.99,
    category: "Bebidas sem Álcool",
    flavor: ['Laranja', 'Limão', 'Maracujá', 'Cajá'],
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=800&auto=format&fit=crop",
    variations: [
      {
        id: "milk",
        name: "Adicional",
        required: false,
        options: [
          { id: "no-milk", label: "Sem Leite", priceModifier: 0 },
          { id: "with-milk", label: "Com Leite", priceModifier: 1.00 }
        ]
      }
    ],
    badge: "Natural"
  },
  {
    id: "beb-008",
    name: "Refrigerante Lata",
    description: "Coca-Cola, Fanta, Guaraná, Soda ou Schweppes",
    price: 4.99,
    category: "Bebidas sem Álcool",
    flavor: ['Coca-Cola', 'Guaraná', 'Fanta', 'Soda', 'Schweppes'],
    image: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=800&auto=format&fit=crop"
  },
  {
    id: "beb-009",
    name: "Refrigerante 1L",
    description: "Coca-Cola ou Guaraná",
    price: 8.99,
    category: "Bebidas sem Álcool",
    flavor: ['Coca-Cola', 'Guaraná'],
    image: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=800&auto=format&fit=crop"
  },
  {
    id: "beb-010",
    name: "Energético Red Bull",
    description: "Red Bull energético",
    price: 12.99,
    category: "Bebidas sem Álcool",
    image: "https://images.unsplash.com/photo-1622543925917-763c34f6a3bc?w=800&auto=format&fit=crop"
  },

  // Cervejas
  {
    id: "cer-001",
    name: "Chopp Amstel",
    description: "Chopp Amstel gelado - PROMOÇÃO ESPECIAL",
    price: 9.99,
    category: "Cervejas",
    image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=800&auto=format&fit=crop",
    badge: "Novidade"
  },
  {
    id: "cer-002",
    name: "Amstel 300ml",
    description: "Cerveja Amstel 300ml gelada",
    price: 4.99,
    category: "Cervejas",
    image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=800&auto=format&fit=crop"
  },
  {
    id: "cer-003",
    name: "Skol 300ml",
    description: "Cerveja Skol 300ml gelada",
    price: 4.99,
    category: "Cervejas",
    image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=800&auto=format&fit=crop"
  },
  {
    id: "cer-004",
    name: "Original 300ml",
    description: "Cerveja Original 300ml gelada",
    price: 5.99,
    category: "Cervejas",
    image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=800&auto=format&fit=crop"
  },
  {
    id: "cer-005",
    name: "Devassa 300ml",
    description: "Cerveja Devassa 300ml gelada",
    price: 4.50,
    category: "Cervejas",
    image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=800&auto=format&fit=crop"
  },
  {
    id: "cer-006",
    name: "Heineken 600ml",
    description: "Cerveja Heineken 600ml gelada",
    price: 14.99,
    category: "Cervejas",
    image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=800&auto=format&fit=crop",
    badge: "Premium"
  },
  {
    id: "cer-007",
    name: "Amstel 600ml",
    description: "Cerveja Amstel 600ml gelada",
    price: 11.99,
    category: "Cervejas",
    image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=800&auto=format&fit=crop"
  },
  {
    id: "cer-008",
    name: "Devassa 600ml",
    description: "Cerveja Devassa 600ml gelada",
    price: 9.99,
    category: "Cervejas",
    image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=800&auto=format&fit=crop"
  },
  {
    id: "cer-009",
    name: "Heineken Long Neck",
    description: "Heineken long neck gelada",
    price: 8.99,
    category: "Cervejas",
    image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=800&auto=format&fit=crop",
    badge: "Premium"
  },
  {
    id: "cer-010",
    name: "Budweiser Long Neck",
    description: "Budweiser long neck gelada",
    price: 7.99,
    category: "Cervejas",
    image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=800&auto=format&fit=crop"
  },
  {
    id: "cer-011",
    name: "Stella Long Neck",
    description: "Stella Artois long neck gelada",
    price: 7.99,
    category: "Cervejas",
    image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=800&auto=format&fit=crop",
    badge: "Premium"
  },
  {
    id: "cer-012",
    name: "Ice Cabaré",
    description: "Cerveja Ice Cabaré gelada",
    price: 7.99,
    category: "Cervejas",
    image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=800&auto=format&fit=crop"
  },

  // Vinhos
  {
    id: "vin-001",
    name: "Quinta do Morgado",
    description: "Vinho Quinta do Morgado",
    price: 29.99,
    category: "Vinhos",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&auto=format&fit=crop"
  },
  {
    id: "vin-002",
    name: "Pérgola",
    description: "Vinho Pérgola",
    price: 39.99,
    category: "Vinhos",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&auto=format&fit=crop"
  },

  // Café
  {
    id: "caf-001",
    name: "Café Puro",
    description: "Café coado puro",
    price: 1.99,
    category: "Café",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&auto=format&fit=crop"
  },
  {
    id: "caf-002",
    name: "Café com Leite",
    description: "Café com leite cremoso",
    price: 2.99,
    category: "Café",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&auto=format&fit=crop"
  },

  // Doses
  {
    id: "dos-001",
    name: "Smirnoff",
    description: "Dose de Smirnoff",
    price: 7.99,
    category: "Doses",
    image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=800&auto=format&fit=crop"
  },
  {
    id: "dos-002",
    name: "Absolut",
    description: "Dose de Absolut Vodka",
    price: 12.99,
    category: "Doses",
    image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=800&auto=format&fit=crop",
    badge: "Premium"
  },
  {
    id: "dos-003",
    name: "Black White",
    description: "Dose de Black & White",
    price: 15.99,
    category: "Doses",
    image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=800&auto=format&fit=crop",
    badge: "Premium"
  },
  {
    id: "dos-004",
    name: "Red Label",
    description: "Dose de Red Label",
    price: 12.99,
    category: "Doses",
    image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=800&auto=format&fit=crop",
    badge: "Premium"
  },
  {
    id: "dos-005",
    name: "Old Par",
    description: "Dose de Old Parr",
    price: 16.99,
    category: "Doses",
    image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=800&auto=format&fit=crop",
    badge: "Premium"
  },
  {
    id: "dos-006",
    name: "Tequila",
    description: "Dose de Tequila",
    price: 9.99,
    category: "Doses",
    image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=800&auto=format&fit=crop"
  },
  {
    id: "dos-007",
    name: "Cabaré",
    description: "Dose de Cabaré",
    price: 7.99,
    category: "Doses",
    image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=800&auto=format&fit=crop"
  },
  {
    id: "dos-008",
    name: "Campari",
    description: "Dose de Campari",
    price: 9.99,
    category: "Doses",
    image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=800&auto=format&fit=crop"
  },

  // Drinks
  {
    id: "dri-001",
    name: "Caipiroska",
    description: "Caipiroska refrescante",
    price: 8.00,
    category: "Drinks",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&auto=format&fit=crop",
    flavor: ['Morango', 'Abacaxi', 'Maracujá', 'Limão'],
    variations: [
      {
        id: "alcohol",
        name: "Tipo de Bebida",
        required: true,
        options: [
          { id: "no-alcohol", label: "Sem Álcool", priceModifier: 0 },
          { id: "slova", label: "Com Slova", priceModifier: 1.99 },
          { id: "smirnoff", label: "Com Smirnoff", priceModifier: 4.99 },
          { id: "absolut", label: "Com Absolut", priceModifier: 8.99 }
        ]
      }
    ],
    badge: "Popular"
  },
  {
    id: "dri-002",
    name: "Coquetel",
    description: "Coquetel de morango ou frutas vermelhas",
    price: 8.00,
    category: "Drinks",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&auto=format&fit=crop",
    flavor: ['Morango', 'Frutas Vermelhas'],
    variations: [
      {
        id: "alcohol",
        name: "Tipo de Bebida",
        required: true,
        options: [
          { id: "no-alcohol", label: "Sem Álcool", priceModifier: 0 },
          { id: "slova", label: "Com Slova", priceModifier: 1.99 },
          { id: "smirnoff", label: "Com Smirnoff", priceModifier: 4.99 },
          { id: "absolut", label: "Com Absolut", priceModifier: 8.99 }
        ]
      }
    ]
  },
  {
    id: "dri-003",
    name: "Nevada",
    description: "Nevada de abacaxi, maracujá ou limão",
    price: 8.00,
    category: "Drinks",
    flavor: ['Limão', 'Maracujá', 'Abacaxi'],
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&auto=format&fit=crop",
    variations: [
      {
        id: "alcohol",
        name: "Tipo de Bebida",
        required: true,
        options: [
          { id: "no-alcohol", label: "Sem Álcool", priceModifier: 0 },
          { id: "slova", label: "Com Slova", priceModifier: 1.99 },
          { id: "smirnoff", label: "Com Smirnoff", priceModifier: 4.99 },
          { id: "absolut", label: "Com Absolut", priceModifier: 8.99 }
        ]
      }
    ]
  },
  {
    id: "dri-004",
    name: "Gin",
    description: "Gin com morango, abacaxi, maracujá ou Schweppes",
    price: 17.99,
    category: "Drinks",
    flavor: ['Morango', 'Abacaxi', 'Maracuja', 'Schweppes'],
    image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=800&auto=format&fit=crop",
    badge: "Premium"
  },
  {
    id: "dri-005",
    name: "Mojito",
    description: "Mojito clássico refrescante",
    price: 12.99,
    category: "Drinks",
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800&auto=format&fit=crop",
    badge: "Refrescante"
  },
  {
    id: "dri-006",
    name: "Caipireja",
    description: "Caipireja com Ice Cabaré ou Heineken",
    price: 18.99,
    category: "Drinks",
    flavor: ['Cabaré Ice', 'Heineken'],
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&auto=format&fit=crop",
    badge: "Especial"
  },
  {
    id: "dri-007",
    name: "Blue Berry",
    description: "Drink especial Blue Berry",
    price: 19.99,
    category: "Drinks",
    image: "https://images.unsplash.com/photo-1575467678930-c7acd65d6470?w=800&auto=format&fit=crop",
    badge: "Especial"
  },
  {
    id: "dri-008",
    name: "Lagoa Azul",
    description: "Drink refrescante Lagoa Azul",
    price: 19.99,
    category: "Drinks",
    image: "https://images.unsplash.com/photo-1575467678930-c7acd65d6470?w=800&auto=format&fit=crop",
    badge: "Especial"
  },
  {
    id: "dri-009",
    name: "Sex on the Beach",
    description: "Clássico Sex on the Beach",
    price: 9.99,
    category: "Drinks",
    image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=800&auto=format&fit=crop",
    variations: [
      {
        id: "alcohol",
        name: "Tipo de Bebida",
        required: true,
        options: [
          { id: "slova", label: "Com Slova", priceModifier: 0 },
          { id: "smirnoff", label: "Com Smirnoff", priceModifier: 3.00 },
          { id: "absolut", label: "Com Absolut", priceModifier: 7.00 }
        ]
      }
    ],
    badge: "Clássico"
  },
  {
    id: "dri-010",
    name: "Shot After",
    description: "Shot After especial",
    price: 10.00,
    category: "Drinks",
    image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=800&auto=format&fit=crop"
  }
];

export const categories = [
  "Espetinhos",
  "Espetos Gourmet",
  "Tira Gosto",
  "Pastéis",
  "Caldinhos",
  "Hambúrgueres",
  "Cuscuz",
  "Doces",
  "Sushi",
  "Bebidas sem Álcool",
  "Cervejas",
  "Vinhos",
  "Café",
  "Doses",
  "Drinks"
];

export const foodCategories = [
  "Espetinhos",
  "Espetos Gourmet",
  "Tira Gosto",
  "Pastéis",
  "Caldinhos",
  "Hambúrgueres",
  "Cuscuz",
  "Doces",
  "Sushi"
];

export const drinkCategories = [
  "Bebidas sem Álcool",
  "Cervejas",
  "Vinhos",
  "Café",
  "Doses",
  "Drinks"
];
