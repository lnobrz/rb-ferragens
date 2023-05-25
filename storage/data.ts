export const paragraphs = {
  indexCover:
    "Atendendo Fortaleza - CE e região metropolitana, vendemos desde colunas até vigas de ferro e aço com as medidas ideais para o seu projeto.",
  indexProductSession:
    "Todos os produtos com a melhor qualidade existente no mercado e preço que cabe no seu bolso.",
  indexAdvantagesSection:
    "Oferecemos benefícios exclusivos aos nossos clientes, garantindo a sua satisfação.",
  indexAboutSection:
    "Nascida em 2019 com o objetivo de trazer preços acessíveis à Fortaleza e suas metrópoles, a RB Ferragens vem conquistando centenas de clientes...Nascida em 2019 com o objetivo de trazer preços acessíveis à Fortaleza e suas metrópoles, a RB Ferragens vem conquistando centenas de clientes...",
};

export const metrics = [
  {
    id: 1,
    data: "Clientes",
    amount: 1000,
  },
  {
    id: 2,
    data: "Pedidos",
    amount: 2000,
  },
  {
    id: 3,
    data: "Anos",
    amount: 4,
  },
];

export const products = [
  {
    id: 1,
    name: "arames",
    description:
      "Versáteis e de grande durabilidade, são úteis desde a construção civil até a jardinagem.",
    imageUrl: "/images/arame.png",
    optionLink: "/produtos/arames/",
  },
  {
    id: 2,
    name: "colunas",
    description:
      "Essenciais na construção civil, servem para sustentar estruturas - como muros e paredes.",
    imageUrl: "/images/coluna.png",
    optionLink: "/produtos/colunas/",
  },
  {
    id: 3,
    name: "malhas",
    description:
      "Fundamentais na construção de estruturas pré-moldadas e lajes, facilitam e garantem agilidade em sua obra.",
    imageUrl: "/images/malha.png",
    optionLink: "/produtos/malhas/",
    measurements: {
      tableHeaders: ["designação", "malha cm", "bitola mm", "peso peça"],
      tableData: [
        {
          id: 1,
          designation: "leve",
          malhaCentimeters: "20x20",
          bitolaMilimeters: "3.4",
          pieceWeight: "4.3",
        },
        {
          id: 2,
          designation: "médio",
          malhaCentimeters: "15x15",
          bitolaMilimeters: "3.4",
          pieceWeight: "6.0",
        },
        {
          id: 3,
          designation: "reforçado",
          malhaCentimeters: "15x15",
          bitolaMilimeters: "4.2",
          pieceWeight: "9.0",
        },
        {
          id: 4,
          designation: "pesado",
          malhaCentimeters: "10x10",
          bitolaMilimeters: "4.2",
          pieceWeight: "13.2",
        },
      ],
    },
  },
  {
    id: 4,
    name: "radiers",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imageUrl: "/images/radier.png",
    optionLink: "/produtos/radiers/",
  },
  {
    id: 5,
    name: "treliças",
    description:
      "Usadas para fornecer mais resistência e segurança nas estruturas presentes na construção civil.",
    imageUrl: "/images/trelica.png",
    optionLink: "/produtos/treliças/",
  },
  {
    id: 6,
    name: "vergalhões",
    description:
      "Aplicadas na criação de diversas outras ferragens, como, por exemplo, vigas e fundações. ",
    imageUrl: "/images/vergalhao.png",
    optionLink: "/produtos/vergalhões/",
    measurements: {
      tableHeaders: ["bitola pol", "bitola mm", "peso barra", "peso kg/m"],
      tableData: [
        {
          id: 1,
          bitolaInches: "1/4",
          bitolaMilimeters: "6.3",
          barWeight: "2.94",
          weightPerMeter: "0.245",
        },
        {
          id: 2,
          bitolaInches: "5/16",
          bitolaMilimeters: "8.0",
          barWeight: "4.74",
          weightPerMeter: "0.395",
        },
        {
          id: 3,
          bitolaInches: "3 / 8",
          bitolaMilimeters: "10.0",
          barWeight: "7.404",
          weightPerMeter: "0.617",
        },
        {
          id: 4,
          bitolaInches: "1/4",
          bitolaMilimeters: "6.3",
          barWeight: "2.94",
          weightPerMeter: "0.245",
        },
      ],
    },
    measurements2: {
      tableHeaders: ["bitola mm", "peso barra", "peso kg/m"],
      tableData: [
        {
          id: 1,
          bitolaMilimeters: "3.4",
          barWeight: "0.84",
          weightPerMeter: "0.07",
        },
        {
          id: 2,
          bitolaMilimeters: "4.2",
          barWeight: "1.308",
          weightPerMeter: "0.109",
        },
        {
          id: 3,
          bitolaMilimeters: "5.0",
          barWeight: "1.848",
          weightPerMeter: "0.154",
        },
        {
          id: 4,
          bitolaMilimeters: "6.0",
          barWeight: "2.664",
          weightPerMeter: "0.222",
        },
      ],
    },
  },
  {
    id: 7,
    name: "vigas",
    description:
      "Utilizadas como sustentação para o equilibrio dos pesos, já que são estruturas bastante resistentes.",
    imageUrl: "/images/viga.png",
    optionLink: "/produtos/vigas/",
  },
  {
    id: 8,
    name: "tubos galvanizados",
    description:
      "Mais resistentes a corrosão, os tubos galvanizados são de uso obrigatório em diversos setores industriais.",
    imageUrl: "/images/tubo-galvanizado.jpg",
    optionLink: "/produtos/tubos-galvanizados/",
  },
];

