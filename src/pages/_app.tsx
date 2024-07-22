import { RootLayoutWrapper } from "@/layout/root/RootLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RootLayoutWrapper>
      <Component {...pageProps} />
    </RootLayoutWrapper>
  );
}
