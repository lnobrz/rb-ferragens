import { pageMeta } from "@/lib/seo";
import { MSG } from "@/content/site";
import { Actions, CheckList, CtaBand, Faq, PageHero, Section, WaButton } from "@/components/ui";

export const metadata = pageMeta({
  title: "Tubo Galvanizado em Fortaleza | RB Ferragens",
  description:
    "Tubos galvanizados para estruturas, portões, coberturas e instalações, com entrega na obra em Fortaleza e região metropolitana. Peça orçamento.",
  keywords: "tubo galvanizado, tubo galvanizado fortaleza, cano galvanizado, tubo de aço galvanizado",
  path: "/produtos/tubos-galvanizados",
});

export default function Tubos() {
  return (
    <>
      <PageHero
        crumbs={[{ href: "/produtos", label: "Produtos" }, { label: "Tubos galvanizados" }]}
        image="/images/fotos/tubos-galvanizados.jpg"
        imageAlt="Tubos galvanizados no galpão da RB"
        chip="Proteção de zinco contra a maresia"
        title="Tubo galvanizado"
        subtitle="Aço com proteção de zinco contra a ferrugem, ideal pro clima de Fortaleza. Entrega na obra junto com o resto do pedido."
      >
        <Actions>
          <WaButton message={MSG.tubo}>Pedir orçamento de tubo</WaButton>
        </Actions>
      </PageHero>

      <Section title="Onde usar">
        <CheckList columns={3} items={["Estruturas leves e coberturas", "Portões, grades e corrimãos", "Suportes e instalações"]} />
      </Section>

      <Section title="Por que galvanizado" tone="white" split intro={<>Perto do mar, a maresia acelera a ferrugem. A camada de zinco protege o aço por muito mais tempo do que o tubo comum.</>} />

      <Faq
        items={[
          { q: "Quais medidas vocês têm?", a: "Mande a medida e a espessura que precisa no WhatsApp que a gente confirma o estoque." },
          { q: "Vocês cortam o tubo?", a: "Pergunte no orçamento." },
        ]}
      />

      <CtaBand message={MSG.tubo} button="Pedir orçamento de tubo galvanizado" title="Precisa de tubo galvanizado?" />
    </>
  );
}
