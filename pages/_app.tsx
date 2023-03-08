import type { AppProps } from "next/app";
import { GlobalStyle } from "@/components/ui/globalStyles";
import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence>
      <GlobalStyle />
      <Component {...pageProps} />
    </AnimatePresence>
  );
}
