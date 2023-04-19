import type { AppProps } from "next/app";
import { GlobalStyle } from "@/components/ui/globalStyles";
import { AnimatePresence } from "framer-motion";
import Footer from "@/components/Footer";
import Layout from "@/components/ui/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence>
      <Layout>
        <GlobalStyle />
        <Component {...pageProps} />
        <Footer />
      </Layout>
    </AnimatePresence>
  );
}
