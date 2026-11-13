/** Dados confirmados da empresa (ver "Copy do site RB Ferragens", 13/11/2026). Não inventar nada aqui. */
export const SITE = {
  name: "RB Ferragens",
  url: "https://www.rbferragens.com.br",
  email: "rbferragens01@gmail.com",
  phone: { display: "(85) 4141-6030", tel: "+558541416030" },
  whatsapp: { display: "(85) 99727-1762", number: "5585997271762" },
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

export const MSG = {
  geral: "Olá, quero um orçamento. Bairro da obra: __",
  corteDobra: "Olá, quero orçamento de corte e dobra. Vou mandar o projeto/lista. Bairro da obra: __",
  trelica: "Olá, quero orçamento de treliça. Modelo: __ Quantidade ou vão da laje: __ Bairro da obra: __",
  vergalhao: "Olá, quero orçamento de vergalhão. Bitola: __ Quantidade de barras: __ Bairro da obra: __",
  coluna: "Olá, quero orçamento de coluna/viga. Medida: __ Quantidade: __ Bairro da obra: __",
  malha: "Olá, quero orçamento de malha/tela. Onde vai usar: __ Área: __ m² Bairro da obra: __",
  tubo: "Olá, quero orçamento de tubo galvanizado. Medida: __ Quantidade: __ Bairro da obra: __",
  arame: "Olá, quero orçamento de arame/prego. Quantidade: __ Bairro da obra: __",
  entrega: "Olá, vocês entregam em __? O pedido é: __",
  construtora: "Olá, sou de uma construtora/empreiteira e quero cadastrar a empresa pra pedidos. Empresa: __",
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
