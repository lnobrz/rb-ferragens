import { pageMeta } from "@/lib/seo";
import { MSG } from "@/content/site";
import { Actions, CtaBand, FeatureGrid, PageHero, Section, Steps, WaButton } from "@/components/ui";

export const metadata = pageMeta({
  title: "Fornecedor de Aço para Construtoras em Fortaleza | RB Ferragens",
  description:
    "Reposição rápida, pedido pequeno e corte e dobra com entrega programada por etapa. Atendimento direto para construtoras e empreiteiros em Fortaleza.",
  keywords: "fornecedor de aço para construtora, ferragem para empreiteiro, aço para obra, corte e dobra para construtora, Fortaleza",
  path: "/construtoras",
});

export default function Construtoras() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Para construtoras e empreiteiros" }]}
        image="/images/fotos/predio-obra.jpg"
        imageAlt="Prédio em construção em Fortaleza com pilares armados e grua"
        chip="Reposição sem burocracia"
        eyebrow="Para construtoras e empreiteiros"
        title="Ferro pra sua obra não parar"
        subtitle="Pra construtoras e empreiteiros que precisam de reposição rápida, pedido do tamanho da etapa e alguém que atende no WhatsApp."
      >
        <Actions>
          <WaButton message={MSG.construtora}>Falar com a RB</WaButton>
        </Actions>
      </PageHero>

      <Section title="Onde a RB ajuda">
        <FeatureGrid
          columns={3}
          items={[
            { icon: "relogio", title: "Faltou ferro no meio da etapa", text: "Pedido de reposição atendido sem burocracia de grande distribuidora." },
            { icon: "lista", title: "Pedido pequeno", text: "Compre o que a etapa precisa, sem precisar fechar carga cheia." },
            { icon: "corte", title: "Corte e dobra por etapa", text: "Peças separadas e entregues na ordem da montagem." },
            { icon: "pessoa", title: "Atendimento direto", text: "Você fala com quem decide, no WhatsApp ou no telefone." },
            { icon: "pin", title: "Zona leste e Eusébio perto", text: "Estamos na Lagoa Redonda, a poucos minutos de Messejana, Eusébio e Aquiraz." },
          ]}
        />
      </Section>

      <Section title="Como começar" tone="white">
        <Steps
          items={[
            { text: "Mande o nome da empresa e a obra pelo WhatsApp." },
            { text: "A gente combina as condições de pagamento e entrega." },
            { text: "A partir daí, é só mandar a lista de cada etapa." },
          ]}
        />
      </Section>

      <CtaBand title="Deixe a RB como seu fornecedor de reposição" message={MSG.construtora} button="Cadastrar minha empresa" />
    </>
  );
}
