/** Dados confirmados da empresa (ver "Copy do site RB Ferragens", 13/11/2026). Não inventar nada aqui. */
export const SITE = {
  name: "RB Ferragens",
  url: "https://www.rbferragens.com.br",
  email: "rbferragens01@gmail.com",
  phone: { display: "(85) 4141-6030", tel: "+558541416030" },
  whatsapp: { display: "(85) 99162-6955", number: "5585991626955" },
  address: {
    street: "Travessa Precabura, 79",
    district: "Lagoa Redonda",
    city: "Fortaleza",
    state: "CE",
    zip: "60831-372",
  },
  hours: [
    { label: "Segunda a sexta", value: "das 7h às 18h" },
    { label: "Sábado", value: "das 7h às 12h" },
    { label: "Domingo", value: "fechado" },
  ],
  mapsQuery: "RB Ferragens, Travessa Precabura, 79, Lagoa Redonda, Fortaleza, CE, 60831-372",
} as const;

export const FULL_ADDRESS = `${SITE.address.street}, ${SITE.address.district}, ${SITE.address.city}, ${SITE.address.state}, CEP ${SITE.address.zip}`;

export const RMF_CITIES = [
  "Eusébio",
  "Aquiraz",
  "Itaitinga",
  "Pindoretama",
  "Maracanaú",
  "Pacatuba",
  "Caucaia",
  "Maranguape",
  "Horizonte",
  "Pacajus",
  "Guaiúba",
];

/** Link do WhatsApp com a mensagem pronta do botão. */
export function waLink(message: string) {
  return `https://wa.me/${SITE.whatsapp.number}?text=${encodeURIComponent(message)}`;
}

// Every WhatsApp button opens the chat with the same short message.
const WA_MESSAGE = "Olá, quero um orçamento";

export const MSG = {
  geral: WA_MESSAGE,
  corteDobra: WA_MESSAGE,
  trelica: WA_MESSAGE,
  vergalhao: WA_MESSAGE,
  coluna: WA_MESSAGE,
  malha: WA_MESSAGE,
  tubo: WA_MESSAGE,
  arame: WA_MESSAGE,
  entrega: WA_MESSAGE,
  construtora: WA_MESSAGE,
};

export const NAV = [
  { href: "/produtos", label: "Produtos" },
  { href: "/corte-e-dobra", label: "Corte e dobra" },
  { href: "/entrega", label: "Entrega" },
  { href: "/construtoras", label: "Construtoras" },
  { href: "/guia", label: "Guia da obra" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];
