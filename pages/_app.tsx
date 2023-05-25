import type { AppProps } from "next/app";
import { GlobalStyle } from "@/components/ui/globalStyles";
import { AnimatePresence } from "framer-motion";
import Header from "@/components/ui/Header";
import Footer from "@/components/Footer";
import Layout from "@/components/ui/Layout";
import { useRouter } from "next/router";

const App = ({ Component, pageProps }: AppProps) => {
  const currentPage = useRouter().pathname;

  return (
    <AnimatePresence>
      <GlobalStyle />
      {currentPage !== "/" && (
        <Layout>
          <Header />
        </Layout>
      )}
      <Component {...pageProps} />
      <Layout>
        <Footer />
      </Layout>
    </AnimatePresence>
  );
};

export default App;
