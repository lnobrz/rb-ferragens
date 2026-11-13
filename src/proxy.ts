import { NextResponse, type NextRequest } from "next/server";

/**
 * Redirecionamentos 301 das URLs do site antigo (rbferragens.com.br, 2023) para o site novo.
 * O Perfil da Empresa no Google tem produtos e postagens apontando para as URLs antigas: nenhuma pode cair em 404.
 *
 * Regras:
 * - Um salto só, direto para a URL final em https://www.rbferragens.com.br (sem cadeia http -> https -> www -> sem acento).
 * - Aceita acento literal, codificado composto (%C3%A7) e decomposto (c%CC%A7), com e sem barra no final.
 * - Preserva a query string (os UTMs do Google chegam na página final).
 * MANTER POR PELO MENOS 1 ANO depois do lançamento (as postagens do Google vão até dez/2027).
 */

const CANONICAL_ORIGIN = "https://www.rbferragens.com.br";

/** URL antiga (sem acento, minúscula, sem barra no final) -> URL nova. */
const OLD_TO_NEW: Record<string, string> = {
  "/produtos/trelicas": "/produtos/trelicas",
  "/produtos/vergalhoes": "/produtos/vergalhoes",
  "/produtos/malhas": "/produtos/telas-malhas-radier",
  "/produtos/radiers": "/produtos/telas-malhas-radier",
  "/produtos/colunas": "/produtos/colunas-vigas-estribos",
  "/produtos/vigas": "/produtos/colunas-vigas-estribos",
  "/produtos/arames": "/produtos/arames-pregos",
  "/produtos/pregos": "/produtos/arames-pregos",
  "/produtos/tubos-galvanizados": "/produtos/tubos-galvanizados",
  "/servicos": "/corte-e-dobra",
  "/servicos/corte-e-dobra": "/corte-e-dobra",
  "/contatos": "/contato",
};

/** Produtos que existem no site novo (qualquer outro /produtos/<x> vai pra /produtos, nunca 404). */
const NEW_PRODUCTS = new Set([
  "/produtos/trelicas",
  "/produtos/vergalhoes",
  "/produtos/colunas-vigas-estribos",
  "/produtos/telas-malhas-radier",
  "/produtos/tubos-galvanizados",
  "/produtos/arames-pregos",
]);

function normalize(rawPath: string): string {
  let p = rawPath;
  try {
    p = decodeURIComponent(rawPath);
  } catch {
    // caminho mal codificado: segue com o original
  }
  p = p
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "") // tira acentos (ç -> c, õ -> o), nas duas codificações
    .toLowerCase();
  if (p.length > 1) p = p.replace(/\/+$/, "");
  return p || "/";
}

export function proxy(request: NextRequest) {
  const url = request.nextUrl;
  const raw = url.pathname;

  let target = normalize(raw);
  if (OLD_TO_NEW[target]) target = OLD_TO_NEW[target];
  else if (target.startsWith("/produtos/") && !NEW_PRODUCTS.has(target)) target = "/produtos";

  // Domínio de produção: força https + www no mesmo salto.
  const host = (request.headers.get("host") ?? "").toLowerCase();
  const proto = request.headers.get("x-forwarded-proto") ?? url.protocol.replace(":", "");
  const isProdHost = host === "rbferragens.com.br" || host === "www.rbferragens.com.br";
  const wrongHost = isProdHost && (host !== "www.rbferragens.com.br" || proto === "http");

  // Só compara o caminho já decodificado com o destino (evita redirecionar a própria URL nova).
  let decodedRaw = raw;
  try {
    decodedRaw = decodeURIComponent(raw);
  } catch {}

  if (target === decodedRaw && !wrongHost) return NextResponse.next();

  const origin = isProdHost ? CANONICAL_ORIGIN : url.origin;
  const destination = new URL(target + url.search, origin);
  return NextResponse.redirect(destination, 301);
}

export const config = {
  // Tudo, menos arquivos e assets do Next (nenhuma URL antiga tinha ponto no caminho).
  matcher: ["/((?!_next/|images/|.*\\.).*)"],
};
