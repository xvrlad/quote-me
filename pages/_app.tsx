import type { AppProps } from "next/app";
import "@fontsource/poppins";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import theme from "../app/common/theme/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Quote Me</title>
      </Head>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
