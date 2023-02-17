import Document, { Head, Html, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import { DocumentContext } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="description"
            content="A RB Ferragens é uma loja de ferragens especializada na venda vergalhões, treliças, arames, malhas pop, etc. de ferro e aço. Oferecemos corte e dobra."
          />
          <meta
            name="keywords"
            content="barra de ferro, ferro e aço, malha pop, loja de ferragens, rb ferragens, vergalhão, corte e dobra de chapas, arames, treliça, ferragens, barra de ferro, chapas de ferro, malha de ferro"
          ></meta>
          <meta name="author" content="Lucas Nobre" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
