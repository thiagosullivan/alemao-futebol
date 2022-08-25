import Document, {
  Head,
  Html,
  Main,
  NextScript
} from 'next/document';

import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Raleway:wght@300;400;700;900&display=swap" rel="stylesheet"></link>

          {/* Primary Meta Tags */}
          <meta name="title" content="Alemão Futebol"/>
          <meta name="description" content="Alemão Futebol"/>

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website"/>
          <meta property="og:url" content="https://www.alemaofutebol.com.br/"/>
          <meta property="og:title" content="Alemão Futebol"/>
          <meta property="og:description" content="Alemão Futebol"/>
          <meta property="og:image" content="https://i.ibb.co/hD2pcFL/alemao-meta-img.jpg"/>

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image"/>
          <meta property="twitter:url" content="https://www.alemaofutebol.com.br/"/>
          <meta property="twitter:title" content="Alemão Futebol"/>
          <meta property="twitter:description" content="Alemão Futebol"/>
          <meta property="twitter:image" content="https://i.ibb.co/hD2pcFL/alemao-meta-img.jpg"></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}