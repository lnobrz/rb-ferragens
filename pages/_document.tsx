import Document, { Head, Html, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import { DocumentContext } from "next/document";
import Analytics from "@/components/Analytics";

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
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
          <meta charSet="UTF-8" />
          <meta
            name="keywords"
            content="barra de ferro, ferro e aço, malha pop, loja de ferragens, rb ferragens, vergalhão, corte e dobra de chapas, arames, treliça, ferragens, barra de ferro, chapas de ferro, malha de ferro"
          ></meta>
          <meta name="author" content="Lucas Nobre" />
        </Head>
        <body>
          <Analytics />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
