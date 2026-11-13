import { pageMeta } from "@/lib/seo";
import { MSG } from "@/content/site";
import { MALHAS } from "@/content/products";
import { Actions, CtaBand, DataTable, Faq, PageHero, Section, WaButton } from "@/components/ui";

export const metadata = pageMeta({
  title: "Malha POP e Tela Soldada em Fortaleza | RB Ferragens",
  description:
    "Malha POP e tela soldada Q92 e Q138 para contrapiso, calçada, garagem e radier, com entrega na obra em Fortaleza e região metropolitana.",
  keywords: "malha pop, tela soldada, tela pop, tela q92, malha para contrapiso, radier, Fortaleza",
  path: "/produtos/telas-malhas-radier",
});

export default function Malhas() {
  return (
    <>
      <PageHero
        crumbs={[{ href: "/produtos", label: "Produtos" }, { label: "Telas, malhas e radier" }]}
        image="/images/fotos/malhas.jpg"
        imageAlt="Painéis de malha soldada prontos para o contrapiso"
        chip="Malha POP · Q92 · Q138"
        title="Malha POP e tela soldada"
        subtitle="Pra contrapiso, calçada, piso de garagem e radier. Diga onde a tela vai que a gente indica o modelo."
      >
        <Actions>
          <WaButton message={MSG.malha}>Pedir orçamento de malha</WaButton>
        </Actions>
      </PageHero>

      <Section title="Modelos mais usados">
        <DataTable {...MALHAS} />
      </Section>

      <Section title="Diga onde vai a tela" tone="white">
        <p className="lead">
          Não precisa saber o nome do modelo. Conte pra gente se é contrapiso, calçada, garagem ou laje e qual o tamanho da
          área, que a gente indica a tela e calcula quantos painéis você precisa.
        </p>
      </Section>

      <Section title="Radier">
        <p className="lead">
          O radier é uma fundação: uma laje de concreto armado direto no chão, que segura a casa toda. Por isso ele precisa
          de projeto. A tela é só uma parte da armadura do radier. Com o projeto em mãos, a gente separa toda a ferragem,
          inclusive o corte e dobra das bordas e reforços.
        </p>
      </Section>

      <Faq
        items={[
          { q: "Malha POP serve pro contrapiso?", a: "Na maioria das casas, sim. A malha POP ou a Q92 costumam atender contrapiso residencial." },
          { q: "Qual a diferença entre malha POP e tela Q92?", a: "As duas têm malha de 15 x 15 cm. A POP vem em painel menor e mais leve, a Q92 em painel maior." },
          { q: "Quantos painéis eu preciso?", a: "Mande a medida da área que a gente calcula, contando a sobreposição entre os painéis." },
        ]}
      />

      <CtaBand
        title="Mande a medida da área que a gente calcula pra você"
        message={MSG.malha}
        button="Pedir orçamento de malha"
        links={[
          { href: "/guia/malha-pop-x-tela-q92", label: "Guia: malha POP x tela Q92" },
          { href: "/corte-e-dobra", label: "Corte e dobra" },
        ]}
      />
    </>
  );
}
