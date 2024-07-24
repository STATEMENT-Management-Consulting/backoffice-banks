import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <body suppressHydrationWarning={true}>
        <Main />
        <NextScript />
        <div id="toasts-container" />
        <div id="app-portal" />
      </body>
    </Html>
  );
}
