import "primereact/resources/themes/lara-light-indigo/theme.css";
import { PrimeReactProvider } from "primereact/api";
import dynamic from "next/dynamic";
import { ReactNode } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/api/cache/reactQuery";
import Head from "next/head";
import { useLayoutProvider } from "./useLayoutProvider";
import { GoogleOAuthProvider } from "@react-oauth/google";

interface IProviders {
  children: ReactNode;
}

const ReactQueryDevtoolsProduction = dynamic(() =>
  import("@tanstack/react-query-devtools/build/lib/index.prod.js").then(
    (d) => ({
      default: d.ReactQueryDevtools,
    })
  )
);

export const googleOAuthClientId = process.env.NEXT_PUBLIC_OAUTH_CLIENT_ID;

export function LayoutProviders({ children }: IProviders) {
  useLayoutProvider();

  return (
    <>
      <Head>
        <title>Mirantes</title>
      </Head>
      <GoogleOAuthProvider clientId={googleOAuthClientId ?? ""}>
        <QueryClientProvider client={queryClient}>
          <PrimeReactProvider value={{ unstyled: false }}>
            {process.env.NEXT_PUBLIC_ENV === "dev" && (
              <ReactQueryDevtoolsProduction initialIsOpen={false} />
            )}
          </PrimeReactProvider>
          {children}
        </QueryClientProvider>
      </GoogleOAuthProvider>
    </>
  );
}
