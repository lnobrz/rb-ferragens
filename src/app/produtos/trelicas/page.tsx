import { pageMeta } from "@/lib/seo";
import { MSG } from "@/content/site";
import { TRELICAS } from "@/content/products";
import { Actions, CheckList, CtaBand, DataTable, Faq, PageHero, Section, WaButton } from "@/components/ui";

export const metadata = pageMeta({
  title: "Treliça para Laje em Fortaleza (TG8 e TG12) | RB Ferragens",
  description:
    "Treliça de ferro TG8 e TG12 para laje treliçada, com entrega na obra em Fortaleza e região metropolitana. Veja medidas e peça orçamento.",
  keywords: "treliça, treliça de ferro, treliça para laje, laje treliçada, treliça h8, treliça tg8, treliça tg12, Fortaleza",
  path: "/produtos/trelicas",
});

export default function Trelicas() {
  return (
    <>
      <PageHero
        crumbs={[{ href: "/produtos", label: "Produtos" }, { label: "Treliças" }]}
        image="/images/fotos/trelicas.jpg"
        imageAlt="Treliças de aço para laje lado a lado no chão do galpão"
        chip="TG8 e TG12 · aço CA-60"
        title="Treliça de ferro para laje"
        subtitle="Treliças TG8 e TG12 em aço CA-60 pra laje treliçada, com entrega na sua obra em Fortaleza e na região metropolitana."
      >
        <Actions>
          <WaButton message={MSG.trelica}>Pedir orçamento de treliça</WaButton>
        </Actions>
      </PageHero>

      <Section title="O que é treliça">
        <p className="lead">
          A treliça é uma armadura de aço soldada, com um fio em cima, dois embaixo e diagonais ligando tudo. Ela vai
          dentro das vigotas da laje treliçada e dá a resistência que a laje precisa. O número do modelo é a altura da
          treliça em centímetros: a TG8 tem 8 cm e a TG12 tem 12 cm. Muita gente chama de treliça H8 ou TR8, é a mesma
          coisa.
        </p>
      </Section>

      <Section title="Medidas dos modelos" tone="white">
        <DataTable {...TRELICAS} />
      </Section>

      <Section title="TG8 ou TG12: qual usar?">
        <p className="lead">
          A TG8 é a mais usada em casa, pra lajes de vão menor. A TG12 é mais alta e vai em lajes com vão maior ou mais
          carga. Quem define o modelo e o espaçamento é o projeto da laje. Se você tem o projeto e ficou em dúvida, mande
          pra gente que a gente ajuda a ler.
        </p>
      </Section>

      <Section title="Por que comprar treliça na RB" tone="white">
        <CheckList
          items={[
            "Aço CA-60 nervurado",
            "Entrega na obra junto com o resto do ferro",
            "Atendimento no WhatsApp com quem entende de laje",
            "Pagamento no cartão",
          ]}
        />
      </Section>

      <Faq
        items={[
          { q: "Qual a diferença entre treliça H8 e TG8?", a: "Nenhuma. São nomes diferentes pro mesmo modelo de 8 cm de altura." },
          { q: "Qual o comprimento da treliça?", a: "A gente vende nos comprimentos mais usados e pode cortar na medida da sua laje. Pergunte no orçamento." },
          { q: "Treliça serve pra viga ou coluna?", a: "Ela foi feita pra laje. Pra coluna e viga, o certo é a coluna armada ou o corte e dobra no projeto." },
          { q: "Vocês entregam treliça no meu bairro?", a: "Entregamos em toda Fortaleza e na região metropolitana. Veja as regras na página de entrega." },
        ]}
      />

      <CtaBand
        title="Sabe o vão da sua laje? A gente monta o pedido"
        message={MSG.trelica}
        button="Pedir orçamento de treliça"
        links={[
          { href: "/guia/qual-trelica-usar", label: "Guia: qual treliça usar" },
          { href: "/corte-e-dobra", label: "Corte e dobra" },
          { href: "/entrega", label: "Entrega" },
        ]}
      />
    </>
  );
}
