import { notFound } from "next/navigation";
import { pageMeta } from "@/lib/seo";
import { GUIDES, getGuide } from "@/content/guides";
import { SITE } from "@/content/site";
import { Actions, PageHero, TextLink, WaButton } from "@/components/ui";
import s from "../guia.module.css";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props) {
  const g = getGuide((await params).slug);
  if (!g) return {};
  return pageMeta({ title: g.title, description: g.description, keywords: g.keywords, path: `/guia/${g.slug}` });
}

export default async function GuidePage({ params }: Props) {
  const g = getGuide((await params).slug);
  if (!g) notFound();

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: g.h1,
    description: g.description,
    author: { "@id": "https://www.rbferragens.com.br/#loja" },
    publisher: { "@id": "https://www.rbferragens.com.br/#loja" },
    mainEntityOfPage: `${SITE.url}/guia/${g.slug}`,
  };

  return (
    <>
      <PageHero
        image={g.image}
        imageAlt={g.imageAlt}
        chip="Guia da obra RB"
        crumbs={[{ href: "/guia", label: "Guia da obra" }, { label: g.h1 }]}
        title={g.h1}
        subtitle={g.description}
      />
      <article className={s.article}>
        <div className="container">
          <div className="prose">
            {g.body}
            <Actions>
              <WaButton message={g.button.message}>{g.button.label}</WaButton>
            </Actions>
            <div className={s.more2}>
              <p className="muted">Veja também</p>
              <Actions>
                {g.links.map((l) => (
                  <TextLink key={l.href} href={l.href}>
                    {l.label}
                  </TextLink>
                ))}
                <TextLink href="/guia">Todos os guias</TextLink>
              </Actions>
            </div>
          </div>
        </div>
      </article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
    </>
  );
}
