import type { MetadataRoute } from "next";
import { SITE } from "@/content/site";
import { GUIDES } from "@/content/guides";

const ROUTES = [
  "/",
  "/corte-e-dobra",
  "/produtos",
  "/produtos/trelicas",
  "/produtos/vergalhoes",
  "/produtos/colunas-vigas-estribos",
  "/produtos/telas-malhas-radier",
  "/produtos/tubos-galvanizados",
  "/produtos/arames-pregos",
  "/entrega",
  "/construtoras",
  "/guia",
  ...GUIDES.map((g) => `/guia/${g.slug}`),
  "/sobre",
  "/contato",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((path) => ({
    url: `${SITE.url}${path === "/" ? "" : path}`,
    lastModified: new Date("2026-11-13"),
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : path.split("/").length > 2 ? 0.6 : 0.8,
  }));
}
