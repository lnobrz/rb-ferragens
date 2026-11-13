import { pageMeta } from "@/lib/seo";
import { MSG } from "@/content/site";
import { BITOLAS } from "@/content/products";
import { Actions, CtaBand, DataTable, Faq, LinkButton, PageHero, Section, WaButton } from "@/components/ui";

export const metadata = pageMeta({
  title: "Vergalhão CA-50 e CA-60 em Fortaleza | RB Ferragens",
  description:
    "Vergalhão 3/8, 5/16, 1/4 e outras bitolas em barra de 12 m, inteiro ou cortado e dobrado, com entrega na obra em Fortaleza e região.",
  keywords: "vergalhão, vergalhão 3/8, vara de ferro 3/8, vergalhão 5/16, barra de aço, aço ca 50, ferro para construção, Fortaleza",
  path: "/produtos/vergalhoes",
});

export default function Vergalhoes() {
  return (
    <>
      <PageHero
        crumbs={[{ href: "/produtos", label: "Produtos" }, { label: "Vergalhões" }]}
        image="/images/fotos/vergalhoes.jpg"
        imageAlt="Feixe de vergalhões nervurados amarrado com arame"
        chip="Barra de 12 m · CA-50 e CA-60"
        title="Vergalhão CA-50 e CA-60"
        subtitle="O ferro da estrutura da sua obra, em barra inteira ou já cortado e dobrado na medida, com entrega em Fortaleza e na região metropolitana."
      >
        <Actions>
          <WaButton message={MSG.vergalhao}>Pedir orçamento de vergalhão</WaButton>
        </Actions>
      </PageHero>

      <Section title="Tabela de bitolas" intro="Barra de 12 m.">
        <DataTable {...BITOLAS} />
      </Section>

      <Section title="CA-50 ou CA-60?" tone="white">
        <p className="lead">
          O CA-50 é a barra das peças principais: colunas, vigas e sapatas. O CA-60 é mais fino e vai em estribos, telas e
          lajes. Um não substitui o outro: trocar CA-50 por CA-60 na estrutura muda o cálculo do projeto. Se ficou na
          dúvida, mande a lista que a gente confere com você.
        </p>
      </Section>

      <Section title="Barra inteira ou cortada e dobrada">
        <p className="lead">
          Você pode levar a barra de 12 metros e cortar na obra, ou mandar a lista e receber cada peça pronta. No corte e
          dobra, sobra menos ponta e o pedreiro só monta.
        </p>
        <Actions>
          <LinkButton href="/corte-e-dobra">Como funciona o corte e dobra</LinkButton>
        </Actions>
      </Section>

      <Faq
        items={[
          { q: "Vergalhão 3/8 é o mesmo que ferro 10 mm?", a: "É. O 3/8 de polegada equivale ao vergalhão de 10 mm." },
          { q: "Vara de ferro e vergalhão são a mesma coisa?", a: "São. Vara de ferro é como muita gente chama a barra de vergalhão." },
          { q: "Qual ferro usar na coluna de uma casa térrea?", a: "Em casa térrea é comum ver 3/8 ou 5/16 nas colunas, mas quem define é o projeto. Veja o guia com as referências." },
          { q: "Vocês vendem por barra ou por quilo?", a: "Pergunte no orçamento: a gente passa o valor do jeito que ficar mais claro pra você comparar." },
        ]}
      />

      <CtaBand
        title="Manda a bitola e a quantidade que a gente cota na hora"
        message={MSG.vergalhao}
        button="Pedir orçamento de vergalhão"
        links={[
          { href: "/guia/tabela-de-bitolas", label: "Guia: tabela de bitolas" },
          { href: "/guia/ca-50-x-ca-60", label: "Guia: CA-50 x CA-60" },
          { href: "/corte-e-dobra", label: "Corte e dobra" },
        ]}
      />
    </>
  );
}
