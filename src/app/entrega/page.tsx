import { pageMeta } from "@/lib/seo";
import { MSG, RMF_CITIES, SITE } from "@/content/site";
import { Actions, CtaBand, Faq, FeatureGrid, PageHero, Section, Steps, WaButton } from "@/components/ui";

export const metadata = pageMeta({
  title: "Entrega de Ferro na Obra em Fortaleza e Região | RB Ferragens",
  description:
    "Entregamos ferro e aço na sua obra em Fortaleza, Eusébio, Aquiraz, Caucaia, Maracanaú e região metropolitana. Veja as regras e o frete grátis.",
  keywords:
    "entrega de ferro, ferro para obra com entrega, ferragens Fortaleza, ferragens Eusébio, ferragens Aquiraz, ferragens Messejana",
  path: "/entrega",
});

export default function Entrega() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Entrega" }]}
        image="/images/fotos/saveiro-carregada.jpg"
        imageAlt="Saveiro da RB carregada de treliças em frente à loja"
        chip="Fortaleza e região metropolitana"
        title="Entrega de ferro na sua obra"
        subtitle="Levamos o pedido até a obra em Fortaleza e na região metropolitana. Saindo da Lagoa Redonda, a zona leste, o Eusébio e Aquiraz ficam bem perto."
      >
        <Actions>
          <WaButton message={MSG.entrega}>Consultar entrega no meu bairro</WaButton>
        </Actions>
      </PageHero>

      <Section title="Onde entregamos">
        <FeatureGrid
          columns={3}
          items={[
            { icon: "casa", title: "Fortaleza", text: "Todos os bairros." },
            { icon: "pin", title: "Região metropolitana", text: `${RMF_CITIES.slice(0, -1).join(", ")} e ${RMF_CITIES.at(-1)}.` },
            {
              icon: "caminhao",
              title: "Cidades mais distantes",
              text: "A entrega depende do tamanho do pedido ou de ter rota na semana. Pergunte no WhatsApp antes de fechar.",
            },
          ]}
        />
      </Section>

      <Section title="Frete grátis" tone="white" split intro={<>Tem frete grátis em condições especiais, de acordo com o valor do pedido e a região da obra. Pergunte se o seu pedido se encaixa: a gente informa antes de você fechar, sem surpresa.</>} />

      <Section title="Como funciona">
        <Steps
          items={[
            { text: "Mande o pedido e o endereço da obra pelo WhatsApp." },
            { text: "A gente confirma o valor, o frete e o dia da entrega." },
            { text: "O caminhão leva até a obra. Corte e dobra pode ir por etapa, na ordem da montagem." },
          ]}
        />
      </Section>

      <Section title="Prefere retirar?" tone="white" split intro={<>Você também pode buscar na loja: {SITE.address.street}, {SITE.address.district}. Segunda a sexta, das 7h às 18h, e sábado, das 7h às 12h.</>} />

      <Faq
        items={[
          { q: "Tem pedido mínimo?", a: "Pra Fortaleza, consulte. Pra cidades mais distantes da região metropolitana, a entrega depende do tamanho do pedido." },
          { q: "Em quantos dias chega?", a: "Depende da região e do que está no pedido. O dia da entrega vai junto com o orçamento." },
          { q: "O caminhão descarrega na obra?", a: "Combine os detalhes do acesso à obra no WhatsApp." },
        ]}
      />

      <CtaBand
        title="Sua obra fica onde?"
        message={MSG.entrega}
        button="Consultar entrega no meu bairro"
        image="/images/fotos/entrega-obra-perto.jpg"
      />
    </>
  );
}
