import type { AppProps } from "next/app";
import "@fontsource/poppins";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Quote Me</title>
      </Head>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
