import Head from "next/head";

import { globalStyles } from "@/styles/globals";
import type { AppProps } from "next/app";
import { MainWrapper } from "@/layouts/MainWrapper";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {globalStyles}
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <MainWrapper>
        <Component {...pageProps} />
      </MainWrapper>
    </>
  );
}
