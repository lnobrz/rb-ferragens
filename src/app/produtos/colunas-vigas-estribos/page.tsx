import { pageMeta } from "@/lib/seo";
import { MSG } from "@/content/site";
import { Actions, CheckList, CtaBand, Faq, FeatureGrid, LinkButton, PageHero, Section, WaButton } from "@/components/ui";

export const metadata = pageMeta({
  title: "Coluna Armada, Viga e Estribo em Fortaleza | RB Ferragens",
  description:
    "Colunas armadas, vigas e estribos prontos ou feitos na medida do seu projeto, com entrega na obra em Fortaleza e região metropolitana.",
  keywords: "coluna armada, ferragem para coluna, coluna pronta, viga armada, estribo, cinta, pilar, Fortaleza",
  path: "/produtos/colunas-vigas-estribos",
});

export default function Colunas() {
  return (
    <>
      <PageHero
        crumbs={[{ href: "/produtos", label: "Produtos" }, { label: "Colunas, vigas e estribos" }]}
        title="Colunas, vigas e estribos prontos pra montar"
        subtitle="Ferragem de coluna, viga e cinta já armada ou feita na medida do seu projeto. Chega na obra pronta pra concretar."
      >
        <Actions>
          <WaButton message={MSG.coluna}>Pedir orçamento de coluna ou viga</WaButton>
        </Actions>
      </PageHero>

      <Section title="O que você encontra">
        <FeatureGrid
          columns={3}
          items={[
            { icon: "coluna", title: "Coluna armada", text: "A ferragem da coluna (ou pilar) já montada, com as barras e os estribos amarrados." },
            { icon: "vergalhao", title: "Viga e cinta armada", text: "Pra viga, cinta de amarração e baldrame." },
            { icon: "malha", title: "Estribos", text: "Os quadradinhos que seguram as barras, nas medidas mais usadas ou sob medida." },
          ]}
        />
      </Section>

      <Section title="Pronta ou sob medida" alt>
        <p className="lead">
          Pra obra de casa, as medidas padrão resolvem a maior parte dos casos. Se o seu projeto pede outra medida, outra
          bitola ou outro espaçamento de estribo, a gente faz no corte e dobra.
        </p>
        <Actions>
          <LinkButton href="/corte-e-dobra">Como funciona o corte e dobra</LinkButton>
        </Actions>
      </Section>

      <Section title="Por que comprar pronta">
        <CheckList
          items={[
            "O pedreiro não perde tempo cortando, dobrando e amarrando estribo",
            "Menos sobra de ferro",
            "Peça igual do começo ao fim da obra",
          ]}
        />
      </Section>

      <Faq
        items={[
          { q: "Quais medidas de coluna vocês têm?", a: "Pergunte no WhatsApp: a gente passa as medidas em estoque e faz sob medida o que faltar." },
          { q: "Coluna e pilar são a mesma coisa?", a: "Na obra de casa, sim. É a peça vertical que segura a estrutura." },
          { q: "Dá pra usar a mesma coluna em toda a casa?", a: "Depende do projeto. Cada coluna pode pedir uma bitola diferente." },
        ]}
      />

      <CtaBand
        title="Mande as medidas e receba a ferragem pronta"
        message={MSG.coluna}
        button="Pedir orçamento"
        links={[
          { href: "/produtos/vergalhoes", label: "Vergalhões" },
          { href: "/corte-e-dobra", label: "Corte e dobra" },
          { href: "/guia/quanto-ferro-casa-terrea", label: "Guia: quanto ferro vai numa casa" },
        ]}
      />
    </>
  );
}
