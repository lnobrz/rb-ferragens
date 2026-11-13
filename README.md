# RB Ferragens: site

Site em Next.js 16 (App Router, tudo estático) montado com a copy "Copy do site RB Ferragens" (13/11/2026) e a
identidade visual do site atual (rbferragens.com.br).

## Rodar

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Estrutura

- `src/styles/tokens.css`: cores, fontes, raios e sombras. Marca do site atual (amarelo #EFDF64, grafite
  #0A0800/#1B1B18, creme #F9F3D7, Tomorrow + Kanit, os 3 quadradinhos) sobre base clara: papel #F4F2EC, branco
  e cinza claro, com seções escuras pontuais.
- `src/components/Motion.tsx`: entrada ao rolar (`data-reveal`) e números que contam. Tudo desliga com "reduzir movimento" e o conteúdo aparece sem JS.
- `src/components/OpenStatus.tsx`: "Aberto agora / Fechado agora" pelo horário de Fortaleza.
- `src/content/site.ts`: endereço, telefones, horário, cidades atendidas e as mensagens prontas de cada botão
  de WhatsApp. Só dados confirmados.
- `src/content/products.ts`: cards de produto e as tabelas (bitolas, treliças, malhas).
- `src/content/guides.tsx`: os 6 guias da obra (`/guia/[slug]`).
- `src/components/ui.tsx`: botões, hero, seções, tabela, FAQ (com JSON-LD FAQPage), chamada final.
- `src/lib/seo.ts`: metatags de cada página (title, description, keywords, author "RB Ferragens", Open Graph,
  canonical). JSON-LD `HardwareStore` com NAP e horário no layout.

## Redirecionamentos do site antigo (src/proxy.ts)

As URLs do site de 2023 (sitemap, menu e links internos, inclusive com acento: `/produtos/treliças`,
`/produtos/vergalhões`) fazem um 301 único direto pra URL nova em `https://www.rbferragens.com.br`, com e sem
barra no final, com acento literal ou codificado (`%C3%A7` e `c%CC%A7`), preservando a query string (UTMs do
Perfil da Empresa no Google). Qualquer outra `/produtos/<x>` desconhecida vai pra `/produtos`. Manter pelo menos
até dez/2027 (postagens programadas no Google). O código do site antigo está na branch `site-antigo-2023`.

## Dados estruturados

Um único `HardwareStore` no `<head>` de todas as páginas (`src/app/layout.tsx`): NAP idêntico ao Perfil do Google,
geo, horários, `areaServed` = Fortaleza + cidades da página de Entrega, `hasMap`. Sem preço, priceRange ou notas.
Validado no validator.schema.org (0 erros, 0 avisos) e no Teste de pesquisa aprimorada (válido; único aviso:
`priceRange` opcional, omitido de propósito).

## Pendências com o cliente

- **Fotos**: as fotos em `public/images/fotos/` são reais da RB (pasta "Exemplos fotos Google"). Ficaram de fora
  as que tinham um dedo no canto (fachada de lado, estribos de perto, peças de perto); a da laje foi recortada.
  Ainda faltam fotos de pregos. Os 3 vídeos (máquina dobrando estribo, Saveiro descarregando, volta pelo pátio)
  não estão no site.
- **Frete grátis**: regra, prazo e pedido mínimo por região. Quando confirmar, trocar o parágrafo de
  `/entrega` por uma tabela.
- **Prazo do corte e dobra, preços e marca do aço**: não informados; o texto manda pro orçamento.
- **Tabelas técnicas**: conferir modelos, bitolas e comprimentos com o estoque da RB.
- **Avaliações do Google**: a seção "Quem já comprou na RB" fica fora até existirem avaliações reais.
- **História do dono** na página Sobre (quando e por que abriu, o que mudou).
- **Domínio**: `SITE.url` em `src/content/site.ts` está como `https://www.rbferragens.com.br`.
