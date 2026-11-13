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
- `src/components/Motion.tsx`: entrada ao rolar (`data-reveal`), texto que acende palavra por palavra e números
  que contam. Tudo desliga com "reduzir movimento" e o conteúdo aparece sem JS.
- `src/components/OpenStatus.tsx`: "Aberto agora / Fechado agora" pelo horário de Fortaleza.
- `src/content/site.ts`: endereço, telefones, horário, cidades atendidas e as mensagens prontas de cada botão
  de WhatsApp. Só dados confirmados.
- `src/content/products.ts`: cards de produto e as tabelas (bitolas, treliças, malhas).
- `src/content/guides.tsx`: os 6 guias da obra (`/guia/[slug]`).
- `src/components/ui.tsx`: botões, hero, seções, tabela, FAQ (com JSON-LD FAQPage), chamada final.
- `src/lib/seo.ts`: metatags de cada página (title, description, keywords, author "RB Ferragens", Open Graph,
  canonical). JSON-LD `HardwareStore` com NAP e horário no layout.

## Pendências com o cliente

- **Fotos**: as 14 fotos em `public/images/fotos/` foram geradas com IA (Magnific, projeto "RB Ferragens") pra
  ilustrar produtos e seções. O ideal é trocar pelas fotos reais da loja (pátio, feixes, máquina de dobra,
  caminhão, fachada) mantendo os mesmos nomes de arquivo.
- **Frete grátis**: regra, prazo e pedido mínimo por região. Quando confirmar, trocar o parágrafo de
  `/entrega` por uma tabela.
- **Prazo do corte e dobra, preços e marca do aço**: não informados; o texto manda pro orçamento.
- **Tabelas técnicas**: conferir modelos, bitolas e comprimentos com o estoque da RB.
- **Avaliações do Google**: a seção "Quem já comprou na RB" fica fora até existirem avaliações reais.
- **História do dono** na página Sobre (quando e por que abriu, o que mudou).
- **Domínio**: `SITE.url` em `src/content/site.ts` está como `https://www.rbferragens.com.br`.
