import type { AppProps } from "next/app";
import { GlobalStyle } from "@/components/ui/globalStyles";
import { AnimatePresence } from "framer-motion";
import Header from "@/components/ui/Header";
import Footer from "@/components/Footer";
import Layout from "@/components/ui/Layout";
import { useRouter } from "next/router";
import { Analytics } from "@vercel/analytics/react";

const App = ({ Component, pageProps }: AppProps) => {
  const currentPage = useRouter().pathname;

  return (
    <>
      <GlobalStyle />
      {currentPage !== "/" && (
        <Layout>
          <Header />
        </Layout>
      )}
      <AnimatePresence>
        <Component {...pageProps} />
        <Analytics />
      </AnimatePresence>
      <Layout>
        <Footer />
      </Layout>
    </>
  );
};

export default App;
