import { config, dom } from '@fortawesome/fontawesome-svg-core';
import Document, { Html, Head, Main, NextScript } from 'next/document';

import { AppConfig } from '../utils/AppConfig';

config.autoAddCss = false;
// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
  render() {
    return (
      <Html lang={AppConfig.locale}>
        <Head>
          <style>{dom.css()}</style>
        </Head>
        <body className="bg-white font-faily-karla">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
