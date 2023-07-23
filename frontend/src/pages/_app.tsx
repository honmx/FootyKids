import Layout from "@/components/Layout";
import { theme } from "@/styles/theme";
import { ThemeProvider } from "@emotion/react";
import type { AppProps } from "next/app";
import "@/styles/reset.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
