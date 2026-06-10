import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="preload" as="image" href="/images/hero-banner.webp" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}