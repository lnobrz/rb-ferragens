import { pageMeta } from "@/lib/seo";
import { MSG } from "@/content/site";
import { Actions, CtaBand, Faq, FeatureGrid, PageHero, Section, WaButton } from "@/components/ui";

export const metadata = pageMeta({
  title: "Arame Recozido e Pregos para Construção em Fortaleza | RB Ferragens",
  description:
    "Arame recozido para amarração de ferragem e pregos para forma e madeiramento, com entrega junto do seu pedido em Fortaleza e região.",
  keywords: "arame recozido, arame para amarrar ferro, prego para construção, prego, Fortaleza",
  path: "/produtos/arames-pregos",
});

export default function Arames() {
  return (
    <>
      <PageHero
        crumbs={[{ href: "/produtos", label: "Produtos" }, { label: "Arames e pregos" }]}
        image="/images/fotos/arame.jpg"
        imageAlt="Rolos de arame recozido nas prateleiras do galpão da RB"
        chip="Vai junto com o ferro"
        title="Arame recozido e pregos"
        subtitle="O que falta pra fechar o pedido da obra. Vai junto com o ferro, na mesma entrega."
      >
        <Actions>
          <WaButton message={MSG.arame}>Pedir orçamento</WaButton>
        </Actions>
      </PageHero>

      <Section>
        <h2 className="sr-only">Arame e pregos</h2>
        <FeatureGrid
          items={[
            {
              icon: "arame",
              title: "Arame recozido",
              text: "O arame que amarra as barras e os estribos da ferragem. É macio, fácil de torcer com a torquesa e não quebra na amarração.",
            },
            { icon: "prego", title: "Pregos", text: "Pra forma de coluna, viga e laje, escoramento e madeiramento." },
          ]}
        />
      </Section>

      <Faq
        title="Pergunta frequente"
        items={[
          { q: "Quanto arame eu preciso?", a: "Depende da quantidade de ferro. Mande a lista do pedido que a gente já inclui o arame na conta." },
        ]}
      />

      <CtaBand message={MSG.arame} button="Incluir no meu orçamento" title="Vai junto com o ferro, na mesma entrega" />
    </>
  );
}
