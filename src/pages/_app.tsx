import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/Navbar";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
      <title>Leno Creatives</title>
    </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
