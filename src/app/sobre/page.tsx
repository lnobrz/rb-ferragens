import { pageMeta } from "@/lib/seo";
import { MSG } from "@/content/site";
import { CtaBand, FeatureGrid, PageHero, Section, Split } from "@/components/ui";

export const metadata = pageMeta({
  title: "Sobre a RB Ferragens | Ferro e Aço na Lagoa Redonda, Fortaleza",
  description:
    "Há 8 anos na Lagoa Redonda, a RB Ferragens vende, corta e dobra ferro e aço para obras em Fortaleza e na região metropolitana.",
  keywords: "RB Ferragens, ferragens Lagoa Redonda, loja de ferro Fortaleza, distribuidora de ferro e aço",
  path: "/sobre",
});

export default function Sobre() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Sobre" }]}
        image="/images/fotos/equipe-patio.jpg"
        imageAlt="Equipe da RB Ferragens, de uniforme, no pátio da loja na Lagoa Redonda"
        chip="8 anos na Lagoa Redonda"
        title="8 anos fornecendo ferro pra obra na Lagoa Redonda"
        subtitle="A RB Ferragens nasceu no bairro e cresceu atendendo quem constrói em Fortaleza e na região metropolitana."
      />

      <Section>
        <Split image="/images/fotos/fachada.jpg" alt="Fachada da RB Ferragens na Travessa Precabura, 79, Lagoa Redonda" reverse>
          <h2>Nossa história</h2>
          <p className="lead">
            A RB Ferragens está há 8 anos na Lagoa Redonda vendendo ferro e aço pra obra. Além da venda, corta e dobra o
            ferro na medida de cada projeto e entrega direto na obra, em Fortaleza e na região metropolitana.
          </p>
          <p className="lead">
            Hoje atendemos de quem constrói um quarto a mais até construtoras e empreiteiros, sempre do mesmo jeito:
            atendimento direto, ferro na medida e entrega combinada.
          </p>
        </Split>
      </Section>

      <Section title="O que nos guia" tone="white">
        <FeatureGrid
          columns={3}
          items={[
            { title: "Falar a língua da obra", text: "Se você pede “ferro 3/8” ou “vergalhão 10 mm”, a gente entende." },
            { title: "Ajudar a acertar a lista", text: "Melhor perguntar antes do que cortar errado." },
            { title: "Cumprir o combinado", text: "O que foi fechado no orçamento é o que chega na obra." },
          ]}
        />
      </Section>

      <CtaBand title="Vamos montar o pedido da sua obra?" message={MSG.geral} button="Pedir orçamento no WhatsApp" />
    </>
  );
}
