import "@/styles/globals.css";

import { type AppProps } from "next/app";
import { RootLayoutWrapper } from "@/layout/root/RootLayout";
import { LayoutProviders } from "@/layout/LayoutProviders";
import Head from "next/head";
import useLocaleCooked from "@/utilities/hooks/useLocaleCooked";

function App({ Component, pageProps }: AppProps) {
  useLocaleCooked();
  const hideLayout = (Component as any)?.hideLayout;
  const page = (Component as any)?.innerLayout?.(
    <Component {...pageProps} />
  ) ?? <Component {...pageProps} />;

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <LayoutProviders>
        {hideLayout ? page : <RootLayoutWrapper>{page}</RootLayoutWrapper>}
      </LayoutProviders>
    </>
  );
}

export default App;
