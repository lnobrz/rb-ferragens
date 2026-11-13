export type ProductCard = { href: string; title: string; text: string; link: string; icon: string; image: string; alt: string };

/** Cards da Home ("O que você encontra aqui"). */
export const HOME_PRODUCTS: ProductCard[] = [
  { href: "/produtos/trelicas", icon: "trelica", title: "Treliças", text: "Pra laje treliçada, nos modelos mais usados em casa.", link: "Ver treliças" , image: "/images/fotos/trelica.jpg", alt: "Treliça de aço no pátio da RB, com os feixes de vergalhão ao fundo" },
  { href: "/produtos/vergalhoes", icon: "vergalhao", title: "Vergalhões", text: "CA-50 e CA-60 nas bitolas mais usadas em obra.", link: "Ver vergalhões" , image: "/images/fotos/vergalhao-pontas.jpg", alt: "Feixe de vergalhões amarrado e etiquetado no pátio da RB" },
  { href: "/produtos/colunas-vigas-estribos", icon: "coluna", title: "Colunas, vigas e estribos", text: "Prontos ou feitos na medida do seu projeto.", link: "Ver colunas e vigas" , image: "/images/fotos/coluna-armada.jpg", alt: "Coluna armada pronta no pátio da RB, ao lado dos feixes de vergalhão e das telas" },
  { href: "/produtos/telas-malhas-radier", icon: "malha", title: "Telas, malhas e radier", text: "Malha POP e tela soldada pra contrapiso, calçada e fundação.", link: "Ver telas e malhas" , image: "/images/fotos/malha-pop.jpg", alt: "Painéis de malha soldada encostados no muro do pátio da RB" },
  { href: "/produtos", icon: "tubo", title: "Tubos galvanizados, arames e pregos", text: "O que falta pra fechar o pedido.", link: "Ver todos os produtos" , image: "/images/fotos/tubos-galvanizados.jpg", alt: "Tubos galvanizados no galpão da RB" },
];

/** Cards da página Produtos. */
export const ALL_PRODUCTS: ProductCard[] = [
  { href: "/produtos/trelicas", icon: "trelica", title: "Treliças", text: "Pra laje treliçada, nos modelos TG8 e TG12.", link: "Ver treliças" , image: "/images/fotos/trelica.jpg", alt: "Treliça de aço no pátio da RB, com os feixes de vergalhão ao fundo" },
  { href: "/produtos/vergalhoes", icon: "vergalhao", title: "Vergalhões", text: "CA-50 e CA-60, do jeito que você pede: ferro 3/8, 5/16, 1/4.", link: "Ver vergalhões" , image: "/images/fotos/vergalhao-pontas.jpg", alt: "Feixe de vergalhões amarrado e etiquetado no pátio da RB" },
  { href: "/produtos/colunas-vigas-estribos", icon: "coluna", title: "Colunas, vigas e estribos", text: "Prontos ou feitos na medida do projeto.", link: "Ver colunas e vigas" , image: "/images/fotos/coluna-armada.jpg", alt: "Coluna armada pronta no pátio da RB, ao lado dos feixes de vergalhão e das telas" },
  { href: "/produtos/telas-malhas-radier", icon: "malha", title: "Telas, malhas e radier", text: "Malha POP e tela soldada pra contrapiso, calçada e fundação.", link: "Ver telas e malhas" , image: "/images/fotos/malha-pop.jpg", alt: "Painéis de malha soldada encostados no muro do pátio da RB" },
  { href: "/produtos/tubos-galvanizados", icon: "tubo", title: "Tubos galvanizados", text: "Pra estruturas, portões, coberturas e instalações.", link: "Ver tubos" , image: "/images/fotos/tubos-galvanizados.jpg", alt: "Tubos galvanizados no galpão da RB" },
  { href: "/produtos/arames-pregos", icon: "arame", title: "Arames e pregos", text: "Arame recozido pra amarração e pregos pra forma e madeiramento.", link: "Ver arames e pregos" , image: "/images/fotos/arame.jpg", alt: "Rolos de arame recozido nas prateleiras do galpão da RB" },
];

/** Tabela de bitolas (NBR 7480), usada em Vergalhões e no Guia 2. Conferir com as bitolas que a RB trabalha. */
export const BITOLAS = {
  caption: "Tabela de bitolas de vergalhão, barra de 12 m",
  head: ["Bitola", "Como o pessoal pede", "Aço", "Peso por metro", "Peso da barra", "Onde costuma ir"],
  rows: [
    ["4,2 mm", "não tem apelido", "CA-60", "0,109 kg", "1,31 kg", "amarração e telas"],
    ["5,0 mm", "não tem apelido", "CA-60", "0,154 kg", "1,85 kg", "estribos"],
    ["6,3 mm", "ferro 1/4", "CA-50", "0,245 kg", "2,94 kg", "estribos reforçados e lajes"],
    ["8,0 mm", "ferro 5/16", "CA-50", "0,395 kg", "4,74 kg", "colunas e vigas de casa, lajes"],
    ["10,0 mm", "ferro 3/8", "CA-50", "0,617 kg", "7,40 kg", "colunas, vigas e sapatas"],
    ["12,5 mm", "ferro 1/2", "CA-50", "0,963 kg", "11,56 kg", "pilares e vigas maiores"],
    ["16,0 mm", "ferro 5/8", "CA-50", "1,578 kg", "18,94 kg", "fundações e pilares com mais carga"],
  ],
};

export const TRELICAS = {
  caption: "Medidas dos modelos de treliça",
  head: ["Modelo", "Altura", "Fio de cima / diagonal / fio de baixo", "Peso por metro"],
  rows: [
    ["TG 8 L", "8 cm", "6,0 / 4,2 / 4,2 mm", "0,735 kg"],
    ["TG 8 M", "8 cm", "6,0 / 4,2 / 5,0 mm", "0,821 kg"],
    ["TG 12 M", "12 cm", "6,0 / 4,2 / 5,0 mm", "0,886 kg"],
    ["TG 12 R", "12 cm", "6,0 / 4,2 / 6,0 mm", "1,016 kg"],
  ],
};

export const MALHAS = {
  caption: "Modelos de malha e tela soldada mais usados",
  head: ["Modelo", "Malha", "Fio", "Painel", "Uso comum"],
  rows: [
    ["Malha POP EQ92", "15 x 15 cm", "4,2 mm", "2,00 x 3,00 m", "contrapiso e calçada de casa"],
    ["Tela Q92", "15 x 15 cm", "4,2 mm", "2,45 x 6,00 m", "contrapiso, calçada e piso"],
    ["Tela Q138", "10 x 10 cm", "4,2 mm", "2,45 x 6,00 m", "piso de garagem e áreas com mais carga"],
  ],
};
