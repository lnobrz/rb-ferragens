import { pageMeta } from "@/lib/seo";
import { MSG } from "@/content/site";
import { Actions, CheckList, CtaBand, Faq, FeatureGrid, PageHero, Section, Split, Steps, WaButton } from "@/components/ui";

export const metadata = pageMeta({
  title: "Corte e Dobra de Ferro em Fortaleza | RB Ferragens",
  description:
    "Mande o projeto ou a lista do mestre pelo WhatsApp e receba colunas, vigas, estribos e sapatas cortados e dobrados na medida, entregues na obra.",
  keywords: "corte e dobra, corte e dobra de aço, ferro cortado e dobrado, ferragem armada, estribos, Fortaleza",
  path: "/corte-e-dobra",
});

export default function CorteEDobra() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Corte e dobra" }]}
        image="/images/fotos/pecas-cortadas.jpg"
        imageAlt="Estribos e barras dobradas separados por peça, com etiquetas"
        chip="Separado por peça, pronto pra amarrar"
        title="Corte e dobra de ferro na medida da sua obra"
        subtitle="Você manda o projeto ou a lista do seu mestre. A gente corta, dobra, separa por peça e entrega na obra, em Fortaleza e na região metropolitana."
      >
        <Actions>
          <WaButton message={MSG.corteDobra}>Mandar meu projeto no WhatsApp</WaButton>
        </Actions>
      </PageHero>

      <Section title="Como funciona">
        <Steps
          items={[
            { title: "Mande o projeto ou a lista", text: "Pode ser o projeto estrutural, uma foto da lista do mestre de obras ou até a planta com as medidas." },
            { title: "Receba o orçamento", text: "A gente levanta as bitolas e as quantidades e manda o valor e o prazo de entrega." },
            { title: "A gente produz", text: "Cada barra é cortada e dobrada na medida do projeto, e as peças saem separadas pra facilitar a montagem." },
            { title: "Entrega na obra", text: "O ferro chega pronto pra amarrar. Se preferir, dá pra receber por etapa, na ordem em que a obra vai precisar." },
          ]}
        />
      </Section>

      <Section tone="white">
        <Split image="/images/fotos/corte-dobra-maquina.jpg" alt="Funcionário dobrando vergalhão na máquina de dobra, com estribos prontos ao lado">
          <h2>O que a gente faz</h2>
          <CheckList
            items={[
              "Estribos de coluna e de viga",
              "Colunas e vigas armadas",
              "Ferragem de sapata e baldrame",
              "Barras cortadas no tamanho certo",
              "Peças dobradas com gancho, L ou U",
            ]}
          />
        </Split>
      </Section>

      <Section title="Por que vale a pena">
        <FeatureGrid
          columns={4}
          items={[
            { title: "Menos perda", text: "O ferro vem na medida e sobra pouca ponta de barra." },
            { title: "Obra mais rápida", text: "O pedreiro monta em vez de cortar e dobrar na obra." },
            { title: "Menos erro", text: "Cada peça sai do jeito que está no projeto." },
            { title: "Mais espaço no canteiro", text: "Sem bancada de dobra e sem pilha de barra inteira." },
          ]}
        />
      </Section>

      <Section title="Para obra pequena também" tone="white">
        <p className="lead">
          Não precisa ser construtora. Se você está levantando sua casa, um muro ou um puxadinho, a gente faz o corte e
          dobra da mesma forma. Muita gente chega só com a lista do mestre, e está tudo bem.
        </p>
      </Section>

      <Faq
        items={[
          { q: "Não tenho projeto, só a lista do mestre. Dá pra fazer?", a: "Dá. Mande a foto da lista pelo WhatsApp. Se tiver alguma medida faltando, a gente pergunta antes de cortar." },
          { q: "Em quanto tempo fica pronto?", a: "Depende da quantidade de peças. O prazo vai junto com o orçamento, antes de você fechar." },
          { q: "Vocês definem a bitola do ferro?", a: "Quem define bitola e quantidade é o projeto estrutural. A gente ajuda a ler o projeto e confere a lista com você." },
          { q: "Posso pegar na loja?", a: "Pode. Combine o horário pelo WhatsApp e retire na Lagoa Redonda." },
          { q: "Como pago?", a: "No cartão ou nas outras formas que a gente combina no orçamento." },
        ]}
      />

      <CtaBand title="Tem a lista na mão? Manda pra gente" message={MSG.corteDobra} button="Pedir orçamento de corte e dobra" />
    </>
  );
}
