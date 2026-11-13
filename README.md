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

- `src/styles/tokens.css`: cores, fontes e tamanhos (identidade do site atual: fundo #0A0800/#1B1B18, amarelo
  #EFDF64, creme #F9F3D7, títulos em Tomorrow maiúsculo, texto em Kanit, decoração dos 3 quadradinhos).
- `src/content/site.ts`: endereço, telefones, horário, cidades atendidas e as mensagens prontas de cada botão
  de WhatsApp. Só dados confirmados.
- `src/content/products.ts`: cards de produto e as tabelas (bitolas, treliças, malhas).
- `src/content/guides.tsx`: os 6 guias da obra (`/guia/[slug]`).
- `src/components/ui.tsx`: botões, hero, seções, tabela, FAQ (com JSON-LD FAQPage), chamada final.
- `src/lib/seo.ts`: metatags de cada página (title, description, keywords, author "RB Ferragens", Open Graph,
  canonical). JSON-LD `HardwareStore` com NAP e horário no layout.

## Pendências com o cliente

- **Fotos reais**: os cards de produto usam ícones desenhados no lugar da foto. Trocar por fotos do pátio,
  feixes, máquina de dobra e caminhão (a página Sobre também pede essas fotos). As imagens atuais vêm do site antigo.
- **Frete grátis**: regra, prazo e pedido mínimo por região. Quando confirmar, trocar o parágrafo de
  `/entrega` por uma tabela.
- **Prazo do corte e dobra, preços e marca do aço**: não informados; o texto manda pro orçamento.
- **Tabelas técnicas**: conferir modelos, bitolas e comprimentos com o estoque da RB.
- **Avaliações do Google**: a seção "Quem já comprou na RB" fica fora até existirem avaliações reais.
- **História do dono** na página Sobre (quando e por que abriu, o que mudou).
- **Domínio**: `SITE.url` em `src/content/site.ts` está como `https://www.rbferragens.com.br`.
