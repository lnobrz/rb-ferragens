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
      images: [{ url: "/images/ferragem-armada-obra.jpg", width: 2200, height: 1350, alt: "Ferragem armada em obra" }],
    },
  };
}
