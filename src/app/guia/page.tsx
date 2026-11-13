import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { GUIDES } from "@/content/guides";
import { PageHero, Section } from "@/components/ui";
import { Icon } from "@/components/Icon";
import s from "./guia.module.css";

export const metadata = pageMeta({
  title: "Guia da Obra: Treliça, Vergalhão e Malha | RB Ferragens",
  description:
    "Tire suas dúvidas antes de comprar o ferro da obra: qual treliça usar, tabela de bitolas, CA-50 ou CA-60, malha POP e corte e dobra.",
  keywords: "qual treliça usar, tabela de vergalhão, ca 50 e ca 60, malha pop, corte e dobra, ferro para casa",
  path: "/guia",
});

export default function Guia() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Guia da obra" }]}
        title="Guia da obra"
        subtitle="Respostas diretas pras dúvidas que mais chegam no nosso WhatsApp. Elas ajudam a montar sua lista, mas não substituem o projeto estrutural."
      />
      <Section>
        <h2 className="sr-only">Guias</h2>
        <ul className={s.cards}>
          {GUIDES.map((g, i) => (
            <li key={g.slug} className={s.card}>
              <span className={s.num} aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className={s.title}>
                <Link href={`/guia/${g.slug}`}>{g.h1}</Link>
              </h3>
              <p>{g.card}</p>
              <span className={s.more} aria-hidden="true">
                Ler o guia <Icon name="seta" size={18} />
              </span>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