export const services = [
  {
    id: 1,
    name: "corte e dobra",
    description:
      "Moldamos a sua ferragem da maneira que desejar, garantindo a precisão necessária para sua obra.",
    imageUrl: "/images/corte-e-dobra.png",
    optionLink: "/servicos/corte-e-dobra/",
  },
];

export const advantages = [
  {
    id: 1,
    name: "frete grátis",
  },
  {
    id: 2,
    name: "corte e dobra de acordo com o seu projeto",
  },
  {
    id: 3,
    name: "aceitamos cartões de crédito e débito",
  },
];

export const advertisements = {
  index: "consultar condições de frete grátis **",
};

export const footerRights = {
  copyrights: "RB Ferragens ®️, 2023",
};

export const buttonsTexts = {
  cover: "Fazer Orçamento",
  aboutSection: "Saiba Mais",
  budgetSection: "PEDIR ORÇAMENTO",
};

export const address = {
  street: "Travessa Precabura, 79",
  neighborhoodCityState: "Lagoa Redonda, Fortaleza - CE",
  zipCode: "CEP: 60831-372",
};

export const contacts = [
  {
    id: 1,
    name: "Email",
    info: "rbferragens01@gmail.com",
  },
  {
    id: 2,
    name: "Telefone",
    info: "+55 85 4141-6030",
  },
  {
    id: 3,
    name: "Whatsapp",
    info: "+55 85 99727-1762",
  },
];

export const MenuLinks = [
  {
    id: 1,
    name: "Home",
    url: "/",
  },
  {
    id: 2,
    name: "Produtos",
    url: "/produtos",
  },
  {
    id: 3,
    name: "Serviços",
    url: "/servicos",
  },
  {
    id: 4,
    name: "Sobre Nós",
    url: "/sobre",
  },
  {
    id: 5,
    name: "Fale Conosco",
    url: "/contatos",
  },
];

export const buttonsLinks = {
  budget:
    "https://api.whatsapp.com/send?phone=5585997271762&text=Olá,\u0020gostaria de solicitar um orçamento.",
  email: "mailto:rbferragens01@gmail.com",
  phone: "tel:5585997271762",
  about: "/sobre",
  products: "/produtos",
};

export const aboutStrings = [
  "Por acaso você já pensou que comprar ferragens de qualidade, feitas por profissionais que entendem do assunto, com preço acessível, corte e dobra de acordo com seu projeto e entrega rápida e facilitada era um sonho distante? A RB Ferragens veio para mudar isso!",
  "Somos uma empresa localizada em Fortaleza- CE e atendemos Fortaleza e suas metrópoles, levando ferragens de extrema qualidade direto para sua obra.Com profissionais prontos para atender as suas demandas, trabalhamos com a venda de diversos tipos de ferro, aço e até mesmo corte e dobra de acordo com o seu projeto, garantindo com que sua obra seja executada de acordo com o planejado.",
  "Hoje, a RB Ferragens encontra - se em constante expansão, havendo fechado mais de 2000 pedidos com mais de 1000 clientes diferentes, com mais de 98 % de satisfação de nossos clientes, o que é resultado de nosso contínuo esforço para trazer cada vez mais excelência aos nossos produtos.",
  "A RB Ferragens vem mudando a maneira como diversos profissionais da construção civil e clientes finais executam suas obrar através da facilitação desde o processo de compra até a entrega do produto final, levando o produto final ao cliente com a maior rapidez possível, sempre garantindo a qualidade e o preço baixo do produto.",
  "Está interessado em ferragens de qualidade, preço baixo e rapidez na entrega ? Solicite um orçamento hoje mesmo e surpreenda - se!",
];

export const missionString =
  "Levar ferragens de qualidade, com preço acessível e rápida entrega para a maior quantidade de clientes possíveis, em Fortaleza e região metropolitana.";

export const visionString =
  "Nos tornarmos referência na venda de ferragens em todo o Brasil, sempre sendo reconhecidos pela excelência de ponta a ponta que entregamos em todos os nossos processos.";

export const valuesStrings =
  "Ética, excelência e comprometimento são os 3 principais valores que a RB Ferragens segue rigidamente desde a sua fundação até os dias de hoje.";
