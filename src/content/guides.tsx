import { MSG } from "./site";
import { BITOLAS } from "./products";
import { DataTable } from "@/components/ui";

export type Guide = {
  slug: string;
  h1: string;
  card: string;
  title: string;
  description: string;
  keywords: string;
  button: { label: string; message: string };
  links: { href: string; label: string }[];
  body: React.ReactNode;
};

export const GUIDES: Guide[] = [
  {
    slug: "qual-trelica-usar",
    h1: "Qual treliça usar na laje: TG8 ou TG12?",
    card: "A diferença entre os modelos e quando cada um vai na laje treliçada.",
    title: "Qual Treliça Usar na Laje: TG8 ou TG12? | RB Ferragens",
    description:
      "Entenda a diferença entre a treliça TG8 e a TG12, o que significa cada código e quando cada uma é usada na laje treliçada.",
    keywords: "qual treliça usar, treliça tg8 ou tg12, treliça h8, tipos de treliça, treliça o que é",
    button: { label: "Pedir orçamento de treliça", message: MSG.trelica },
    links: [{ href: "/produtos/trelicas", label: "Ver treliças" }],
    body: (
      <>
        <p>
          A treliça é a armadura de aço que vai dentro das vigotas da laje treliçada. Ela é feita de três fios de aço CA-60:
          um em cima, dois embaixo e diagonais soldadas ligando tudo.
        </p>
        <p>
          O número do modelo é a altura em centímetros. A TG8 tem 8 cm de altura e a TG12 tem 12 cm. A letra depois do
          número (L, M ou R) indica a grossura dos fios de baixo: quanto mais grosso, mais reforçada. Treliça H8 e TR8 são
          outros nomes pro mesmo modelo de 8 cm.
        </p>
        <h2>Quando usar cada uma</h2>
        <p>
          A TG8 é a mais comum em casa, pra lajes de vão menor e carga de residência. A TG12 vai em lajes de vão maior ou
          com mais carga, como uma laje que vai receber outro pavimento.
        </p>
        <h2>Quem decide</h2>
        <p>
          O projeto da laje define o modelo, o espaçamento das vigotas e a altura total. Os fabricantes divulgam vãos
          máximos diferentes pra cada modelo, então não dá pra escolher só pela medida do cômodo.
        </p>
        <p>Tem o projeto e ficou na dúvida? Mande pra gente no WhatsApp que a gente ajuda a ler.</p>
      </>
    ),
  },
  {
    slug: "tabela-de-bitolas",
    h1: "Tabela de bitolas de vergalhão e peso da barra",
    card: "Bitola em mm e em polegada, peso por metro e peso da barra de 12 m.",
    title: "Tabela de Bitolas de Vergalhão e Peso da Barra | RB Ferragens",
    description:
      "Veja a tabela de bitolas de vergalhão em mm e polegada, o peso por metro e da barra de 12 m e onde cada ferro costuma ser usado na obra.",
    keywords: "tabela de vergalhão, bitola de ferro, peso do vergalhão, ferro 3/8 em mm, vergalhão 5/16, peso da barra de ferro",
    button: { label: "Pedir orçamento de vergalhão", message: MSG.vergalhao },
    links: [{ href: "/produtos/vergalhoes", label: "Ver vergalhões" }],
    body: (
      <>
        <p>
          Na loja, todo mundo pede o ferro pela polegada: &ldquo;3/8&rdquo;, &ldquo;5/16&rdquo;, &ldquo;1/4&rdquo;. No
          projeto, a bitola vem em milímetros. A tabela abaixo junta as duas coisas e mostra quanto pesa cada barra de 12
          metros, o que ajuda a entender o orçamento quando o preço vem por quilo.
        </p>
        <DataTable {...BITOLAS} />
        <h2>Como ler a tabela</h2>
        <p>
          Pra saber o peso total, multiplique o peso da barra pela quantidade de barras. Exemplo: 20 barras de 3/8 pesam
          cerca de 148 kg (20 x 7,40 kg).
        </p>
      </>
    ),
  },
  {
    slug: "ca-50-x-ca-60",
    h1: "CA-50 ou CA-60: onde usar cada um",
    card: "A diferença entre os dois aços e por que um não substitui o outro.",
    title: "CA-50 ou CA-60: Diferença e Onde Usar Cada Aço | RB Ferragens",
    description:
      "Entenda a diferença entre o aço CA-50 e o CA-60, quais bitolas existem em cada um e por que um não substitui o outro na estrutura.",
    keywords: "ca 50 e ca 60, diferença ca 50 ca 60, aço ca 50, aço ca 60, vergalhão ca 50",
    button: { label: "Pedir orçamento", message: MSG.vergalhao },
    links: [{ href: "/produtos/vergalhoes", label: "Ver vergalhões" }],
    body: (
      <>
        <p>CA quer dizer concreto armado, e o número indica a resistência do aço. Os dois seguem a norma brasileira NBR 7480.</p>
        <ul>
          <li>
            <strong>CA-50:</strong> barra nervurada, de 6,3 mm (1/4) pra cima. É o ferro das peças principais: colunas,
            vigas, sapatas e baldrames.
          </li>
          <li>
            <strong>CA-60:</strong> fio mais fino, de 4,2 a 9,5 mm. Vai em estribos, telas, treliças e lajes.
          </li>
        </ul>
        <h2>Pode trocar um pelo outro?</h2>
        <p>
          Não. O projeto é calculado com o aço que está nele. Trocar CA-50 por CA-60 na estrutura muda o cálculo e pode
          deixar a peça mais fraca do que deveria.
        </p>
      </>
    ),
  },
  {
    slug: "malha-pop-x-tela-q92",
    h1: "Malha POP ou tela Q92: qual usar no contrapiso?",
    card: "Tamanho dos painéis e qual tela vai no contrapiso, na calçada e na garagem.",
    title: "Malha POP ou Tela Q92: Qual Usar no Contrapiso? | RB Ferragens",
    description:
      "Veja a diferença entre malha POP e tela soldada Q92 e Q138, o tamanho dos painéis e qual costuma ser usada em contrapiso, calçada e garagem.",
    keywords: "malha pop, tela q92, malha para contrapiso, tela soldada, malha pop ou q92",
    button: { label: "Pedir orçamento de malha", message: MSG.malha },
    links: [{ href: "/produtos/telas-malhas-radier", label: "Ver telas e malhas" }],
    body: (
      <>
        <p>
          Malha POP e tela soldada são painéis de fios de aço CA-60 soldados em quadrados. Elas ficam dentro do concreto do
          piso pra evitar trincas.
        </p>
        <ul>
          <li>
            <strong>Malha POP EQ92:</strong> quadrados de 15 x 15 cm, fio de 4,2 mm, painel de 2,00 x 3,00 m. Mais leve e
            fácil de carregar.
          </li>
          <li>
            <strong>Tela Q92:</strong> os mesmos 15 x 15 cm e fio de 4,2 mm, em painel maior, de 2,45 x 6,00 m.
          </li>
          <li>
            <strong>Tela Q138:</strong> quadrados menores, de 10 x 10 cm, pra pisos com mais carga, como garagem.
          </li>
        </ul>
        <h2>No contrapiso e na calçada de casa</h2>
        <p>
          A malha POP ou a Q92 costumam atender. Pra garagem ou área com carro, a Q138 é mais indicada. No radier, a tela
          faz parte da armadura, mas quem define o reforço é o projeto.
        </p>
        <h2>Quantos painéis comprar</h2>
        <p>
          Divida a área do piso pela área do painel e some uma sobra pra sobreposição entre eles. Se preferir, mande a
          medida que a gente calcula.
        </p>
      </>
    ),
  },
  {
    slug: "corte-e-dobra-compensa",
    h1: "Corte e dobra compensa? Como mandar seu projeto pelo WhatsApp",
    card: "Quando o corte e dobra vale a pena e como pedir pelo WhatsApp.",
    title: "Corte e Dobra Compensa? Como Pedir pelo WhatsApp | RB Ferragens",
    description:
      "Veja quando o corte e dobra de ferro vale a pena, o que muda na obra e como mandar o projeto ou a lista do mestre pelo WhatsApp.",
    keywords: "corte e dobra compensa, corte e dobra de aço, ferro cortado e dobrado, como pedir corte e dobra",
    button: { label: "Mandar meu projeto", message: MSG.corteDobra },
    links: [{ href: "/corte-e-dobra", label: "Corte e dobra" }],
    body: (
      <>
        <p>No corte e dobra, o ferro chega na obra cortado e dobrado do jeito que está no projeto. O pedreiro só amarra e monta.</p>
        <h2>Quando compensa</h2>
        <ul>
          <li>Quando a obra tem muitos estribos e peças dobradas</li>
          <li>Quando o canteiro é pequeno e não cabe bancada de dobra</li>
          <li>Quando o prazo é curto e a mão de obra está cara</li>
          <li>Quando você quer comprar só o ferro que vai usar, com pouca sobra</li>
        </ul>
        <h2>Quando talvez não compense</h2>
        <p>Em serviços muito pequenos, de poucas barras, cortar na obra pode sair mais simples.</p>
        <h2>Como mandar pelo WhatsApp</h2>
        <ol>
          <li>Tire uma foto legível do projeto estrutural ou da lista do mestre de obras.</li>
          <li>Escreva o bairro da obra.</li>
          <li>Se quiser receber por etapa, diga a ordem (fundação, colunas, vigas, laje).</li>
        </ol>
        <p>A gente devolve o orçamento com as quantidades e o prazo.</p>
      </>
    ),
  },
  {
    slug: "quanto-ferro-casa-terrea",
    h1: "Quanto ferro vai numa casa térrea?",
    card: "O que costuma entrar na lista de uma casa e por que a conta vem do projeto.",
    title: "Quanto Ferro Vai numa Casa Térrea? | RB Ferragens",
    description:
      "Veja quais ferros costumam entrar na estrutura de uma casa térrea, onde vai cada bitola e por que a quantidade certa vem do projeto.",
    keywords: "quanto ferro para construir uma casa, ferro para casa térrea, qual ferro usar na coluna, ferro para casa",
    button: { label: "Mandar minha lista", message: MSG.geral },
    links: [
      { href: "/produtos/vergalhoes", label: "Vergalhões" },
      { href: "/produtos/colunas-vigas-estribos", label: "Colunas e vigas" },
      { href: "/produtos/trelicas", label: "Treliças" },
    ],
    body: (
      <>
        <p>
          Não existe uma quantidade de ferro que sirva pra toda casa. Ela muda com o tamanho, o solo, o tipo de laje e o que
          o projeto pede. Mas dá pra entender o que costuma entrar na lista:
        </p>
        <ul>
          <li>
            <strong>Colunas, vigas e sapatas:</strong> vergalhão CA-50, em geral 3/8 (10 mm) ou 5/16 (8 mm) em casa térrea.
          </li>
          <li>
            <strong>Estribos:</strong> CA-60 de 5,0 mm.
          </li>
          <li>
            <strong>Laje:</strong> treliça (TG8 é a mais comum em casa) e, às vezes, ferro de distribuição.
          </li>
          <li>
            <strong>Contrapiso e calçada:</strong> malha POP ou tela Q92.
          </li>
          <li>
            <strong>Amarração:</strong> arame recozido.
          </li>
        </ul>
        <h2>Por que precisa do projeto</h2>
        <p>
          A bitola e a quantidade de ferro em cada peça são calculadas pelo engenheiro. Copiar a lista da casa do vizinho
          pode deixar a estrutura fraca ou gastar ferro à toa.
        </p>
        <h2>Tem só a lista do mestre?</h2>
        <p>Mande pra gente. A gente monta o orçamento e confere se não está faltando nada.</p>
      </>
    ),
  },
];

export const getGuide = (slug: string) => GUIDES.find((g) => g.slug === slug);
