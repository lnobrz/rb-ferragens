import type { Metadata } from "next";
import { SITE } from "@/content/site";

type PageSeo = {
  title: string;
  description: string;
  keywords: string;
  path: string;
};

/** Metatags de cada página: title ≤ 70, description ≤ 155, author sempre "RB Ferragens". */
export function pageMeta({ title, description, keywords, path }: PageSeo): Metadata {
  const url = `${SITE.url}${path}`;
  return {
    title: { absolute: title },
    description,
    keywords: keywords.split(",").map((k) => k.trim()),
    authors: [{ name: SITE.name }],
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      siteName: SITE.name,
      url,
      title,
      description,
      images: [{ url: "/images/fotos/obra-hero.jpg", width: 2000, height: 1116, alt: "Armador amarrando a ferragem de uma laje em obra de Fortaleza" }],
    },
  };
}
