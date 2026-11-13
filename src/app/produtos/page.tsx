import { pageMeta } from "@/lib/seo";
import { MSG } from "@/content/site";
import { ALL_PRODUCTS } from "@/content/products";
import { Actions, Band, PageHero, Section, WaButton } from "@/components/ui";
import { ProductCards } from "@/components/ProductCards";

export const metadata = pageMeta({
  title: "Ferragens para Construção em Fortaleza | RB Ferragens",
  description:
    "Treliças, vergalhões, colunas, vigas, estribos, malhas, tubos galvanizados, arames e pregos com entrega na obra em Fortaleza e região.",
  keywords: "ferragens para construção, ferro para construção, treliça, vergalhão, coluna armada, malha pop, Fortaleza",
  path: "/produtos",
});

export default function Produtos() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Produtos" }]}
        image="/images/fotos/patio.jpg"
        imageAlt="Pátio da RB Ferragens com feixes de vergalhão, treliças e telas soldadas"
        chip="Entrega em Fortaleza e RMF"
        title="Ferragens para construção"
        subtitle="Tudo de ferro e aço pra estrutura da sua obra, com corte e dobra na medida e entrega em Fortaleza e na região metropolitana."
      >
        <Actions>
          <WaButton message={MSG.geral}>Pedir orçamento no WhatsApp</WaButton>
        </Actions>
      </PageHero>

      <Section>
        <h2 className="sr-only">Nossos produtos</h2>
        <ProductCards items={ALL_PRODUCTS} />
      </Section>

      <Section>
        <Band
          text="Não achou a peça que precisa? A gente corta e dobra na medida do seu projeto."
          href="/corte-e-dobra"
          label="Conhecer o corte e dobra"
        />
      </Section>
    </>
  );
}
